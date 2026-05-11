import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../api/axios';

const ContactPage = () => {
  // Ensure page loads at top perfectly
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      await api.post('/contacts', formData);
      setSuccessMsg('Your message has been sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccessMsg(''), 5000);
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen relative font-sans flex flex-col justify-center py-32 overflow-hidden bg-[#0A0F1C]"
    >
      {/* 1. FLUID GRADIENT BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft fluid glowing orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00B4D8]/15 rounded-full blur-[130px] mix-blend-screen animate-[float_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#6B21A8]/15 rounded-full blur-[150px] mix-blend-screen animate-[float_12s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#EC4899]/10 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[45%] h-[45%] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center">
        {/* 2. HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Touch</span>
          </h1>
          <p className="text-lg text-gray-300 font-medium tracking-wide">
            Let's connect and build something impactful together.
          </p>
        </motion.div>

        {/* 3. CONTACT CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-[600px] bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden"
        >
          {/* Internal Glow Overlay */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

          {/* 4. FORM FIELDS */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400 transition-colors">Name</label>
                <input 
                   type="text" 
                   name="name"
                   required
                   value={formData.name}
                   onChange={handleChange}
                   className="w-full h-12 bg-[#0F172A]/50 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 focus:bg-[#0F172A]/80 transition-all shadow-inner placeholder-gray-500"
                   placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400 transition-colors">Email</label>
                <input 
                   type="email" 
                   name="email"
                   required
                   value={formData.email}
                   onChange={handleChange}
                   className="w-full h-12 bg-[#0F172A]/50 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 focus:bg-[#0F172A]/80 transition-all shadow-inner placeholder-gray-500"
                   placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 focus-within:text-accent">
               <label className="text-[13px] font-medium text-gray-400 transition-colors">Subject</label>
               <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#0F172A]/50 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 focus:bg-[#0F172A]/80 transition-all shadow-inner placeholder-gray-500"
                  placeholder="How can we help you?"
               />
            </div>

            <div className="flex flex-col gap-1.5 focus-within:text-accent">
               <label className="text-[13px] font-medium text-gray-400 transition-colors">Message</label>
               <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[140px] bg-[#0F172A]/50 border border-white/5 rounded-xl p-4 text-[14px] text-white focus:outline-none focus:border-accent/80 focus:bg-[#0F172A]/80 transition-all shadow-inner placeholder-gray-500 resize-y"
                  placeholder="Write your message here..."
               ></textarea>
            </div>

            {successMsg && (
              <div className="bg-secondary/10 border border-secondary/30 text-secondary px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                <CheckCircle2 size={18} />
                {successMsg}
              </div>
            )}
            
            {errorMsg && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                <AlertCircle size={18} />
                {errorMsg}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`mt-4 w-full h-12 bg-accent hover:bg-[#0096B4] text-primary font-bold text-[15px] rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] active:scale-[0.98]'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={16} />}
            </button>
          </form>
        </motion.div>

        {/* 6. EXTRA INFO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-8 text-gray-400"
        >
          <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors shadow-inner">
              <Mail size={18} className="text-accent" />
            </div>
            <span className="text-[15px] tracking-wide">hr@codesip.in</span>
          </div>

          <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-colors shadow-inner">
              <MapPin size={18} className="text-secondary" />
            </div>
            <span className="text-[15px] tracking-wide">Registered HQ: Amravati, Maharashtra</span>
          </div>

          <div className="flex flex-col gap-2 text-gray-400">
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors shadow-inner">
                <MapPin size={18} className="text-accent" />
              </div>
              <span className="text-[15px] tracking-wide">Working Locations:</span>
            </div>
            <div className="ml-12 flex flex-col gap-1">
              <span className="text-[15px] tracking-wide">• Pune, Maharashtra</span>
              <span className="text-[15px] tracking-wide">• Navi Mumbai, Maharashtra</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
