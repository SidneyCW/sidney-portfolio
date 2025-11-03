import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        backdropFilter: 'blur(4px)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(75, 85, 99, 0.3)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: '0 0 1.5rem 0', paddingBottom: '0.5rem', borderBottom: '1px solid #4b5563' }}>About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/images/headshot.jpeg"
          className="w-80 h-80 object-cover rounded-lg shadow-md"
        />
        <p style={{ color: '#9ca3af', fontSize: '1.2rem' }}>
          I'm a Computer Engineering student with a passion for building efficient systems and solving complex problems.
          I’ve gained hands-on experience through my internship at Spiri Robotics, where I developed autonomous drone software, analyzed sensor data, and built simulation environments using tools like ROS, Gazebo, and ArduPilot.
          I’ve also applied full-stack development skills in personal projects, including a win-tracking web app for the Commander format of Magic: The Gathering. My work focuses on combining technical precision with thoughtful user-centered design.
        </p>
      </div>
    </motion.section>
  );
}