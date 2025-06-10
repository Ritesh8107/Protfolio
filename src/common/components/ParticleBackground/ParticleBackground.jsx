import React, { useRef, useEffect } from 'react';
import style from './ParticleBackground.module.css';

const ParticleBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;
    const mouse = { x: null, y: null };
    window.addEventListener('mousemove', (event) => { mouse.x = event.x; mouse.y = event.y; });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) { this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color; }
      draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctx.fillStyle = this.color; ctx.fill(); }
      update() { if (this.x > canvas.width || this.x < 0) { this.directionX = -this.directionX; } if (this.y > canvas.height || this.y < 0) { this.directionY = -this.directionY; } this.x += this.directionX; this.y += this.directionY; this.draw(); }
    }

    function init() {
      particlesArray = [];
      const particleColor = theme === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (window.innerWidth - size * 2) + size;
        const y = Math.random() * (window.innerHeight - size * 2) + size;
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;
        particlesArray.push(new Particle(x, y, directionX, directionY, size, particleColor));
      }
    }

    function animate() { requestAnimationFrame(animate); ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); for (let i = 0; i < particlesArray.length; i++) { particlesArray[i].update(); } connect(); }
    
    function connect() {
        let lineColor = theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.08)';
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width/7) * (canvas.height/7)) {
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.2;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); });
    window.addEventListener('mouseout', () => { mouse.x = undefined; mouse.y = undefined; });

    init();
    animate();

    return () => { window.removeEventListener('mousemove', null); window.removeEventListener('resize', null); window.removeEventListener('mouseout', null); }
  }, [theme]);

  return <canvas ref={canvasRef} className={style.particleCanvas} />;
};

export default ParticleBackground;