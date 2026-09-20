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
          <p style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>
            🐒🌴 Bienvenido a la Consola Monito CLI de Juan Berro [v2.0.0 Jungle Edition]
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            Escribe <span style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>help</span> o <span style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>monito</span> para explorar los comandos de la selva.
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
      case 'ayuda':
        output = (
          <div style={{ display: 'grid', gap: '0.4rem', color: 'var(--text-muted)' }}>
            <p><span style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>monito</span> - Mensaje del monito guardián de la selva 🐒</p>
            <p><span style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>stats</span> - Estadísticas reales de GitHub @JuanBerro-back 📊</p>
            <p><span style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>skills</span> - Lista de lenguajes y frameworks (TypeScript, Python, React, etc.)</p>
            <p><span style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>projects</span> - Ver los repositorios de GitHub reales</p>
            <p><span style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>banana</span> - ¡Premio especial de banana! 🍌</p>
            <p><span style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>contact</span> - Canales de contacto directo</p>
            <p><span style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>github</span> - Enlace directo al GitHub @JuanBerro-back</p>
            <p><span style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>clear</span> - Limpiar consola</p>
          </div>
        );
        break;

      case 'monito':
      case 'jungle':
        output = (
          <div style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>
            <p style={{ fontSize: '1.2rem' }}>🐒 🌴 🍌 🌿 🐒</p>
            <p style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>
              "¡En la selva del software, Juan Berro salta entre TypeScript, Python y React sin caer jamás!"
            </p>
          </div>
        );
        break;

      case 'banana':
        output = (
          <div style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>
            🍌 🍌 🍌 ¡Has obtenido una súper banana de código limpio! +100 XP en Python & TypeScript.
          </div>
        );
        break;

      case 'stats':
        output = (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.6rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <span style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>📦 Repos públicos</span>: {profileData.githubRepos}
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <span style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>⭐ Estrellas totales</span>: {profileData.githubStars}+
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <span style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>🧑‍🤝‍🧑 Seguidores</span>: {profileData.githubFollowers}
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <span style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>⚡ Stack</span>: TypeScript · Python · React · Node.js
            </div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.6rem' }}>
            {skillsData.map((s, idx) => (
              <div key={idx} style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>{s.emoji} {s.name}</span>: {s.level}%
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
                <span style={{ color: 'var(--banana-gold)', fontWeight: 700 }}>{p.title}</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{p.shortDescription}</p>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--jungle-emerald)', fontSize: '0.85rem' }}>
                  ➜ Repo: {p.githubUrl}
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
        output = <p style={{ color: 'var(--jungle-emerald)' }}>Abriendo repositorio @JuanBerro-back...</p>;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <p style={{ color: 'var(--berry-pink)' }}>
            Comando no reconocido: '{cmd}'. Escribe <span style={{ color: 'var(--banana-gold)' }}>help</span> o <span style={{ color: 'var(--banana-gold)' }}>monito</span>.
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
        <h2 className="section-title">Consola <span className="gradient-text">Monito CLI 🐒💻</span></h2>
        <p className="section-subtitle">
          Interactúa con los comandos de la selva para explorar mis habilidades en Python, TypeScript y React.
        </p>

        <div className="glass-card" style={{
          maxWidth: '850px',
          margin: '0 auto',
          borderRadius: '16px',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          boxShadow: 'var(--shadow-emerald)',
          background: '#07130e',
          fontFamily: 'var(--font-mono)'
        }}>
          {/* Terminal Header */}
          <div style={{
            background: 'rgba(16, 185, 129, 0.08)',
            padding: '0.8rem 1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Circle size={12} fill="#ef4444" stroke="none" />
              <Circle size={12} fill="#eab308" stroke="none" />
              <Circle size={12} fill="#22c55e" stroke="none" />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginLeft: '0.6rem' }}>
                jungle-bash - juanberro@monito-code:~ 🐒
              </span>
            </div>
            <TerminalIcon size={18} color="var(--jungle-emerald)" />
          </div>

          {/* Terminal Output */}
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--jungle-emerald)' }}>
                    <span>juanberro@jungle:~$</span>
                    <span style={{ color: '#ffffff', fontWeight: 700 }}>{item.command}</span>
                  </div>
                )}
                <div>{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Line */}
          <form
            onSubmit={handleCommand}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.9rem 1.5rem',
              borderTop: '1px solid var(--border-color)',
              background: 'rgba(0,0,0,0.3)'
            }}
          >
            <span style={{ color: 'var(--jungle-emerald)', fontWeight: 700 }}>juanberro@jungle:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="escribe 'help' o 'monito'..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.94rem'
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
