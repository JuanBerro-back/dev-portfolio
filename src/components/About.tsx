import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '🌿 Todas las Habilidades' },
    { id: 'languages', label: '🔤 Lenguajes' },
    { id: 'frameworks', label: '⚛️ Frameworks & UI' },
    { id: 'backend', label: '⚙️ Backend & DB' },
    { id: 'tools', label: '🛠️ Herramientas' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí & <span className="gradient-text">Habilidades 🐒🌿</span></h2>
        <p className="section-subtitle">
          Dominio completo en tecnologías modernas Frontend & Backend: TypeScript, Python, React, JavaScript, Node.js, Tailwind, HTML5 y CSS3.
        </p>

        {/* Feature Cards Jungle */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>
              🐒 ⚡
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', color: '#ffffff' }}>Desarrollo Ágil & Limpio</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Escribo código estructurado con TypeScript, React y Tailwind para crear interfaces rápidas y sorprendentes.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>
              🐍 ⚙️
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', color: '#ffffff' }}>APIs en Python & Node.js</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Diseño de arquitecturas Backend con FastAPI, Flask y Node.js para procesamiento asíncrono y servicios estables.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>
              🍌 🗺️
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', color: '#ffffff' }}>Geolocalización & Integraciones</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Experiencia construyendo proyectos con geolocalización de mapas, consumo de APIs REST y webhooks de WhatsApp.
            </p>
          </div>
        </div>

        {/* Skill Category Selector */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem' }}>Stack Tecnológico Dominado 🐒</h3>
          
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            background: 'rgba(16, 185, 129, 0.05)',
            padding: '0.4rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: activeCategory === cat.id ? 'var(--grad-jungle)' : 'transparent',
                  color: activeCategory === cat.id ? '#07130e' : 'var(--text-muted)',
                  fontWeight: activeCategory === cat.id ? 700 : 500,
                  cursor: 'pointer',
                  fontSize: '0.92rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '1.4rem'
        }}>
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{skill.emoji || '🌿'}</span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{skill.name}</h4>
                </div>
                <span style={{ fontSize: '0.88rem', color: 'var(--banana-gold)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div style={{
                height: '8px',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '0.8rem'
              }}>
                <div style={{
                  height: '100%',
                  width: `${skill.level}%`,
                  background: 'var(--grad-jungle)',
                  borderRadius: '4px',
                  transition: 'width 1s ease-out'
                }} />
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
