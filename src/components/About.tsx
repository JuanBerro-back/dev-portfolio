import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Server, Database, Container, Cpu, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas las Habilidades' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Base de Datos' },
    { id: 'devops', label: 'DevOps & Tools' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory || (activeCategory === 'devops' && s.category === 'tools'));

  const getSkillCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return <Code2 size={18} color="var(--primary-cyan)" />;
      case 'backend': return <Server size={18} color="var(--accent-purple)" />;
      case 'database': return <Database size={18} color="var(--accent-emerald)" />;
      default: return <Container size={18} color="var(--primary-blue)" />;
    }
  };

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí & <span className="gradient-text">Habilidades</span></h2>
        <p className="section-subtitle">
          Especializado en diseñar arquitecturas sólidas, escribir código limpio con TypeScript y crear productos digitales de alto rendimiento.
        </p>

        {/* Top Feature Grid: Core Principles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.2rem'
            }}>
              <Cpu size={24} color="var(--primary-cyan)" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem' }}>Arquitectura Escalable</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Diseño de sistemas desarticulados, patrones hexagonales y microservicios orientados a mantenibilidad y alta concurrencia.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.2rem'
            }}>
              <Zap size={24} color="var(--accent-purple)" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem' }}>Alto Rendimiento</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Optimización de tiempos de respuesta en APIs, consultas SQL estructuradas y renderizado ágil en el cliente.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.2rem'
            }}>
              <ShieldCheck size={24} color="var(--accent-emerald)" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem' }}>Código Calidad & Testeo</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Tipado estricto con TypeScript, pruebas unitarias e integración continua CI/CD con GitHub Actions.
            </p>
          </div>
        </div>

        {/* Skill Matrix Filter Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem' }}>Stack Tecnológico Dominado</h3>
          
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '0.4rem',
            borderRadius: '14px',
            border: '1px solid var(--border-color)'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: activeCategory === cat.id ? 'var(--grad-main)' : 'transparent',
                  color: activeCategory === cat.id ? '#0d1117' : 'var(--text-muted)',
                  fontWeight: activeCategory === cat.id ? 700 : 500,
                  cursor: 'pointer',
                  fontSize: '0.9rem',
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.2rem'
        }}>
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-card" style={{ padding: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  {getSkillCategoryIcon(skill.category)}
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{skill.name}</h4>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div style={{
                height: '6px',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '3px',
                overflow: 'hidden',
                marginBottom: '0.8rem'
              }}>
                <div style={{
                  height: '100%',
                  width: `${skill.level}%`,
                  background: 'var(--grad-main)',
                  borderRadius: '3px',
                  transition: 'width 1s ease-out'
                }} />
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
