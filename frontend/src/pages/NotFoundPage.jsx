import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import FloatingDotsBackground from '../components/ui/FloatingDotsBackground';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden font-sans">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <FloatingDotsBackground />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-8xl md:text-9xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-4 drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Page Not Found</h2>
        <p className="text-[#A0A0A0] text-lg max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-[#0096B4] text-primary font-bold rounded-[10px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,180,216,0.4)]">
          <Home size={18} />
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
