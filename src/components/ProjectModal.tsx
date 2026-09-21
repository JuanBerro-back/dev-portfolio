import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, BarChart3 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(23, 34, 27, 0.55)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '760px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          background: 'var(--surface)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Encabezado */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.4rem' }}>
          <div>
            <span className="code-tag code-tag-accent" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              {project.category.toUpperCase()}
            </span>
            <h2 style={{ fontSize: '1.7rem', margin: 0 }}>{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              background: 'var(--bg-alt)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Imagen */}
        <div style={{
          width: '100%',
          height: '230px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '1.4rem'
        }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Métrica */}
        {project.metrics && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            padding: '0.9rem 1rem',
            borderRadius: '10px',
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent-border)',
            marginBottom: '1.4rem',
            color: 'var(--accent-strong)',
            fontWeight: 500,
            fontSize: '0.94rem'
          }}>
            <BarChart3 size={19} />
            <span><strong>Resultado:</strong> {project.metrics}</span>
          </div>
        )}

        {/* Descripción */}
        <p style={{ color: 'var(--text)', lineHeight: 1.75, fontSize: '1rem', marginBottom: '1.6rem' }}>
          {project.fullDescription}
        </p>

        {/* Aspectos clave */}
        <div style={{ marginBottom: '1.7rem' }}>
          <h4 style={{ fontSize: '1.05rem', marginBottom: '0.7rem' }}>Aspectos clave de la implementación</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0, margin: 0 }}>
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="var(--positive)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div style={{ marginBottom: '1.8rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.7rem' }}>Tecnologías utilizadas</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="code-tag" style={{ fontSize: '0.84rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Acciones */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, minWidth: '180px' }}
          >
            <Github size={18} /> Repositorio en GitHub
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ flex: 1, minWidth: '180px' }}
            >
              <ExternalLink size={18} color="var(--accent)" /> Ver demo en vivo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};