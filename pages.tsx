
import React, { useState, useEffect } from 'react';
import { storageService } from './storageService';
import { Project, Member, Resource, Category, CommunityRequest, AttendanceRecord } from './types';
import { Icons } from './constants';

// --- SHARED COMPONENTS ---

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary dark:text-white mb-4 brand">{title}</h2>
    {subtitle && <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1.5 bg-brand-accent mx-auto mt-6 rounded-full"></div>
  </div>
);

// Fixed ProjectCard by explicitly using React.FC to allow for the standard 'key' prop in list mapping
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
          {project.category}
        </span>
        <span className="text-xs text-slate-500">{project.date}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
      <div className="flex items-center text-slate-500 text-xs">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        {project.location}
      </div>
    </div>
  </div>
);

// --- PAGES ---

export const HomePage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => { setProjects(storageService.getProjects().slice(0, 3)); }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-primary py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 brand leading-tight">
              Innovating for <span className="text-brand-accent">National Development</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Nigerian Innovation Engineers, Scientists and Applied Technologists (N.I.E.S.A.T) is an NYSC CDS group dedicated to solving community challenges through engineering excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#/projects" className="bg-brand-accent hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-emerald-900/20">View Our Projects</a>
              <a href="#/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-3 rounded-lg font-bold transition-all">Submit a Request</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white mb-6">
              <Icons.Project />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white brand">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To apply engineering, scientific principles, and technological innovations to solve pressing socioeconomic problems in Nigerian communities during our service year.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-white mb-6">
              <Icons.Users />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white brand">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              A Nigeria where every community has access to basic technological amenities through the collaborative innovation of its young professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Latest Impact" subtitle="A showcase of our recent engineering interventions across various communities." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Added standard key prop for list items */}
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
          <div className="mt-12 text-center">
            <a href="#/projects" className="text-brand-primary dark:text-brand-secondary font-bold hover:underline">View All Projects &rarr;</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AboutPage = () => (
  <div className="py-20">
    <div className="max-w-4xl mx-auto px-4">
      <SectionTitle title="About N.I.E.S.A.T" />
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          N.I.E.S.A.T (Nigerian Innovation Engineers, Scientists and Applied Technologists) is a specialized Community Development Service (CDS) group under the National Youth Service Corps (NYSC). We comprise of corps members with backgrounds in various engineering fields, physical and life sciences, and technology.
        </p>
        
        <h3 className="text-2xl font-bold mb-4 dark:text-white mt-8 brand">Our Core Objectives</h3>
        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
          {[
            'Community Problem Identification',
            'Sustainable Infrastructure Development',
            'STEM Education Promotion',
            'Technical Skill Empowerment',
            'Environmental Conservation',
            'Innovation & Prototype Design'
          ].map(obj => (
            <li key={obj} className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
              <span className="dark:text-slate-300 font-medium">{obj}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mb-4 dark:text-white mt-12 brand">Our Values</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="text-center p-6 border border-slate-200 dark:border-slate-800 rounded-xl">
            <h4 className="font-bold text-brand-primary dark:text-brand-secondary mb-2">Innovation</h4>
            <p className="text-sm text-slate-500">Thinking outside the box for unique local problems.</p>
          </div>
          <div className="text-center p-6 border border-slate-200 dark:border-slate-800 rounded-xl">
            <h4 className="font-bold text-brand-primary dark:text-brand-secondary mb-2">Integrity</h4>
            <p className="text-sm text-slate-500">Transparent management of community resources.</p>
          </div>
          <div className="text-center p-6 border border-slate-200 dark:border-slate-800 rounded-xl">
            <h4 className="font-bold text-brand-primary dark:text-brand-secondary mb-2">Impact</h4>
            <p className="text-sm text-slate-500">Ensuring every project changes lives for the better.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => { setProjects(storageService.getProjects()); }, []);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Our Projects" subtitle="Technological solutions implemented across various sectors." />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All', ...Object.values(Category)].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                ? 'bg-brand-primary text-white shadow-lg shadow-blue-900/20' 
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Added standard key prop for list items */}
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </div>
  );
};

