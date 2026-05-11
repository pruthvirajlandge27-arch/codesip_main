import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import InternshipsPage from './pages/InternshipsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import FinalYearProjectPage from './pages/FinalYearProjectPage';
import ManforcePage from './pages/ManforcePage';
import MousCollabsPage from './pages/MousCollabsPage';
import InternshipDetailsPage from './pages/InternshipDetailsPage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

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
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/final-year-project" element={<FinalYearProjectPage />} />
          <Route path="services/manforce" element={<ManforcePage />} />
          <Route path="internships" element={<InternshipsPage />} />
          <Route path="internships/:domain" element={<InternshipDetailsPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="mous-and-collabs" element={<MousCollabsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
        
        {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
