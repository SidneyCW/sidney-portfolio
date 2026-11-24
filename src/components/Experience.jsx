import { Briefcase } from 'lucide-react';
import Section from './Section';

const roles = [
  {
    company: 'Baird',
    title: 'Software Engineering Co-op',
    dates: 'May 2026 – present',
    projects: [
      {
        name: 'Baird Maps — internal geospatial web application (sole developer)',
        points: [
          'Designed, built and deployed a browser-based mapping app used company-wide to explore an index of 46,000 GIS files, a national AIS vessel-traffic archive, and the firm’s project, proposal and sales-lead portfolio.',
          'Built a Python pipeline that ingests ~7 million rows of NOAA AIS data a day into Parquet and aggregates 200+ million vessel pings into a 200,000-cell traffic grid with a two-pass, disk-sharded design.',
          'Cut first paint of the AIS map from ~40 s to under 2 s with Web Workers, trimmed renderer payloads and a coarse-to-detailed grid handoff; replaced a 300 MB client download with a 5 MB server-built summary plus ~20 ms on-demand geometry lookups.',
          'Wrote ~930 automated tests and the production runbook for a two-server Windows/Linux deployment behind an Apache reverse proxy.',
        ],
        tags: ['React', 'MapLibre GL', 'Web Workers', 'FastAPI', 'MariaDB', 'Parquet'],
      },
      {
        name: 'Sales & Relationship Management System (SRMS) (sole developer)',
        points: [
          'Designed, built and deployed an internal web app that replaced spreadsheet tracking of sales proposals, client relationships and revenue forecasts — about 46,000 lines of Python across 185 modules in six months.',
          'Integrated with the Deltek Vantagepoint ERP for scheduled syncing, with a storage layer offering interchangeable CSV and MariaDB backends and 65 versioned schema migrations.',
          'Implemented role-based permissions, a who-changed-what audit trail, and cell-level merging so concurrent edits don’t overwrite each other; built forecasting views including weighted multi-currency pipeline revenue and an interactive world map of pursuits.',
          'Maintained 3,400+ automated tests plus the contributor guide, architecture decision records and deployment runbook; ran production on a Linux intranet server behind Apache with single sign-on.',
        ],
        tags: ['Python', 'Panel / Bokeh', 'pandas', 'MariaDB', 'pytest'],
      },
    ],
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

function Points({ points }) {
  return (
    <ul className="xp-points">
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

function Tags({ tags }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <span key={tag} className="tag">{tag}</span>
      ))}
    </div>
  );
}

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
            {r.points && <Points points={r.points} />}
            {r.tags && <Tags tags={r.tags} />}
            {r.projects?.map((p) => (
              <div key={p.name} className="xp-project">
                <h4>{p.name}</h4>
                <Points points={p.points} />
                <Tags tags={p.tags} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
