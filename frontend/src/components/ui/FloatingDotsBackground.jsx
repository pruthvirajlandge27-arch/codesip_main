import React, { useMemo } from 'react';

const FloatingDotsBackground = ({ count = 40 }) => {
  const dots = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 15 + 15}s`,
      pulseDuration: `${Math.random() * 3 + 2}s`,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-secondary shadow-[0_0_12px_rgba(0,255,136,0.6)] animate-float-up"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-secondary animate-pulse-glow"
            style={{
              animationDuration: dot.pulseDuration,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingDotsBackground;
