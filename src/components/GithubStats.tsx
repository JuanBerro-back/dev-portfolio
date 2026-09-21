import React, { useEffect, useState } from 'react';
import {
  BookOpen,
  CalendarDays,
  ExternalLink,
  GitFork,
  Github,
  MapPin,
  Star,
  UserPlus,
  Users,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface GitHubUserData {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  location: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface GitHubRepoData {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage: string | null;
  pushed_at: string;
}

const FALLBACK_USER: GitHubUserData = {
  login: 'JuanBerro-back',
  name: 'Juan Berroteran',
  avatar_url: 'https://avatars.githubusercontent.com/u/179836465?v=4',
  html_url: 'https://github.com/JuanBerro-back',
  location: 'América Latina · Remoto',
  bio: 'Desarrollador web Full-Stack · Python, TypeScript, React y Node.js',
  public_repos: 24,
  followers: 39,
  following: 57,
  created_at: '2024-08-29T13:24:42Z',
};

const FALLBACK_REPOS: GitHubRepoData[] = [
  {
    name: 'pagina-responsive-',
    description: 'Página web 100% responsive',
    language: 'JavaScript',
    stargazers_count: 5,
    forks_count: 0,
    html_url: 'https://github.com/JuanBerro-back/pagina-responsive-',
    homepage: null,
    pushed_at: '2026-09-02T00:00:00Z',
  },
  {
    name: 'zupply',
    description: 'Proyecto personal de gestión de activos (Asset Manager)',
    language: 'TypeScript',
    stargazers_count: 4,
    forks_count: 0,
    html_url: 'https://github.com/JuanBerro-back/zupply',
    homepage: 'https://replit.com/@jdbpberroteran/Asset-Manager-1',
    pushed_at: '2026-09-01T00:00:00Z',
  },
  {
    name: 'restaurante-con-validacion',
    description: 'Web para restaurante con formularios validados',
    language: 'JavaScript',
    stargazers_count: 4,
    forks_count: 0,
    html_url: 'https://github.com/JuanBerro-back/restaurante-con-validacion',
    homepage: null,
    pushed_at: '2026-09-01T00:00:00Z',
  },
  {
    name: 'pokepoke',
    description: 'App interactiva con temática Pokémon (demo en Render)',
    language: 'JavaScript',
    stargazers_count: 3,
    forks_count: 0,
    html_url: 'https://github.com/JuanBerro-back/pokepoke',
    homepage: 'https://pokepoke-i0ma.onrender.com/',
    pushed_at: '2026-09-14T12:10:26Z',
  },
  {
    name: 'xupply-D',
    description: 'Versión desplegada del proyecto Zupply',
    language: 'TypeScript',
    stargazers_count: 3,
    forks_count: 0,
    html_url: 'https://github.com/JuanBerro-back/xupply-D',
    homepage: 'https://zupply-d.onrender.com',
    pushed_at: '2026-09-18T14:56:48Z',
  },
  {
    name: 'kitty-finanzas',
    description: 'Control de finanzas personales en Python',
    language: 'Python',
    stargazers_count: 3,
    forks_count: 0,
    html_url: 'https://github.com/JuanBerro-back/kitty-finanzas',
    homepage: 'https://kitty-finanzas.onrender.com/',
    pushed_at: '2026-09-12T00:00:00Z',
  },
];

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572a5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Otros: '#8b949e',
};

const describe = (repo: GitHubRepoData): string =>
  repo.description && repo.description.trim()
    ? repo.description.trim()
    : 'Proyecto open source de Juan Berro en GitHub.';

export const GithubStats: React.FC = () => {
  const [user, setUser] = useState<GitHubUserData | null>(null);
  const [repos, setRepos] = useState<GitHubRepoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const username = profileData.githubUsername;

    const load = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { signal: controller.signal }),
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=stars`,
            { signal: controller.signal }
          ),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');
        const userJson: GitHubUserData = await userRes.json();
        const reposJson: GitHubRepoData[] = await reposRes.json();
        setUser(userJson);
        setRepos(reposJson);
        setIsLive(true);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setUser(FALLBACK_USER);
          setRepos(FALLBACK_REPOS);
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, []);

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

  const languageCounts: Record<string, number> = {};
  repos.forEach((repo) => {
    const lang = repo.language && repo.language.trim() ? repo.language : 'Otros';
    languageCounts[lang] = (languageCounts[lang] || 0) + 1;
  });
  const topLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const maxLanguageCount = topLanguages.length > 0 ? topLanguages[0][1] : 1;

  const topRepos = [...repos]
    .filter((repo) => repo.name !== profileData.githubUsername)
    .sort(
      (a, b) =>
        b.stargazers_count - a.stargazers_count ||
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    )
    .slice(0, 6);

  const joinedLabel = user
    ? `Miembro desde ${new Date(user.created_at).toLocaleDateString('es-ES', {
        month: 'long',
        year: 'numeric',
      })}`
    : '';

  const statTiles = [
    { label: 'Repos públicos', value: user?.public_repos, icon: <BookOpen size={20} /> },
    { label: 'Seguidores', value: user?.followers, icon: <Users size={20} /> },
    { label: 'Siguiendo', value: user?.following, icon: <UserPlus size={20} /> },
    { label: 'Estrellas totales', value: totalStars, icon: <Star size={20} /> },
    { label: 'Forks', value: totalForks, icon: <GitFork size={20} /> },
  ];

  return (
    <section id="github">
      <div className="container">
        <span className="eyebrow">GitHub · 03</span>
        <h2 className="section-title">
          Mi actividad en <span className="gradient-text">GitHub</span>
        </h2>
        <p className="section-subtitle">
          Estadísticas reales de @{profileData.githubUsername}, obtenidas directamente
          desde la API pública de GitHub. Proyectos, estrellas y los lenguajes que más
          uso en mi trabajo diario.
        </p>

        {isLive && (
          <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--accent-strong)' }}>
            Sincronizado en tiempo real con GitHub
          </p>
        )}

        {/* Perfil */}
        <div
          className="glass-card"
          style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto 2rem' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.6rem' }}>
            {isLoading || !user ? (
              <div
                className="skeleton"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '18px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-dim)'
                }}
              >
                <Github size={40} />
              </div>
            ) : (
              <img
                src={user.avatar_url}
                alt={`Avatar de ${profileData.name}`}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '18px',
                  border: '3px solid var(--accent-border)',
                  boxShadow: 'var(--shadow-sm)',
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
              />
            )}

            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem' }}>
                <h3 style={{ fontSize: '1.6rem', margin: 0 }}>{user?.name || profileData.name}</h3>
                <span className="code-tag code-tag-accent">@{user?.login || profileData.githubUsername}</span>
              </div>

              {user?.bio && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem', marginTop: '0.4rem' }}>
                  {user.bio}
                </p>
              )}

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.2rem',
                  marginTop: '0.7rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-dim)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={15} color="var(--accent)" /> {user?.location || profileData.location}
                </span>
                {joinedLabel && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CalendarDays size={15} color="var(--accent)" /> {joinedLabel}
                  </span>
                )}
              </div>
            </div>

            <a
              href={user?.html_url || profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              <Github size={18} /> Ver perfil completo
            </a>
          </div>
        </div>

        {/* Tiles de estadísticas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '1.1rem',
            maxWidth: '1000px',
            margin: '0 auto 3rem',
          }}
        >
          {statTiles.map((tile) => (
            <div key={tile.label} className="glass-card" style={{ padding: '1.3rem 1.4rem', textAlign: 'center' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '11px',
                  background: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  margin: '0 auto 0.8rem',
                }}
              >
                {tile.icon}
              </div>
              <div className={isLoading ? 'skeleton' : ''}>
                <h3 style={{ fontSize: '1.9rem', color: 'var(--text)', marginBottom: '0.1rem' }}>
                  {isLoading ? '—' : tile.value}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500, margin: 0 }}>
                  {tile.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lenguajes + repos destacados */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Lenguajes */}
          <div className="glass-card" style={{ padding: '1.7rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Star size={18} color="var(--amber)" /> Stack más usado
            </h3>

            {isLoading
              ? topLanguages.map((_, idx) => (
                  <div key={idx} className="skeleton" style={{ height: '38px', marginBottom: '0.9rem' }} />
                ))
              : topLanguages.map(([lang, count]) => (
                  <div key={lang} style={{ marginBottom: '0.95rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: LANG_COLORS[lang] || '#8b949e', display: 'inline-block' }} />
                        {lang}
                      </span>
                      <span style={{ color: 'var(--accent-strong)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        {count} repos
                      </span>
                    </div>
                    <div className="progress-track">
                      <div
                        style={{
                          height: '100%',
                          width: `${(count / maxLanguageCount) * 100}%`,
                          background: LANG_COLORS[lang] || '#8b949e',
                          borderRadius: '999px',
                          transition: 'width 0.8s ease-out',
                        }}
                      />
                    </div>
                  </div>
                ))}

            <div style={{ marginTop: '1rem', padding: '0.8rem 1rem', borderRadius: '10px', background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                <strong style={{ color: 'var(--accent-strong)' }}>JavaScript y TypeScript</strong> lideran mi
                actividad, seguidos de Python para automatización y APIs.
              </p>
            </div>
          </div>

          {/* Repos destacados */}
          <div className="glass-card" style={{ padding: '1.7rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <BookOpen size={18} color="var(--accent)" /> Repositorios destacados
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {isLoading
                ? Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx} className="skeleton" style={{ height: '58px' }} />
                  ))
                : topRepos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-row"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.8rem',
                        padding: '0.7rem 0.85rem',
                        borderRadius: '10px',
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: LANG_COLORS[repo.language || 'Otros'] || '#8b949e',
                          flexShrink: 0,
                          marginTop: '6px',
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.95rem', fontFamily: 'var(--font-mono)' }}>
                            {repo.name}
                          </span>
                          {(repo.homepage || repo.language) && (
                            <span className="code-tag" style={{ fontSize: '0.68rem', padding: '0.1rem 0.45rem' }}>
                              {repo.language || 'Demo'}
                            </span>
                          )}
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.45, marginTop: '0.25rem' }}>
                          {describe(repo)}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.35rem', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <Star size={13} color="var(--amber)" /> {repo.stargazers_count}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <GitFork size={13} /> {repo.forks_count}
                          </span>
                          {repo.homepage && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-strong)' }}>
                              <ExternalLink size={13} /> Demo
                            </span>
                          )}
                        </div>
                      </div>
                      <ExternalLink size={15} style={{ color: 'var(--text-dim)', flexShrink: 0, marginTop: '4px' }} />
                    </a>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};