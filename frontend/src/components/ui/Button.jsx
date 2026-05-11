import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2 rounded-lg font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-secondary text-primary hover:bg-white hover:text-primary shadow-[0_0_15px_rgba(0,255,136,0.4)]',
    secondary: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary shadow-[0_0_10px_rgba(0,180,216,0.2)]',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/10'
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
