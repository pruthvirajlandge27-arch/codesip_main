import React, { useEffect, useRef } from 'react';

const DottedWaveBackground = () => {
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
      canvas.height = parent ? parent.offsetHeight : 500;
    };

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX - window.innerWidth / 2;
      targetMouse.y = e.clientY - window.innerHeight / 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    setTimeout(handleResize, 100);
    handleResize();

    const rows = 15;
    const cols = 32;
    const spacingX = 60;
    const spacingZ = 60;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      time += 0.02;

      for (let z = 0; z < rows; z++) {
        for (let x = 0; x < cols; x++) {
          const xPos = (x - cols / 2) * spacingX;
          const zPos = z * spacingZ;
          
          const wave1 = Math.sin(x * 0.3 + time) * 35;
          const wave2 = Math.cos(z * 0.2 + time * 0.8) * 25;
          
          let yPos = wave1 + wave2 + 150;

          const perspective = 800 / (800 + zPos);
          const screenX = xPos * perspective + canvas.width / 2;
          
          const adjustedScreenY = yPos * perspective + canvas.height / 2 - 50;

          // Ripple response
          const mdx = screenX - (mouse.x + canvas.width / 2);
          const mdy = adjustedScreenY - (mouse.y + canvas.height / 2);
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          
          if (mDist < 200) {
            const force = (200 - mDist) / 200;
            yPos -= force * 40; 
          }
          
          // Re-calculate after mouse lift
          const finalScreenY = yPos * perspective + canvas.height / 2 - 50;
          const size = Math.max(0.5, 2.5 * perspective);
          
          // Vignette edges
          const edgeFadeX = Math.max(0, 1 - Math.abs(x - cols/2) / (cols/2));
          const edgeFadeZ = Math.max(0, 1 - z / rows);
          const opacity = edgeFadeX * edgeFadeZ * 0.9;

          if (opacity > 0.01) {
            ctx.beginPath();
            ctx.arc(screenX, finalScreenY, size, 0, Math.PI * 2);
            
            ctx.fillStyle = `rgba(0, 180, 216, ${opacity})`;
            ctx.shadowBlur = 12 * perspective;
            ctx.shadowColor = 'rgba(0, 180, 216, 0.8)';
            
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

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
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary z-10"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70 mix-blend-screen" />
    </div>
  );
};

export default DottedWaveBackground;
