import { motion, AnimatePresence } from 'framer-motion';

export default function Projects({ projectImages, hoveredProject, setHoveredProject, projectCardStyle, projectHoverAttr }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        backdropFilter: 'blur(4px)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(75, 85, 99, 0.3)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: '0 0 1.5rem 0', paddingBottom: '0.5rem', borderBottom: '1px solid #4b5563' }}>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    
        {/* MTG Win Tracker */}
        <motion.div
            onHoverStart={() => setHoveredProject('mtg')}
            onHoverEnd={() => setHoveredProject(null)}
            whileHover={projectHoverAttr}
            style={{
            ...projectCardStyle,
            position: 'relative',
            overflow: 'hidden'
            }}
        >
            <a
            href="https://github.com/SidneyCW/mtg-win-tracking"
            target="_blank"
            rel="noopener noreferrer"
            >
            <AnimatePresence>
            {hoveredProject === 'mtg' && (
                <motion.img
                src={projectImages.mtg}
                alt="MTG Win Tracker"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
                />
            )}
            </AnimatePresence>
            <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                MTG Win Tracker (Magic: The Gathering)
            </h3>
            <p style={{ color: '#9ca3af', marginBottom: '0.75rem', lineHeight: '1.625', textShadow: '0 2px 8px rgba(0,0,0,1)'}}>
                A full-stack Flask + MySQL app for tracking Commander (EDH) wins. Includes a dynamic Elo system for players and decks,
                hosted on a Raspberry Pi with Git automation + Nginx.
            </p>
            </div>
            </a>
        </motion.div>

        {/* Spiri Development Kit */}
        <motion.div
            onHoverStart={() => setHoveredProject('sdk')}
            onHoverEnd={() => setHoveredProject(null)}
            whileHover={projectHoverAttr}
            style={{
            ...projectCardStyle,
            position: 'relative',
            overflow: 'hidden'
            }}
        >
            <a
            href="https://github.com/spiri-robotics/spiri_development_kit"
            target="_blank"
            rel="noopener noreferrer"
            >
            <AnimatePresence>
            {hoveredProject === 'sdk' && (
                <motion.img
                src={projectImages.sdk}
                alt="Spiri Development Kit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
                />
            )}
            </AnimatePresence>
            <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                Spiri Development Kit
            </h3>
            <p style={{ color: '#9ca3af', marginBottom: '0.75rem', lineHeight: '1.625', textShadow: '0 2px 8px rgba(0,0,0,1)'}}>
                A Python SDK for developing autonomous drone applications using Spiri Robotics hardware.
                Features modules for flight control, sensor integration, and mission planning, built on top of ROS and ArduPilot.
            </p>
            </div>
            </a>
        </motion.div>

        {/* Spiri Robot Config UI */}
        <motion.div
            onHoverStart={() => setHoveredProject('config')}
            onHoverEnd={() => setHoveredProject(null)}
            whileHover={projectHoverAttr}
            style={{
            ...projectCardStyle,
            position: 'relative',
            overflow: 'hidden'
            }}
        >
            <a
            href="https://github.com/spiri-robotics/Robot_Config_UI"
            target="_blank"
            rel="noopener noreferrer"
            >
            <AnimatePresence>
            {hoveredProject === 'config' && (
                <motion.img
                src={projectImages.config}
                alt="Spiri Robot Config UI"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
                />
            )}
            </AnimatePresence>
            <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                Spiri Robot Config UI
            </h3>
            <p style={{ color: '#9ca3af', marginBottom: '0.75rem', lineHeight: '1.625', textShadow: '0 2px 8px rgba(0,0,0,1)'}}>
                A NiceGUI based web application for installing software and monitoring Spiri Robotics drones.
            </p>
            </div>
            </a>
        </motion.div>
        </div>
    </motion.section>
  );
}