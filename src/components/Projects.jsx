import { Code2, Coffee } from 'lucide-react';
import Section from './Section';

const projects = [
  {
    id: 'notes-todo',
    title: 'Notes Todo',
    href: 'https://github.com/SidneyCW/todo-txt',
    description:
      'A notepad-style desktop todo app built with Electron and CodeMirror. Completed task lines get swept into a day-grouped completion log, with session restore, crash-recovery drafts, and packaging as a portable Windows app.',
    tags: ['Electron', 'JavaScript', 'CodeMirror', 'esbuild'],
    grade: '5.10a',
    cups: 4,
  },
  {
    id: 'pokemon-tcg',
    title: 'Pokémon TCG API Interface',
    href: 'https://github.com/SidneyCW/pokemon-tcg-api-interface',
    description:
      'A Streamlit app for browsing Pokémon TCG card data and prices, backed by SQLAlchemy and an external pricing API.',
    tags: ['Python', 'Streamlit', 'SQLAlchemy'],
    grade: '5.8',
    cups: 2,
  },
  {
    id: 'internship-search',
    title: 'Internship Search',
    href: 'https://github.com/SidneyCW/internship-search',
    description:
      'A full-stack internship aggregator: Django REST backend with Celery + Redis background jobs pulling postings via the Google Search API, and a React + Tailwind frontend for filtering by qualifications.',
    tags: ['Django', 'Celery', 'Redis', 'React', 'Tailwind'],
    grade: '5.11b',
    cups: 5,
  },
  {
    id: 'mtg',
    title: 'MTG Win Tracker',
    href: 'https://github.com/SidneyCW/mtg-win-tracking',
    image: '/images/otawara.jpg',
    description:
      'A full-stack Flask + MySQL app for tracking Commander (EDH) wins. Includes a dynamic Elo system for players and decks, self-hosted on a Raspberry Pi with Git automation and Nginx.',
    tags: ['Flask', 'MySQL', 'Nginx', 'Raspberry Pi'],
    grade: '5.10c',
    cups: 3,
  },
  {
    id: 'sdk',
    title: 'Spiri Development Kit',
    href: 'https://github.com/spiri-robotics/spiri_development_kit',
    image: '/images/spiri_sdk.png',
    description:
      'A Python SDK for developing autonomous drone applications on Spiri Robotics hardware. Modules for flight control, sensor integration, and mission planning, built on ROS and ArduPilot.',
    tags: ['Python', 'ROS', 'ArduPilot'],
    grade: '5.12a',
    cups: 5,
  },
  {
    id: 'config',
    title: 'Spiri Robot Config UI',
    href: 'https://github.com/spiri-robotics/Robot_Config_UI',
    image: '/images/spiri_mu.png',
    description:
      'A NiceGUI-based web application for installing software on and monitoring Spiri Robotics drones.',
    tags: ['Python', 'NiceGUI'],
    grade: '5.9',
    cups: 3,
  },
];

function FuelRating({ cups }) {
  return (
    <span className="project-cups" title={`${cups}/5 cups of coffee consumed`} aria-label={`${cups} out of 5 coffees`}>
      {Array.from({ length: cups }, (_, i) => (
        <Coffee key={i} size={13} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function Projects() {
  return (
    <Section icon={Code2} title="Projects" comment="// summits logged, fueled by espresso" delay={0.1}>
      <div className="project-list">
        {projects.map((p) => (
          <a key={p.id} className="project-card" href={p.href} target="_blank" rel="noopener noreferrer">
            {p.image && <img className="card-bg" src={p.image} alt="" />}
            <div className="project-inner">
              <div className="project-head">
                <h3>{p.title}</h3>
                <span className="project-meta">
                  <span className="project-grade">grade {p.grade}</span>
                  <FuelRating cups={p.cups} />
                </span>
              </div>
              <p>{p.description}</p>
              <div className="tag-row">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
