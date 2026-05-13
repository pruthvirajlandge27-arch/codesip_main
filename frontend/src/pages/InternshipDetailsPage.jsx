import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Briefcase, FileText } from 'lucide-react';
import api from '../api/axios';

const domainDetails = {
  'frontend': { title: 'Frontend Development', desc: 'Master React, Vue, and modern CSS to build stunning user interfaces and web applications.' },
  'backend': { title: 'Backend Development', desc: 'Build scalable APIs and robust database architectures using Node.js, Python, or Java.' },
  'full-stack': { title: 'Full Stack Development', desc: 'Become a complete developer by mastering both frontend and backend technologies.' },
  'ai-ml': { title: 'AI & Machine Learning', desc: 'Dive deep into neural networks, data modeling, and intelligent automation.' },
  'data-science': { title: 'Data Science & Analytics', desc: 'Extract insights from complex datasets and build predictive models.' },
  'mba': { title: 'MBA & Management', desc: 'Gain hands-on experience in operations, strategy, and business management.' },
  'finance': { title: 'Finance', desc: 'Work on financial modeling, market research, and corporate finance.' },
  'marketing': { title: 'Digital Marketing', desc: 'Master SEO, content strategy, and data-driven marketing campaigns.' }
};

const InternshipDetailsPage = () => {
  const { domain } = useParams();
  const details = domainDetails[domain] || { title: 'Internship Program', desc: 'Join our comprehensive internship program and gain real-world experience.' };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [domain]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Use FormData for file upload
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('domain', details.title);
      if (formData.resume) {
        data.append('resume', formData.resume);
      }
      data.append('coverLetter', formData.coverLetter);

      const response = await api.post('/applications', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', resume: null, coverLetter: '' });
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0A0F1C] relative overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00B4D8]/10 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium mb-6">
            Internship Application
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading tracking-tight capitalize">
            {details.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {details.desc}
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="relative z-10"
        >
          <div className="bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Briefcase className="text-accent w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white reveal">Apply Now</h2>
                <p className="text-gray-400 text-sm mt-1">Fill out the details below to submit your application.</p>
              </div>
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
                  <label className="text-[13px] font-medium text-gray-400">Upload Resume</label>
                  <div className="relative">
                    <input 
                      type="file" 
                      name="resume"
                      ref={fileInputRef}
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div
                      className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-[14px] text-gray-400 flex items-center gap-3 transition-all text-left"
                    >
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="flex-grow truncate">
                        {formData.resume ? formData.resume.name : 'Choose Resume File...'}
                      </span>
                      <span className="text-[10px] bg-accent/20 text-accent px-2 py-1 rounded font-bold border border-accent/30">
                        BROWSE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 focus-within:text-accent">
                <label className="text-[13px] font-medium text-gray-400">Cover Letter / Why should we hire you? (Optional)</label>
                <textarea 
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="w-full min-h-[120px] bg-black/20 border border-white/5 rounded-xl p-4 text-[14px] text-white focus:outline-none focus:border-accent/80 transition-all placeholder-gray-600 resize-y"
                  placeholder="Tell us about your skills and why you are a good fit..."
                ></textarea>
              </div>

              {isSuccess && (
                <div className="bg-secondary/10 border border-secondary/30 text-secondary px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Application submitted successfully! We'll review your profile soon.
                </div>
              )}

              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                  {errorMsg}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`mt-4 w-full h-12 bg-gradient-to-r from-accent to-secondary hover:opacity-90 text-primary font-bold text-[15px] rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,180,216,0.3)]'}`}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'} 
                {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InternshipDetailsPage;
