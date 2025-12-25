import dynamic from 'next/dynamic';

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
  return <Spline scene={scene} className={className} />;
};

export default SplineBackground;

