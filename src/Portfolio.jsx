import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Portfolio.css'; // Background scroll animation styles

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative min-h-screen text-primary font-sans">
      {/* 🌀 Parallax background */}
      <div className="fixed top-0 left-0 w-full h-full bg-parallax bg-cover bg-center animate-backgroundScroll -z-20"></div>

      {/* 🖤 Dark overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* 📄 Main content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-16">
        <motion.header
            className="sticky top-4 mx-auto w-full max-w-4xl bg-background/70 backdrop-blur-md z-20 rounded-xl px-6 py-4 shadow-md flex flex-col md:flex-row md:items-center md:justify-between transition-all duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-2xl font-bold">Sidney Wood</h1>
            <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                <p><a href="mailto:Sidney.scott.wood@gmail.com" className="text-accent underline">Sidney.scott.wood@gmail.com</a></p>
                <p>📍 Toronto, ON · 📞 (647)-542-3540</p>
            </div>
        </motion.header>


        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a Computer Engineering student at York University with a passion for robotics, software development,
            and creative problem-solving. I love building real-world solutions through hardware, code, and collaboration.
          </p>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Projects</h2>
          <div className="grid gap-6">
            <motion.div className="bg-surface p-6 rounded-2xl shadow-xl hover:shadow-2xl transition group" whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-semibold mb-2">MTG Win Tracker (Magic: The Gathering)</h3>
              <p className="text-gray-400 mb-3">
                A full-stack Flask + MySQL app for tracking Commander (EDH) wins. Includes a dynamic Elo system for players and decks,
                hosted on a Raspberry Pi with Git automation + Nginx.
              </p>
              <div className="flex items-center gap-4 text-sm text-accent">
                <button onClick={() => setActiveModal('mtg')} className="underline hover:text-accent/80">View Demo</button>
              </div>
            </motion.div>

            <motion.div className="bg-surface p-6 rounded-2xl shadow-xl hover:shadow-2xl transition group" whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-semibold mb-2">Spiri Robotics Internship</h3>
              <p className="text-gray-400 mb-3">
                Developed ship detection tools using sound and AIS tracking. Built simulation environments and helped with SDK and frontend.
              </p>
              <div className="flex items-center gap-4 text-sm text-accent">
                <button onClick={() => setActiveModal('spiri')} className="underline hover:text-accent/80">Project Summary</button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-300 list-disc list-inside">
            <li>Python (3 yrs): APIs, Automation, Data Analysis</li>
            <li>Java (4 yrs): OOP, Arduino Projects</li>
            <li>Dart: UI / App Prototyping</li>
            <li>Fusion 360: CAD for robotics</li>
            <li>Git: version control, open source workflow</li>
            <li>Figma: UI/UX design mockups</li>
          </ul>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Education</h2>
          <p className="font-medium text-gray-200">York University (2023–2028)</p>
          <p>B.Eng. (Honours), Computer Engineering</p>
          <p className="text-gray-500 text-sm">Relevant Courses: Applied Calculus, Discrete Math, Mechatronics, OOP, Engineering Mechanics</p>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Hackathons & Competitions</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Roborama Hackathon (Feb 2024):</strong> Built and coded autonomous robot in 12-hour competition.</li>
            <li><strong>UNHack (Oct 2023):</strong> Developed team solution to UN goal in a 48hr sprint.</li>
            <li><strong>Bernoulli Challenge (Jan 2024):</strong> Placed top 50% in university-wide math competition.</li>
          </ul>
        </motion.section>
      </main>

      {/* Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 bg-accent text-black px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            ↑ Top
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'mtg' && (
          <ProjectModal
            title="MTG Win Tracker"
            description="A full-stack app for tracking Magic Commander wins with Elo ranking, Flask backend, MySQL database, and Raspberry Pi deployment."
            onClose={() => setActiveModal(null)}
          />
        )}
        {activeModal === 'spiri' && (
          <ProjectModal
            title="Spiri Robotics"
            description="Tools and visualizations for maritime tracking using sound analysis and AIS data, with drone interface integration and Gazebo simulation."
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectModal({ title, description, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className="bg-surface p-8 rounded-xl shadow-lg max-w-md w-full">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <button onClick={onClose} className="bg-accent text-black px-4 py-2 rounded hover:scale-105 transition">
          Close
        </button>
      </div>
    </motion.div>
  );
}
