export const profileLinks = {
  github: 'https://github.com/akshay9192/',
  linkedin: 'https://www.linkedin.com/in/iharwalkar-akshay/',
  leetcode: 'https://leetcode.com/u/iharwalkar-akshay/',
  email: 'mailto:akshay.harwalkar183@gmail.com',
  phone: 'tel:+61493544829',
}

export const projects = [
  {
    number: '01',
    slug: 'komply-risk-monitor',
    title: 'Komply / Risk Monitor',
    shortTitle: 'Komply',
    discipline: 'Responsible AI · Data systems',
    status: 'Active build',
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
    technologies: ['Python', 'FastAPI', 'Streamlit', 'Ollama', 'Qdrant', 'Sentence Transformers', 'SQLite', 'RAG'],
    repo: 'https://github.com/akshay9192/risk-monitor',
    art: 'project-komply',
    alt: 'Abstract evidence fragments flowing through transparent governance layers toward a human-review checkpoint.',
    signal: { cyan: '#5ed6e8', secondary: '#d2a15b', pattern: 0.22 },
  },
  {
    number: '02',
    slug: 'world-cup-prediction',
    title: 'FIFA World Cup 2026 Prediction',
    shortTitle: 'World Cup Prediction',
    discipline: 'Machine learning · Full-stack',
    status: 'In development',
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
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'SQLAlchemy', 'XGBoost', 'Monte Carlo', 'Tailwind CSS'],
    repo: 'https://github.com/akshay9192/FIFA-World-Cup-2026---prediction',
    art: 'project-fifa',
    alt: 'Abstract football tournament probability paths flowing through match nodes and pitch geometry.',
    signal: { cyan: '#63cdd4', secondary: '#d2a15b', pattern: 0.48 },
  },
  {
    number: '03',
    slug: 'soup-queue-chaos',
    title: 'Soup Queue Chaos Simulator',
    shortTitle: 'Soup Queue Chaos',
    discipline: 'Simulation · Game systems',
    status: 'Completed project',
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
    technologies: ['Python', 'Pygame', 'Game-state management', 'Procedural audio'],
    repo: 'https://github.com/akshay9192/soup-nazi-queue-chaos-simulator',
    art: 'project-soup',
    alt: 'Geometric queue simulation with abstract customers, bowls, order tokens and service stations.',
    signal: { cyan: '#69c8ce', secondary: '#c9785e', pattern: 0.7 },
  },
  {
    number: '04',
    slug: 'foot-ulcer-detection',
    title: 'Foot Ulcer Detection Exploration',
    shortTitle: 'Foot Ulcer Detection',
    discipline: 'Computer vision · Research',
    status: 'Exploratory ML project',
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
    art: 'project-foot-ulcer',
    alt: 'Non-graphic foot-analysis concept with computer-vision grids, uncertainty regions and a review checkpoint.',
    signal: { cyan: '#5ed6e8', secondary: '#d2a15b', pattern: 0.9 },
  },
]

export const profileIndex = [
  { label: 'Responsible AI', detail: 'Traceability, evidence and human review' },
  { label: 'Machine learning', detail: 'Predictive and retrieval workflows' },
  { label: 'Data systems', detail: 'Structured information and useful interfaces' },
  { label: 'Full-stack development', detail: 'Maintainable applications and APIs' },
  { label: 'Security and reliability', detail: 'Privacy, auditability and defensive design' },
]

export const education = {
  institution: 'University of Sydney',
  degree: 'Master of Computer Science',
  location: 'Sydney, Australia',
  focus: 'Trustworthy AI systems, AI governance, security and applied software development.',
}
