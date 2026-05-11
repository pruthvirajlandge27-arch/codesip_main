import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Zap, Shield, CheckCircle2, Send, Code, Database, Globe, Layers } from 'lucide-react';
import api from '../api/axios';
const ManforcePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    roleRequired: '',
    message: ''
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
      // Map to ServiceRequest model
      const payload = {
        name: formData.companyName,
        email: formData.email,
        serviceType: 'consulting',
        budget: 'Manforce Staffing',
        details: `Phone: ${formData.phone}\nRole Required: ${formData.roleRequired}\nMessage: ${formData.message}`
      };

      const response = await api.post('/services', payload);

      if (response.status === 201) {
        setIsSuccess(true);
        setFormData({ companyName: '', email: '', phone: '', roleRequired: '', message: '' });
      }
    } catch (error) {
      console.error('API Error:', error.response?.data?.message || error.message);
      alert('Error submitting request! Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const features = [
    {
      title: "Top-Tier Talent",
      icon: <Users className="w-8 h-8 text-accent" />,
      desc: "Access a pre-vetted pool of senior developers, engineers, and IT professionals ready to integrate into your team."
    },
    {
      title: "Flexible Engagement",
      icon: <Briefcase className="w-8 h-8 text-secondary" />,
      desc: "Scale your team up or down on demand. Choose from full-time, part-time, or project-based hiring models."
    },
    {
      title: "Rapid Onboarding",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      desc: "Skip the lengthy hiring process. Our resources can be onboarded and productive within 48 hours."
    },
    {
      title: "Zero Liability",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      desc: "We handle payroll, compliance, and HR overheads so you can focus strictly on project execution."
    }
  ];

  const talents = [
    { name: "Frontend Developers", icon: <Globe className="w-6 h-6" />, stack: "React, Next.js, Vue, Angular" },
    { name: "Backend Engineers", icon: <Database className="w-6 h-6" />, stack: "Node.js, Python, Java, Go" },
    { name: "Full Stack Developers", icon: <Layers className="w-6 h-6" />, stack: "MERN, MEAN, Django, Spring" },
    { name: "AI & ML Engineers", icon: <Code className="w-6 h-6" />, stack: "TensorFlow, PyTorch, OpenAI API" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0A0F1C] relative overflow-hidden font-sans">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#00B4D8]/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium mb-6">
            IT Staff Augmentation & Outsourcing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight leading-tight">
            Scale Your Tech Team <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Without the Overhead</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empower your projects with our dedicated IT workforce. We provide elite engineers and developers who seamlessly integrate into your workflows and drive your business forward.
          </p>
        </motion.div>

        {/* Why Choose Manforce Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 reveal">Why Choose CodeSip Manforce?</h2>
            <p className="text-gray-400">Streamline your hiring process and focus on what matters most.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 hover:border-white/10"
              >
                <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Talent Profiles Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">
                Hire Specialized <span className="text-accent">Talent</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you need a single expert to fill a skill gap or an entire dedicated development team, we have the specialized talent ready to deploy.
              </p>
              <ul className="space-y-4">
                {[
                  "Stringent vetting and coding assessments",
                  "Cultural fit evaluation",
                  "Continuous upskilling and training",
                  "Dedicated account manager for support"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {talents.map((talent, idx) => (
                <div key={idx} className="bg-[#0F172A] border border-white/5 p-5 rounded-xl flex flex-col gap-3 hover:border-accent/30 transition-colors">
                  <div className="text-gray-300 bg-white/5 w-fit p-2 rounded-lg">
                    {talent.icon}
                  </div>
                  <h4 className="text-white font-semibold">{talent.name}</h4>
                  <p className="text-xs text-gray-500">{talent.stack}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Request Talent Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 reveal">Request Talent</h2>
              <p className="text-gray-400 text-sm">Tell us about your hiring needs and we'll match you with the right experts within 48 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 focus-within:text-accent">
                  <label className="text-[13px] font-medium text-gray-400">Company Name</label>
                  <input 
                    type="text" 
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full h-12 bg-black/20 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="flex flex-col gap-1.5 focus-within:text-accent">
                  <label className="text-[13px] font-medium text-gray-400">Work Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 bg-black/20 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600"
                    placeholder="john@acmecorp.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 focus-within:text-accent">
                  <label className="text-[13px] font-medium text-gray-400">Phone Number</label>
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
                <div className="flex flex-col gap-1.5 focus-within:text-accent">
                  <label className="text-[13px] font-medium text-gray-400">Role Required</label>
                  <select 
                    name="roleRequired"
                    required
                    value={formData.roleRequired}
                    onChange={handleChange}
                    className="w-full h-12 bg-black/20 border border-white/5 rounded-xl px-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-[#0F172A]">Select role...</option>
                    <option value="Frontend Developer" className="bg-[#0F172A]">Frontend Developer</option>
                    <option value="Backend Developer" className="bg-[#0F172A]">Backend Developer</option>
                    <option value="Full Stack Developer" className="bg-[#0F172A]">Full Stack Developer</option>
                    <option value="UI/UX Designer" className="bg-[#0F172A]">UI/UX Designer</option>
                    <option value="DevOps Engineer" className="bg-[#0F172A]">DevOps Engineer</option>
                    <option value="AI/ML Engineer" className="bg-[#0F172A]">AI/ML Engineer</option>
                    <option value="Other" className="bg-[#0F172A]">Other / Multiple</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400">Project Requirements</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px] bg-black/20 border border-white/5 rounded-xl p-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600 resize-y"
                  placeholder="Describe your tech stack, duration, and specific resource needs..."
                ></textarea>
              </div>

              {isSuccess && (
                <div className="bg-secondary/10 border border-secondary/30 text-secondary px-4 py-3 rounded-xl text-sm flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} />
                  Request received successfully! Our team will contact you shortly.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`mt-2 w-full h-12 bg-gradient-to-r from-accent to-secondary hover:opacity-90 text-primary font-bold text-[15px] rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Request Talent'} 
                {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ManforcePage;
