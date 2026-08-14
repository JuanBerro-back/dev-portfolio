import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Github, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs = [
    { id: 'all', label: '🌴 Todos los Proyectos' },
    { id: 'backend', label: '🐍 Python & APIs' },
    { id: 'fullstack', label: '🗺️ Geolocalización' },
    { id: 'frontend', label: '🧮 Web Apps' }
  ];

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Portafolio de <span className="gradient-banana">Proyectos 🐒🍌</span></h2>
        <p className="section-subtitle">
          Proyectos reales construidos en Python, FastAPI, Flask, React, TypeScript y JavaScript. Enlaza directamente a los repositorios de GitHub de @JuanBerro-back.
        </p>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            background: 'rgba(16, 185, 129, 0.05)',
            padding: '0.4rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: activeTab === tab.id ? 'var(--grad-jungle)' : 'transparent',
                  color: activeTab === tab.id ? '#07130e' : 'var(--text-muted)',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  cursor: 'pointer',
                  fontSize: '0.92rem',
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
              {/* Image Banner */}
              <div style={{
                position: 'relative',
                height: '210px',
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
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(7, 19, 14, 0.9)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--banana-gold)',
                  color: 'var(--banana-gold)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  {project.monkeyMascot || '🐒'} Python
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span className="code-tag" style={{ alignSelf: 'flex-start', marginBottom: '0.8rem' }}>
                  {project.category.toUpperCase()}
                </span>
                
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: '#ffffff' }}>{project.title}</h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.4rem', flexGrow: 1 }}>
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.78rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontWeight: 500
                    }}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--banana-gold)', alignSelf: 'center', fontWeight: 600 }}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Bottom Actions */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)'
                }}>
                  <span style={{
                    fontSize: '0.9rem',
                    color: 'var(--jungle-emerald)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    Ver Detalles 🍌 <ArrowUpRight size={16} />
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
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--banana-gold)')}
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

        {/* Project Details Modal */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};
