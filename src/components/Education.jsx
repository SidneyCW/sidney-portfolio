import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import Section from './Section';

const educationImages = [
  '/images/education_1.jpg',
  '/images/education_2.jpg',
  '/images/education_3.jpg',
];

export default function Education() {
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    if (!hovered) return;
    const interval = setInterval(() => {
      setImgIdx((idx) => (idx + 1) % educationImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <Section
      icon={GraduationCap}
      title="Education"
      comment="// the route map"
      delay={0.3}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <a
        className="edu-link"
        href="https://lassonde.yorku.ca/eecs/academics/undergraduate/future-students/computer-engineering-beng/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="edu-wrap">
          <AnimatePresence>
            {hovered && (
              <motion.img
                className="edu-img"
                src={educationImages[imgIdx]}
                alt=""
                key={imgIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          <div className="edu-text">
            <h3>Computer Engineering (BEng)</h3>
            <p>York University, 2023–2028</p>
          </div>
        </div>
      </a>
    </Section>
  );
}
