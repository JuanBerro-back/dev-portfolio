import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Github, ArrowUpRight, Folder } from 'lucide-react';

const CATEGORY_LABELS: Record<string, string> = {
  backend: 'Backend y APIs',
  fullstack: 'Fullstack',
  frontend: 'Frontend',
};

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs = [
    { id: 'all', label: 'Todos' },
    { id: 'backend', label: 'Backend y APIs' },
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow">Proyectos · 02</span>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Trabajo <span className="gradient-text">seleccionado</span>
        </h2>
        <p className="section-subtitle" style={{ marginInline: 'auto' }}>
          Proyectos reales que he construido con Python, FastAPI, React, TypeScript y
          JavaScript, todos con código público en GitHub y varios desplegados en producción.
        </p>

        {/* Filtros */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.8rem' }}>
          <div className="filter-bar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`filter-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de proyectos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: '1.8rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Imagen */}
              <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  padding: '0.28rem 0.8rem',
                  borderRadius: '999px',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(6px)'
                }}>
                  {CATEGORY_LABELS[project.category] || project.category}
                </div>
                {project.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    color: 'var(--accent-strong)',
                    padding: '0.28rem 0.8rem',
                    borderRadius: '999px',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(6px)'
                  }}>
                    <Folder size={12} style={{ verticalAlign: 'text-bottom', marginRight: '0.25rem' }} />
                    Destacado
                  </div>
                )}
              </div>

              {/* Cuerpo */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.55rem' }}>{project.title}</h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.2rem', flexGrow: 1 }}>
                  {project.shortDescription}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.3rem' }}>
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="code-tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', alignSelf: 'center', fontWeight: 600 }}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)'
                }}>
                  <span style={{
                    fontSize: '0.9rem',
                    color: 'var(--accent-strong)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    Ver detalles <ArrowUpRight size={16} />
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      color: 'var(--text-muted)',
                      padding: '0.4rem',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    title="Ver repositorio en GitHub"
                  >
                    <Github size={19} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};