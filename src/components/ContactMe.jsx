import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function ContactMe() {
  return (
    <motion.div
      className="contact-wrap"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <a href="mailto:Sidney.scott.wood@gmail.com" className="contact-btn">
        <Coffee size={20} aria-hidden="true" />
        Let's grab a coffee
      </a>
      <p className="contact-note">// response time: one espresso, give or take</p>
    </motion.div>
  );
}
