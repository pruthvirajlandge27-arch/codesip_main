import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
