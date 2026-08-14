import { ProfileInfo, Project, Skill, ExperienceItem } from '../types';

export const profileData: ProfileInfo = {
  name: "Juan Berro",
  title: "Full-Stack Engineer & Software Architect",
  location: "América Latina / Remoto",
  email: "juan.berro.dev@example.com", // Puedes cambiarlo por tu email real
  github: "https://github.com/JuanBerro-back",
  githubUsername: "JuanBerro-back",
  linkedin: "https://linkedin.com/in/juan-berro", // Puedes actualizarlo
  twitter: "https://twitter.com/juanberro_dev",
  bio: "Ingeniero de Software enfocado en la construcción de sistemas distribuidos, APIs de alto desempeño e interfaces interactivas modernas. Apasionado por la optimización de código, el diseño limpio de arquitecturas y la experiencia de usuario impecable.",
  availableForHire: true,
  yearsOfExperience: 3,
  completedProjects: 18,
  contributions: 340
};

export const projectsData: Project[] = [
  {
    id: "nexus-flow-api",
    title: "NexusFlow - Core Microservices API",
    shortDescription: "Motor de microservicios distribuido en Node.js y TypeScript con mensajería Redis y gRPC.",
    fullDescription: "Arquitectura Backend de alta concurrencia diseñada para procesar miles de peticiones por segundo. Implementa autenticación JWT distribuida, limitación de tasa (Rate Limiting) adaptativa y monitoreo de salud con métricas Prometheus.",
    category: "backend",
    technologies: ["Node.js", "TypeScript", "Express", "Redis", "PostgreSQL", "Docker", "Jest"],
    githubUrl: "https://github.com/JuanBerro-back/nexus-flow-api",
    liveUrl: "https://github.com/JuanBerro-back/nexus-flow-api",
    featured: true,
    metrics: "Procesamiento de +5,000 req/sec con latencia < 25ms",
    highlights: [
      "Diseño de arquitectura limpia (Clean Architecture / Hexagonal)",
      "Sistema de caché multinivel con invalidación Redis pub/sub",
      "Pruebas de integración automatizadas con 94% de cobertura"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dev-analytics-dashboard",
    title: "DevMetrics - Dashboard de Analítica en Tiempo Real",
    shortDescription: "Panel interactivo de métricas de desarrollo construido con React, TypeScript y WebSockets.",
    fullDescription: "Aplicación Frontend de alto rendimiento para visualizar telemetría de repositorios, commits y builds de CI/CD. Incluye gráficos interactivos, filtrado de eventos en tiempo real y soporte completo para modo oscuro/claro.",
    category: "fullstack",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Recharts", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/JuanBerro-back/dev-analytics-dashboard",
    liveUrl: "https://devmetrics-demo.vercel.app",
    featured: true,
    metrics: "Renderizado fluid a 60fps con actualización en tiempo real",
    highlights: [
      "Conexión constante mediante WebSockets para streaming de datos",
      "Estado global optimizado evitando re-renders innecesarios",
      "Diseño responsive adaptado a pantallas táctiles y escritorios"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cloud-storage-engine",
    title: "ByteVault - Motor de Almacenamiento & Backup AWS",
    shortDescription: "Servicio Cloud serverless para gestión segura de archivos con encriptación de extremo a extremo.",
    fullDescription: "Plataforma de procesamiento de archivos que utiliza servicios AWS (S3, Lambda, DynamoDB) para comprimir, analizar y sincronizar respaldos de código con hashing criptográfico.",
    category: "cloud",
    technologies: ["TypeScript", "AWS Lambda", "AWS S3", "DynamoDB", "Serverless Framework", "Docker"],
    githubUrl: "https://github.com/JuanBerro-back/bytevault-cloud-engine",
    liveUrl: "https://github.com/JuanBerro-back/bytevault-cloud-engine",
    featured: true,
    metrics: "Optimización de costos Cloud en un 40% mediante Serverless",
    highlights: [
      "Subidas firmadas directamente a S3 evitando cuellos de botella",
      "Compresión asíncrona de imágenes y documentos vía Lambda",
      "Infraestructura como código (IaC) reproducible"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "task-nexus-kanban",
    title: "TaskNexus - Gestión Ágil de Proyectos",
    shortDescription: "Tablero Kanban colaborativo en React con ordenamiento arrastrar y soltar (Drag & Drop).",
    fullDescription: "Herramienta visual de productividad diseñada para equipos de desarrollo. Permite crear listas, asignar etiquetas personalizadas, filtrar tareas por miembros y sincronizar cambios simultáneos.",
    category: "frontend",
    technologies: ["React", "TypeScript", "Dnd-Kit", "Zustand", "CSS Modules"],
    githubUrl: "https://github.com/JuanBerro-back/task-nexus-kanban",
    liveUrl: "https://github.com/JuanBerro-back/task-nexus-kanban",
    featured: false,
    highlights: [
      "Persistencia local con IndexedDB y sincronización remota",
      "Sustitución fluida de elementos con micro-animaciones CSS",
      "Atajos de teclado intuitivos para máxima productividad"
    ],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
  }
];

export const skillsData: Skill[] = [
  { name: "TypeScript", category: "frontend", level: 92, iconName: "Code2", description: "Tipado estricto, genéricos avanzados, utilidades y patrones de diseño." },
  { name: "React 18", category: "frontend", level: 90, iconName: "Atom", description: "Hooks personalizados, Context API, Renderización eficiente y componentes reutilizables." },
  { name: "Node.js & Express", category: "backend", level: 95, iconName: "Server", description: "Construcción de REST APIs, middleware personalizado y microservicios." },
  { name: "PostgreSQL & SQL", category: "database", level: 88, iconName: "Database", description: "Modelado relacional, optimización de queries, índices y transacciones ACID." },
  { name: "MongoDB / NoSQL", category: "database", level: 85, iconName: "Layers", description: "Colecciones estructuradas, pipelines de agregación y almacenamiento flexible." },
  { name: "Docker & Contenedores", category: "devops", level: 84, iconName: "Container", description: "Containerización multi-stage, Docker Compose y ambientes aislados." },
  { name: "Git & GitHub Actions", category: "tools", level: 90, iconName: "GitBranch", description: "Flujos GitFlow, CI/CD pipelines, despliegue automatizado." },
  { name: "Redis & Caching", category: "backend", level: 82, iconName: "Zap", description: "Estrategias de caché en memoria, pub/sub y rate limiting." },
  { name: "CSS3 / Vanilla / Animations", category: "frontend", level: 88, iconName: "Palette", description: "Diseño responsive, Flexbox, CSS Grid, Glassmorphism y animaciones fluidas." }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer",
    company: "Proyectos Independientes & Open Source",
    period: "2023 - Presente",
    description: "Liderazgo en la creación de aplicaciones web escalables y servicios Backend optimizados para rendimiento y alta disponibilidad.",
    achievements: [
      "Desarrollo de módulos API con TypeScript y Node.js procesando más de 5k peticiones/segundo",
      "Creación y mantenimiento de repositorios públicos en GitHub con integración continua CI/CD",
      "Implementación de prácticas Clean Architecture e integración con PostgreSQL y Redis"
    ],
    skills: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "GitHub Actions"],
    type: "work"
  },
  {
    id: "exp-2",
    role: "Backend Specialist & API Designer",
    company: "Desarrollo de Software Libres",
    period: "2022 - 2023",
    description: "Construcción de arquitecturas para integración de servicios, pasarelas de pago y autenticación segura.",
    achievements: [
      "Optimización de consultas SQL reduciendo el tiempo de respuesta de BD en un 35%",
      "Diseño de esquemas de autenticación robustos basados en OAuth2 y JWT",
      "Documentación interactiva de endpoints con OpenAPI / Swagger"
    ],
    skills: ["Node.js", "Express", "REST APIs", "SQL", "JWT", "Swagger"],
    type: "work"
  },
  {
    id: "exp-3",
    role: "Ingeniería de Sistemas / Desarrollo de Software",
    company: "Formación Universitaria & Autodidacta",
    period: "2020 - 2023",
    description: "Especialización en estructuras de datos, algoritmos de optimización, arquitectura de computadoras y bases de datos relacionales.",
    achievements: [
      "Certificación en desarrollo Web Full-Stack y arquitecturas modernas en la nube",
      "Participación destacada en proyectos de hackathons y código colaborativo"
    ],
    skills: ["Algoritmos", "Estructura de Datos", "Patrones de Diseño", "POO"],
    type: "education"
  }
];
