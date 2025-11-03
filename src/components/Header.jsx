import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-6 border-b border-gray-700 mb-8">
      <h1 className="text-3xl font-bold text-white">Sidney Wood</h1>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex space-x-6 mt-4 sm:mt-0"
      >
        <a
          href="https://github.com/SidneyCW"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Github size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/sidneycwood"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Linkedin size={28} />
        </a>
      </motion.div>
    </header>
  );
}
