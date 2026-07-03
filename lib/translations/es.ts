export const es = {
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto',
    downloadCV: 'Descargar CV',
  },
  hero: {
    brand: 'Gato Programador',
    name: 'Javier Collipal',
    title: 'Desarrollador Backend',
    subtitle: 'Python · Node.js · AWS · LLMs & Vector Search',
    description:
      'Construyo sistemas backend robustos, microservicios escalables e integraciones con IA. Apasionado por automatización, LLMOps y arquitecturas cloud.',
    cta: 'Ver mi trabajo',
    contact: 'Hablemos',
  },
  about: {
    title: 'Sobre mí',
    p1: 'Soy Javier Collipal, desarrollador backend con más de 6 años de experiencia construyendo productos en producción para startups y empresas en Chile y Latinoamérica.',
    p2: 'Me especializo en Python, Node.js y arquitecturas cloud (AWS, Azure). En los últimos años he trabajado activamente con LLMs, RAG y búsqueda vectorial — integrando Azure OpenAI para productos reales en producción.',
    p3: 'Trabajo de forma remota, sigo metodología Scrum y tengo inglés B2 / C1 certificado (EF SET). Siempre buscando llevar la IA al siguiente nivel del producto.',
    education: 'Analista Programador — INACAP, 2017',
    english: 'Inglés B2 (EF SET C1 certificado)',
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        company: 'Clever IT Group',
        role: 'Desarrollador Backend',
        period: 'Jul 2025 – Oct 2025',
        location: 'Remoto — Cliente: BancoEstado',
        highlights: [
          'Desarrollé microservicios con Express.js para BancoEstado.',
          'Automaticé flujos de trabajo con LLMs (Cline) reduciendo tiempo de implementación.',
          'Agregué tests unitarios que validaban la integridad de cada feature.',
          'Seguimiento de metodología Scrum para entrega a tiempo.',
        ],
        featured: false,
      },
      {
        company: 'GET XERPA',
        role: 'Desarrollador Backend',
        period: 'Ago 2024 – Abr 2025',
        location: 'Remoto',
        highlights: [
          'Implementé requisitos backend en producto PFM con Django y pruebas e2e.',
          'Desarrollé funciones Lambda integradas con API Gateway y DynamoDB en AWS.',
          'Desplegué soluciones en contenedores con Docker y Kubernetes.',
        ],
        featured: false,
      },
      {
        company: 'CLM Digital Solutions',
        role: 'Desarrollador Backend',
        period: 'Mar 2023 – Abr 2024',
        location: 'Remoto',
        highlights: [
          'Lideré el desarrollo técnico de Adi (producción) y Right Consulting (MVP).',
          'Refactoricé la arquitectura de Adi integrando RAG exclusivo con Azure OpenAI.',
          'Implementé búsqueda vectorial con SpaCy para extracción NLP en Right Consulting.',
          'Configuré ETL con AWS Step Functions y Lambdas en entorno Corona.',
          'Integré Azure Cognitive Service para búsqueda vectorial en producción.',
        ],
        featured: true,
        featuredLabel: '⭐ LLMs + Vector Search en producción',
      },
      {
        company: 'ROKKET LABS / DRIMO',
        role: 'Desarrollador Full Stack',
        period: 'Dic 2020 – Nov 2022',
        location: 'Remoto',
        highlights: [
          'Contribuí a proyectos para Simplus, Turbus y Latam Airlines.',
          'Resolví errores de producción e implementé nuevas funcionalidades.',
          'Stack: Nest.js, MongoDB, React, TypeScript.',
        ],
        featured: false,
      },
      {
        company: 'PLHAIN',
        role: 'Desarrollador Full Stack',
        period: 'Feb 2020 – Dic 2020',
        location: 'Remoto',
        highlights: [
          'Integré procesamiento de pagos con MercadoPago.',
          'Desarrollé servicio de notificaciones programadas con tests unitarios.',
        ],
        featured: false,
      },
      {
        company: 'WOORKIT',
        role: 'Desarrollador Backend',
        period: 'Jul 2019 – Dic 2019',
        location: 'Remoto',
        highlights: [
          'Desarrollé microservicio de Q&A con RabbitMQ en contenedores.',
          'Configuré Google Cloud Storage y SendGrid.',
        ],
        featured: false,
      },
      {
        company: 'IWI',
        role: 'Desarrollador Full Stack',
        period: 'Jul 2018 – May 2019',
        location: 'Remoto / Coyhaique',
        highlights: [
          'Creé sistema de libro de remuneraciones y generación de contratos.',
          'Integré datos con FONASA y construí módulos CRUD en PHP.',
        ],
        featured: false,
      },
    ],
  },
  projects: {
    title: 'Proyectos Destacados',
    viewRepo: 'Ver repositorio',
    items: [
      {
        name: 'Claude Code Master Prompt',
        description:
          'Sistema de prompts maestro para Claude Code que define estándares de Tech Lead Senior — CI/CD, LangChain/LangGraph, AWS y Terraform en producción. Usado activamente en proyectos reales.',
        tags: ['Claude Code', 'LLMOps', 'Prompt Engineering', 'AWS', 'Terraform'],
        url: 'https://github.com/GatoProgramador-01/claude-code-master-prompt',
      },
      {
        name: 'Medium Agent Factory',
        description:
          'Pipeline multi-agente para generación automatizada de artículos en Medium. Stack: LangChain + LangGraph + FastAPI + Next.js + MongoDB. Arquitectura de agentes especializados con evaluación de calidad.',
        tags: ['LangGraph', 'FastAPI', 'Next.js', 'MongoDB', 'Multi-Agent', 'LLMs'],
        url: 'https://github.com/GatoProgramador-01/medium-agent-factory',
      },
    ],
  },
  skills: {
    title: 'Habilidades',
    categories: [
      {
        name: 'Backend',
        items: ['Python', 'Django', 'FastAPI', 'Flask', 'Node.js', 'NestJS', 'Express', 'Go', 'PHP / Laravel'],
      },
      {
        name: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS'],
      },
      {
        name: 'Cloud & DevOps',
        items: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Step Functions', 'Azure OpenAI', 'Azure Cognitive Search', 'Google Cloud', 'Docker', 'Kubernetes'],
      },
      {
        name: 'Bases de Datos',
        items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'DynamoDB'],
      },
      {
        name: 'IA / ML',
        items: ['LangChain', 'LangGraph', 'OpenAI API', 'Azure OpenAI', 'Vector Search', 'RAG', 'SpaCy (NLP)', 'Embeddings'],
      },
      {
        name: 'Herramientas',
        items: ['GraphQL', 'RabbitMQ', 'Scrum / Agile', 'Git', 'Terraform'],
      },
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Tienes un proyecto o quieres hablar? Escríbeme.',
    email: 'jcollipal1212@gmail.com',
    github: 'GatoProgramador-01',
    sendEmail: 'Enviar email',
  },
}
