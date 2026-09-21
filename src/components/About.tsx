import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Atom,
  Code,
  Server,
  Palette,
  Layers,
  GitBranch,
  Rocket,
  Braces,
  MapPinned,
  HelpCircle,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { Skill } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Terminal,
  Atom,
  Code,
  Server,
  Palette,
  Layers,
  GitBranch,
};

const features = [
  {
    icon: Rocket,
    title: 'Código limpio y mantenible',
    description:
      'Escribo software estructurado con TypeScript, React y Tailwind, pensado para evolucionar con el equipo, no contra él.',
  },
  {
    icon: Braces,
    title: 'Backend sólido y eficiente',
    description:
      'Diseño APIs con FastAPI, Flask y Node.js con foco en la estabilidad, el rendimiento y una buena experiencia de consumo.',
  },
  {
    icon: MapPinned,
    title: 'Soluciones con impacto real',
    description:
      'De la integración de APIs y webhooks de WhatsApp a mapas interactivos: me concentro en resolver el problema de fondo.',
  },
];

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'languages', label: 'Lenguajes' },
  { id: 'frameworks', label: 'Frameworks y UI' },
  { id: 'backend', label: 'Backend y datos' },
  { id: 'tools', label: 'Herramientas' },
];

const getIcon = (skill: Skill) => {
  const Icon = ICON_MAP[skill.iconName] || HelpCircle;
  return <Icon size={20} color="var(--accent)" />;
};

export const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="about">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow">Sobre mí · 01</span>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Manera de trabajar & <span className="gradient-text">habilidades</span>
        </h2>
        <p className="section-subtitle" style={{ marginInline: 'auto' }}>
          Soy el tipo de persona que prefiere una solución simple que funcione bien
          antes que una compleja que impresione. Estas son las bases de mi trabajo
          día a día y las tecnologías que uso para construir.
        </p>

        {/* Tarjetas de enfoque */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.4rem',
          marginBottom: '4rem'
        }}>
          {features.map((f) => (
            <div key={f.title} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '11px',
                background: 'var(--accent-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.1rem'
              }}>
                <f.icon size={22} color="var(--accent)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Filtros */}
        <div style={{ textAlign: 'center', marginBottom: '2.4rem' }}>
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de habilidades */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '1.3rem'
        }}>
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="glass-card" style={{ padding: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '9px',
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {getIcon(skill)}
                  </span>
                  <h4 style={{ margin: 0, fontSize: '1.02rem', fontWeight: 600 }}>{skill.name}</h4>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-strong)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {skill.level}%
                </span>
              </div>

              <div className="progress-track" style={{ marginBottom: '0.8rem' }}>
                <div className="progress-fill" style={{ width: `${skill.level}%` }} />
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};