export const ResourcesPage = () => {
  const resources = storageService.getResources();
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Learning Resources" subtitle="Downloadable materials, guides, and academic papers for tech empowerment." />
        <div className="space-y-4">
          {resources.map(res => (
            <div key={res.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${res.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                    {res.type}
                  </span>
                  <h3 className="font-bold dark:text-white">{res.title}</h3>
                </div>
                <p className="text-sm text-slate-500">{res.description}</p>
              </div>
              <a href={res.url} className="bg-slate-100 dark:bg-slate-800 hover:bg-brand-accent hover:text-white transition-colors p-2 rounded-lg text-slate-600 dark:text-slate-400 flex items-center gap-2 text-sm font-bold">
                <Icons.Resource /> Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const MembersPage = () => {
  const members = storageService.getMembers();
  const execs = members.filter(m => m.role === 'Executive');
  const general = members.filter(m => m.role === 'General');

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Our Members" subtitle="The brilliant minds behind our innovations." />
        
        <h3 className="text-2xl font-bold mb-8 dark:text-white border-l-4 border-brand-accent pl-4 brand">Executive Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {execs.map(m => (
            <div key={m.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl text-center shadow-sm border border-slate-100 dark:border-slate-800">
              <img src={m.imageUrl} alt={m.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-brand-primary/10" />
              <h4 className="font-bold dark:text-white">{m.name}</h4>
              <p className="text-brand-accent text-xs font-bold uppercase mb-2 tracking-wide">{m.position}</p>
              <p className="text-slate-500 text-xs">{m.department}</p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400">
                {m.stateCode}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-8 dark:text-white border-l-4 border-slate-300 pl-4 brand">General Members</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {general.map(m => (
            <div key={m.id} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg flex items-center gap-4">
              <img src={m.imageUrl} alt={m.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-sm dark:text-white">{m.name}</h4>
                <p className="text-[10px] text-slate-500">{m.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ContactPage = () => {
  const [form, setForm] = useState({ name: '', contact: '', location: '', category: Category.SCHOOLS, message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const req: CommunityRequest = {
      id: Date.now().toString(),
      requesterName: form.name,
      contact: form.contact,
      location: form.location,
      category: form.category,
      description: form.message,
      timestamp: new Date().toISOString()
    };
    storageService.saveRequest(req);
    setSent(true);
    setForm({ name: '', contact: '', location: '', category: Category.SCHOOLS, message: '' });
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 dark:text-white brand">Submit a Request</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Is there an engineering or scientific need in your community? Schools without power? Communities without clean water? Let us know.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                <Icons.Contact />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">Email Us</h4>
                <p className="text-sm text-slate-500">niesat.lagos@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                <Icons.Home />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">Secretariat</h4>
                <p className="text-sm text-slate-500">Ikeja LG Secretariat, Ikeja, Lagos.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-2">Request Received!</h3>
              <p className="text-slate-500 text-sm">Our technical team will review and get back to you soon.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-brand-primary font-bold">Submit another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Your Name</label>
                <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 ring-brand-primary dark:text-white" placeholder="Full Name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Contact</label>
                  <input required value={form.contact} onChange={e => setForm({...form, contact: e.target.value})} type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 ring-brand-primary dark:text-white" placeholder="Phone or Email" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Location</label>
                  <input required value={form.location} onChange={e => setForm({...form, location: e.target.value})} type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 ring-brand-primary dark:text-white" placeholder="Area / LG" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Need Category</label>
                <select value={form.category} onChange={e => setForm({...form, category: e.target.value as Category})} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 ring-brand-primary dark:text-white">
                  {Object.values(Category).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
                <textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 ring-brand-primary dark:text-white h-32" placeholder="Tell us about the project need..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-primary hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors">Submit Request</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export const StaffPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [requests, setRequests] = useState<CommunityRequest[]>([]);

  const [activeTab, setActiveTab] = useState<'projects' | 'members' | 'requests'>('projects');

  useEffect(() => {
    if (isAuthenticated) {
      setProjects(storageService.getProjects());
      setMembers(storageService.getMembers());
      setRequests(storageService.getRequests());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'milan000000') {
      setIsAuthenticated(true);
    } else {
      setError('Invalid authorization password.');
    }
  };

  const deleteProject = (id: string) => {
    storageService.deleteProject(id);
    setProjects(storageService.getProjects());
  };

  const deleteMember = (id: string) => {
    storageService.deleteMember(id);
    setMembers(storageService.getMembers());
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-4">
              <Icons.Admin />
            </div>
            <h2 className="text-2xl font-bold dark:text-white brand">Staff Portal</h2>
            <p className="text-sm text-slate-500">Enter authorization code to access administrative tools.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 ring-brand-primary dark:text-white"
              placeholder="Authorization Code"
            />
            {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
            <button type="submit" className="w-full bg-brand-primary hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold dark:text-white brand">Admin Dashboard</h2>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <button onClick={() => setActiveTab('projects')} className={`px-4 py-2 rounded-md text-sm font-bold ${activeTab === 'projects' ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-primary' : 'text-slate-500'}`}>Projects</button>
            <button onClick={() => setActiveTab('members')} className={`px-4 py-2 rounded-md text-sm font-bold ${activeTab === 'members' ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-primary' : 'text-slate-500'}`}>Members</button>
            <button onClick={() => setActiveTab('requests')} className={`px-4 py-2 rounded-md text-sm font-bold ${activeTab === 'requests' ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-primary' : 'text-slate-500'}`}>Requests ({requests.length})</button>
          </div>
        </div>

        {activeTab === 'projects' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 text-xs font-bold uppercase">
                <tr>
                  <th className="px-6 py-4">Project</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {projects.map(p => (
                  <tr key={p.id} className="text-sm dark:text-slate-300">
                    <td className="px-6 py-4 font-bold">{p.title}</td>
                    <td className="px-6 py-4">{p.location}</td>
                    <td className="px-6 py-4">{p.date}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => deleteProject(p.id)} className="text-red-500 hover:text-red-700"><Icons.Trash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 text-xs font-bold uppercase">
                <tr>
                  <th className="px-6 py-4">Member</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">State Code</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {members.map(m => (
                  <tr key={m.id} className="text-sm dark:text-slate-300">
                    <td className="px-6 py-4 font-bold">{m.name}</td>
                    <td className="px-6 py-4">{m.role === 'Executive' ? m.position : 'Member'}</td>
                    <td className="px-6 py-4 font-mono text-xs">{m.stateCode}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => deleteMember(m.id)} className="text-red-500 hover:text-red-700"><Icons.Trash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="space-y-4">
            {requests.length === 0 && <p className="text-center py-12 text-slate-500">No community requests yet.</p>}
            {requests.map(r => (
              <div key={r.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-primary text-white px-2 py-0.5 rounded mb-2 inline-block">
                      {r.category}
                    </span>
                    <h3 className="font-bold text-lg dark:text-white">{r.requesterName}</h3>
                    <p className="text-xs text-slate-500">{new Date(r.timestamp).toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold dark:text-slate-300">{r.contact}</p>
                    <p className="text-xs text-slate-500">{r.location}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">{r.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
