export const personalInfo = {
  name: "Tu Nombre",
  title: "Software Engineer",
  tagline: "Full Stack · Mobile · Always Building",
  bio: "Soy Ingeniero Informático apasionado por construir productos digitales de calidad. Me especializo en desarrollo Full Stack y aplicaciones móviles, siempre buscando escribir código limpio, escalable y con buena UX.",
  location: "España",
  email: "tu@email.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  cv: "/cv.pdf",
  avatar: "/avatar.jpg",
};

export type Skill = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML / CSS", icon: "html" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Flutter", icon: "flutter" },
      { name: "Swift", icon: "swift" },
      { name: "Kotlin", icon: "kotlin" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "GitHub Actions", icon: "github" },
      { name: "Figma", icon: "figma" },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  github?: string;
  demo?: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Proyecto Alpha",
    description: "Una aplicación web completa con autenticación, dashboard en tiempo real y API REST.",
    longDescription:
      "Descripción detallada del proyecto. Qué problema resuelve, cómo lo resuelve y qué aprendiste construyéndolo.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/tu-usuario/proyecto-alpha",
    demo: "https://proyecto-alpha.vercel.app",
    image: "/projects/project1.jpg",
    featured: true,
  },
  {
    title: "App Mobile",
    description: "Aplicación móvil cross-platform con notificaciones push y sincronización offline.",
    longDescription:
      "Descripción detallada de la app mobile. Plataformas soportadas, desafíos técnicos y soluciones adoptadas.",
    stack: ["React Native", "Firebase", "Expo"],
    github: "https://github.com/tu-usuario/app-mobile",
    image: "/projects/project2.jpg",
    featured: true,
  },
  {
    title: "API Service",
    description: "Microservicio RESTful con autenticación JWT, rate limiting y documentación automática.",
    longDescription:
      "API construida con arquitectura limpia, tests de integración y documentación con Swagger.",
    stack: ["Node.js", "Express", "Docker", "PostgreSQL"],
    github: "https://github.com/tu-usuario/api-service",
    image: "/projects/project3.jpg",
    featured: true,
  },
  {
    title: "Proyecto Extra",
    description: "Herramienta de productividad con interfaz minimalista y sincronización en la nube.",
    longDescription: "Descripción adicional del cuarto proyecto.",
    stack: ["React", "Python", "FastAPI"],
    github: "https://github.com/tu-usuario/proyecto-extra",
    image: "/projects/project4.jpg",
    featured: false,
  },
];

export type Experience = {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
};

export const experience: Experience[] = [
  {
    type: "work",
    title: "Software Engineer",
    organization: "Empresa Actual",
    period: "2024 – Presente",
    description:
      "Desarrollo de funcionalidades full stack, optimización de rendimiento y colaboración en diseño de arquitectura.",
    skills: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    type: "work",
    title: "Desarrollador Full Stack (Prácticas)",
    organization: "Empresa Anterior",
    period: "2023 – 2024",
    description:
      "Participé en el ciclo completo de desarrollo de una plataforma SaaS: desde el diseño hasta el despliegue en producción.",
    skills: ["Next.js", "TypeScript", "Firebase"],
  },
  {
    type: "education",
    title: "Grado en Ingeniería Informática",
    organization: "Universidad",
    period: "2020 – 2024",
    description:
      "Especialización en Ingeniería del Software. TFG sobre arquitecturas de microservicios.",
  },
];
