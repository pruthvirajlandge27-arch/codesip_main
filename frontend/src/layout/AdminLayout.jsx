import React, { useEffect } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Briefcase, FileText, LogOut, Shield, Building } from 'lucide-react';
import logo from '../assets/logo.jpg';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (!userInfo || !userInfo.token) {
      navigate('/admin');
    }
  }, [navigate, userInfo]);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/admin');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Applications', path: '/admin/dashboard?tab=applications', icon: <FileText size={20} /> },
    { name: 'Service Requests', path: '/admin/dashboard?tab=services', icon: <Briefcase size={20} /> },
    { name: 'Job Postings', path: '/admin/dashboard?tab=openings', icon: <Building size={20} /> },
    { name: 'Messages', path: '/admin/dashboard?tab=contacts', icon: <MessageSquare size={20} /> },
  ];

  if (!userInfo) return null;

  return (
    <div className="min-h-screen bg-[#050810] flex font-sans text-gray-200">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A0F1C] border-r border-white/10 hidden md:flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <img src={logo} alt="CodeSip" className="h-8 w-auto rounded-md shadow-md" />
          <span className="font-bold text-white text-lg tracking-wide font-heading">Admin Panel</span>
        </div>

        <div className="p-4 flex-grow flex flex-col gap-2">
          {navItems.map((item) => {
            // Very simple active state logic based on URL search params or path
            const isActive = location.pathname === item.path || location.search === item.path.split('?')[1];
            
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-accent/10 text-accent font-semibold border border-accent/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
              >
                {item.icon}
                <span className="text-[15px]">{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
              <Shield className="text-secondary w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">{userInfo.name}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{userInfo.role}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-xl transition-colors text-sm font-semibold border border-red-500/20"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Topbar (Mobile) */}
        <div className="md:hidden bg-[#0A0F1C] border-b border-white/10 p-4 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <img src={logo} alt="CodeSip" className="h-8 w-auto rounded-md" />
            <span className="font-bold text-white">Admin</span>
          </div>
          <button onClick={handleLogout} className="text-red-400 p-2 bg-red-500/10 rounded-lg">
             <LogOut size={18} />
          </button>
        </div>

        {/* Dashboard Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
           {/* Glow Effect */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
           
           <div className="relative z-10 max-w-6xl mx-auto">
             <Outlet />
           </div>
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;
