import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';


const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-primary">
      <nav className="fixed w-full z-50 top-0 bg-primary/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center pr-6">
              <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
                <img src={logo} alt="CodeSip" className="h-8 md:h-10 w-auto object-contain rounded-md shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent tracking-tight font-heading hidden sm:block">
                  CodeSip
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Services', path: '/services', dropdown: [
                    { name: 'Final Year Project', path: '/services/final-year-project' },
                    { name: 'Manforce', path: '/services/manforce' }
                  ]},
                  { name: 'Internships', path: '/internships', dropdown: [
                    { type: 'header', name: 'Engineering' },
                    { name: 'Frontend Development', path: '/internships/frontend' },
                    { name: 'Backend Development', path: '/internships/backend' },
                    { name: 'Full Stack Development', path: '/internships/full-stack' },
                    { name: 'AI & Machine Learning', path: '/internships/ai-ml' },
                    { name: 'Data Science & Analytics', path: '/internships/data-science' },
                    { type: 'header', name: 'Management' },
                    { name: 'MBA Internship', path: '/internships/mba' },
                    { name: 'Finance', path: '/internships/finance' },
                    { name: 'Marketing', path: '/internships/marketing' }
                  ]},
                  { name: 'Careers', path: '/careers', dropdown: [
                    { name: 'Openings', path: '/careers' }
                  ]},
                  { name: 'MOUs & Collabs', path: '/mous-and-collabs' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  item.dropdown ? (
                    <div key={item.name} className="relative group">
                      <Link to={item.path} className="relative px-3 py-2 rounded-md text-[15px] font-medium text-gray-300 hover:text-white transition-colors duration-300">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 shadow-[0_0_8px_rgba(0,255,136,0.6)]"></span>
                      </Link>
                      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute left-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#09101f] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl overflow-hidden py-2">
                        {item.dropdown.map(subItem => (
                          subItem.type === 'header' ? (
                            <div key={subItem.name} className="px-4 py-2 text-xs font-bold tracking-wider text-accent uppercase mt-1 flex items-center gap-2 first:mt-0 opacity-90 border-b border-white/5 pb-1 mb-1">
                              {subItem.name}
                            </div>
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-[14px] text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className="relative group px-3 py-2 rounded-md text-[15px] font-medium text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 shadow-[0_0_8px_rgba(0,255,136,0.6)]"></span>
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        <Outlet />
      </main>
      <footer className="relative bg-gradient-to-b from-[#111827] to-[#0A0F1C] pt-24 pb-8 border-t border-white/5 font-sans overflow-hidden">
        {/* Subtle Premium Background Enhancements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent shadow-[0_0_20px_rgba(0,180,216,0.5)] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            
            {/* COLUMN 1: Brand */}
            <div className="flex flex-col">
              <Link to="/" className="mb-5 block w-fit">
                <img src={logo} alt="CodeSip" loading="lazy" className="h-7 md:h-9 w-auto object-contain rounded-md" />
              </Link>
              <p className="text-[#A0A0A0] text-[15px] leading-relaxed max-w-xs font-medium">
                Building AI-powered solutions for the future. Elevating modern infrastructure through intelligent automation.
              </p>
            </div>

            {/* COLUMN 2: Navigation */}
            <div className="flex flex-col">
              <h4 className="text-[17px] font-semibold text-white mb-6 tracking-wide">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Services', path: '/services' },
                  { name: 'Internships', path: '/internships' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'MOUs & Collabs', path: '/mous-and-collabs' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-[15px] text-[#A0A0A0] hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] block hover:translate-x-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: Services / Products */}
            <div className="flex flex-col">
              <h4 className="text-[17px] font-semibold text-white mb-6 tracking-wide">Our Services</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Final Year Projects', path: '/services/final-year-project' },
                  { name: 'Manforce Staffing', path: '/services/manforce' },
                  { name: 'Internship Programs', path: '/internships' },
                  { name: 'Web & App Development', path: '/services' }
                ].map((service) => (
                  <li key={service.name}>
                    <Link to={service.path} className="text-[15px] text-[#A0A0A0] hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] block hover:translate-x-1">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: Contact Info */}
            <div className="flex flex-col">
              <h4 className="text-[17px] font-semibold text-white mb-6 tracking-wide">Connect</h4>
              <ul className="space-y-4 mb-8">
                <li>
                  <a href="mailto:hr@codesip.in" className="text-[15px] text-[#A0A0A0] hover:text-accent transition-colors duration-200 block">
                    hr@codesip.in
                  </a>
                </li>
                <li>
                  <span className="text-[15px] text-[#A0A0A0] block">
                    Pune, Maharashtra, India
                  </span>
                </li>
              </ul>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[#A0A0A0] hover:text-secondary hover:border-secondary/40 hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
                  <LinkedinIcon />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[#A0A0A0] hover:text-accent hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(0,180,216,0.2)] transition-all duration-300">
                  <TwitterIcon />
                </a>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-[#A0A0A0]">
            <p>&copy; 2026 CodeSip. All rights reserved.</p>
            <div className="flex gap-8 font-medium">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
