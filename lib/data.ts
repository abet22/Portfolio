export const personalInfo = {
  name: "Albert González Braojos",
  title: "Software Engineer",
  tagline: "Full Stack · AI · DevOps · IT",
  bio: "Estudiante de Ingeniería Informática en la Universitat Politècnica de Catalunya",
  location: "Barcelona, España",
  phone: "+34 654 17 45 60",
  birthYear: 2003,
  email: "albertgnzbr@gmail.com",
  github: "https://github.com/abet22",
  linkedin: "https://www.linkedin.com/in/albert-gonzalez-braojos/",
  cv: "/cvs/Albert_Gonzalez_2025_ES_CV.pdf",
  avatar: "/images/descarga.jpg",
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
      { name: "JavaScript", icon: "javascript" },
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
      { name: "C++", icon: "cplusplus" },
      { name: "C", icon: "c" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter", icon: "flutter" },
      { name: "Android Studio", icon: "androidstudio" },
      { name: "Xcode", icon: "xcode" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
      { name: "AWS", icon: "aws" },
      { name: "GitHub Actions", icon: "github" },
    ],
  },
  {
    category: "Microsoft",
    skills: [
      { name: "Azure", icon: "azure" },
      { name: "Word", icon: "word" },
      { name: "Excel", icon: "excel" },
      { name: "PowerPoint", icon: "powerpoint" },
      { name: "SharePoint", icon: "sharepoint" },
      { name: "Power BI", icon: "powerbi" },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  github?: string;
  githubBack?: string;
  demo?: string;
  personal?: boolean;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "OneMore",
    description: "Aplicación full stack con frontend en React y backend en Python/FastAPI.",
    longDescription:
      "OneMore es una aplicación web full stack. El frontend está construido con React + Vite y Tailwind CSS, y el backend con Python, FastAPI y PostgreSQL, todo contenerizado con Docker.",
    stack: ["React", "Vite", "Python", "FastAPI", "PostgreSQL", "Docker"],
    personal: true,
    github: "https://github.com/abet22/OneMore-Frontend",
    githubBack: "https://github.com/abet22/OneMore-Backend",
    image: "/images/onemorelogo.png",
    featured: true,
  },
  {
    title: "DockerIptables",
    description: "Solución para gestionar reglas iptables en entornos Docker de forma segura y configurable.",
    longDescription:
      "Herramienta IT/DevOps que resuelve el problema de que los contenedores Docker evitan las reglas del firewall al manipular iptables directamente. Proporciona scripts configurables para gestionar la cadena DOCKER-USER y asegurar un control de red consistente.",
    stack: ["Shell", "Docker", "iptables"],
    github: "https://github.com/abet22/DockerIptables",
    image: "",
    featured: true,
  },
  {
    title: "Web Certificates Checker",
    description: "Script Python para verificar certificados SSL/TLS de múltiples hosts y exportar resultados.",
    longDescription:
      "Programa Python que permite comprobar certificados SSL/TLS de varios hosts a la vez o uno concreto. Soporta puertos personalizados, guarda errores en misses.txt y exporta los datos de los certificados a un Excel.",
    stack: ["Python"],
    github: "https://github.com/abet22/checking-web-certificates",
    image: "",
    featured: true,
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
  // --- Experiencia laboral (type: "work") ---
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Raona Enginyers SL",
    period: "Oct 2025 – Presente",
    description:
      "Desarrollo full stack en entorno profesional de consultoría tecnológica.",
    skills: [],
  },
  {
    type: "work",
    title: "Becario IT",
    organization: "FIB – UPC",
    period: "Abr 2024 – Jul 2025",
    description:
      "Soporte técnico y mantenimiento de sistemas para estudiantes, profesores y administrativos de la facultad.",
    skills: [
      "Bash", "Python", "SQL", "Docker",
      "iptables/ufw", "Linux", "Snapshots/Cron",
      "Certificados web", "Redes locales",
    ],
  },
  {
    type: "work",
    title: "Vendedor",
    organization: "Decathlon",
    period: "May 2023 – Ago 2023",
    description:
      "Atención personalizada al cliente, gestión de stock y colaboración en equipo en un entorno dinámico de ventas.",
    skills: [
      "Atención al cliente", "Gestión de stock",
      "Trabajo en equipo", "Comunicación efectiva",
      "Resolución de problemas", "Atención al detalle",
    ],
  },
  // --- Formación (type: "education") ---
  {
    type: "education",
    title: "Grado en Ingeniería Informática",
    organization: "UPC – Universitat Politècnica de Catalunya",
    period: "2021 – Presente",
    description:
      "Especialización en Ingeniería del Software y sistemas distribuidos.",
    skills: [],
  },
  {
    type: "education",
    title: "Bachillerato Tecnológico",
    organization: "Institut ...",
    period: "2019 – 2021",
    description:
      "Modalidad tecnológica con énfasis en matemáticas, física y tecnología.",
    skills: [],
  },
];

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  level?: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    name: "Cambridge English: First (FCE)",
    issuer: "Cambridge Assessment English",
    date: "2019",
    level: "B2 Upper-Intermediate",
  },
];
