import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-[#1E293B]/90 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-200 text-sm md:text-base text-center md:text-left">
              We use cookies to improve your experience on <span className="text-accent font-bold">CodeSip</span>. 
              By continuing to browse, you agree to our use of cookies.
            </div>
            <button
              onClick={handleAccept}
              className="px-8 py-2 bg-accent hover:bg-[#0096B4] text-primary font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,180,216,0.3)]"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
