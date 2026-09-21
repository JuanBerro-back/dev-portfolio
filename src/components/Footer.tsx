import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem 0 2rem 0',
      background: 'var(--bg-alt)',
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
          {/* Marca */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--grad-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: '1rem'
            }}>
              jb
            </div>
            <span>Juan Berro</span>
          </a>

          {/* Enlaces */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#about" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Habilidades</a>
            <a href="#projects" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Proyectos</a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-strong)', fontWeight: 600 }}
            >
              <Github size={16} /> GitHub @JuanBerro-back
            </a>
          </div>

          {/* Volver arriba */}
          <button
            onClick={scrollToTop}
            title="Volver arriba"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text)',
              padding: '0.6rem',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text)'; }}
          >
            <ArrowUp size={19} />
          </button>
        </div>

        {/* Línea final */}
        <div style={{
          textAlign: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
          fontSize: '0.87rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span>© {new Date().getFullYear()} Juan Berro. Todos los derechos reservados.</span>
          <span>Construido con React y TypeScript.</span>
        </div>

      </div>
    </footer>
  );
};