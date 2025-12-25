import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Fallback component
const FallbackBackground = ({ className }) => (
  <div 
    className={className}
    style={{
      background: 'linear-gradient(to bottom, #1e3a8a, #7c3aed, #ea580c)',
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 0,
    }}
  />
);

// Dynamically import Spline - ensure it's properly bundled for static export
const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod) => mod.Spline),
  {
    ssr: false,
    loading: () => <FallbackBackground className="" />,
  }
);

const SplineBackground = ({ scene, className }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [canLoad, setCanLoad] = useState(true);
  
  const isDevelopment = process.env.NODE_ENV === 'development';

  useEffect(() => {
    // Log for debugging (development only)
    if (isDevelopment) {
      console.log('SplineBackground: Scene URL:', scene);
      console.log('SplineBackground: Component mounted');
    }
    
    // Check if WebGL is available (required for Spline)
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
          if (isDevelopment) {
            console.warn('SplineBackground: WebGL not available, using fallback');
          }
          setCanLoad(false);
          setError('WebGL not available');
          setIsLoading(false);
          return false;
        }
        return true;
      } catch (e) {
        if (isDevelopment) {
          console.warn('SplineBackground: WebGL check failed, using fallback', e);
        }
        setCanLoad(false);
        setError('WebGL check failed');
        setIsLoading(false);
        return false;
      }
    };

    // Only check WebGL on client side
    if (typeof window !== 'undefined') {
      if (!checkWebGL()) {
        return;
      }
    }
    
    // Set a timeout to show fallback if Spline doesn't load within reasonable time
    const timeoutId = setTimeout(() => {
      if (!hasLoaded && isLoading && canLoad) {
        if (isDevelopment) {
          console.warn('SplineBackground: Loading timeout, showing fallback');
        }
        setError('Loading timeout');
        setIsLoading(false);
      }
    }, 15000); // 15 second timeout (increased for slower connections)

    return () => clearTimeout(timeoutId);
  }, [scene, hasLoaded, isLoading, canLoad, isDevelopment]);

  const handleLoad = () => {
    if (isDevelopment) {
      console.log('SplineBackground: Spline scene loaded successfully');
    }
    setIsLoading(false);
    setError(null);
    setHasLoaded(true);
  };

  const handleError = (error) => {
    // Always log errors, but only detailed error in development
    if (isDevelopment) {
      console.error('SplineBackground: Spline error:', error);
    }
    setError('Failed to load Spline scene');
    setIsLoading(false);
  };

  // Show fallback if there's an error or WebGL is not available
  if (error || !canLoad) {
    if (isDevelopment) {
      console.warn('SplineBackground: Showing fallback due to error or WebGL unavailability');
    }
    return <FallbackBackground className={className} />;
  }

  return (
    <>
      {isLoading && (
        <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 9999, background: 'rgba(0,0,0,0.7)', color: 'white', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>
          Loading Spline...
        </div>
      )}
      <div 
        className={className}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        {scene && canLoad && (
          <Spline 
            scene={scene}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }}
          />
        )}
      </div>
    </>
  );
};

export default SplineBackground;

