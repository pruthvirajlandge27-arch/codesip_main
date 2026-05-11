import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import api from '../../api/axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, redirect to dashboard
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await api.post('/auth/login', { email, password });
      
      // Save to local storage
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      
      // Redirect
      navigate('/admin/dashboard');
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00B4D8]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">Admin Portal</h1>
            <p className="text-gray-400 text-sm">Sign in to manage the CodeSip platform.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {errorMsg && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm text-center">
                {errorMsg}
              </div>
            )}

            <div className="flex flex-col gap-1.5 focus-within:text-accent">
              <label className="text-[13px] font-medium text-gray-400">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 bg-black/20 border border-white/5 rounded-xl pl-11 pr-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600"
                  placeholder="admin@codesip.in"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 focus-within:text-accent">
              <label className="text-[13px] font-medium text-gray-400">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 bg-black/20 border border-white/5 rounded-xl pl-11 pr-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`mt-4 w-full h-12 bg-accent hover:bg-[#0096B4] text-primary font-bold text-[15px] rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_20px_rgba(0,180,216,0.4)]'}`}
            >
              {isLoading ? 'Authenticating...' : 'Sign In'} 
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
