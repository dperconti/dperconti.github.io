import { useState, useEffect } from "react";
import Image from "next/image";

const InstagramGallery = ({ username = "dperconti" }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Instagram image URLs
    // To get these URLs:
    // 1. Go to your Instagram post
    // 2. Right-click on the image > "Copy image address" or "Inspect"
    // 3. Look for the image URL in the format: https://instagram.com/p/[POST_ID]/media/?size=l
    // Or use: https://scontent-*.cdninstagram.com/v/... (direct CDN URLs)
    
    // Add your Instagram image URLs here
    const manualImages = [
      // Example format - replace with your actual Instagram image URLs:
      // "https://instagram.com/p/ABC123/media/?size=l",
      // "https://scontent-xxx.cdninstagram.com/v/...",
    ];
    
    // Alternatively, you can fetch from an API endpoint if you set up Instagram Graph API
    const fetchImages = async () => {
      try {
        // Uncomment this if you set up the Instagram API:
        // const response = await fetch(`/api/instagram-feed?username=${username}`);
        // const data = await response.json();
        // if (data.images && data.images.length > 0) {
        //   setImages(data.images);
        // } else if (manualImages.length > 0) {
        //   setImages(manualImages);
        // }
        
        // For now, use manual images
        if (manualImages.length > 0) {
          setImages(manualImages);
        }
      } catch (error) {
        console.error('Error fetching Instagram images:', error);
        if (manualImages.length > 0) {
          setImages(manualImages);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchImages();
  }, [username]);

  if (loading) {
    return (
      <div className="my-12 text-center">
        <p className="text-text">Loading Instagram photos...</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="my-12">
        <h3 className="mb-6 text-2xl font-semibold">Photos</h3>
        <div className="rounded-lg border border-border bg-body p-8 text-center">
          <p className="text-text">
            Check out my latest photos on{" "}
            <a
              href={`https://www.instagram.com/${username}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12">
      <h3 className="mb-6 text-2xl font-semibold">Photos</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={`Instagram photo ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-full max-w-full">
            <Image
              src={selectedImage}
              alt="Selected Instagram photo"
              width={800}
              height={800}
              className="max-h-[90vh] max-w-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramGallery;

