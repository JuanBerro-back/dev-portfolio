import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Circle } from 'lucide-react';
import { profileData, skillsData, projectsData } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <p style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>
            ⚡ Bienvenido a la consola interactiva de Juan Berro [JuanBerro-back v1.0.0]
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            Escribe <span style={{ color: '#ffffff', fontWeight: 600 }}>help</span> para listar los comandos disponibles.
          </p>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div style={{ display: 'grid', gap: '0.4rem', color: 'var(--text-muted)' }}>
            <p><span style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>about</span> - Biografía y perfil profesional</p>
            <p><span style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>skills</span> - Lista de tecnologías principales</p>
            <p><span style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>projects</span> - Resumen de repositorios destacados</p>
            <p><span style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>contact</span> - Información de contacto directo</p>
            <p><span style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>github</span> - Enlace directo al perfil @JuanBerro-back</p>
            <p><span style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>clear</span> - Limpiar pantalla de consola</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>
            <p><strong>{profileData.name}</strong> - {profileData.title}</p>
            <p style={{ color: 'var(--text-muted)' }}>{profileData.bio}</p>
            <p style={{ color: 'var(--accent-emerald)', marginTop: '0.4rem' }}>
              ✓ Ubicación: {profileData.location} | Estado: Disponible para nuevos retos
            </p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.6rem' }}>
            {skillsData.map((s, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem', borderRadius: '6px' }}>
                <span style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>{s.name}</span>: {s.level}%
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {projectsData.map((p, idx) => (
              <div key={idx}>
                <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>{p.title}</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{p.shortDescription}</p>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--primary-cyan)', fontSize: '0.85rem' }}>
                  ➜ {p.githubUrl}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>GitHub:</strong> {profileData.github}</p>
            <p><strong>LinkedIn:</strong> {profileData.linkedin}</p>
          </div>
        );
        break;

      case 'github':
        window.open(profileData.github, '_blank');
        output = <p style={{ color: 'var(--primary-cyan)' }}>Abriendo repositorio {profileData.github}...</p>;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo':
        output = <p style={{ color: 'var(--accent-pink)' }}>Permiso denegado: El usuario local no es root 😜</p>;
        break;

      default:
        output = (
          <p style={{ color: 'var(--accent-pink)' }}>
            Comando no reconocido: '{cmd}'. Escribe <span style={{ color: '#ffffff' }}>help</span> para ver los comandos válidos.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  return (
    <section id="terminal">
      <div className="container">
        <h2 className="section-title">Consola <span className="gradient-text">Interactive CLI</span></h2>
        <p className="section-subtitle">
          Explora mi experiencia e información directamente mediante comandos de terminal.
        </p>

        <div className="glass-card" style={{
          maxWidth: '850px',
          margin: '0 auto',
          borderRadius: '12px',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          boxShadow: 'var(--shadow-glow)',
          background: '#0d1117',
          fontFamily: 'var(--font-mono)'
        }}>
          {/* Terminal Window Header */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '0.8rem 1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Circle size={12} fill="#ef4444" stroke="none" />
              <Circle size={12} fill="#eab308" stroke="none" />
              <Circle size={12} fill="#22c55e" stroke="none" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.6rem' }}>
                bash - juanberro@dev-portfolio:~
              </span>
            </div>
            <TerminalIcon size={18} color="var(--primary-cyan)" />
          </div>

          {/* Terminal Content Box */}
          <div style={{
            padding: '1.5rem',
            minHeight: '280px',
            maxHeight: '400px',
            overflowY: 'auto',
            fontSize: '0.92rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {history.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {item.command !== 'welcome' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-cyan)' }}>
                    <span>juanberro@github:~$</span>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>{item.command}</span>
                  </div>
                )}
                <div>{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Prompt */}
          <form
            onSubmit={handleCommand}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.8rem 1.5rem',
              borderTop: '1px solid var(--border-color)',
              background: 'rgba(0,0,0,0.2)'
            }}
          >
            <span style={{ color: 'var(--primary-cyan)', fontWeight: 600 }}>juanberro@github:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="escribe 'help' o 'skills'..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.92rem'
              }}
            />
            <button type="submit" style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              <CornerDownLeft size={18} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};
