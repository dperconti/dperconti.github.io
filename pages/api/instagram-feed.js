export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    // Note: Instagram's official API requires authentication via Facebook Graph API
    // For a production solution, you would need to:
    // 1. Set up a Facebook App
    // 2. Get an Instagram Access Token
    // 3. Use the Instagram Graph API
    
    // For now, this is a placeholder that returns an empty array
    // You can manually add image URLs to the InstagramGallery component
    // Or set up Instagram Graph API integration
    
    return res.status(200).json({ 
      images: [],
      message: 'Instagram API integration needed. Add image URLs manually to InstagramGallery component.'
    });
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    return res.status(500).json({ error: 'Failed to fetch Instagram feed' });
  }
}

