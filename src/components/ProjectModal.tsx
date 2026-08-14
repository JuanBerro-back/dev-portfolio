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
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      background: 'rgba(5, 8, 15, 0.85)',
      backdropFilter: 'blur(12px)',
      animation: 'fadeIn 0.25s ease'
    }}>
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: 'var(--shadow-glow)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <span className="code-tag" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              {project.category.toUpperCase()}
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#ffffff' }}>{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: 'none',
              color: 'var(--text-muted)',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Project Image */}
        <div style={{
          width: '100%',
          height: '240px',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          position: 'relative'
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Metrics Banner */}
        {project.metrics && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            padding: '1rem',
            borderRadius: '10px',
            background: 'rgba(0, 242, 254, 0.08)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            marginBottom: '1.5rem',
            color: 'var(--primary-cyan)',
            fontWeight: 500,
            fontSize: '0.95rem'
          }}>
            <BarChart3 size={20} />
            <span><strong>Impacto / Métrica:</strong> {project.metrics}</span>
          </div>
        )}

        {/* Description */}
        <p style={{ color: 'var(--text-main)', lineHeight: 1.7, fontSize: '1.02rem', marginBottom: '1.5rem' }}>
          {project.fullDescription}
        </p>

        {/* Highlights */}
        <div style={{ marginBottom: '1.8rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--text-main)' }}>Aspectos Clave de Implementación:</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--text-muted)' }}>Tecnologías Utilizadas:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech, idx) => (
              <span key={idx} style={{
                fontSize: '0.85rem',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
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
              <ExternalLink size={18} /> Ver Demo en Vivo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
