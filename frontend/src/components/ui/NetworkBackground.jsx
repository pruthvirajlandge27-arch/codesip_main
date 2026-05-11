import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const numParticles = 80;
    
    // Mouse tracking
    let mouse = { x: null, y: null, radius: 200 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        
        // Random depth for layers (-1 to 1)
        this.z = Math.random() * 2 - 1; 
        
        // Speed
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        
        // Size based on depth
        this.size = (this.z + 1.5) * 1.5; 
        
        this.color = `rgba(0, 255, 136, ${Math.max(0.1, this.z * 0.3 + 0.3)})`;
      }

      update() {
        // Base movement
        this.baseX += this.vx;
        this.baseY += this.vy;

        // Bounce off edges
        if (this.baseX < 0 || this.baseX > canvas.width) this.vx *= -1;
        if (this.baseY < 0 || this.baseY > canvas.height) this.vy *= -1;

        // Mouse interaction
        let dx = 0;
        let dy = 0;
        let distance = Infinity;

        if (mouse.x !== null) {
          dx = mouse.x - this.baseX;
          dy = mouse.y - this.baseY;
          distance = Math.sqrt(dx * dx + dy * dy);
        }

        let targetX = this.baseX;
        let targetY = this.baseY;

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          
          // Nodes move slightly toward mouse (closer) or away (farther) for parallax
          const direction = this.z > 0 ? 1 : -0.5; 
          
          targetX = this.baseX + dx * force * direction * 0.3;
          targetY = this.baseY + dy * force * direction * 0.3;
        }

        // Smoothly interpolate to target (easing)
        this.x += (targetX - this.x) * 0.05;
        this.y += (targetY - this.y) * 0.05;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // Blur distant nodes
        if (this.z < -0.2) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(0,180,216,0.5)';
        } else {
          ctx.shadowBlur = 15;
          ctx.shadowColor = 'rgba(0,255,136,0.8)';
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle gradient glow behind cursor
      if (mouse.x !== null) {
        let gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
        gradient.addColorStop(0, 'rgba(0, 180, 216, 0.08)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach((p, i) => {
        p.update();
        p.draw();

        // Connect lines
        for (let j = i; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            const opacity = (1 - (distance / 130)) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 136, ${opacity})`;
            ctx.lineWidth = Math.max(0.5, (p.z + p2.z) * 0.6);
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
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

export default NetworkBackground;
