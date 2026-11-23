import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function RidgeLine() {
  return (
    <div className="hero-ridge" aria-hidden="true">
      <svg viewBox="0 0 1200 180" preserveAspectRatio="none">
        {/* far ridge */}
        <path
          d="M0,150 L90,105 L180,135 L290,80 L400,125 L520,60 L640,120 L760,75 L880,130 L1000,90 L1100,125 L1200,100 L1200,180 L0,180 Z"
          fill="#2a221c"
        />
        {/* mid ridge with alpenglow edge */}
        <path
          d="M0,165 L130,115 L240,150 L370,95 L500,145 L650,85 L800,140 L930,105 L1060,150 L1200,120 L1200,180 L0,180 Z"
          fill="#352a21"
          stroke="rgba(245, 158, 11, 0.35)"
          strokeWidth="1.5"
        />
        {/* near ridge */}
        <path
          d="M0,180 L80,155 L200,172 L340,135 L480,170 L620,140 L780,172 L920,150 L1080,174 L1200,158 L1200,180 Z"
          fill="#1d1712"
        />
      </svg>
    </div>
  );
}

export default function Header() {
  return (
    <header className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="hero-kicker mono">
          <span className="prompt">~/sidney-wood $</span> whoami
        </p>
        <h1>Sidney Wood</h1>
        <p className="hero-tagline">
          Computer engineering student who builds software the way you climb a mountain:
          plan the route, pack good tools, and keep moving between coffee stops.
        </p>
        <p className="hero-code mono">
          <span className="kw">const</span> fuel = [<span className="str">'espresso'</span>,{' '}
          <span className="str">'altitude'</span>, <span className="str">'clean code'</span>];
        </p>
        <div className="hero-social">
          <a href="https://github.com/SidneyCW" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={26} />
          </a>
          <a href="https://www.linkedin.com/in/sidneycwood" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={26} />
          </a>
          <a href="mailto:Sidney.scott.wood@gmail.com" aria-label="Email">
            <Mail size={26} />
          </a>
        </div>
      </motion.div>
      <RidgeLine />
    </header>
  );
}
