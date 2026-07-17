import crypto from 'crypto';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Safely parse body if it is still a string (e.g. if Vercel did not parse it automatically)
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // Fallback if parsing fails
      }
    }
    const { passcode, image, text, link } = body || {};

    // Coerce environment variables and inputs to Strings to prevent Buffer.from TypeError crash
    const expected = String(process.env.UPDATER_PASSCODE || '');
    const input = String(passcode || '');

    const expectedBuffer = Buffer.from(expected);
    const inputBuffer = Buffer.from(input);

    if (expectedBuffer.length !== inputBuffer.length || !crypto.timingSafeEqual(inputBuffer, expectedBuffer)) {
      return res.status(401).json({ error: 'Unauthorized: Invalid passcode' });
    }

    if (!text) {
      return res.status(400).json({ error: 'Bad Request: Text is required' });
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: 'Server configuration error: GITHUB_TOKEN missing' });
    }

    const REPO = 'ederaefe/DTWCL';
    const FILE_PATH = 'data/updates.json';
    const API_URL = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`;

    // 1. Fetch current file
    const getResponse = await fetch(API_URL, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      }
    });

    if (!getResponse.ok) {
      const err = await getResponse.text();
      console.error("GitHub Fetch Error:", err);
      return res.status(500).json({ error: 'Failed to fetch existing updates from GitHub' });
    }

    const fileData = await getResponse.json();
    const currentSha = fileData.sha;
    
    // Decode base64 content
    const decodedContent = Buffer.from(fileData.content, 'base64').toString('utf8');
    let updates = [];
    try {
      updates = JSON.parse(decodedContent);
    } catch (e) {
      console.warn("Could not parse existing updates.json as array. Resetting to empty.");
    }

    // 2. Add new update
    const newUpdate = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      image: image || '',
      text: text,
      link: link || ''
    };

    // Prepend to top
    updates.unshift(newUpdate);

    // 3. Commit back to GitHub
    const updatedContentBase64 = Buffer.from(JSON.stringify(updates, null, 2)).toString('base64');

    const putResponse = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Add new update via CMS Portal',
        content: updatedContentBase64,
        sha: currentSha,
        branch: 'main'
      })
    });

    if (!putResponse.ok) {
      const err = await putResponse.text();
      console.error("GitHub Commit Error:", err);
      return res.status(500).json({ error: 'Failed to commit updates to GitHub' });
    }

    return res.status(200).json({ success: true, message: 'Update posted successfully!' });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      message: error.message, 
      stack: error.stack 
    });
  }
}
