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
          <p style={{ color: 'var(--code-accent)', fontWeight: 700 }}>
            Terminal de Juan Berro · v2.0
          </p>
          <p style={{ color: 'var(--code-muted)' }}>
            Escribe <span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>help</span> para ver los comandos disponibles.
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
          <div style={{ display: 'grid', gap: '0.35rem', color: 'var(--code-muted)' }}>
            <p><span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>whoami</span> - Presentación breve</p>
            <p><span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>stats</span> - Estadísticas de GitHub @{profileData.githubUsername}</p>
            <p><span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>skills</span> - Lenguajes y frameworks que uso</p>
            <p><span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>projects</span> - Proyectos públicos en GitHub</p>
            <p><span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>contact</span> - Canales de contacto</p>
            <p><span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>github</span> - Abrir mi perfil de GitHub</p>
            <p><span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>clear</span> - Limpiar la terminal</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div style={{ color: 'var(--code-text)', lineHeight: 1.7 }}>
            <p style={{ color: 'var(--code-accent)', fontWeight: 700 }}>
              Juan Berro · Ingeniero de Software Full-Stack
            </p>
            <p style={{ margin: 0 }}>
              Construyo APIs, interfaces y productos confiables con Python, TypeScript,
              React y Node.js. Me gusta el código claro, las decisiones simples y aprender
              algo nuevo cada semana.
            </p>
          </div>
        );
        break;

      case 'stats':
        output = (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '0.55rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.7rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>Repos públicos</span>: {profileData.githubRepos}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.7rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>Estrellas</span>: {profileData.githubStars}+
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.7rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>Seguidores</span>: {profileData.githubFollowers}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.7rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>Stack</span>: TypeScript · Python · React · Node.js
            </div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '0.55rem' }}>
            {skillsData.map((s, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.7rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>{s.name}</span>: {s.level}%
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {projectsData.map((p, idx) => (
              <div key={idx}>
                <span style={{ color: 'var(--code-accent)', fontWeight: 700 }}>{p.title}</span>
                <p style={{ color: 'var(--code-muted)', fontSize: '0.86rem', margin: '0.1rem 0 0.2rem' }}>{p.shortDescription}</p>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--code-accent)', fontSize: '0.83rem', textDecoration: 'underline' }}>
                  {p.githubUrl}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div style={{ display: 'grid', gap: '0.2rem' }}>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>GitHub:</strong> {profileData.github}</p>
            <p><strong>LinkedIn:</strong> {profileData.linkedin}</p>
          </div>
        );
        break;

      case 'github':
        window.open(profileData.github, '_blank');
        output = <p style={{ color: 'var(--code-accent)' }}>Abriendo mi perfil de GitHub...</p>;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <p style={{ color: '#fca5a5' }}>
            Comando no reconocido: '{cmd}'. Escribe <span style={{ color: 'var(--code-accent)' }}>help</span> para ver la lista.
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
        <span className="eyebrow">Terminal · 04</span>
        <h2 className="section-title">
          Terminal <span className="gradient-text">interactivo</span>
        </h2>
        <p className="section-subtitle">
          Una forma rápida de explorar mi perfil: escribe un comando y explora mis
          habilidades, proyectos y estadísticas.
        </p>

        <div className="terminal" style={{ maxWidth: '820px', margin: '0 auto' }}>
          {/* Encabezado */}
          <div className="terminal-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Circle size={12} fill="#f87171" stroke="none" />
              <Circle size={12} fill="#fbbf24" stroke="none" />
              <Circle size={12} fill="#34d399" stroke="none" />
              <span className="terminal-title">
                juanberro@portfolio:~/dev
              </span>
            </div>
            <TerminalIcon size={17} color="var(--code-accent)" />
          </div>

          {/* Salida */}
          <div className="terminal-body">
            {history.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {item.command !== 'welcome' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--code-accent)' }}>
                    <span>juanberro@portfolio:~$</span>
                    <span style={{ color: '#ffffff', fontWeight: 700 }}>{item.command}</span>
                  </div>
                )}
                <div>{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Entrada */}
          <form onSubmit={handleCommand} className="terminal-input-row">
            <span className="terminal-prompt">juanberro@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="escribe 'help' para empezar..."
              aria-label="Comando de terminal"
              autoComplete="off"
              spellCheck={false}
            />
            <button type="submit" style={{ background: 'transparent', border: 'none', color: 'var(--code-muted)', cursor: 'pointer' }}>
              <CornerDownLeft size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};