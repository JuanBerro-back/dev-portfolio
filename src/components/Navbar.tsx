import React, { useState, useEffect } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'projects', 'github', 'terminal', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero', id: 'hero' },
    { name: 'Sobre mí', href: '#about', id: 'about' },
    { name: 'Proyectos', href: '#projects', id: 'projects' },
    { name: 'GitHub', href: '#github', id: 'github' },
    { name: 'Terminal', href: '#terminal', id: 'terminal' },
    { name: 'Trayectoria', href: '#experience', id: 'experience' },
    { name: 'Contacto', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(246, 247, 245, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(14px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        padding: isScrolled ? '0.7rem 0' : '1.1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Marca */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '11px',
            background: 'var(--grad-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: '1.15rem',
            boxShadow: '0 4px 12px rgba(15, 118, 110, 0.3)'
          }}>
            jb
          </div>
          <span>Juan Berro</span>
        </a>

        {/* Navegación desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '1.4rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    color: activeSection === link.id ? 'var(--accent-strong)' : 'var(--text-muted)',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    paddingBottom: '4px'
                  }}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--accent)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Perfil de GitHub @JuanBerro-back"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.42rem 1rem',
              borderRadius: '9px',
              background: 'var(--surface)',
              border: '1px solid var(--border-strong)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--text)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
          >
            <Github size={16} color="var(--accent)" />
            <span>GitHub</span>
          </a>
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(246, 247, 245, 0.98)',
            backdropFilter: 'blur(18px)',
            borderBottom: '1px solid var(--border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: activeSection === link.id ? 'var(--accent-strong)' : 'var(--text)',
                padding: '0.4rem 0'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.8rem',
              borderRadius: '10px',
              background: 'var(--accent)',
              color: '#ffffff',
              fontWeight: 600,
              marginTop: '0.5rem'
            }}
          >
            <Github size={18} /> Ver perfil de GitHub
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};