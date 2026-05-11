import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Database, Coffee, Link as LinkIcon, CheckCircle2, Lock } from 'lucide-react';
import NetworkBackground from '../components/ui/NetworkBackground';
import DottedWaveBackground from '../components/ui/DottedWaveBackground';

const InternshipsPage = () => {
  // Ensure page loads at top perfectly
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const domains = [
    {
      title: "Cybersecurity",
      icon: <Shield size={28} className="text-secondary" />,
      projects: [
        "Phishing Detection System",
        "Secure File Sharing App",
        "Fake Website Detector",
        "Intrusion Detection System",
        "Password Analyzer Tool"
      ]
    },
    {
      title: "Java Fullstack Development",
      icon: <Coffee size={28} className="text-secondary" />,
      projects: [
        "Resume Analyzer",
        "Voting System",
        "Finance Tracker",
        "Ride Sharing Platform",
        "Scholarship Portal"
      ]
    },
    {
      title: "Python Full Stack",
      icon: <Database size={28} className="text-accent" />,
      projects: [
        "E-commerce Dashboard",
        "Task Automation App",
        "Social Media Analytics",
        "Inventory Management System",
        "Booking Platform"
      ]
    },
    {
      title: "Blockchain",
      icon: <LinkIcon size={28} className="text-accent" />,
      projects: [
        "Decentralized Notes System",
        "Health Record Storage",
        "Identity Verification System",
        "Voting Platform",
        "Certificate Validation System"
      ]
    },
    {
      title: "Full Stack Web Development",
      icon: <Shield size={28} className="text-secondary" />,
      projects: [
        "Modern Portfolio Site",
        "SaaS Landing Page",
        "Real-time Chat App",
        "Booking & Scheduling App",
        "Progress Tracker Dashboard"
      ]
    },
    {
      title: "Application Development",
      icon: <Coffee size={28} className="text-secondary" />,
      projects: [
        "Mobile Utility App",
        "Productivity Planner",
        "Customer Feedback Portal",
        "Event Management App",
        "Smart Task Organizer"
      ]
    }
  ];

  const reasons = [
    { title: "Real-world projects", desc: "Gain hands-on experience building industry-standard applications." },
    { title: "Industry mentorship", desc: "Learn directly from experienced tech professionals." },
    { title: "Certificate of completion", desc: "Validate your skills with a verified domain certificate." },
    { title: "Portfolio building", desc: "Deploy live applications to showcase in your resume." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-primary min-h-screen relative font-sans text-[#EAEAEA]"
    >
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <NetworkBackground />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,255,136,0.3)]">
            Industry-Ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Internships</span>
          </h1>
          <p className="text-xl text-[#A0A0A0] leading-relaxed max-w-2xl mx-auto font-medium">
            Work on real-world projects, gain practical experience, and build a strong portfolio.
          </p>
        </motion.div>
      </section>

      {/* 2. INTERNSHIP DOMAINS GRID */}
      <section className="py-24 relative overflow-hidden bg-[#0A0F1C]">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <DottedWaveBackground />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {domains.map((domain, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[16px] p-6 hover:-translate-y-2 hover:scale-[1.03] hover:border-secondary/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(0,255,136,0.15)] transition-all duration-500 group flex flex-col items-start relative overflow-hidden h-[450px]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide font-heading mb-4">{domain.title}</h3>
                
                <ul className="space-y-4 w-full relative z-0">
                  {domain.projects.map((project, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-[#A0A0A0] font-medium tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                      {project}
                    </li>
                  ))}
                </ul>

                {/* 4. LOCKED CONTENT FADE */}
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/90 to-transparent flex flex-col items-center justify-end pb-6 px-4 z-10 transition-colors duration-300 group-hover:from-[#111827]">
                   <div className="bg-primary/95 border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-lg backdrop-blur-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:border-secondary/30 cursor-default">
                     <Lock size={15} className="text-secondary" />
                     <span className="text-[12px] md:text-[13px] font-semibold text-white tracking-wide">Unlock details upon enrollment</span>
                   </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. WHY INTERNSHIP SECTION */}
      <section className="py-24 border-y border-white/5 relative bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-4xl md:text-5xl font-bold text-white font-heading tracking-tight"
           >
             Why Join Our <span className="text-accent drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]">Internship?</span>
           </motion.h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
             {reasons.map((reason, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-4 bg-[#1E293B]/40 border border-white/5 p-8 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:border-white/10 hover:bg-[#1E293B]/80 hover:shadow-[0_4px_25px_rgba(0,255,136,0.1)] transition-all">
                  <div className="text-secondary bg-secondary/10 p-3.5 rounded-full shadow-inner mb-2 border border-secondary/20">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-white font-bold text-[18px]">{reason.title}</h4>
                  <p className="text-[#A0A0A0] text-[14px] leading-relaxed">{reason.desc}</p>
                </div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0B0F19] to-[#050810]">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <NetworkBackground />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Journey Today</span>
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
             <button className="px-8 py-4 bg-accent hover:bg-[#0096B4] text-primary text-[16px] font-bold rounded-xl shadow-[0_4px_20px_rgba(0,180,216,0.4)] hover:shadow-[0_8px_35px_rgba(0,180,216,0.6)] transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto border border-transparent hover:border-white/20">
               Apply for Internship <ArrowRight size={20} />
             </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default InternshipsPage;
