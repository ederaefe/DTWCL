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
    const { passcode } = body || {};

    // Coerce environment variables and inputs to Strings to prevent Buffer.from TypeError crash
    const expected = String(process.env.UPDATER_PASSCODE || '');
    const input = String(passcode || '');

    const expectedBuffer = Buffer.from(expected);
    const inputBuffer = Buffer.from(input);

    if (expectedBuffer.length !== inputBuffer.length || !crypto.timingSafeEqual(inputBuffer, expectedBuffer)) {
      return res.status(401).json({ valid: false, error: 'Unauthorized: Invalid passcode' });
    }

    return res.status(200).json({ valid: true });
  } catch (error) {
    console.error("verify-passcode API error:", error);
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      message: error.message, 
      stack: error.stack 
    });
  }
}
