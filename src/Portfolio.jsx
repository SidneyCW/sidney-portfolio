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
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 25rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
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

    </div>
  );
}