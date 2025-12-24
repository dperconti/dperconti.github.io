import dynamic from 'next/dynamic';

// Import Spline - it's exported as a named export 'Spline', not default
const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod) => mod.Spline),
  {
    ssr: false,
    loading: () => (
      <div 
        style={{
          background: 'linear-gradient(to bottom, #1e3a8a, #7c3aed, #ea580c)',
          width: '100%',
          height: '100%',
        }}
      />
    ),
  }
);

const SplineBackground = ({ scene, className }) => {
  return <Spline scene={scene} className={className} />;
};

export default SplineBackground;

