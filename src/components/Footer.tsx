import React from 'react';
import { ArrowUp, Github, Heart, Code2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 0 2rem 0',
      background: 'rgba(5, 8, 15, 0.95)',
      color: 'var(--text-muted)',
      fontSize: '0.9rem'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, fontSize: '1.2rem', color: '#ffffff' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--grad-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0d1117'
            }}>
              <Code2 size={18} strokeWidth={2.5} />
            </div>
            <span>Juan Berro</span>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#hero">Inicio</a>
            <a href="#projects">Proyectos</a>
            <a href="#experience">Experiencia</a>
            <a href={profileData.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-cyan)' }}>
              <Github size={16} /> GitHub
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              padding: '0.6rem',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary-cyan)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            title="Volver arriba"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Bottom Line */}
        <div style={{
          textAlign: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.85rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span>© {new Date().getFullYear()} Juan Berro. Todos los derechos reservados.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Construido con <Heart size={14} color="var(--accent-pink)" fill="var(--accent-pink)" /> en React + TypeScript para GitHub Pages.
          </span>
        </div>

      </div>
    </footer>
  );
};
