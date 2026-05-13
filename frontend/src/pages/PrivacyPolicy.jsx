import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-primary pt-32 pb-20 px-4"
    >
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-heading">
          Privacy <span className="text-accent">Policy</span>
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Data We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This includes:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Name and Contact Data (such as name, email address, and phone number).</li>
              <li>Message content from contact or signup forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
            <p>
              We use the information we collect or receive to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Contact you regarding your inquiries.</li>
              <li>Provide, operate, and maintain our platform.</li>
              <li>Improve, personalize, and expand our services.</li>
              <li>Develop new products, services, features, and functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services</h2>
            <p>
              We use third-party services to help us operate our platform, including:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Vercel for hosting and analytics.</li>
              <li>Any analytics services integrated to track user engagement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing</h2>
            <p>
              We do not sell your personal data to third parties. Your information is strictly used for providing and improving CodeSip services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
            <p>
              This Privacy Policy is governed by and construed in accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (Indian IT Rules 2021) and the Information Technology Act, 2000.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
              <br />
              <span className="text-accent font-bold">hr@codesip.in</span>
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 text-sm text-gray-500">
            Last Updated: May 2025
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
