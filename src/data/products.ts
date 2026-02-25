export interface Product {
  id: string;
  name: string;
  creator: string;
  technology: string[];
  version: string;
  brief: string;
  description: string;
  price: number;
  discount?: number;
  mainImage: string;
  status: "active" | "draft" | "deleted";
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Imaugine",
    creator: "Carlos Méndez",
    technology: ["React", "Node.js", "PostgreSQL"],
    version: "2.1.0",
    brief: "Plataforma de gestión de imágenes con IA integrada para edición y organización automática.",
    description: "Un sistema completo de gestión de imágenes que utiliza inteligencia artificial para catalogar, editar y optimizar contenido visual de manera automática.",
    price: 299,
    discount: 15,
    mainImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    status: "active",
  },
  {
    id: "2",
    name: "Code Pulse",
    creator: "Ana Rodríguez",
    technology: ["Python", "FastAPI", "React"],
    version: "1.4.2",
    brief: "Monitor de rendimiento en tiempo real para equipos de desarrollo de software.",
    description: "Dashboard de métricas de código con análisis de rendimiento, detección de cuellos de botella y sugerencias de optimización automática.",
    price: 199,
    mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    status: "active",
  },
  {
    id: "3",
    name: "FlowBoard",
    creator: "Miguel Torres",
    technology: ["React", "TypeScript", "Supabase"],
    version: "3.0.1",
    brief: "Herramienta de gestión de proyectos con tableros Kanban inteligentes.",
    description: "Sistema de gestión de proyectos con IA que sugiere priorización automática, detección de bloqueos y reportes de productividad.",
    price: 149,
    discount: 10,
    mainImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    status: "active",
  },
  {
    id: "4",
    name: "DataForge",
    creator: "Laura Gómez",
    technology: ["Python", "Django", "PostgreSQL"],
    version: "1.0.0",
    brief: "Pipeline de transformación de datos sin código para analistas de negocio.",
    description: "Herramienta visual para crear flujos de transformación de datos complejos sin escribir código, con conectores a múltiples fuentes.",
    price: 399,
    mainImage: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    status: "active",
  },
  {
    id: "5",
    name: "ChatOps Hub",
    creator: "Diego Vargas",
    technology: ["Node.js", "React", "WebSocket"],
    version: "2.0.3",
    brief: "Centro de operaciones con chatbots integrados para soporte automatizado.",
    description: "Plataforma de atención al cliente con chatbots entrenados, escalamiento automático y análisis de sentimiento en tiempo real.",
    price: 249,
    discount: 20,
    mainImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
    status: "active",
  },
  {
    id: "6",
    name: "SecureVault",
    creator: "Patricia Luna",
    technology: ["Go", "React", "Docker"],
    version: "1.2.0",
    brief: "Gestión de secretos y credenciales empresariales con cifrado de grado militar.",
    description: "Sistema de gestión de secretos con rotación automática de claves, auditoría completa y control de acceso basado en roles.",
    price: 499,
    mainImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    status: "active",
  },
];
