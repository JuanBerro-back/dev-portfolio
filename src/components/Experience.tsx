import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Trayectoria & <span className="gradient-text">Experiencia</span></h2>
        <p className="section-subtitle">
          Recorrido profesional, hitos alcanzados y constante aprendizaje en la ingeniería de software.
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'linear-gradient(180deg, var(--primary-cyan) 0%, var(--accent-purple) 100%)',
            opacity: 0.4
          }} />

          {experienceData.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                gap: '1.5rem',
                marginBottom: '2.5rem',
                position: 'relative'
              }}
            >
              {/* Timeline Node Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'var(--bg-dark)',
                border: item.type === 'work' ? '2px solid var(--primary-cyan)' : '2px solid var(--accent-purple)',
                boxShadow: item.type === 'work' ? 'var(--shadow-glow)' : 'var(--shadow-purple-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 2
              }}>
                {item.type === 'work' ? (
                  <Briefcase size={22} color="var(--primary-cyan)" />
                ) : (
                  <GraduationCap size={22} color="var(--accent-purple)" />
                )}
              </div>

              {/* Card Content */}
              <div className="glass-card" style={{ flexGrow: 1, padding: '1.8rem' }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  marginBottom: '0.6rem'
                }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff' }}>{item.role}</h3>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    color: 'var(--primary-cyan)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    <Calendar size={14} /> {item.period}
                  </span>
                </div>

                <h4 style={{ fontSize: '1rem', color: 'var(--accent-purple)', marginBottom: '1rem', fontWeight: 600 }}>
                  {item.company}
                </h4>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  {item.description}
                </p>

                {/* Achievements List */}
                <div style={{ marginBottom: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.skills.map((skill, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-muted)'
                    }}>
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
