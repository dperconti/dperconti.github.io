export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  // Remove @ if present
  const cleanUsername = username.replace(/^@/, '');

  try {
    // Check Instagram profile by fetching the public page
    // Instagram returns 200 for existing profiles and 404 for non-existent ones
    const response = await fetch(`https://www.instagram.com/${cleanUsername}/`, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const exists = response.ok || response.status === 200;

    return res.status(200).json({ exists, username: cleanUsername });
  } catch (error) {
    // If we can't verify, assume it exists to avoid blocking valid users
    // In production, you might want to log this and handle differently
    console.error('Error checking Instagram:', error);
    return res.status(200).json({ exists: true, username: cleanUsername, error: 'Could not verify' });
  }
}

