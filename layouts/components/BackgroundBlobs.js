import { useMemo, useEffect, useState } from 'react';

const BackgroundBlobs = () => {
  // Colors matching the "Head of Engineering" gradient - enhanced for visibility
  const colors = useMemo(() => [
    '#3dc8fc', // much brighter light teal/blue (enhanced from #7dd3fc)
    '#7fc98f', // much brighter greenish-brown (enhanced from #a7c4a0)
    '#e0b080', // much brighter orange-brown (enhanced from #c49a6c)
    '#ec4899', // vibrant pink/magenta - keep original
  ], []);

  const [scrollY, setScrollY] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  // Track scroll and document height
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window === 'undefined') return;
      
      setScrollY(window.scrollY);
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight,
        document.body.scrollHeight,
        document.body.clientHeight,
        window.innerHeight
      );
      setDocumentHeight(height);
    };

    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      setScrollY(window.scrollY);
    };

    updateDimensions(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateDimensions, { passive: true });
    
    // Update on content changes
    const observer = new MutationObserver(updateDimensions);
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
      observer.disconnect();
    };
  }, []);

  // Generate many blobs with random sizes throughout the page
  const blobs = useMemo(() => {
    const numBlobs = 18; // More blobs for depth layers
    const blobsArray = [];
    
    // Define depth layers: close (0), medium (1), far (2)
    const depthLayers = [
      { name: 'close', sizeRange: [400, 800], blurRange: [60, 100], opacityMultiplier: 1.0, parallaxRange: [0.3, 0.5], zIndex: 1 },
      { name: 'medium', sizeRange: [250, 500], blurRange: [120, 180], opacityMultiplier: 0.7, parallaxRange: [0.1, 0.3], zIndex: 0 },
      { name: 'far', sizeRange: [150, 350], blurRange: [180, 250], opacityMultiplier: 0.4, parallaxRange: [0.05, 0.15], zIndex: -1 },
    ];
    
    for (let i = 0; i < numBlobs; i++) {
      const colorIndex = i % colors.length;
      const color = colors[colorIndex];
      
      // Assign depth layer (distribute evenly across layers)
      const layerIndex = i % depthLayers.length;
      const layer = depthLayers[layerIndex];
      
      // Size based on depth layer
      const sizeRange = layer.sizeRange;
      const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
      
      // Random horizontal position
      const left = Math.random() * 100; // 0% to 100%
      
      // Distribute vertically throughout the document
      const topPercent = (i / numBlobs) * 100 + (Math.random() * (100 / numBlobs));
      
      // Parallax speed based on depth (closer = faster parallax)
      const parallaxRange = layer.parallaxRange;
      const parallaxSpeed = parallaxRange[0] + Math.random() * (parallaxRange[1] - parallaxRange[0]);
      
      // Blur based on depth layer (farther = more blur/dissipation)
      const blurRange = layer.blurRange;
      const blur = blurRange[0] + Math.random() * (blurRange[1] - blurRange[0]);
      
      // Base opacity based on color
      let baseOpacity;
      if (colorIndex === 0) {
        baseOpacity = 0.5 + Math.random() * 0.2; // Blue: 0.5-0.7
      } else if (colorIndex === 3) {
        baseOpacity = 0.25 + Math.random() * 0.1; // Pink: 0.25-0.35
      } else {
        baseOpacity = 0.4 + Math.random() * 0.25; // Others: 0.4-0.65
      }
      
      // Apply depth-based opacity multiplier
      const opacity = baseOpacity * layer.opacityMultiplier;
      
      blobsArray.push({
        id: i,
        color,
        left: `${left}%`,
        topPercent,
        size,
        parallaxSpeed,
        blur,
        opacity,
        zIndex: layer.zIndex,
        layer: layer.name,
      });
    }
    
    return blobsArray;
  }, [colors]);

  const fallbackHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
  const containerHeight = documentHeight || fallbackHeight;

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-visible"
      style={{
        zIndex: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {blobs.map((blob) => {
        // Calculate base position in document coordinates (where blob should be)
        const baseTop = (blob.topPercent / 100) * containerHeight;
        
        // Parallax effect: blobs move at different speeds than scroll
        // parallaxSpeed < 1: moves slower (stays in view longer)
        // parallaxSpeed > 1: moves faster (leaves view sooner)
        // Position = base position - (scroll * speed)
        const topPosition = baseTop - (scrollY * blob.parallaxSpeed);
        
        return (
          <div
            key={blob.id}
            className="absolute rounded-full"
            style={{
              left: blob.left,
              top: `${topPosition}px`,
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              background: `radial-gradient(circle, ${blob.color} 0%, ${blob.color}40 20%, ${blob.color}15 45%, ${blob.color}05 70%, transparent 100%)`,
              filter: `blur(${blob.blur}px)`,
              opacity: blob.opacity,
              transform: 'translate(-50%, -50%)',
              mixBlendMode: 'multiply',
              willChange: 'transform',
              zIndex: blob.zIndex,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundBlobs;
