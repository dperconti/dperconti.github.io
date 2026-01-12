import { motion } from 'framer-motion';
import { useMemo } from 'react';

const MarbledLiquidRiver = () => {
  // Generate stable random values for particles
  const particles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      width: 20 + Math.random() * 40,
      height: 20 + Math.random() * 40,
      left: Math.random() * 100,
      color: [
        'rgba(251, 146, 60, 0.3)',
        'rgba(236, 72, 153, 0.3)',
        'rgba(168, 85, 247, 0.3)',
        'rgba(59, 130, 246, 0.3)',
        'rgba(14, 165, 233, 0.3)',
      ][Math.floor(Math.random() * 5)],
      startX: Math.random() * 100,
      endX: Math.random() * 100,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 0,
        height: '100vh',
        width: '100%',
      }}
    >
      {/* Base gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              rgba(251, 146, 60, 0.2) 0%,
              rgba(236, 72, 153, 0.18) 25%,
              rgba(168, 85, 247, 0.15) 50%,
              rgba(99, 102, 241, 0.18) 75%,
              rgba(14, 165, 233, 0.2) 100%
            )
          `,
        }}
      />

      {/* Flowing liquid layers - creating river effect */}
      {[
        { delay: 0, duration: 20, x: -10, colors: ['rgba(251, 146, 60, 0.6)', 'rgba(236, 72, 153, 0.5)', 'rgba(168, 85, 247, 0.4)'] },
        { delay: 7, duration: 25, x: 10, colors: ['rgba(59, 130, 246, 0.55)', 'rgba(99, 102, 241, 0.5)', 'rgba(168, 85, 247, 0.45)'] },
        { delay: 14, duration: 22, x: -5, colors: ['rgba(14, 165, 233, 0.6)', 'rgba(59, 130, 246, 0.5)', 'rgba(99, 102, 241, 0.4)'] },
      ].map((config, i) => (
        <motion.div
          key={i}
          className="absolute w-full"
          style={{
            height: '200vh',
            background: `
              radial-gradient(ellipse at center, 
                ${config.colors[0]} 0%,
                ${config.colors[1]} 20%,
                ${config.colors[2]} 40%,
                rgba(99, 102, 241, 0.25) 60%,
                transparent 100%
              )
            `,
            filter: 'blur(80px)',
            mixBlendMode: 'multiply',
            left: `${config.x}%`,
            top: '-50%',
          }}
          animate={{
            y: ['0vh', '100vh'],
            scale: [1, 1.3, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: config.delay,
          }}
        />
      ))}

      {/* Additional flowing particles for texture */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: `${particle.left}%`,
            background: `radial-gradient(circle, ${particle.color}, transparent)`,
            filter: 'blur(25px)',
            top: '-10vh',
          }}
          animate={{
            y: ['-10vh', '110vh'],
            x: [`${particle.startX}%`, `${particle.endX}%`],
            scale: [0.5, 1.5, 0.5],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Textured wave overlay for marbled effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 2px,
              rgba(255, 255, 255, 0.03) 4px
            )
          `,
          mixBlendMode: 'overlay',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default MarbledLiquidRiver;
