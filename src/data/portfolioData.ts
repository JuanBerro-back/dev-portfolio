import { ProfileInfo, Project, Skill, ExperienceItem } from '../types';

export const profileData: ProfileInfo = {
  name: "Juan Berro",
  title: "Ingeniero de Software Full-Stack",
  location: "América Latina · Trabajo remoto",
  email: "jdbpberroteran@gmail.com",
  github: "https://github.com/JuanBerro-back",
  githubUsername: "JuanBerro-back",
  linkedin: "https://linkedin.com/in/juan-berro",
  bio: "Soy desarrollador full-stack y me gusta resolver problemas reales con software bien hecho: APIs rápidas, interfaces que se sienten naturales y código que cualquiera del equipo puede mantener. Trabajo con Python, TypeScript, React y Node.js, y comparto todo mi aprendizaje en proyectos públicos en GitHub.",
  availableForHire: true,
  yearsOfExperience: 2,
  completedProjects: 24,
  contributions: 62,
  githubRepos: 24,
  githubFollowers: 39,
  githubStars: 62,
  motto: "Software claro, decisiones simples y avance constante. Así construyo, una iteración a la vez."
};

export const projectsData: Project[] = [
  {
    id: "whatsapp-api-pedidos",
    title: "API WhatsApp para Pedidos",
    shortDescription: "Sistema automatizado en Python y FastAPI para recibir y gestionar pedidos comerciales a través de WhatsApp.",
    fullDescription: "Solución de backend en Python (FastAPI + SQLAlchemy) que se conecta con la API de WhatsApp para recibir pedidos en tiempo real. Extrae automáticamente productos, cantidades, precios y dirección de entrega, y los almacena en una base de datos SQLite con respuestas automatizadas.",
    category: "backend",
    technologies: ["Python", "FastAPI", "WhatsApp API", "SQLAlchemy", "SQLite", "Uvicorn", "Node.js"],
    githubUrl: "https://github.com/JuanBerro-back/prueba-de-api-de-whatsapp-por-pedidos",
    liveUrl: "https://github.com/JuanBerro-back/prueba-de-api-de-whatsapp-por-pedidos",
    featured: true,
    metrics: "Procesamiento de mensajes en menos de 2 segundos",
    highlights: [
      "Webhook para procesar mensajes entrantes de WhatsApp en tiempo real",
      "Parser automático de listas de pedidos y direcciones",
      "Persistencia de datos relacionales con SQLAlchemy ORM"
    ],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "geolocalizacion-mapas",
    title: "Geolocalización y Mapas",
    shortDescription: "Aplicación en Python y Flask con Geopy y Folium para geolocalización y mapas interactivos.",
    fullDescription: "Plataforma de geolocalización construida con Python y Flask. Realiza geocodificación directa e inversa usando OpenStreetMap (Nominatim API), calcula distancias geodésicas y renderiza mapas interactivos con marcadores dinámicos en tiempo real.",
    category: "fullstack",
    technologies: ["Python", "Flask", "Geopy API", "Folium", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/JuanBerro-back/geolocalizacion",
    liveUrl: "https://github.com/JuanBerro-back/geolocalizacion",
    featured: true,
    metrics: "Geocodificación precisa y mapas interactivos en tiempo real",
    highlights: [
      "Conversión de direcciones de texto a coordenadas GPS",
      "Cálculo de distancias geodésicas en kilómetros y millas",
      "Mapas interactivos con marcadores personalizados"
    ],
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "calculadora-publicidad",
    title: "Calculadora con Publicidad",
    shortDescription: "Calculadora web interactiva en Python y Flask con integración de publicidad dinámica.",
    fullDescription: "Aplicación de calculadora desarrollada con Python, Flask y HTML5/CSS3. Soporta operaciones aritméticas y funciones científicas (raíz cuadrada, sin, cos, tan, log) e incluye un sistema rotativo de banners publicitarios con analítica de clics.",
    category: "frontend",
    technologies: ["Python", "Flask", "JavaScript", "HTML5", "CSS3", "Jinja2"],
    githubUrl: "https://github.com/JuanBerro-back/calculadora-con-publicidad",
    liveUrl: "https://github.com/JuanBerro-back/calculadora-con-publicidad",
    featured: true,
    metrics: "Calculadora científica completa con slots de publicidad optimizados",
    highlights: [
      "Evaluación segura de expresiones matemáticas y funciones científicas",
      "Sistema de rotación de anuncios con métricas de clic",
      "Diseño adaptable con historial de operaciones"
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pokepoke",
    title: "PokePoke",
    shortDescription: "Aplicación web interactiva con temática Pokémon, panel de administración y despliegue en la nube.",
    fullDescription: "Aplicación web construida con JavaScript con una interfaz interactiva basada en la temática Pokémon. Incluye un panel de administración separado y está desplegada en producción mediante Render, demostrando la integración de frontend y backend con despliegue continuo.",
    category: "fullstack",
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "Render"],
    githubUrl: "https://github.com/JuanBerro-back/pokepoke",
    liveUrl: "https://pokepoke-i0ma.onrender.com/",
    featured: true,
    metrics: "En producción con panel de administración funcional",
    highlights: [
      "Interfaz dinámica con datos de la PokeAPI",
      "Panel de administración para gestión de contenido",
      "Despliegue en la nube con Render"
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "zupply",
    title: "Zupply · Asset Manager",
    shortDescription: "Aplicación en TypeScript para la gestión de activos, con una demo funcional desplegada en Replit.",
    fullDescription: "Proyecto personal desarrollado en TypeScript orientado a la gestión de activos y recursos. Cuenta con una demo funcional desplegada en Replit y demuestra buenas prácticas de tipado estático, arquitectura modular y despliegue ligero.",
    category: "frontend",
    technologies: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Replit"],
    githubUrl: "https://github.com/JuanBerro-back/zupply",
    liveUrl: "https://replit.com/@jdbpberroteran/Asset-Manager-1",
    featured: true,
    metrics: "Demo funcional desplegada y mantenida en Replit",
    highlights: [
      "Modelos tipados con TypeScript",
      "Gestión de activos, inventario y recursos",
      "Demo pública desplegada en Replit"
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "restaurante-validacion",
    title: "Restaurante con Validación",
    shortDescription: "Sitio web para restaurante con formularios validados en JavaScript y diseño responsivo.",
    fullDescription: "Página web corporativa para restaurante con énfasis en formularios de reserva validados del lado del cliente con JavaScript. Incluye maquetación responsiva, estructura semántica y prácticas de accesibilidad en HTML5 y CSS3.",
    category: "frontend",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/JuanBerro-back/restaurante-con-validacion",
    liveUrl: "https://github.com/JuanBerro-back/restaurante-con-validacion",
    featured: false,
    metrics: "Formularios 100% validados con feedback en tiempo real",
    highlights: [
      "Validación de formularios con JavaScript puro",
      "Diseño totalmente responsivo con CSS3",
      "Estructura semántica y accesible"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pagina-responsive",
    title: "Página Responsive",
    shortDescription: "Sitio web totalmente adaptable construido con JavaScript moderno y técnicas de layout fluidas.",
    fullDescription: "Proyecto enfocado en la creación de páginas web adaptables a cualquier dispositivo. Utiliza Flexbox, CSS Grid y media queries, e implementa interactividad con JavaScript para una experiencia de navegación fluida en móvil y escritorio.",
    category: "frontend",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/JuanBerro-back/pagina-responsive-",
    liveUrl: "https://github.com/JuanBerro-back/pagina-responsive-",
    featured: true,
    metrics: "El repositorio con más estrellas de mi perfil en GitHub",
    highlights: [
      "Layouts fluidos con Flexbox y CSS Grid",
      "Breakpoints optimizados para móvil, tablet y desktop",
      "Interactividad dinámica con JavaScript"
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kitty-finanzas",
    title: "Kitty Finanzas",
    shortDescription: "Aplicación en Python para el control de finanzas personales, desplegada en la nube.",
    fullDescription: "Herramienta de finanzas personales desarrollada en Python y desplegada en producción con Render. Permite registrar, organizar y visualizar movimientos económicos de forma sencilla, aplicando buenas prácticas de backend y bases de datos.",
    category: "backend",
    technologies: ["Python", "Flask", "SQL", "Render"],
    githubUrl: "https://github.com/JuanBerro-back/kitty-finanzas",
    liveUrl: "https://kitty-finanzas.onrender.com/",
    featured: false,
    metrics: "Aplicación funcional desplegada en producción",
    highlights: [
      "Registro y control de ingresos y gastos",
      "Backend en Python con persistencia de datos",
      "Despliegue continuo en Render"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "trycatch",
    title: "Try/Catch CSS Lab",
    shortDescription: "Laboratorio visual de experimentación con CSS3 moderno, publicado con GitHub Pages.",
    fullDescription: "Colección de experimentos y componentes visuales construida con CSS3 puro y publicada en GitHub Pages. Sirve como demostración de dominio en animaciones, transiciones, gradientes y técnicas avanzadas de estilizado.",
    category: "frontend",
    technologies: ["CSS3", "HTML5", "GitHub Pages"],
    githubUrl: "https://github.com/JuanBerro-back/trycatch",
    liveUrl: "https://github.com/JuanBerro-back/trycatch",
    featured: false,
    metrics: "Publicado en GitHub Pages con técnicas CSS avanzadas",
    highlights: [
      "Animaciones y transiciones con CSS3",
      "Experimentos tipográficos y visuales",
      "Publicación y hosting con GitHub Pages"
    ],
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
  }
];

export const skillsData: Skill[] = [
  { name: "TypeScript", category: "languages", level: 92, iconName: "Code2", description: "Tipado estricto, interfaces, genéricos y patrones que facilitan el mantenimiento." },
  { name: "Python", category: "languages", level: 95, iconName: "Terminal", description: "FastAPI, Flask, automatización, procesamiento de datos y scripting." },
  { name: "React", category: "frameworks", level: 90, iconName: "Atom", description: "Hooks, componentes reutilizables, estado global y aplicaciones SPA." },
  { name: "JavaScript (ES6+)", category: "languages", level: 94, iconName: "Code", description: "Async/await, promesas, manipulación del DOM y lógica clara." },
  { name: "Node.js", category: "backend", level: 88, iconName: "Server", description: "APIs REST, Express, arquitectura asíncrona y ecosistema npm." },
  { name: "Tailwind CSS", category: "frontend", level: 90, iconName: "Palette", description: "Diseño utility-first, responsive y con interfaces consistentes." },
  { name: "HTML5 y CSS3", category: "frontend", level: 95, iconName: "Layers", description: "Semántica, Flexbox, CSS Grid y animaciones cuidadosas." },
  { name: "Git y GitHub", category: "tools", level: 92, iconName: "GitBranch", description: "Control de versiones, colaboración, GitHub Pages y flujos de CI/CD." }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Backend y Plataformas Web",
    company: "Proyectos destacados en GitHub · @JuanBerro-back",
    period: "2023 - Presente",
    description: "Desarrollo de software en Python, React y TypeScript: desde APIs de WhatsApp y geolocalización hasta interfaces interactivas publicadas en la nube.",
    achievements: [
      "Diseño de una API de WhatsApp en Python (FastAPI) para la gestión de pedidos comerciales",
      "Desarrollo de una app de geolocalización en tiempo real con OpenStreetMap y Folium",
      "Construcción de aplicaciones web con React, TypeScript y Tailwind CSS"
    ],
    skills: ["TypeScript", "Python", "React", "Node.js", "Tailwind CSS", "FastAPI", "Flask"],
    type: "work"
  },
  {
    id: "exp-2",
    role: "Análisis y Desarrollo de Software",
    company: "SENA · Servicio Nacional de Aprendizaje",
    period: "En curso",
    description: "Formación como Tecnólogo en Análisis y Desarrollo de Software, con foco en lógica de programación, modelado de bases de datos y buenas prácticas de desarrollo.",
    achievements: [
      "Fundamentos sólidos en lógica de programación y algoritmos",
      "Desarrollo de aplicaciones web con JavaScript, HTML5 y CSS3",
      "Modelado de bases de datos relacionales y consultas SQL"
    ],
    skills: ["JavaScript", "HTML5", "CSS3", "SQL", "Git"],
    type: "education"
  }
];