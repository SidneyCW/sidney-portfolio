import { Flag } from 'lucide-react';
import Section from './Section';

const entries = [
  {
    date: '2024-02',
    name: 'Roborama Hackathon',
    detail: 'Built and coded an autonomous robot in a 12-hour competition.',
  },
  {
    date: '2024-01',
    name: 'Bernoulli Challenge',
    detail: 'Placed top 50% in a university-wide math competition.',
  },
  {
    date: '2023-10',
    name: 'UNHack',
    detail: 'Developed a team solution to a UN sustainability goal in a 48-hour sprint.',
  },
];

export default function Hackathons() {
  return (
    <Section icon={Flag} title="Hackathons & Competitions" comment="// summit log: sprint ascents" delay={0.4}>
      <ul className="summit-log">
        {entries.map((e) => (
          <li key={e.name}>
            <span className="summit-date">{e.date}</span>
            <span>
              <strong>{e.name}</strong> — {e.detail}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
