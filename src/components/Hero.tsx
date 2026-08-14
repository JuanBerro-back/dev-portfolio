import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Sparkles } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const roles = [
    "Full-Stack Engineer",
    "Software Architect",
    "TypeScript & Node.js Specialist",
    "APIs & Microservices Creator"
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
      {/* Background glow circle */}
      <div className="glow-background" style={{ top: '15%', left: '10%' }}></div>
      <div className="glow-background" style={{ bottom: '20%', right: '10%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Availability Status Badge */}
          <div style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            <div className="badge-status">
              <span className="dot-ping"></span>
              <span>{profileData.availableForHire ? "Disponible para nuevos proyectos & contratos" : "Enfocado en proyectos actuales"}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Hola, soy <span className="gradient-text">{profileData.name}</span>
          </h1>

          {/* Rotating Subtitle / Role */}
          <div style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'var(--text-muted)',
            fontWeight: 500,
            marginBottom: '1.5rem',
            height: '2.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <Sparkles size={20} color="var(--primary-cyan)" />
            <span style={{ color: 'var(--primary-cyan)', fontFamily: 'var(--font-mono)' }}>
              {roles[currentRoleIndex]}
            </span>
          </div>

          {/* Bio text */}
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '700px',
            marginInline: 'auto'
          }}>
            {profileData.bio}
          </p>

          {/* Action CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <a href="#projects" className="btn btn-primary">
              Ver Mis Proyectos <ArrowRight size={18} />
            </a>
            
            <a href="#terminal" className="btn btn-outline">
              <Terminal size={18} /> Consola Interactiva CLI
            </a>

            <a href="#contact" className="btn btn-outline" style={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}>
              <Mail size={18} color="var(--accent-purple)" /> Contactar
            </a>
          </div>

          {/* Metrics Quick Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.2rem',
            marginTop: '2rem'
          }}>
            <div className="glass-card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-cyan)', marginBottom: '0.2rem' }}>+{profileData.yearsOfExperience} Años</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Experiencia en Software</p>
            </div>
            
            <div className="glass-card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-purple)', marginBottom: '0.2rem' }}>{profileData.completedProjects}+</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Proyectos Entregados</p>
            </div>

            <div className="glass-card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-emerald)', marginBottom: '0.2rem' }}>{profileData.contributions}+</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Commits en GitHub</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
