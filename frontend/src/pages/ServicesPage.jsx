import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, GraduationCap, Users, Video, Briefcase, Zap } from 'lucide-react';
import NetworkBackground from '../components/ui/NetworkBackground';
import DottedWaveBackground from '../components/ui/DottedWaveBackground';

const ServicesPage = () => {
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

  const services = [
    {
      title: "Internships",
      desc: "Hands-on industry internships designed to build real-world skills and experience.",
      icon: <Briefcase size={28} className="text-secondary" />
    },
    {
      title: "Training Sessions",
      desc: "Interactive sessions covering trending technologies and practical learning.",
      icon: <GraduationCap size={28} className="text-accent" />
    },
    {
      title: "Project Development",
      desc: "End-to-end project guidance from idea to deployment.",
      icon: <Code size={28} className="text-secondary" />
    },
    {
      title: "Website & App Development",
      desc: "Custom web and mobile solutions for startups and institutions.",
      icon: <Monitor size={28} className="text-accent" />
    },
    {
      title: "Webinars & Seminars",
      desc: "Expert-led sessions to share knowledge, trends, and innovations.",
      icon: <Video size={28} className="text-secondary" />
    },
    {
      title: "Manpower Supply (Vendor)",
      desc: "IT Staff Augmentation & Outsourcing. We provide elite engineers and developers who seamlessly integrate into your workflows.",
      icon: <Users size={28} className="text-accent" />,
      path: "/services/manpower-supply"
    }
  ];

  const features = [
    { title: "Industry-level projects", icon: <Code size={24} /> },
    { title: "Real-world exposure", icon: <Briefcase size={24} /> },
    { title: "Expert mentorship", icon: <Users size={24} /> },
    { title: "Modern tech stack", icon: <Zap size={24} /> },
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,180,216,0.3)]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Services</span>
          </h1>
          <p className="text-xl text-[#A0A0A0] leading-relaxed max-w-2xl mx-auto font-medium">
            Empowering students, startups, and institutions with real-world tech solutions.
          </p>
        </motion.div>
      </section>

      {/* 2. SERVICES GRID */}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[16px] p-8 hover:-translate-y-2 hover:scale-[1.03] hover:border-accent/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(0,180,216,0.15)] transition-all duration-500 group flex flex-col items-start gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide font-heading">{service.title}</h3>
                <p className="text-[#A0A0A0] leading-relaxed text-[15px] flex-grow">
                  {service.desc}
                </p>
                <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURE HIGHLIGHT SECTION */}
      <section className="py-24 border-y border-white/5 relative bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading tracking-tight reveal">Why <span className="text-secondary drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">Choose Us</span></h2>
              <p className="text-[#A0A0A0] text-[16px] leading-[1.7]">
                We combine industry expertise with cutting-edge technology to deliver solutions that drive real results.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#1E293B] border border-white/5 p-6 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:border-white/10 hover:shadow-[0_4px_25px_rgba(0,180,216,0.2)] transition-all">
                  <div className="text-accent bg-accent/10 p-3 rounded-lg shadow-inner">
                    {feature.icon}
                  </div>
                  <span className="text-[#EAEAEA] font-medium text-[16px]">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-[#111827]">
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
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Get Started?</span>
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
             <button className="px-8 py-4 bg-accent hover:bg-[#0096B4] text-primary text-[16px] font-bold rounded-xl shadow-[0_4px_20px_rgba(0,180,216,0.4)] hover:shadow-[0_8px_35px_rgba(0,180,216,0.6)] transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto border border-transparent hover:border-white/20">
               Contact Us <ArrowRight size={20} />
             </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
