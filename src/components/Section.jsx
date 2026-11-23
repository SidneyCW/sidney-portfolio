import { motion } from 'framer-motion';

export default function Section({ icon: Icon, title, comment, delay = 0, children, ...rest }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="section-card"
      {...rest}
    >
      <div className="section-title">
        {Icon && <Icon size={20} className="section-icon" aria-hidden="true" />}
        <h2>{title}</h2>
        {comment && <span className="section-comment">{comment}</span>}
      </div>
      {children}
    </motion.section>
  );
}
