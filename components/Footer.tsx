import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, NAV_LINKS } from '../constants';
import { HeartIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, FacebookIcon, TwitterIcon, LinkedInIcon } from './icons/Icons';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <HeartIcon className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold font-poppins">Shivaay Heart Care</span>
            </Link>
            <p className="text-sky-200">Comprehensive Heart & Health Care Under One Roof. Your health is our priority.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sky-200 hover:text-white transition-colors"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-sky-200 hover:text-white transition-colors"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-sky-200 hover:text-white transition-colors"><LinkedInIcon className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-poppins mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sky-200 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-poppins mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-sky-200">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sky-200 hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sky-200 hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-bold font-poppins mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sky-200">
              <li>Mon - Sat: 9:00 AM - 8:00 PM</li>
              <li>Sun: 11:00 AM - 1:00 PM</li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-sky-800 pt-8 text-center text-sky-300">
          <p>&copy; {new Date().getFullYear()} Shivaay Heart Care and Medical Centre. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
