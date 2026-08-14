import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Code2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'projects', 'terminal', 'experience', 'contact'];
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
    { name: 'Sobre Mí', href: '#about', id: 'about' },
    { name: 'Proyectos', href: '#projects', id: 'projects' },
    { name: 'Terminal CLI', href: '#terminal', id: 'terminal' },
    { name: 'Experiencia', href: '#experience', id: 'experience' },
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
        background: isScrolled ? 'rgba(9, 13, 22, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: isScrolled ? '0.8rem 0' : '1.5rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, fontSize: '1.25rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'var(--grad-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0d1117'
          }}>
            <Code2 size={22} strokeWidth={2.5} />
          </div>
          <span style={{ fontFamily: 'var(--font-heading)' }}>
            Juan<span style={{ color: 'var(--primary-cyan)' }}>.Berro</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '1.8rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    color: activeSection === link.id ? 'var(--primary-cyan)' : 'var(--text-muted)',
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
                        background: 'var(--primary-cyan)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--primary-cyan)'
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Quick Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1.2rem' }}>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              title="Perfil de GitHub @JuanBerro-back"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.8rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                fontSize: '0.85rem',
                color: 'var(--text-main)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            >
              <Github size={16} />
              <span>@JuanBerro-back</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
          aria-label="Alternar Menú"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.1rem',
                fontWeight: 500,
                color: activeSection === link.id ? 'var(--primary-cyan)' : 'var(--text-main)',
                padding: '0.5rem 0'
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
              background: 'var(--grad-main)',
              color: '#0d1117',
              fontWeight: 600,
              marginTop: '0.5rem'
            }}
          >
            <Github size={18} /> Ver GitHub @JuanBerro-back
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 850px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
