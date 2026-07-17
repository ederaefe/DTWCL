import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { passcode, id, image, text, link } = req.body || {};

  const expected = process.env.UPDATER_PASSCODE || '';
  const input = passcode || '';
  const expectedBuffer = Buffer.from(expected);
  const inputBuffer = Buffer.from(input);

  if (expectedBuffer.length !== inputBuffer.length || !crypto.timingSafeEqual(inputBuffer, expectedBuffer)) {
    return res.status(401).json({ error: 'Unauthorized: Invalid passcode' });
  }

  if (!id) {
    return res.status(400).json({ error: 'Bad Request: Update ID is required' });
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

  try {
    const getResponse = await fetch(API_URL, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      }
    });

    if (!getResponse.ok) {
      const err = await getResponse.text();
      console.error('GitHub Fetch Error:', err);
      return res.status(500).json({ error: 'Failed to fetch existing updates from GitHub' });
    }

    const fileData = await getResponse.json();
    const currentSha = fileData.sha;

    const decodedContent = Buffer.from(fileData.content, 'base64').toString('utf8');
    let updates = [];
    try {
      updates = JSON.parse(decodedContent);
    } catch (e) {
      return res.status(500).json({ error: 'updates.json is not valid JSON' });
    }

    if (!Array.isArray(updates)) {
      return res.status(500).json({ error: 'updates.json must be an array' });
    }

    const updateIndex = updates.findIndex((item) => String(item.id) === String(id));
    if (updateIndex === -1) {
      return res.status(404).json({ error: 'Update not found' });
    }

    updates[updateIndex] = {
      ...updates[updateIndex],
      image: image || '',
      text,
      link: link || ''
    };

    const updatedContentBase64 = Buffer.from(JSON.stringify(updates, null, 2)).toString('base64');

    const putResponse = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Edit update via CMS Portal',
        content: updatedContentBase64,
        sha: currentSha,
        branch: 'main'
      })
    });

    if (!putResponse.ok) {
      const err = await putResponse.text();
      console.error('GitHub Commit Error:', err);
      return res.status(500).json({ error: 'Failed to commit updates to GitHub' });
    }

    return res.status(200).json({ success: true, message: 'Update edited successfully!' });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
