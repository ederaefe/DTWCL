import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { passcode } = req.body || {};

  const expected = process.env.UPDATER_PASSCODE || '';
  const input = passcode || '';
  const expectedBuffer = Buffer.from(expected);
  const inputBuffer = Buffer.from(input);

  if (expectedBuffer.length !== inputBuffer.length || !crypto.timingSafeEqual(inputBuffer, expectedBuffer)) {
    return res.status(401).json({ valid: false, error: 'Unauthorized: Invalid passcode' });
  }

  return res.status(200).json({ valid: true });
}
