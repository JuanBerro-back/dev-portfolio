import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const roles = [
    "Ingeniero de Software Full-Stack",
    "Backend con Python, FastAPI y Node.js",
    "Frontend con TypeScript y React",
    "APIs, automatización y productos en la nube"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const skills = ['TypeScript', 'Python', 'React', 'Node.js', 'FastAPI', 'Tailwind CSS', 'Git'];

  const metrics = [
    { value: `${profileData.yearsOfExperience}+`, label: 'Años de experiencia' },
    { value: String(profileData.completedProjects), label: 'Proyectos construidos' },
    { value: String(profileData.githubRepos), label: 'Repositorios públicos' },
    { value: `${profileData.githubStars}+`, label: 'Estrellas en GitHub' },
  ];

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>

          {/* Estado */}
          <div style={{ marginBottom: '1.8rem', display: 'inline-block' }}>
            <div className="badge-status">
              <span className="dot-ping"></span>
              <span>Disponible para nuevos proyectos</span>
            </div>
          </div>

          {/* Titular */}
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
            Hola, soy <span className="gradient-text">{profileData.name}</span>
          </h1>

          {/* Rol rotativo */}
          <div style={{
            fontSize: 'clamp(1.15rem, 3vw, 1.55rem)',
            color: 'var(--text-secondary)',
            fontWeight: 600,
            marginBottom: '1.4rem',
            height: '2.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '-0.01em'
          }}>
            <span style={{ color: 'var(--accent)' }}>{roles[currentRoleIndex]}</span>
          </div>

          {/* Bio */}
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            marginBottom: '2.4rem',
            maxWidth: '720px',
            marginInline: 'auto'
          }}>
            {profileData.bio}
          </p>

          {/* Chips de tecnología */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '2.6rem'
          }}>
            {skills.map((tech, idx) => (
              <span key={idx} className="code-tag" style={{ fontSize: '0.88rem', padding: '0.3rem 0.85rem' }}>
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <a href="#projects" className="btn btn-primary">
              Ver mis proyectos <ArrowRight size={17} />
            </a>
            <a href="#terminal" className="btn btn-outline">
              <Terminal size={17} color="var(--accent)" /> Terminal interactivo
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={17} color="var(--accent)" /> Hablemos
            </a>
          </div>

          {/* Métricas */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.2rem',
            marginTop: '1.5rem'
          }}>
            {metrics.map((m) => (
              <div key={m.label} className="glass-card" style={{ padding: '1.3rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.9rem', color: 'var(--accent-strong)', marginBottom: '0.15rem' }}>{m.value}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', margin: 0 }}>{m.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};