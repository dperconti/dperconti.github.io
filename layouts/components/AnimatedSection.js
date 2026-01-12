import { useRef } from 'react';
import { useIntersectionObserver } from '@hooks/useParallax';

const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const { hasIntersected } = useIntersectionObserver(ref);

  const getTransform = () => {
    if (!hasIntersected) {
      switch (direction) {
        case 'up':
          return 'translateY(40px)';
        case 'down':
          return 'translateY(-40px)';
        case 'left':
          return 'translateX(40px)';
        case 'right':
          return 'translateX(-40px)';
        default:
          return 'translateY(40px)';
      }
    }
    return 'translateY(0) translateX(0)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hasIntersected ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
