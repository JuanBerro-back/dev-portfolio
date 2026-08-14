import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Github, Star, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs = [
    { id: 'all', label: 'Todos' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Portafolio de <span className="gradient-text">Proyectos</span></h2>
        <p className="section-subtitle">
          Una selección de proyectos recientes que destacan mis capacidades en desarrollo Full-Stack, diseño de APIs y soluciones en la nube.
        </p>

        {/* Tabs Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '0.4rem',
            borderRadius: '14px',
            border: '1px solid var(--border-color)'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: activeTab === tab.id ? 'var(--grad-main)' : 'transparent',
                  color: activeTab === tab.id ? '#0d1117' : 'var(--text-muted)',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Image */}
              <div style={{
                position: 'relative',
                height: '200px',
                width: '100%',
                overflow: 'hidden'
              }}>
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
                
                {project.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(9, 13, 22, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0, 242, 254, 0.4)',
                    color: 'var(--primary-cyan)',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    <Star size={12} fill="var(--primary-cyan)" /> Destacado
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span className="code-tag" style={{ alignSelf: 'flex-start', marginBottom: '0.8rem' }}>
                  {project.category.toUpperCase()}
                </span>
                
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>{project.title}</h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.4rem', flexGrow: 1 }}>
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-muted)'
                    }}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary-cyan)', alignSelf: 'center' }}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Bottom Footer Actions */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)'
                }}>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--primary-cyan)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.2rem'
                  }}>
                    Ver Detalles <ArrowUpRight size={16} />
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      color: 'var(--text-muted)',
                      padding: '0.4rem',
                      borderRadius: '6px',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    title="Ver repositorio en GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};
