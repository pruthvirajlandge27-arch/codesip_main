import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, Suspense } from 'react';

// Eagerly loaded components
import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import CookieBanner from './components/CookieBanner';

// Lazy loaded pages
const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const InternshipsPage = React.lazy(() => import('./pages/InternshipsPage'));
const CareersPage = React.lazy(() => import('./pages/CareersPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const FinalYearProjectPage = React.lazy(() => import('./pages/FinalYearProjectPage'));
const ManpowerSupplyPage = React.lazy(() => import('./pages/ManforcePage'));
const WebAppDevelopmentPage = React.lazy(() => import('./pages/WebAppDevelopmentPage'));
const MousCollabsPage = React.lazy(() => import('./pages/MousCollabsPage'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const InternshipDetailsPage = React.lazy(() => import('./pages/InternshipDetailsPage'));
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Smooth aesthetic loader to prevent jarring flashes
const PageLoader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050B14]">
    <style>
      {`
        @keyframes subtleFadeIn {
          0% { opacity: 0; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-delayed-fade {
          animation: subtleFadeIn 0.4s ease-in-out forwards;
        }
      `}
    </style>
    <div className="animate-delayed-fade flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute w-16 h-16 border-2 border-t-secondary border-r-transparent border-b-accent border-l-transparent rounded-full animate-spin"></div>
        {/* Inner pulsing core */}
        <div className="w-6 h-6 bg-gradient-to-tr from-secondary to-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(0,255,136,0.5)]"></div>
      </div>
      <div className="mt-6 text-gray-400 font-mono text-xs tracking-[0.3em] animate-pulse">
        LOADING...
      </div>
    </div>
  </div>
);

const DynamicTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    let title = "CodeSip | Gaav se Global tak";
    
    if (path.startsWith('/services')) title = "Services | CodeSip";
    else if (path.startsWith('/internships')) title = "Internships | CodeSip";
    else if (path.startsWith('/careers')) title = "Careers | CodeSip";
    else if (path.startsWith('/contact')) title = "Contact Us | CodeSip";
    else if (path.startsWith('/mous-and-collabs')) title = "MOUs & Collabs | CodeSip";
    else if (path.startsWith('/admin')) title = "Admin Dashboard | CodeSip";

    document.title = title;
  }, [location.pathname]);

  return null;
};

const ScrollEffects = () => {
  const location = useLocation();

  useEffect(() => {
    // 4. SCROLL-TRIGGERED FADE IN
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    
    // Slight timeout to ensure React has rendered the DOM
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    }, 100);

    return () => io.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    // 5. NAVBAR SCROLL GLASS
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollEffects />
      <DynamicTitle />
      <ScrollToTopButton />
      <CookieBanner />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/final-year-project" element={<FinalYearProjectPage />} />
            <Route path="services/website-app-development" element={<WebAppDevelopmentPage />} />
            <Route path="services/manpower-supply" element={<ManpowerSupplyPage />} />
            <Route path="internships" element={<InternshipsPage />} />
            <Route path="internships/:domain" element={<InternshipDetailsPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="mous-and-collabs" element={<MousCollabsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
          
          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
