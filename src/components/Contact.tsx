import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact">
      <div className="container">
        <span className="eyebrow">Contacto · 06</span>
        <h2 className="section-title">
          Trabajemos <span className="gradient-text">juntos</span>
        </h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente, una posición abierta o simplemente quieres
          conversar sobre tecnología? Escríbeme y con gusto conversamos.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>

          {/* Info */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.9rem' }}>Contacto directo</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.8rem' }}>
                Estoy abierto a roles full-stack, desarrollo de APIs, productos nuevos
                y proyectos donde pueda aportar de verdad.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '1.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block' }}>Email profesional</span>
                    <span style={{ fontSize: '0.96rem', fontWeight: 600 }}>{profileData.email}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)'
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'block' }}>Ubicación</span>
                    <span style={{ fontSize: '0.96rem', fontWeight: 600 }}>{profileData.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={handleCopyEmail}
                className="btn btn-outline"
                style={{ width: '100%', marginBottom: '1.4rem', justifyContent: 'center' }}
              >
                {copied ? <Check size={17} color="var(--positive)" /> : <Copy size={17} color="var(--accent)" />}
                <span>{copied ? 'Email copiado al portapapeles' : 'Copiar mi email'}</span>
              </button>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub @JuanBerro-back"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'var(--bg)',
                    border: '1px solid var(--border-strong)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <Github size={20} />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn de Juan Berro"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'var(--bg)',
                    border: '1px solid var(--border-strong)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '1.4rem' }}>Envíame un mensaje</h3>

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--positive-soft)',
                  border: '1px solid var(--positive)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Check size={32} color="var(--positive)" />
                </div>
                <h4 style={{ fontSize: '1.25rem', margin: 0 }}>¡Mensaje enviado!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                  Gracias por escribirme. Te responderé lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label className="field-label">Tu nombre</label>
                  <input
                    type="text"
                    required
                    className="field-input"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="field-label">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    className="field-input"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="nombre@empresa.com"
                  />
                </div>

                <div>
                  <label className="field-label">Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    className="field-input"
                    style={{ resize: 'vertical' }}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hola Juan, me gustaría hablar contigo sobre..."
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.4rem' }}>
                  <Send size={17} /> Enviar mensaje
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};