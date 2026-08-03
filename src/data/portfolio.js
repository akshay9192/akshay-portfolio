export const profileLinks = {
  github: 'https://github.com/akshay9192/',
  linkedin: 'https://www.linkedin.com/in/iharwalkar-akshay/',
  leetcode: 'https://leetcode.com/u/iharwalkar-akshay/',
  email: 'mailto:akshay.harwalkar183@gmail.com',
  phone: 'tel:+61493544829',
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const focusAreas = [
  {
    number: '01',
    title: 'Responsible AI and Governance',
    description:
      'Exploring practical controls, traceability and evidence that make AI-assisted decisions easier to review.',
    visual: 'governance',
  },
  {
    number: '02',
    title: 'Applied Machine Learning',
    description:
      'Building retrieval and predictive workflows that connect model outputs to sources, checks and understandable probabilities.',
    visual: 'learning',
  },
  {
    number: '03',
    title: 'Full-stack Systems',
    description:
      'Turning ideas into maintainable applications with clear interfaces, useful APIs and deployable architecture.',
    visual: 'systems',
  },
  {
    number: '04',
    title: 'Security and Reliability',
    description:
      'Treating privacy, data handling, auditability and defensive thinking as design inputs—not afterthoughts.',
    visual: 'security',
  },
]

export const featuredProjects = [
  {
    number: '01',
    title: 'Komply / Risk Monitor',
    status: 'Active build',
    statusTone: 'active',
    description:
      'A privacy-focused, locally hosted AI governance application for analysing regulatory frameworks and organisational evidence. It uses retrieval-augmented generation to produce citation-grounded compliance answers, structured risk assessments and PDF reporting while keeping document processing local.',
    purpose:
      'Help teams examine policy evidence against regulatory frameworks without sending sensitive documents to a hosted model.',
    built:
      'A local document-to-assessment workflow spanning ingestion, retrieval, grounded answers, structured risk review and PDF reporting.',
    decisions: [
      'Local Ollama inference and Qdrant storage',
      'Citation and hallucination-risk checks',
      'PII redaction and tamper-evident audit history',
    ],
    note: 'Designed as a portfolio and compliance-research aid—not legal advice or a guarantee of compliance.',
    technologies: [
      'Python',
      'FastAPI',
      'Streamlit',
      'Ollama',
      'Qdrant',
      'Sentence Transformers',
      'SQLite',
      'RAG',
    ],
    repo: 'https://github.com/akshay9192/risk-monitor',
    visual: 'risk',
  },
  {
    number: '02',
    title: 'FIFA World Cup 2026 Prediction',
    status: 'In development',
    statusTone: 'progress',
    description:
      'A full-stack football prediction platform combining Poisson and XGBoost-assisted match modelling, user insights and a 10,000-iteration Monte Carlo tournament simulation.',
    purpose:
      'Make tournament forecasts explorable while separating model probabilities from a user’s own football intuition.',
    built:
      'A FastAPI and React system for score modelling, match outcomes, tournament simulation, result tracking and recalibration.',
    decisions: [
      'Poisson scoring with XGBoost-assisted modelling',
      '10,000-iteration Monte Carlo simulation',
      'Explicit user-versus-model bias layer',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
      'SQLAlchemy',
      'XGBoost',
      'Monte Carlo',
      'Tailwind CSS',
    ],
    repo: 'https://github.com/akshay9192/FIFA-World-Cup-2026---prediction',
    visual: 'football',
  },
  {
    number: '03',
    title: 'Soup Queue Chaos Simulator',
    status: 'Completed project',
    statusTone: 'complete',
    description:
      'A comedic Python simulation game with character-specific rules, timed ordering, scoring, warnings and chaos-driven autoplay modes.',
    purpose:
      'Turn a playful queue premise into a small systems-design exercise with timing, rules and meaningful state.',
    built:
      'A Windows-compatible Pygame experience with playable characters, distinct win conditions, warnings, bans and autoplay modes.',
    decisions: [
      'Character-specific state and win conditions',
      'Timed interaction and warning systems',
      'Procedural-style audio and autoplay modes',
    ],
    technologies: [
      'Python',
      'Pygame',
      'Game-state management',
      'Procedural audio',
    ],
    repo: 'https://github.com/akshay9192/soup-nazi-queue-chaos-simulator',
    visual: 'game',
  },
  {
    number: '04',
    title: 'Foot Ulcer Detection Exploration',
    status: 'Exploratory ML project',
    statusTone: 'exploratory',
    description:
      'A machine-learning project exploring early detection of diabetic foot ulcers through computer-vision techniques. It is an academic exploration, not a clinically validated diagnostic tool.',
    purpose:
      'Explore how computer-vision workflows can be applied to a healthcare image-classification problem.',
    built:
      'An academic machine-learning investigation using Python and computer-vision techniques.',
    decisions: [
      'Exploratory scope stated explicitly',
      'No clinical or deployment claims',
      'Documentation-led interpretation of results',
    ],
    note: 'Exploratory academic work only—not a clinically validated diagnostic tool and not medical advice.',
    technologies: ['Python', 'Machine learning', 'Computer vision'],
    repo: 'https://github.com/akshay9192/Foot-Ulcer-Detection',
    visual: 'vision',
  },
]

export const experiments = [
  {
    title: 'Algorithms Visualizer',
    description: 'An educational experiment for visualising algorithms.',
    stack: 'JavaScript · HTML · CSS',
    status: 'Experiment',
    repo: 'https://github.com/akshay9192/Algorithms-visualizer',
    visual: 'sort',
  },
  {
    title: 'HTTP Server',
    description: 'A build-your-own HTTP server programming challenge.',
    stack: 'Programming challenge',
    status: 'Learning build',
    repo: 'https://github.com/akshay9192/HTTPServer',
    visual: 'request',
  },
  {
    title: 'Tokenizer',
    description:
      'A CodeCrafters-style interpreter and tokenizer implementation challenge.',
    stack: 'Interpreter fundamentals',
    status: 'Learning build',
    repo: 'https://github.com/akshay9192/Tokenizer',
    visual: 'tokens',
  },
]

export const skillClusters = [
  {
    id: 'interface',
    label: 'Interface',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'systems',
    label: 'Systems',
    skills: ['Python', 'FastAPI', 'SQL', 'Java'],
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    skills: ['Machine Learning', 'Responsible AI', 'Qdrant'],
  },
  {
    id: 'delivery',
    label: 'Delivery',
    skills: ['Git', 'GitHub', 'Docker'],
  },
]

export const education = {
  institution: 'University of Sydney',
  degree: 'Master of Computer Science',
  period: 'Current',
  focus:
    'Trustworthy AI systems, AI governance, security and applied software development.',
  themes: [
    'Practical, testable applications',
    'Human-centred system design',
    'Inspectable and grounded outputs',
  ],
}
