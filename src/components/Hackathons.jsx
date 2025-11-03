import { motion } from 'framer-motion';

export default function Hackathons() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      style={{
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        backdropFilter: 'blur(4px)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(75, 85, 99, 0.3)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: '0 0 1.5rem 0', paddingBottom: '0.5rem', borderBottom: '1px solid #4b5563' }}>Hackathons & Competitions</h2>
      <ul style={{ listStyle: 'disc', paddingLeft: '1rem', color: '#d1d5db', lineHeight: '1.75' }}>
        <li><strong>Roborama Hackathon (Feb 2024):</strong> Built and coded autonomous robot in 12-hour competition.</li>
        <li><strong>UNHack (Oct 2023):</strong> Developed team solution to UN goal in a 48hr sprint.</li>
        <li><strong>Bernoulli Challenge (Jan 2024):</strong> Placed top 50% in university-wide math competition.</li>
      </ul>
    </motion.section>
  );
}