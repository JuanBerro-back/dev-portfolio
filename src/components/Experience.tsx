import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="container">
        <span className="eyebrow">Trayectoria · 05</span>
        <h2 className="section-title">
          Recorrido & <span className="gradient-text">experiencia</span>
        </h2>
        <p className="section-subtitle">
          Mi camino hasta hoy: proyectos que resuelven problemas, formación constante
          y un aprendizaje que no se detiene.
        </p>

        <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative' }}>
          <div className="timeline-line" />

          {experienceData.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                gap: '1.4rem',
                marginBottom: '2.2rem',
                position: 'relative'
              }}
            >
              {/* Nodo */}
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                background: 'var(--accent-soft)',
                border: '1px solid var(--accent-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 2
              }}>
                {item.type === 'work' ? (
                  <Briefcase size={22} color="var(--accent)" />
                ) : (
                  <GraduationCap size={22} color="var(--accent)" />
                )}
              </div>

              {/* Contenido */}
              <div className="glass-card" style={{ flexGrow: 1, padding: '1.7rem' }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{item.role}</h3>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.84rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    <Calendar size={14} color="var(--accent)" /> {item.period}
                  </span>
                </div>

                <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-strong)', margin: '0 0 0.9rem 0', fontWeight: 600 }}>
                  {item.company}
                </h4>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.1rem' }}>
                  {item.description}
                </p>

                <div style={{ marginBottom: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--positive)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="code-tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};