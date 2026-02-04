
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Icons } from './constants';
import { storageService } from './storageService';
import { 
  HomePage, 
  AboutPage, 
  ProjectsPage, 
  MembersPage, 
  ResourcesPage, 
  ContactPage, 
  StaffPage 
} from './pages';

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Icons.Home /> },
    { name: 'About', path: '/about', icon: <Icons.Users /> },
    { name: 'Projects', path: '/projects', icon: <Icons.Project /> },
    { name: 'Resources', path: '/resources', icon: <Icons.Resource /> },
    { name: 'Members', path: '/members', icon: <Icons.Users /> },
    { name: 'Contact', path: '/contact', icon: <Icons.Contact /> },
    { name: 'Staff', path: '/staff', icon: <Icons.Admin /> },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl brand">N</div>
              <span className="text-brand-primary dark:text-brand-secondary font-bold text-lg hidden md:block brand tracking-tight">N.I.E.S.A.T</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                  ? 'text-brand-primary dark:text-brand-secondary bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Icons.Sun /> : <Icons.Moon />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Icons.Sun /> : <Icons.Moon />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link.path 
                ? 'text-brand-primary dark:text-brand-secondary bg-blue-50 dark:bg-blue-900/20' 
                : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2">
                {link.icon}
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-xl font-bold mb-4 brand">N.I.E.S.A.T</h3>
        <p className="text-slate-400 max-w-sm mb-6">
          Nigerian Innovation Engineers, Scientists and Applied Technologists (NYSC CDS Group). 
          Developing rural communities through technological innovation and scientific application.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-slate-400 hover:text-white"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
          <a href="#" className="text-slate-400 hover:text-white"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 16.001c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zM18.406 4.144c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-slate-400">
          <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          <li><Link to="/projects" className="hover:text-white">Our Projects</Link></li>
          <li><Link to="/members" className="hover:text-white">Member Directory</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">CDS Info</h4>
        <ul className="space-y-2 text-slate-400">
          <li>Lagos State</li>
          <li>Ikeja Local Government</li>
          <li>Meeting: Thursdays 9AM</li>
          <li>Venue: LG Secretariat</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
      &copy; {new Date().getFullYear()} N.I.E.S.A.T CDS Group. All rights reserved. Built for National Service.
    </div>
  </footer>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(() => storageService.getDarkMode());

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    storageService.setDarkMode(darkMode);
  }, [darkMode]);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/staff" element={<StaffPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
