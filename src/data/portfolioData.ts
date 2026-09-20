import { ProfileInfo, Project, Skill, ExperienceItem } from '../types';

export const profileData: ProfileInfo = {
  name: "Juan Berro",
  title: "Full-Stack Developer & Software Engineer",
  location: "América Latina · Remoto",
  email: "juan.berro.dev@example.com",
  github: "https://github.com/JuanBerro-back",
  githubUsername: "JuanBerro-back",
  linkedin: "https://linkedin.com/in/juan-berro",
  bio: "Desarrollador Full-Stack enfocado en construir software escalable, APIs de alto rendimiento y experiencias web fluidas. Especializado en TypeScript, Python, React y Node.js, con publicación activa de proyectos open source en GitHub.",
  availableForHire: true,
  yearsOfExperience: 2,
  completedProjects: 24,
  contributions: 62,
  githubRepos: 24,
  githubFollowers: 39,
  githubStars: 62,
  jungleMotto: "Construyendo software sólido y escalable, un commit a la vez. 🐒🌴"
};

export const projectsData: Project[] = [
  {
    id: "whatsapp-api-pedidos",
    title: "API WhatsApp para Pedidos 🐒📱",
    shortDescription: "Sistema automatizado en Python + FastAPI para recepción y gestión de pedidos vía WhatsApp.",
    fullDescription: "Solución de backend en Python (FastAPI + SQLAlchemy) que se conecta con la API de WhatsApp para recibir pedidos comerciales en tiempo real. Extrae automáticamente productos, cantidades, precios y dirección de entrega, almacenándolos en base de datos SQLite con respuestas automatizadas.",
    category: "backend",
    technologies: ["Python", "FastAPI", "WhatsApp API", "SQLAlchemy", "SQLite", "Uvicorn", "Node.js"],
    githubUrl: "https://github.com/JuanBerro-back/prueba-de-api-de-whatsapp-por-pedidos",
    liveUrl: "https://github.com/JuanBerro-back/prueba-de-api-de-whatsapp-por-pedidos",
    featured: true,
    metrics: "Procesamiento inteligente de mensajes en < 2 segundos",
    monkeyMascot: "🐒💬",
    highlights: [
      "Webhook inteligente para procesar mensajes entrantes de WhatsApp",
      "Parser automático de listas de pedidos y direcciones",
      "Persistencia de datos relacionales con SQLAlchemy ORM"
    ],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "geolocalizacion-mapas",
    title: "Geolocalización & Mapas 🐒🗺️",
    shortDescription: "Aplicación Python + Flask con Geopy y Folium para posicionamiento y mapas interactivos.",
    fullDescription: "Plataforma de geolocalización construida en Python y Flask. Realiza geocodificación directa e inversa utilizando OpenStreetMap (Nominatim API), calcula distancias geodésicas y renderiza mapas interactivos en tiempo real con marcadores dinámicos.",
    category: "fullstack",
    technologies: ["Python", "Flask", "Geopy API", "Folium", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/JuanBerro-back/geolocalizacion",
    liveUrl: "https://github.com/JuanBerro-back/geolocalizacion",
    featured: true,
    metrics: "Cálculo preciso de coordenadas con representación en mapas interactivos",
    monkeyMascot: "🐒🧭",
    highlights: [
      "Conversión directa de direcciones de texto a coordenadas GPS",
      "Cálculo de distancias geodésicas en kilómetros y millas",
      "Renderizado de mapas interactivos con marcadores personalizados"
    ],
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "calculadora-publicidad",
    title: "Calculadora con Publicidad 🐒🧮",
    shortDescription: "Calculadora web interactiva en Python + Flask con integración publicitaria dinámica.",
    fullDescription: "Aplicación de calculadora desarrollada con Python, Flask e HTML5/CSS3. Soporta operaciones aritméticas, funciones científicas (raíz cuadrada, sin, cos, tan, log) y cuenta con un sistema rotativo de banners publicitarios y analítica de clics.",
    category: "frontend",
    technologies: ["Python", "Flask", "JavaScript", "HTML5", "CSS3", "Jinja2"],
    githubUrl: "https://github.com/JuanBerro-back/calculadora-con-publicidad",
    liveUrl: "https://github.com/JuanBerro-back/calculadora-con-publicidad",
    featured: true,
    metrics: "Calculadora científica completa con slots de publicidad optimizados",
    monkeyMascot: "🐒🍌",
    highlights: [
      "Evaluación segura de expresiones matemáticas y funciones científicas",
      "Sistema de rotación de anuncios patrocinados con métricas de clic",
      "Diseño adaptable y moderno con historial de operaciones"
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pokepoke",
    title: "PokePoke 🐒🕹️",
    shortDescription: "Aplicación web interactiva con temática Pokémon, panel de administración y despliegue en la nube.",
    fullDescription: "Proyecto de aplicación web construido en JavaScript con una interfaz interactiva basada en la temática Pokémon. Incluye un panel de administración separado y está desplegado en producción mediante Render, demostrando integración frontend + backend y ciclo de despliegue continuo.",
    category: "fullstack",
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "Render"],
    githubUrl: "https://github.com/JuanBerro-back/pokepoke",
    liveUrl: "https://pokepoke-i0ma.onrender.com/",
    featured: true,
    metrics: "Desplegado en producción con panel de administración funcional",
    monkeyMascot: "⚡",
    highlights: [
      "Interfaz dinámica con datos de la PokeAPI",
      "Panel de administración para gestión de contenido",
      "Despliegue en la nube con Render"
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "zupply",
    title: "Zupply · Asset Manager 🧰",
    shortDescription: "Aplicación TypeScript para la gestión de activos, con demo desplegada en Replit.",
    fullDescription: "Proyecto personal desarrollado en TypeScript orientado a la gestión de activos y recursos. Cuenta con una demo funcional desplegada en Replit, mostrando buenas prácticas de tipado estático, arquitectura modular y despliegue ligero.",
    category: "frontend",
    technologies: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Replit"],
    githubUrl: "https://github.com/JuanBerro-back/zupply",
    liveUrl: "https://replit.com/@jdbpberroteran/Asset-Manager-1",
    featured: true,
    metrics: "Demo funcional desplegada y mantenida en Replit",
    monkeyMascot: "🧰",
    highlights: [
      "Modelos tipados con TypeScript",
      "Gestión de activos, inventario y recursos",
      "Demo pública desplegada en Replit"
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "restaurante-validacion",
    title: "Restaurante con Validación 🍽️",
    shortDescription: "Web para restaurante con formularios validados en JavaScript y diseño responsivo.",
    fullDescription: "Página web corporativa para restaurante con énfasis en formularios de reserva validados del lado del cliente con JavaScript. Incluye maquetación responsiva, estructura semántica y buenas prácticas de accesibilidad en HTML5 y CSS3.",
    category: "frontend",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/JuanBerro-back/restaurante-con-validacion",
    liveUrl: "https://github.com/JuanBerro-back/restaurante-con-validacion",
    featured: false,
    metrics: "Formularios 100% validados con feedback en tiempo real",
    monkeyMascot: "🍽️",
    highlights: [
      "Validación de formularios con JavaScript puro",
      "Diseño 100% responsivo con CSS3",
      "Estructura semántica y accesible"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pagina-responsive",
    title: "Página Responsive 📱",
    shortDescription: "Sitio web completamente responsive construido con JavaScript moderno y técnicas de layout fluidas.",
    fullDescription: "Proyecto enfocado en la creación de páginas web adaptables a cualquier dispositivo. Utiliza Flexbox, CSS Grid y media queries, e implementa interactividad con JavaScript para una experiencia de navegación fluida en móvil y escritorio.",
    category: "frontend",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/JuanBerro-back/pagina-responsive-",
    liveUrl: "https://github.com/JuanBerro-back/pagina-responsive-",
    featured: true,
    metrics: "El repositorio con más estrellas de mi perfil ⭐ 5",
    monkeyMascot: "📱",
    highlights: [
      "Layouts fluidos con Flexbox y CSS Grid",
      "Breakpoints optimizados para móvil, tablet y desktop",
      "Interactividad dinámica con JavaScript"
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kitty-finanzas",
    title: "Kitty Finanzas 💸🐱",
    shortDescription: "Aplicación Python para control de finanzas personales, desplegada en la nube.",
    fullDescription: "Herramienta de finanzas personales desarrollada en Python y desplegada en producción con Render. Permite registrar, organizar y visualizar movimientos económicos de forma sencilla, aplicando buenas prácticas de backend y bases de datos.",
    category: "backend",
    technologies: ["Python", "Flask", "SQL", "Render"],
    githubUrl: "https://github.com/JuanBerro-back/kitty-finanzas",
    liveUrl: "https://kitty-finanzas.onrender.com/",
    featured: false,
    metrics: "Aplicación funcional desplegada en producción",
    monkeyMascot: "💸",
    highlights: [
      "Registro y control de ingresos y gastos",
      "Backend en Python con persistencia de datos",
      "Despliegue continuo en Render"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "trycatch",
    title: "Try/Catch CSS Lab 🧪",
    shortDescription: "Laboratorio visual de experimentación con CSS3 moderno, publicado con GitHub Pages.",
    fullDescription: "Colección de experimentos y componentes visuales construida con CSS3 puro y publicada en GitHub Pages. Sirve como demostración de dominio en animaciones, transiciones, gradientes y técnicas avanzadas de estilizado.",
    category: "frontend",
    technologies: ["CSS3", "HTML5", "GitHub Pages"],
    githubUrl: "https://github.com/JuanBerro-back/trycatch",
    liveUrl: "https://github.com/JuanBerro-back/trycatch",
    featured: false,
    metrics: "Publicado en GitHub Pages con técnicas CSS avanzadas",
    monkeyMascot: "🧪",
    highlights: [
      "Animaciones y transiciones con CSS3",
      "Experimentos tipográficos y visuales",
      "Publicación y hosting con GitHub Pages"
    ],
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
  }
];

export const skillsData: Skill[] = [
  { name: "TypeScript", category: "languages", level: 92, iconName: "Code2", emoji: "⚡", description: "Tipado estricto, interfaces, genéricos y patrones sólidos." },
  { name: "Python", category: "languages", level: 95, iconName: "Terminal", emoji: "🐍", description: "FastAPI, Flask, Geopy, automatización y scripting." },
  { name: "React", category: "frameworks", level: 90, iconName: "Atom", emoji: "⚛️", description: "Hooks, componentes interactivos, estado global y SPA." },
  { name: "JavaScript (ES6+)", category: "languages", level: 94, iconName: "Code", emoji: "🟨", description: "Async/Await, promesas, DOM manipulation y lógica ágil." },
  { name: "Node.js", category: "backend", level: 88, iconName: "Server", emoji: "🟩", description: "REST APIs, Express, arquitectura asíncrona y npm." },
  { name: "Tailwind CSS", category: "frontend", level: 90, iconName: "Palette", emoji: "🎨", description: "Maquetación moderna utility-first, responsive y animada." },
  { name: "HTML5 & CSS3", category: "frontend", level: 95, iconName: "Layers", emoji: "🌐", description: "Estructuras semánticas, Flexbox, CSS Grid y animaciones." },
  { name: "Git & GitHub", category: "tools", level: 92, iconName: "GitBranch", emoji: "🌿", description: "Control de versiones, repositorios, GitHub Pages y CI/CD." }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full-Stack & Python Engineer 🐒",
    company: "Proyectos Destacados en GitHub @JuanBerro-back",
    period: "2023 - Presente",
    description: "Desarrollo de ecosistemas de software en Python, React y TypeScript: desde bots de WhatsApp y geolocalización hasta interfaces interactivas.",
    achievements: [
      "Desarrollo de API de WhatsApp en Python (FastAPI) para gestión de pedidos comerciales",
      "Creación de app de Geolocalización en tiempo real con OpenStreetMap y Folium",
      "Implementación de aplicaciones web con React, TypeScript y Tailwind CSS"
    ],
    skills: ["TypeScript", "Python", "React", "Node.js", "Tailwind CSS", "FastAPI", "Flask"],
    type: "work"
  },
  {
    id: "exp-2",
    role: "Desarrollador Web & Explorador Técnico",
    company: "Formación Universitaria & Proyectos Libres",
    period: "2021 - 2023",
    description: "Especialización en lógica de programación, bases de datos relacionales y desarrollo ágil.",
    achievements: [
      "Construcción de herramientas web optimizadas con JavaScript, HTML5 y CSS3",
      "Integración de APIs REST y servicios en la nube"
    ],
    skills: ["JavaScript", "HTML5", "CSS3", "SQL", "Git"],
    type: "education"
  }
];
