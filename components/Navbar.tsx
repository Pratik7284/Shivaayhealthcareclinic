import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HeartIcon } from './icons/Icons';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = 'text-secondary';
  const inactiveLinkClass = 'text-slate-700 hover:text-secondary transition-colors';

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <HeartIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary font-poppins">Shivaay Heart Care</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center space-x-4">
             <Link
              to="/teleconsultation"
              className="hidden md:inline-block bg-secondary hover:bg-primary text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-sky-100 text-secondary' : 'text-slate-700 hover:bg-sky-50'}`}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/teleconsultation"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-secondary hover:bg-primary text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
