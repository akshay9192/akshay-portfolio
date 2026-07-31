export const profileLinks = {
  github: 'https://github.com/akshay9192/',
  linkedin: 'https://www.linkedin.com/in/iharwalkar-akshay/',
  leetcode: 'https://leetcode.com/u/iharwalkar-akshay/',
  email: 'mailto:akshay.harwalkar183@gmail.com',
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
    title: 'Responsible AI and AI Governance',
    description:
      'Exploring practical controls, traceability and evidence that make AI-assisted decisions easier to review.',
    icon: 'governance',
  },
  {
    number: '02',
    title: 'Applied AI and RAG Systems',
    description:
      'Building retrieval workflows that connect model outputs to source material, citations and measurable checks.',
    icon: 'ai',
  },
  {
    number: '03',
    title: 'Software Engineering and Cloud',
    description:
      'Turning ideas into maintainable web applications with clear interfaces, useful APIs and deployable architecture.',
    icon: 'code',
  },
  {
    number: '04',
    title: 'Security-Conscious Development',
    description:
      'Treating privacy, data handling, auditability and defensive thinking as design inputs—not afterthoughts.',
    icon: 'security',
  },
]

export const featuredProjects = [
  {
    number: '01',
    title: 'Komply Risk Monitor',
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
    primary: true,
  },
  {
    number: '02',
    title: 'FIFA World Cup 2026 Prediction System',
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
      'A comedic Python simulation game inspired by Seinfeld’s Soup Nazi episode, with character-specific rules, timed ordering, scoring, warnings and chaos-driven autoplay modes.',
    purpose:
      'Turn a recognisable comedy premise into a small systems-design exercise with timing, rules and meaningful state.',
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
    title: 'Foot Ulcer Detection',
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
    technologies: ['Python', 'Machine learning', 'Computer vision'],
    repo: 'https://github.com/akshay9192/Foot-Ulcer-Detection',
    visual: 'vision',
  },
]

export const experiments = [
  {
    title: 'Algorithms Visualizer',
    description: 'An educational experiment for visualising algorithms.',
    repo: 'https://github.com/akshay9192/Algorithms-visualizer',
  },
  {
    title: 'HTTP Server',
    description: 'A build-your-own HTTP server programming challenge.',
    repo: 'https://github.com/akshay9192/HTTPServer',
  },
  {
    title: 'Tokenizer',
    description:
      'A CodeCrafters-style interpreter and tokenizer implementation challenge.',
    repo: 'https://github.com/akshay9192/Tokenizer',
  },
]

export const skillGroups = [
  { title: 'Languages', skills: ['Python', 'JavaScript', 'SQL'] },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'REST APIs', 'SQLAlchemy'],
  },
  {
    title: 'AI and Data',
    skills: [
      'RAG',
      'Ollama',
      'Qdrant',
      'Sentence Transformers',
      'XGBoost',
      'Machine learning',
      'Monte Carlo simulation',
    ],
  },
  {
    title: 'Tools and Platforms',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'PostgreSQL',
      'SQLite',
      'Netlify',
    ],
  },
]
