import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Code, Database, Smartphone, Globe } from 'lucide-react';
import api from '../api/axios';
const FinalYearProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
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
        serviceType: 'other', // From enum: ['web_development', 'ai_automation', 'consulting', 'other']
        budget: 'Final Year Project',
        details: `Phone: ${formData.phone}\nProject Type: ${formData.projectType}\nRequirements: ${formData.requirements}`
      };

      const response = await api.post('/services', payload);

      if (response.status === 201) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', projectType: '', requirements: '' });
      }
    } catch (error) {
      console.error('API Error:', error.response?.data?.message || error.message);
      alert('Error submitting form! Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const projectCategories = [
    {
      title: "Web Applications",
      icon: <Globe className="w-8 h-8 text-accent" />,
      desc: "Full-stack web apps using MERN, Next.js, or React. Real-time features, dashboards, and scalable architectures."
    },
    {
      title: "Mobile Applications",
      icon: <Smartphone className="w-8 h-8 text-secondary" />,
      desc: "Cross-platform mobile apps using React Native. E-commerce, social networking, and utility apps."
    },
    {
      title: "AI & Machine Learning",
      icon: <Code className="w-8 h-8 text-purple-400" />,
      desc: "Computer vision, NLP, predictive analysis, and intelligent automation systems using Python and TensorFlow."
    },
    {
      title: "Data Analytics & IoT",
      icon: <Database className="w-8 h-8 text-pink-400" />,
      desc: "Smart hardware integration, sensor data processing, and visual analytics dashboards."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0A0F1C] relative overflow-hidden font-sans">
      {/* Background elements */}
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading tracking-tight">
            Final Year <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Projects</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your academic portfolio with industry-grade final year projects. We provide complete guidance, development support, and documentation to help you score top grades.
          </p>
        </motion.div>

        {/* Project Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {projectCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What You Get Section */}
        <motion.div
          initial={{ opacity: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 md:p-12 rounded-3xl mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 reveal">What's Included?</h2>
            <p className="text-gray-400">Everything you need for a successful project submission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Complete Source Code with Comments",
              "Project Report & Documentation",
              "Database Design & Architecture",
              "Setup & Installation Guide",
              "Presentation PPT Templates",
              "1-on-1 Code Explanation Session"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary w-6 h-6 flex-shrink-0" />
                <span className="text-gray-200 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 reveal">Discuss Your Project</h2>
              <p className="text-gray-400 text-sm">Drop your details and we'll get back to you with project ideas.</p>
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
                <label className="text-[13px] font-medium text-gray-400">Preferred Technology</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full h-12 bg-black/20 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all appearance-none"
                >
                  <option value="" disabled className="bg-[#0F172A]">Select technology...</option>
                  <option value="MERN Stack" className="bg-[#0F172A]">MERN Stack Web App</option>
                  <option value="React Native" className="bg-[#0F172A]">React Native Mobile App</option>
                  <option value="Machine Learning" className="bg-[#0F172A]">Machine Learning / AI</option>
                  <option value="IoT" className="bg-[#0F172A]">IoT & Hardware</option>
                  <option value="Other" className="bg-[#0F172A]">Other / Not Sure</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400">Project Requirements / Ideas</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full min-h-[120px] bg-black/20 border border-white/5 rounded-xl p-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600 resize-y"
                  placeholder="Tell us what kind of project you have in mind..."
                ></textarea>
              </div>

              {isSuccess && (
                <div className="bg-secondary/10 border border-secondary/30 text-secondary px-4 py-3 rounded-xl text-sm flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} />
                  Form submitted successfully! We'll contact you soon.
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

export default FinalYearProjectPage;
