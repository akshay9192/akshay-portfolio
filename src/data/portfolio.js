export const profileLinks = {
  github: 'https://github.com/akshay9192/',
  linkedin: 'https://www.linkedin.com/in/iharwalkar-akshay/',
  leetcode: 'https://leetcode.com/u/iharwalkar-akshay/',
  medium: 'https://medium.com/@akshay.harwalkar183',
  email: 'mailto:akshay.harwalkar183@gmail.com',
  phone: 'tel:+61493544829',
}

export const projects = [
  {
    number: '01',
    slug: 'sentinel-llm',
    title: 'Sentinel LLM',
    shortTitle: 'Sentinel',
    discipline: 'AI governance · Security architecture',
    status: 'Phase 2A · documented milestone',
    description:
      'An independent AnythingLLM derivative exploring how local-first AI systems can separate probabilistic proposals from deterministic authorisation, reviewable evidence and controlled execution boundaries. The local baseline is validated; Sentinel governance runtime controls are not yet implemented.',
    purpose:
      'Explore how local-first AI systems can separate probabilistic model proposals from deterministic authorisation, reviewable evidence and controlled execution boundaries.',
    built:
      'A pinned AnythingLLM v1.15.0 foundation with validated local Ollama chat, embeddings, LanceDB retrieval and grounded RAG, plus a documented threat model, six architecture decisions and the version-one logical audit-event schema.',
    decisions: [
      'Treat model output, retrieved documents and tool output as untrusted inputs',
      'Keep LLM output separate from deterministic authorisation decisions',
      'Define the audit contract before implementing validators, persistence or enforcement',
    ],
    note: 'Current scope: the local AnythingLLM, Ollama and LanceDB foundation is validated and the security architecture and audit-event schema are documented. A machine-readable audit validator, persistent audit chain, deterministic policy enforcement, restricted execution and governance UI remain planned. Sentinel is independent and is not affiliated with or endorsed by Mintplex Labs.',
    technologies: ['AnythingLLM', 'Ollama', 'LanceDB', 'Node.js', 'React', 'Prisma', 'Retrieval-augmented generation', 'AI governance', 'Security architecture'],
    repo: 'https://github.com/akshay9192/sentinel-llm',
    art: 'project-sentinel',
    alt: 'Conceptual AI governance system showing evidence passing through layered authorisation boundaries toward a human-controlled review point.',
    signal: { cyan: '#5ed6e8', secondary: '#d2a15b', pattern: 0.22 },
  },
  {
    number: '02',
    slug: 'world-cup-prediction',
    title: 'FIFA World Cup 2026 Prediction',
    shortTitle: 'World Cup Prediction',
    discipline: 'Machine learning · Full-stack',
    status: 'Published experimental project',
    description:
      'Tournament Atlas is an independent experimental fan project with a React editorial interface and FastAPI backend for exploring a 48-team, 104-match replay through Poisson-based probabilities, accuracy, bias and methodology views.',
    purpose:
      'Make tournament forecasts explorable while separating model probabilities from a user’s own football intuition.',
    built:
      'A React single-page frontend with an offline saved replay and background API refresh, backed by FastAPI, cached 100–5,000-run tournament simulation, SQLite locally and optional PostgreSQL deployment.',
    decisions: [
      'Poisson score probabilities with explicit uncertainty and limitations',
      'Cached tournament simulation constrained to 100–5,000 runs',
      'Offline saved replay remains readable while the API refreshes in the background',
    ],
    note: 'Independent experimental fan project. It is not affiliated with or endorsed by FIFA, and the model is not validated for betting or financial decisions.',
    technologies: ['Python', 'FastAPI', 'React', 'SQLite', 'PostgreSQL', 'SQLAlchemy', 'Poisson modelling', 'Tailwind CSS'],
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

export const moreProjects = [
  {
    title: 'Place Value Adventure',
    summary: 'Released educational desktop game · Python · Tkinter · Pytest',
    repo: 'https://github.com/akshay9192/Place-value-game',
  },
  {
    title: 'ClearPath Tutor',
    summary: 'Production tutoring website · HTML · CSS · JavaScript',
    repo: 'https://github.com/akshay9192/clearpathtutor',
    live: 'https://akshay9192.github.io/clearpathtutor/',
  },
  {
    title: 'Number Line Adventure',
    summary: 'Educational game prototype · Python · Pygame',
    repo: 'https://github.com/akshay9192/Number-line',
  },
  {
    title: 'Algorithms Visualizer',
    summary: 'Programming experiment',
    repo: 'https://github.com/akshay9192/Algorithms-visualizer',
  },
  {
    title: 'HTTP Server',
    summary: 'Build-your-own HTTP server exercise',
    repo: 'https://github.com/akshay9192/HTTPServer',
  },
  {
    title: 'Tokenizer',
    summary: 'Tokenizer/interpreter exercise',
    repo: 'https://github.com/akshay9192/Tokenizer',
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
