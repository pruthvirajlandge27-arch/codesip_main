import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, GraduationCap, Building2, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MousCollabsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerships = [
    {
      title: "Academic Institutions",
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      desc: "Partnering with universities and colleges to bridge the gap between academic curriculum and industry expectations through specialized workshops and training programs."
    },
    {
      title: "Corporate Enterprises",
      icon: <Building2 className="w-8 h-8 text-secondary" />,
      desc: "Collaborating with tech giants and enterprises to provide our students with premium internship opportunities and exclusive hiring drives."
    },
    {
      title: "Global Tech Communities",
      icon: <Globe2 className="w-8 h-8 text-yellow-400" />,
      desc: "Engaging with open-source communities and tech forums to foster innovation, hackathons, and collaborative tech development on a global scale."
    }
  ];

  const benefits = [
    "Exclusive Access to Pre-Vetted Talent",
    "Co-branded Certification Programs",
    "Customized Training Modules",
    "Joint Research & Development Projects",
    "Sponsorship and Branding Opportunities",
    "Direct Pipeline for Campus Placements"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0A0F1C] relative overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[10%] w-[50%] h-[50%] bg-[#00B4D8]/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 mt-10"
        >
          <div className="w-20 h-20 mx-auto bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
            <Handshake className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight leading-tight">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">MOUs & Collabs</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At CodeSip, we believe in the power of synergy. We are constantly expanding our network by signing Memorandums of Understanding (MOUs) with top colleges, universities, and industry leaders to create unparalleled opportunities for the next generation of tech talent.
          </p>
        </motion.div>

        {/* Areas of Collaboration Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">Areas of <span className="text-accent">Partnership</span></h2>
            <p className="text-gray-400">How we work together to build the future.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,180,216,0.1)] group"
              >
                <div className="mb-8 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/10">
                  {partner.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{partner.title}</h3>
                <p className="text-gray-400 leading-relaxed">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits of Partnering With Us */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0F172A] to-[#0A0F1C] border border-white/10 rounded-3xl p-8 md:p-14 mb-24 relative overflow-hidden"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">
                Why Partner With <span className="text-secondary">CodeSip?</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                We bring a wealth of industry expertise directly to your campus or organization. Our collaborative models are designed to be mutually beneficial, ensuring sustainable growth and continuous innovation.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors border border-white/10 hover:border-white/30">
                Discuss a Partnership <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3 backdrop-blur-sm hover:border-secondary/50 transition-colors">
                    <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial / Impact Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-accent/20 via-primary to-secondary/20 border border-white/10 rounded-3xl p-10 md:p-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 reveal">Ready to empower your students or scale your team?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Join the growing network of 50+ colleges and numerous tech partners who trust CodeSip to deliver excellence. Let's sign an MOU and start building together.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center h-14 px-8 bg-gradient-to-r from-accent to-secondary hover:opacity-90 text-primary font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]">
            Become a Partner Today
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default MousCollabsPage;
