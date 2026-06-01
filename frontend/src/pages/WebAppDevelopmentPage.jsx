import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Globe, Layout, Server, Database, Smartphone, ShieldCheck } from 'lucide-react';
import api from '../api/axios';

const WebAppDevelopmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Map the form data to the ServiceRequest backend model
      const payload = {
        name: formData.name,
        email: formData.email,
        serviceType: 'web_development', // Matches model enum
        budget: formData.budget || 'Not specified',
        details: `Phone: ${formData.phone}\nRequirements: ${formData.requirements}`
      };

      const response = await api.post('/services', payload);

      if (response.status === 201) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', budget: '', requirements: '' });
      }
    } catch (error) {
      console.error('API Error:', error.response?.data?.message || error.message);
      alert('Error submitting form! Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const servicesList = [
    {
      title: "Custom Web Applications",
      icon: <Globe className="w-8 h-8 text-accent" />,
      desc: "Tailored full-stack systems designed for speed, security, and exceptional user experience using modern technology stacks."
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8 text-secondary" />,
      desc: "Cross-platform mobile applications built to deliver native experiences on both iOS and Android devices."
    },
    {
      title: "Complete Hosting & Deployment",
      icon: <Server className="w-8 h-8 text-purple-400" />,
      desc: "Professional deployment with continuous integration (CI/CD), secure SSL, database backups, and high-performance server hosting."
    },
    {
      title: "E-Commerce & SaaS Platforms",
      icon: <Layout className="w-8 h-8 text-pink-400" />,
      desc: "Scalable shopping carts, subscription payment integration, and customer management portals with real-time analytics."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0A0F1C] relative overflow-hidden font-sans">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00B4D8]/10 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wide uppercase inline-block mb-4">
            Production Ready Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading tracking-tight leading-tight">
            Website & Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Development</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide real world website development solutions with proper hosting, domains, secure setup, and ongoing maintenance. Let us bring your ideas to life with high-performance systems.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {servicesList.map((srv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-300">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 md:p-12 rounded-3xl mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise Grade Standards</h2>
            <p className="text-gray-400">Everything is planned, built, and optimized to work seamlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "High Performance & SEO Optimized Structures",
              "Production-Ready Hosting (AWS / Vercel / VPS Setup)",
              "SSL Certificates & Advanced Data Encryption",
              "Database Integration & Secure Backups",
              "Clean, Responsive Interfaces (Mobile-First)",
              "Ongoing Server Maintenance & Support"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <ShieldCheck className="text-secondary w-6 h-6 flex-shrink-0" />
                <span className="text-gray-200 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Launch Your Project</h2>
              <p className="text-gray-400 text-sm">Tell us about your requirements and we will build a custom solution for you.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 focus-within:text-accent">
                  <label className="text-[13px] font-medium text-gray-400">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-12 bg-black/20 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5 focus-within:text-accent">
                  <label className="text-[13px] font-medium text-gray-400">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 bg-black/20 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 bg-black/20 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400">Approximate Budget (INR)</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-12 bg-black/20 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all appearance-none"
                >
                  <option value="" disabled className="bg-[#0F172A]">Select budget range...</option>
                  <option value="Under 15,000" className="bg-[#0F172A]">Under ₹15,000</option>
                  <option value="15,000 - 40,000" className="bg-[#0F172A]">₹15,000 - ₹40,000</option>
                  <option value="40,000 - 80,000" className="bg-[#0F172A]">₹40,000 - ₹80,000</option>
                  <option value="Above 80,000" className="bg-[#0F172A]">₹80,000+</option>
                  <option value="Not Sure" className="bg-[#0F172A]">Not Sure / Discus Later</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400">Project Requirements & Scope</label>
                <textarea
                  name="requirements"
                  required
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full min-h-[120px] bg-black/20 border border-white/5 rounded-xl p-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600 resize-y"
                  placeholder="Describe what kind of website/app you want to build, details about your business, and hosting preferences..."
                ></textarea>
              </div>

              {isSuccess && (
                <div className="bg-secondary/10 border border-secondary/30 text-secondary px-4 py-3 rounded-xl text-sm flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} />
                  Project inquiry submitted successfully! Our development team will contact you.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-2 w-full h-12 bg-gradient-to-r from-accent to-secondary hover:opacity-90 text-primary font-bold text-[15px] rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default WebAppDevelopmentPage;
