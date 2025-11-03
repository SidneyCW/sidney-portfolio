import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Hackathons from './components/Hackathons';
import ContactMe  from './components/ContactMe';
import { motion, AnimatePresence, scale } from 'framer-motion';
import { link } from 'react-scroll';
import { useEffect, useState } from 'react';

const projectCardStyle = {
  padding: '1.5rem',
  borderRadius: '16px',
  border: '1px solid #4b5563',
  transition: 'all 0.3s ease',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  cursor: 'pointer',
  backgroundColor: 'rgba(31, 41, 55, 0.5)',
  backdropFilter: 'blur(4px)',
};

const projectHoverAttr = {
  backgroundColor: 'rgba(55, 65, 81, 0.5)',
  scale: 1.02,
  border: '1px solid #34d399',
};

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
      <Sidebar />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 30rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <Header />
        <section id="aboutme"><AboutMe /></section>
        <section id="projects"><Projects
          projectImages={projectImages}
          hoveredProject={hoveredProject}
          setHoveredProject={setHoveredProject}
          projectCardStyle={projectCardStyle}
          projectHoverAttr={projectHoverAttr}
        /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education
          eduHovered={eduHovered}
          setEduHovered={setEduHovered}
          eduImgIdx={eduImgIdx}
          educationImages={educationImages}
        /></section>
        <section id="hackathons"><Hackathons /></section>
        <ContactMe />
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