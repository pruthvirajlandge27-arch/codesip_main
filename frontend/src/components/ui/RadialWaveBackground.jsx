import React, { useEffect, useRef } from 'react';

const RadialWaveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    
    let mouse = { x: 0, y: 0 };
    let targetMouse = { x: 0, y: 0 };

    const handleResize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : 600;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = e.clientX - window.innerWidth / 2;
      targetMouse.y = e.clientY - window.innerHeight / 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    setTimeout(handleResize, 100);
    handleResize();

    const rings = 16;
    const dotsCount = [];
    
    for (let r = 1; r <= rings; r++) {
      const count = Math.floor(r * 3) + 6; 
      dotsCount.push(count);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      time -= 0.015;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.max(canvas.width, canvas.height) / 1.2;

      let rIndex = 1;
      
      dotsCount.forEach((count, i) => {
        const ringSpacing = maxRadius / rings;
        const baseRadius = rIndex * ringSpacing;
        rIndex++;

        for (let d = 0; d < count; d++) {
          const angle = (d / count) * Math.PI * 2 + time * 0.1 * (i % 2 === 0 ? 1 : -1);
          
          const ripple = Math.sin(baseRadius * 0.008 - time * 2) * 25;
          const finalRadius = baseRadius + ripple;

          let px = centerX + Math.cos(angle) * finalRadius;
          let py = centerY + Math.sin(angle) * finalRadius;

          const perspective = (maxRadius - finalRadius) / maxRadius;
          const adjustedPerspective = Math.max(0, perspective);

          const mdx = px - (mouse.x + centerX);
          const mdy = py - (mouse.y + centerY);
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          
          if (mDist < 120) {
            const force = (120 - mDist) / 120;
            px += (mdx / mDist) * force * 40;
            py += (mdy / mDist) * force * 40;
          }

          const size = Math.max(0.5, 3.5 * adjustedPerspective);
          const opacity = Math.min(1, Math.max(0.01, adjustedPerspective * 0.8));

          // Soft blue-purple glow per instructions
          if (opacity > 0.02 && finalRadius > 0) {
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            
            // Neon cyan-purple styling
            ctx.fillStyle = `rgba(0, 180, 216, ${opacity})`;
            ctx.shadowBlur = 12 * adjustedPerspective;
            // Interleave purple/teal based on ring index
            if (i % 3 === 0) {
               ctx.fillStyle = `rgba(138, 43, 226, ${opacity})`;
               ctx.shadowColor = 'rgba(138, 43, 226, 0.7)';
            } else {
               ctx.shadowColor = 'rgba(0, 255, 136, 0.5)';
            }
            
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary z-10 w-full h-full"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--color-primary)_95%)] z-10"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70 mix-blend-screen" />
    </div>
  );
};

export default RadialWaveBackground;
