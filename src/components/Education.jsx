import { motion, AnimatePresence } from 'framer-motion';

export default function Education({ eduHovered, setEduHovered, eduImgIdx, educationImages }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        backdropFilter: 'blur(4px)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(75, 85, 99, 0.3)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
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
                transition={{ duration: 0.3, delay: 0.3 }}
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
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', margin: '0 0 1.5rem 0', paddingBottom: '0.5rem', borderBottom: '1px solid #4b5563' }}>
              Education
            </h2>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '500', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,1)' }}>
              Computer Engineering (BEng)
            </h3>
            <p style={{ color: '#d1d5db', textShadow: '0 2px 8px rgba(0,0,0,1)' }}>
              York University, 2023–2028
            </p>
          </div>
        </div>
      </a>
    </motion.section>
  );
}