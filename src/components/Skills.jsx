import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        backdropFilter: 'blur(4px)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(75, 85, 99, 0.3)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: '0 0 1.5rem 0', paddingBottom: '0.5rem', borderBottom: '1px solid #4b5563' }}>Skills</h2>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem', color: '#d1d5db', listStyle: 'disc', paddingLeft: '1rem' }}>
        <li>Python : APIs, Automation, Data Analysis</li>
        <li>Java : OOP, Arduino Projects</li>
        <li>Dart: UI / App Prototyping</li>
        <li>Fusion 360: CAD for robotics</li>
        <li>Git: version control, open source workflow</li>
        <li>Figma: UI/UX design mockups</li>
      </ul>
    </motion.section>
  );
}