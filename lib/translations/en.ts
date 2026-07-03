export const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    downloadCV: 'Download CV',
  },
  hero: {
    brand: 'Gato Programador',
    name: 'Javier Collipal',
    title: 'Full Stack Developer',
    subtitle: 'Python · Node.js · AWS · LLMs & Vector Search',
    description:
      'I build robust backend systems, scalable microservices, and AI integrations. Passionate about automation, LLMOps, and cloud architectures.',
    cta: 'See my work',
    contact: "Let's talk",
  },
  about: {
    title: 'About me',
    p1: "I'm Javier Collipal, a backend developer with 6+ years of experience building production products for startups and companies across Chile and Latin America.",
    p2: 'I specialize in Python, Node.js, and cloud architectures (AWS, Azure). Over the past few years I have actively worked with LLMs, RAG, and vector search — integrating Azure OpenAI for real production products.',
    p3: 'I work remotely, follow Scrum methodology, and hold a B2/C1 certified English level (EF SET). Always looking to push AI to the next product level.',
    education: 'Computer Analyst — INACAP, 2017',
    english: 'English B2 (EF SET C1 certified)',
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Clever IT Group',
        role: 'Backend Developer',
        period: 'Jul 2025 – Oct 2025',
        location: 'Remote — Client: BancoEstado',
        highlights: [
          'Developed Express.js microservices for BancoEstado.',
          'Automated workflows with LLMs (Cline), cutting implementation time.',
          'Added unit tests validating integrity of every feature.',
          'Scrum methodology for on-time delivery.',
        ],
        featured: false,
      },
      {
        company: 'GET XERPA',
        role: 'Backend Developer',
        period: 'Aug 2024 – Apr 2025',
        location: 'Remote',
        highlights: [
          'Implemented backend requirements on PFM product with Django and e2e tests.',
          'Developed Lambda functions integrated with API Gateway and DynamoDB on AWS.',
          'Deployed containerized solutions with Docker and Kubernetes.',
        ],
        featured: false,
      },
      {
        company: 'CLM Digital Solutions',
        role: 'Backend Developer',
        period: 'Mar 2023 – Apr 2024',
        location: 'Remote',
        highlights: [
          'Led technical development for Adi (production) and Right Consulting (MVP).',
          'Refactored Adi core architecture to integrate RAG exclusively with Azure OpenAI.',
          'Built vector search PoC for Right Consulting using SpaCy NLP text extraction.',
          'Implemented ETL pipelines with AWS Step Functions and Lambdas.',
          'Configured Azure Cognitive Service for vector search integration in production.',
        ],
        featured: true,
        featuredLabel: '⭐ LLMs + Vector Search in production',
      },
      {
        company: 'ROKKET LABS / DRIMO',
        role: 'Full Stack Developer',
        period: 'Dec 2020 – Nov 2022',
        location: 'Remote',
        highlights: [
          'Contributed to projects for Simplus, Turbus, and Latam Airlines.',
          'Fixed production bugs and shipped new features.',
          'Stack: Nest.js, MongoDB, React, TypeScript.',
        ],
        featured: false,
      },
      {
        company: 'PLHAIN',
        role: 'Full Stack Developer',
        period: 'Feb 2020 – Dec 2020',
        location: 'Remote',
        highlights: [
          'Integrated payment processing with MercadoPago.',
          'Developed scheduled notifications service with unit tests.',
        ],
        featured: false,
      },
      {
        company: 'WOORKIT',
        role: 'Backend Developer',
        period: 'Jul 2019 – Dec 2019',
        location: 'Remote',
        highlights: [
          'Built Q&A microservice with RabbitMQ in containers.',
          'Configured Google Cloud Storage and SendGrid.',
        ],
        featured: false,
      },
      {
        company: 'IWI',
        role: 'Full Stack Developer',
        period: 'Jul 2018 – May 2019',
        location: 'Remote / Coyhaique',
        highlights: [
          'Created payroll and contract generation system.',
          'FONASA data integration and PHP CRUD modules.',
        ],
        featured: false,
      },
    ],
  },
  projects: {
    title: 'Featured Projects',
    viewRepo: 'View repository',
    items: [
      {
        name: 'Claude Code Master Prompt',
        description:
          'Master prompt system for Claude Code that defines Senior Tech Lead standards — CI/CD, LangChain/LangGraph, AWS and Terraform for production. Actively used in real projects.',
        tags: ['Claude Code', 'LLMOps', 'Prompt Engineering', 'AWS', 'Terraform'],
        url: 'https://github.com/GatoProgramador-01/claude-code-master-prompt',
      },
      {
        name: 'Medium Agent Factory',
        description:
          'Multi-agent pipeline for automated Medium article generation. Stack: LangChain + LangGraph + FastAPI + Next.js + MongoDB. Specialized agent architecture with quality evaluation.',
        tags: ['LangGraph', 'FastAPI', 'Next.js', 'MongoDB', 'Multi-Agent', 'LLMs'],
        url: 'https://github.com/GatoProgramador-01/medium-agent-factory',
      },
    ],
  },
  skills: {
    title: 'Skills',
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
        name: 'Databases',
        items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'DynamoDB'],
      },
      {
        name: 'AI / ML',
        items: ['LangChain', 'LangGraph', 'OpenAI API', 'Azure OpenAI', 'Vector Search', 'RAG', 'SpaCy (NLP)', 'Embeddings'],
      },
      {
        name: 'Tools',
        items: ['GraphQL', 'RabbitMQ', 'Scrum / Agile', 'Git', 'Terraform'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'Have a project or want to chat? Reach out.',
    email: 'jcollipal1212@gmail.com',
    github: 'GatoProgramador-01',
    sendEmail: 'Send email',
  },
}
