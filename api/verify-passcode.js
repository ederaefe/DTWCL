export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { passcode } = req.body || {};

  if (passcode !== process.env.UPDATER_PASSCODE) {
    return res.status(401).json({ valid: false, error: 'Unauthorized: Invalid passcode' });
  }

  return res.status(200).json({ valid: true });
}
