import { ProfileInfo, Project, Skill, ExperienceItem } from '../types';

export const profileData: ProfileInfo = {
  name: "Juan Berro",
  title: "Full-Stack Developer & Jungle Code Explorer 🐒🌿",
  location: "América Latina / Remoto",
  email: "juan.berro.dev@example.com",
  github: "https://github.com/JuanBerro-back",
  githubUsername: "JuanBerro-back",
  linkedin: "https://linkedin.com/in/juan-berro",
  bio: "¡Hola! Soy Juan Berro, desarrollador de software apasionado por la selva tecnológica. Domino TypeScript, Python, React, Node.js, Tailwind, JavaScript, HTML y CSS. Me encanta construir soluciones ágiles, APIs potentes y proyectos creativos.",
  availableForHire: true,
  yearsOfExperience: 3,
  completedProjects: 15,
  contributions: 380,
  jungleMotto: "¡Construyendo código salvaje y ágil como un monito en la copa de los árboles! 🐒🌴"
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
