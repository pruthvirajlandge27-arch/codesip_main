import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, XCircle, Search, Mail, Phone, Briefcase } from 'lucide-react';
import api from '../../api/axios';

const AdminDashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get('tab') || 'applications';

  const [data, setData] = useState({ applications: [], services: [], contacts: [], openings: [] });
  const [loading, setLoading] = useState(true);
  
  // Modal state for Job Postings
  const [showModal, setShowModal] = useState(false);
  const [editingOpening, setEditingOpening] = useState(null);
  const [openingForm, setOpeningForm] = useState({ title: '', companyName: '', description: '', redirect_url: '', is_active: true });

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const fetchData = async (tab) => {
    setLoading(true);
    try {
      if (tab === 'applications') {
        const res = await api.get('/applications');
        setData(prev => ({ ...prev, applications: res.data }));
      } else if (tab === 'services') {
        const res = await api.get('/services');
        setData(prev => ({ ...prev, services: res.data }));
      } else if (tab === 'contacts') {
        const res = await api.get('/contacts');
        setData(prev => ({ ...prev, contacts: res.data }));
      } else if (tab === 'openings') {
        const res = await api.get('/openings/all');
        setData(prev => ({ ...prev, openings: res.data }));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpeningSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingOpening) {
        await api.put(`/openings/${editingOpening._id}`, openingForm);
      } else {
        await api.post('/openings', openingForm);
      }
      setShowModal(false);
      setEditingOpening(null);
      fetchData('openings');
    } catch (error) {
      console.error('Error saving opening:', error);
      alert('Failed to save opening');
    }
  };

  const handleDeleteOpening = async (id) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      try {
        await api.delete(`/openings/${id}`);
        fetchData('openings');
      } catch (error) {
        console.error('Error deleting opening:', error);
      }
    }
  };

  const handleStatusChange = async (id, newStatus, type) => {
    try {
      await api.put(`/${type}/${id}/status`, { status: newStatus });
      // Refresh data
      fetchData(activeTab);
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      new: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      unread: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      
      reviewed: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      contacted: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      read: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
      
      in_progress: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      
      accepted: 'bg-green-500/10 text-green-400 border-green-500/20',
      completed: 'bg-green-500/10 text-green-400 border-green-500/20',
      replied: 'bg-green-500/10 text-green-400 border-green-500/20',
      
      rejected: 'bg-red-500/10 text-red-400 border-red-500/20'
    };
    
    return (
      <span className={`px-2.5 py-1 text-[12px] font-semibold rounded-full border ${styles[status] || styles.pending} uppercase tracking-wider`}>
        {status.replace('_', ' ')}
      </span>
    );
  };

  const renderTable = () => {
    if (loading) return <div className="text-center py-20 text-gray-400">Loading data...</div>;

    if (activeTab === 'applications') {
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">Applicant</th>
                <th className="p-4 font-medium">Domain</th>
                <th className="p-4 font-medium">Resume</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {data.applications.map((app) => (
                <tr key={app._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="font-semibold text-white">{app.name}</div>
                    <div className="text-gray-500 text-xs mt-1 flex items-center gap-2"><Mail size={12}/> {app.email}</div>
                    <div className="text-gray-500 text-xs mt-0.5 flex items-center gap-2"><Phone size={12}/> {app.phone}</div>
                  </td>
                  <td className="p-4 text-gray-300 font-medium">{app.domain}</td>
                  <td className="p-4">
                    <a href={app.resumeLink} target="_blank" rel="noreferrer" className="text-accent hover:underline flex items-center gap-1">
                       View <Briefcase size={14}/>
                    </a>
                  </td>
                  <td className="p-4 text-gray-400">{new Date(app.createdAt).toLocaleDateString()}</td>
                  <td className="p-4">{getStatusBadge(app.status)}</td>
                  <td className="p-4 text-right">
                    <select 
                      value={app.status} 
                      onChange={(e) => handleStatusChange(app._id, e.target.value, 'applications')}
                      className="bg-[#0F172A] border border-white/10 text-gray-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-accent"
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
              {data.applications.length === 0 && (
                <tr><td colSpan="6" className="p-8 text-center text-gray-500">No applications found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }

    if (activeTab === 'services') {
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">Client / Details</th>
                <th className="p-4 font-medium">Service Type</th>
                <th className="p-4 font-medium">Budget</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {data.services.map((srv) => (
                <tr key={srv._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="font-semibold text-white">{srv.name}</div>
                    <div className="text-gray-500 text-xs mt-1">{srv.email}</div>
                    <div className="text-gray-400 mt-2 text-xs max-w-xs truncate" title={srv.details}>{srv.details}</div>
                  </td>
                  <td className="p-4 text-gray-300 capitalize">{srv.serviceType.replace('_', ' ')}</td>
                  <td className="p-4 text-gray-300">{srv.budget || 'N/A'}</td>
                  <td className="p-4 text-gray-400">{new Date(srv.createdAt).toLocaleDateString()}</td>
                  <td className="p-4">{getStatusBadge(srv.status)}</td>
                  <td className="p-4 text-right">
                    <select 
                      value={srv.status} 
                      onChange={(e) => handleStatusChange(srv._id, e.target.value, 'services')}
                      className="bg-[#0F172A] border border-white/10 text-gray-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-accent"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
              {data.services.length === 0 && (
                <tr><td colSpan="6" className="p-8 text-center text-gray-500">No service requests found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }

    if (activeTab === 'contacts') {
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">Sender</th>
                <th className="p-4 font-medium">Subject & Message</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {data.contacts.map((msg) => (
                <tr key={msg._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="font-semibold text-white">{msg.name}</div>
                    <div className="text-gray-500 text-xs mt-1">{msg.email}</div>
                  </td>
                  <td className="p-4 max-w-md">
                    <div className="font-semibold text-gray-200">{msg.subject}</div>
                    <div className="text-gray-400 mt-1 text-xs truncate" title={msg.message}>{msg.message}</div>
                  </td>
                  <td className="p-4 text-gray-400">{new Date(msg.createdAt).toLocaleDateString()}</td>
                  <td className="p-4">{getStatusBadge(msg.status)}</td>
                  <td className="p-4 text-right">
                    <select 
                      value={msg.status} 
                      onChange={(e) => handleStatusChange(msg._id, e.target.value, 'contacts')}
                      className="bg-[#0F172A] border border-white/10 text-gray-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-accent"
                    >
                      <option value="unread">Unread</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                    </select>
                  </td>
                </tr>
              ))}
              {data.contacts.length === 0 && (
                <tr><td colSpan="5" className="p-8 text-center text-gray-500">No messages found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }
    if (activeTab === 'openings') {
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">Job Title</th>
                <th className="p-4 font-medium">Company</th>
                <th className="p-4 font-medium">Link</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {data.openings.map((op) => (
                <tr key={op._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="font-semibold text-white">{op.title}</div>
                    <div className="text-gray-400 mt-1 text-xs truncate max-w-xs">{op.description}</div>
                  </td>
                  <td className="p-4 text-gray-300 font-medium">{op.companyName}</td>
                  <td className="p-4">
                    <a href={op.redirect_url} target="_blank" rel="noreferrer" className="text-accent hover:underline text-xs">
                       View Link
                    </a>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-[11px] font-semibold rounded-full border ${op.is_active ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-gray-500/10 text-gray-400 border-gray-500/20'}`}>
                      {op.is_active ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                  </td>
                  <td className="p-4 text-right flex items-center justify-end gap-2">
                    <button 
                      onClick={() => {
                        setEditingOpening(op);
                        setOpeningForm({ title: op.title, companyName: op.companyName, description: op.description, redirect_url: op.redirect_url, is_active: op.is_active });
                        setShowModal(true);
                      }}
                      className="text-accent hover:bg-accent/10 px-3 py-1 rounded transition-colors text-xs font-semibold border border-accent/20"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteOpening(op._id)}
                      className="text-red-400 hover:bg-red-500/10 px-3 py-1 rounded transition-colors text-xs font-semibold border border-red-500/20"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {data.openings.length === 0 && (
                <tr><td colSpan="5" className="p-8 text-center text-gray-500">No job postings found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0F172A]/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white capitalize font-heading tracking-wide">
            {activeTab.replace('-', ' ')}
          </h1>
          <p className="text-gray-400 text-sm mt-1">Manage and view all {activeTab} data.</p>
        </div>
        
        <div className="relative flex items-center gap-4">
           {activeTab === 'openings' && (
             <button 
               onClick={() => {
                 setEditingOpening(null);
                 setOpeningForm({ title: '', companyName: '', description: '', redirect_url: '', is_active: true });
                 setShowModal(true);
               }} 
               className="bg-accent hover:bg-[#0096B4] text-primary px-4 py-2 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(0,180,216,0.3)] transition-all whitespace-nowrap"
             >
               + Create New
             </button>
           )}
           <div className="relative">
             <input 
               type="text" 
               placeholder={`Search ${activeTab}...`} 
               className="bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent/50 w-full md:w-64"
             />
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
           </div>
        </div>
      </div>

      <div className="p-0">
        {renderTable()}
      </div>

      {/* Opening Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center z-50 p-4 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 w-full max-w-lg shadow-2xl relative my-8"
          >
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <XCircle size={24} />
            </button>
            <h2 className="text-xl font-bold text-white mb-6 font-heading">
              {editingOpening ? 'Edit Job Posting' : 'Create New Job Posting'}
            </h2>
            <form onSubmit={handleOpeningSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Job Title</label>
                <input required type="text" value={openingForm.title} onChange={e => setOpeningForm({...openingForm, title: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-accent outline-none" placeholder="e.g. Frontend Engineer" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Company Name</label>
                <input required type="text" value={openingForm.companyName} onChange={e => setOpeningForm({...openingForm, companyName: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-accent outline-none" placeholder="e.g. Google" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Company / Application URL</label>
                <input required type="url" value={openingForm.redirect_url} onChange={e => setOpeningForm({...openingForm, redirect_url: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-accent outline-none" placeholder="https://..." />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Description</label>
                <textarea required rows="3" value={openingForm.description} onChange={e => setOpeningForm({...openingForm, description: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-accent outline-none" placeholder="Job description..." />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" id="isActive" checked={openingForm.is_active} onChange={e => setOpeningForm({...openingForm, is_active: e.target.checked})} className="w-4 h-4 rounded accent-accent" />
                <label htmlFor="isActive" className="text-sm text-gray-300 font-medium cursor-pointer">Active / Visible</label>
              </div>
              <button type="submit" className="mt-4 bg-accent text-primary font-bold py-2.5 rounded-lg text-sm shadow-[0_0_15px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(0,180,216,0.5)] transition-all">
                {editingOpening ? 'Save Changes' : 'Create Job Posting'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default AdminDashboard;
