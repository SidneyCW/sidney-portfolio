import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center items-center py-16"
    >
      <a
        href="mailto:Sidney.scott.wood@gmail.com"
        className="bg-emerald-500 text-black font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-emerald-600 transition-all duration-200"
      >
        Contact Me
      </a>
    </motion.div>
  );
}
