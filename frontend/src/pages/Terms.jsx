import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
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
          Terms of <span className="text-secondary">Service</span>
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using CodeSip, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Platform Usage Rules</h2>
            <p>
              Users must follow these rules when using our platform:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>No misuse of the platform or its features.</li>
              <li>No scraping, data mining, or unauthorized automated access.</li>
              <li>No attempts to interfere with the platform's security or integrity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p>
              All content, logos, designs, and code on this platform are the intellectual property of CodeSip Technology LLP. You may not use, reproduce, or distribute our content without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p>
              CodeSip is provided "as is" without any warranties. We are not liable for any damages arising from your use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Amravati or Navi Mumbai, Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
            <p>
              For any questions regarding these terms, please contact us at:
              <br />
              <span className="text-secondary font-bold">hr@codesip.in</span>
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

export default Terms;
