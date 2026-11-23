import { Briefcase } from 'lucide-react';
import Section from './Section';

const roles = [
  {
    company: 'Baird',
    title: 'Software Engineering Co-op',
    dates: '2026 – present',
    points: [
      'Build and ship internal software and developer tooling as part of an engineering team.',
      'Designed and packaged Notes Todo, an Electron desktop app with a CodeMirror editor, atomic file writes, crash-recovery drafts, and session restore, distributed as a portable Windows app.',
    ],
    tags: ['JavaScript', 'Electron', 'CodeMirror'],
  },
  {
    company: 'Spiri Robotics',
    title: 'Robotics Software Intern',
    dates: 'Summer 2024 – Summer 2025',
    points: [
      'Developed autonomous drone software on the Spiri Development Kit, a Python SDK with modules for flight control, sensor integration, and mission planning on ROS and ArduPilot.',
      'Built the Robot Config UI, a NiceGUI web app for installing software on and monitoring Spiri drones.',
      'Analyzed sensor data and built simulation environments with ROS, Gazebo, and ArduPilot.',
    ],
    tags: ['Python', 'ROS', 'Gazebo', 'ArduPilot', 'NiceGUI'],
  },
];

export default function Experience() {
  return (
    <Section icon={Briefcase} title="Experience" comment="// expeditions, guided and solo" delay={0.05}>
      <div className="xp-list">
        {roles.map((r) => (
          <div key={r.company} className="xp-entry">
            <div className="xp-head">
              <h3>
                {r.title} <span className="xp-company">@ {r.company}</span>
              </h3>
              <span className="xp-dates mono">{r.dates}</span>
            </div>
            <ul className="xp-points">
              {r.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="tag-row">
              {r.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
