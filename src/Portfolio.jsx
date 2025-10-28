import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const projectCardStyle = {
    padding: '1.5rem',
    borderRadius: '16px',
    border: '1px solid #4b5563',
    transition: 'all 0.3s ease',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    cursor: 'pointer'
}
const projectHoverAttr = {
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    scale: 1.02,
    border: '1px solid #34d399'
}
const portfolioSectionStyle = {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    backdropFilter: 'blur(4px)',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid rgba(75, 85, 99, 0.3)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
}

const projectImages = {
  mtg: '/images/otawara.jpg',
  sdk: '/images/spiri_sdk.png',
  config: '/images/spiri_mu.png'
};

const educationImages = [
  '/images/education_1.jpg',
  '/images/education_2.jpg',
  '/images/education_3.jpg'
]

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [hoveredProject, setHoveredProject] = useState(null);
  const [eduHovered, setEduHovered] = useState(false);
  const [eduImgIdx, setEduImgIdx] = useState(0);

  useEffect(() => {
    if (!eduHovered) return;
    const interval = setInterval(() => {
      setEduImgIdx(idx => (idx + 1) % educationImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [eduHovered]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div>
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'sticky',
            top: '1rem',
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            backdropFilter: 'blur(12px)',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid rgba(75, 85, 99, 0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            zIndex: 20
          }}
        >
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Sidney Wood</h1>
          <div style={{ fontSize: '0.875rem', color: '#d1d5db', textAlign: 'right' }}>
            <p><a href="mailto:Sidney.scott.wood@gmail.com" style={{ color: '#34d399', textDecoration: 'underline' }}>Sidney.scott.wood@gmail.com</a></p>
            <p>📍 Toronto, ON · 📞 (647)-542-3540</p>
          </div>
        </motion.header>

        {/* About Me Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
          style={
            portfolioSectionStyle
          }
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: '0 0 1.5rem 0', paddingBottom: '0.5rem', borderBottom: '1px solid #4b5563' }}>About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/images/headshot.jpeg"
              className="w-80 h-80 object-cover rounded-lg shadow-md"
            />
            <p style={{ color: '#9ca3af', fontSize: '1.2rem'}}>
              I'm a Computer Engineering student with a passion for building efficient systems and solving complex problems. 
              I’ve gained hands-on experience through my internship at Spiri Robotics, where I developed autonomous drone software, analyzed sensor data, and built simulation environments using tools like ROS, Gazebo, and ArduPilot. 
              I’ve also applied full-stack development skills in personal projects, including a win-tracking web app for the Commander format of Magic: The Gathering. My work focuses on combining technical precision with thoughtful user-centered design.
            </p>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          style={
            portfolioSectionStyle
          }
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem' }}>
                  <a
                    href="https://github.com/SidneyCW/mtg-win-tracking"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#34d399', textDecoration: 'underline' }}
                  >
                    View Repo
                  </a>
                </div>
              </div>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem' }}>
                  <a
                    href="https://github.com/spiri-robotics/spiri_development_kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#34d399', textDecoration: 'underline' }}
                  >
                    View Repo
                  </a>
                </div>
              </div>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem' }}>
                  <a
                    href="https://github.com/spiri-robotics/Robot_Config_UI"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#34d399', textDecoration: 'underline' }}
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          style={
            portfolioSectionStyle
          }
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

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={portfolioSectionStyle}
          onHoverStart={() => setEduHovered(true)}
          onHoverEnd={() => setEduHovered(false)}
          animate={eduHovered ? { height: 462 } : { height: 220 }}
          transition={eduHovered
            ? { duration: 0.4 }
            : { duration: 0.4, delay: 0.5 }
          }
        >
          <a
            href="https://lassonde.yorku.ca/eecs/academics/undergraduate/future-students/computer-engineering-beng/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block' }}
          >
            <div style={{ position: 'relative', minHeight: '220px' }}>
              <AnimatePresence>
                {eduHovered && (
                  <motion.img
                    src={educationImages[eduImgIdx]}
                    alt="Education"
                    key={eduImgIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 , delay: 0.3}}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '0',
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      zIndex: 0,
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </AnimatePresence>
              <div style={{ position: 'relative', zIndex: 1, padding: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: '0 0 1.5rem 0', paddingBottom: '0.5rem', borderBottom: '1px solid #4b5563'}}>
                  Education
                </h2>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '500', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,1)'}}>
                  Computer Engineering (BEng)
                </h3>
                <p style={{ color: '#d1d5db', textShadow: '0 2px 8px rgba(0,0,0,1)' }}>
                  York University, 2023–2028
                </p>
              </div>
            </div>
          </a>
        </motion.section>

        {/* Hackathons Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          style={
            portfolioSectionStyle
          }
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: '0 0 1.5rem 0', paddingBottom: '0.5rem', borderBottom: '1px solid #4b5563' }}>Hackathons & Competitions</h2>
          <ul style={{ listStyle: 'disc', paddingLeft: '1rem', color: '#d1d5db', lineHeight: '1.75' }}>
            <li><strong>Roborama Hackathon (Feb 2024):</strong> Built and coded autonomous robot in 12-hour competition.</li>
            <li><strong>UNHack (Oct 2023):</strong> Developed team solution to UN goal in a 48hr sprint.</li>
            <li><strong>Bernoulli Challenge (Jan 2024):</strong> Placed top 50% in university-wide math competition.</li>
          </ul>
        </motion.section>
      </main>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            zIndex: 50,
            backgroundColor: '#10b981',
            color: 'black',
            width: '3.5rem',
            height: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#059669';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#10b981';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}