import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Sparkles } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const roles = [
    "Full-Stack Developer 🐒",
    "Python & FastAPI Explorer 🐍",
    "TypeScript & React Specialist ⚡",
    "Tailwind & Node.js Craftsman 🌿"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      {/* Background Glow */}
      <div className="glow-jungle" style={{ top: '15%', left: '10%' }}></div>
      <div className="glow-jungle" style={{ bottom: '20%', right: '10%', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Cute Monkey Mascot Badge */}
          <div style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            <div className="badge-status">
              <span className="dot-ping"></span>
              <span>🐒 {profileData.jungleMotto}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            ¡Hola! Soy <span className="gradient-text">{profileData.name}</span> 🐒🌴
          </h1>

          {/* Rotating Subtitle / Role */}
          <div style={{
            fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)',
            color: 'var(--text-muted)',
            fontWeight: 600,
            marginBottom: '1.5rem',
            height: '2.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <Sparkles size={22} color="var(--banana-gold)" />
            <span style={{ color: 'var(--banana-gold)', fontFamily: 'var(--font-mono)' }}>
              {roles[currentRoleIndex]}
            </span>
          </div>

          {/* Bio text */}
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '720px',
            marginInline: 'auto'
          }}>
            {profileData.bio}
          </p>

          {/* Tech Badges Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '2.8rem'
          }}>
            {['TypeScript ⚡', 'Python 🐍', 'React ⚛️', 'Node.js 🟩', 'Tailwind 🎨', 'JavaScript 🟨', 'HTML5 & CSS3 🌐'].map((tech, idx) => (
              <span key={idx} className="code-tag" style={{ fontSize: '0.9rem', padding: '0.3rem 0.8rem' }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <a href="#projects" className="btn btn-primary">
              🍌 Ver Mis Proyectos <ArrowRight size={18} />
            </a>
            
            <a href="#terminal" className="btn btn-banana">
              🐒 Consola Monito CLI <Terminal size={18} />
            </a>

            <a href="#contact" className="btn btn-outline">
              📩 Contactar a Juan <Mail size={18} color="var(--jungle-emerald)" />
            </a>
          </div>

          {/* Metrics Quick Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.4rem',
            marginTop: '2rem'
          }}>
            <div className="glass-card" style={{ padding: '1.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>🐒 🌴</div>
              <h3 style={{ fontSize: '2rem', color: 'var(--jungle-emerald)', marginBottom: '0.2rem' }}>+{profileData.yearsOfExperience} Años</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Experiencia en Selva Code</p>
            </div>
            
            <div className="glass-card" style={{ padding: '1.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>🍌 🚀</div>
              <h3 style={{ fontSize: '2rem', color: 'var(--banana-gold)', marginBottom: '0.2rem' }}>{profileData.completedProjects}+</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Proyectos Entregados</p>
            </div>

            <div className="glass-card" style={{ padding: '1.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>🍃 💻</div>
              <h3 style={{ fontSize: '2rem', color: 'var(--jungle-lime)', marginBottom: '0.2rem' }}>{profileData.contributions}+</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Commits en GitHub</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
