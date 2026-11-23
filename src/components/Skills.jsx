import { Backpack } from 'lucide-react';
import Section from './Section';

const gear = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'Dart', 'SQL'],
  },
  {
    group: 'Web & Apps',
    items: ['React', 'Django', 'Flask', 'Electron', 'Streamlit', 'Tailwind CSS'],
  },
  {
    group: 'Robotics & Hardware',
    items: ['ROS', 'Gazebo', 'ArduPilot', 'Arduino', 'Fusion 360'],
  },
  {
    group: 'Tools & Infra',
    items: ['Git', 'Linux / Raspberry Pi', 'Celery + Redis', 'Nginx', 'Figma'],
  },
];

export default function Skills() {
  return (
    <Section icon={Backpack} title="Skills" comment="// the gear rack" delay={0.2}>
      <div className="gear-grid">
        {gear.map(({ group, items }) => (
          <div key={group} className="gear-group">
            <h3>{group}</h3>
            <div className="tag-row">
              {items.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
