import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Loader2 } from 'lucide-react';
import api from '../api/axios';

const CareersPage = () => {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOpenings();
  }, []);

  const fetchOpenings = async () => {
    try {
      const res = await api.get('/openings'); // Public route, only gets active openings
      setOpenings(res.data);
    } catch (error) {
      console.error('Error fetching openings:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen relative font-sans bg-primary text-white overflow-hidden"
    >
      <section className="relative pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Briefcase size={18} /> Careers & Openings
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Explore current openings</h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              Browse our hiring pipeline and click through to the official company listing for each role.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 text-secondary animate-spin" />
            </div>
          ) : openings.length === 0 ? (
            <div className="text-center py-20 text-gray-400 border border-white/10 bg-white/5 rounded-3xl">
              <p className="text-xl">No active job openings at the moment.</p>
              <p className="mt-2">Please check back later!</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {openings.map((opening) => (
                <div key={opening._id} className="group rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:border-secondary/40 hover:bg-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold">{opening.companyName}</span>
                        <h2 className="mt-4 text-2xl font-bold text-white reveal">{opening.title}</h2>
                      </div>
                      <div className="p-3 rounded-2xl bg-secondary/10 text-secondary shrink-0">
                        <Briefcase size={22} />
                      </div>
                    </div>
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">{opening.description}</p>
                  </div>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <a
                      href={opening.redirect_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary/20"
                    >
                      View Opening
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-gray-300">
            <h3 className="text-xl font-semibold text-white mb-3">How it works</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Click any role to visit the official company career page.</li>
              <li>• Each opening redirects to the full details and application form.</li>
              <li>• We update this list regularly with new roles across tech, product, and internship tracks.</li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CareersPage;
