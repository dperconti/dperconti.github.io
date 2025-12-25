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

  useEffect(() => {
    // Log for debugging
    console.log('SplineBackground: Scene URL:', scene);
    console.log('SplineBackground: Component mounted');
    
    // Check if scene URL is accessible
    if (scene) {
      fetch(scene, { method: 'HEAD' })
        .then(() => {
          console.log('SplineBackground: Scene URL is accessible');
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('SplineBackground: Scene URL not accessible:', err);
          setError('Scene URL not accessible');
          setIsLoading(false);
        });
    }
  }, [scene]);

  const handleLoad = () => {
    console.log('SplineBackground: Spline scene loaded successfully');
    setIsLoading(false);
    setError(null);
  };

  const handleError = (error) => {
    console.error('SplineBackground: Spline error:', error);
    setError('Failed to load Spline scene');
    setIsLoading(false);
  };

  // Show fallback if there's an error
  if (error) {
    console.warn('SplineBackground: Showing fallback due to error');
    return <FallbackBackground className={className} />;
  }

  return (
    <>
      {isLoading && (
        <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 9999, background: 'rgba(0,0,0,0.7)', color: 'white', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>
          Loading Spline...
        </div>
      )}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Spline 
          scene={scene} 
          className={className}
        />
      </div>
    </>
  );
};

export default SplineBackground;

