import React, { useEffect, useRef } from 'react';

const WaveBackground = () => {
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
      canvas.height = parent ? parent.offsetHeight : window.innerHeight;
    };

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX - window.innerWidth / 2;
      targetMouse.y = e.clientY - window.innerHeight / 2;
    };
    
    const handleMouseLeave = () => {
      targetMouse.x = 0;
      targetMouse.y = 0;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    setTimeout(handleResize, 100);
    handleResize();

    const waves = [
      { yOffset: 0.5, amplitude: 50, speed: 0.015, color: '#00B4D8', opacity: 0.15, lineWidth: 2, shadow: 10 },
      { yOffset: 0.5, amplitude: 80, speed: 0.01, color: '#00FF88', opacity: 0.1, lineWidth: 1.5, shadow: 8 },
      { yOffset: 0.6, amplitude: 40, speed: 0.02, color: '#00B4D8', opacity: 0.05, lineWidth: 1, shadow: 5 },
      { yOffset: 0.45, amplitude: 100, speed: 0.008, color: '#FFFFFF', opacity: 0.03, lineWidth: 3, shadow: 15 }
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      time += 1;

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.lineWidth = wave.lineWidth;
        
        ctx.shadowBlur = wave.shadow;
        ctx.shadowColor = wave.color;
        
        ctx.strokeStyle = wave.color;
        ctx.globalAlpha = wave.opacity;

        for (let x = 0; x < canvas.width; x += 10) {
          const mouseDistortionY = (mouse.y * (index + 1) * 0.03);
          const mouseDistortionX = (mouse.x * (index + 1) * 0.03);
          
          const y = canvas.height * wave.yOffset + 
                    Math.sin(x * 0.003 + time * wave.speed + mouseDistortionX * 0.005) * wave.amplitude + 
                    mouseDistortionY;
                    
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default WaveBackground;
