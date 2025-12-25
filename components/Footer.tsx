
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-primary flex items-center justify-center border border-white text-secondary font-display font-bold text-lg">
                JE
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wide uppercase text-primary">JE CONSTRUCTION</span>
                <span className="text-[10px] text-gray-400">Services LLC</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Corpus Christi's trusted partner for heavy civil, industrial, and municipal construction projects. Built on safety, driven by quality.
            </p>
            <div className="flex space-x-4">
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener" className="h-10 w-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
                <span className="material-symbols-outlined text-xl">facebook</span>
              </a>
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener" className="h-10 w-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
                <span className="material-symbols-outlined text-xl">work</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-primary font-display font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-primary font-display font-bold uppercase tracking-wider mb-6 text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start group">
                <span className="material-symbols-outlined text-primary mr-3 text-xl group-hover:scale-110 transition-transform">location_on</span>
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center group">
                <span className="material-symbols-outlined text-primary mr-3 text-xl group-hover:scale-110 transition-transform">phone</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center group">
                <span className="material-symbols-outlined text-primary mr-3 text-xl group-hover:scale-110 transition-transform">mail</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h4 className="text-primary font-display font-bold uppercase tracking-wider mb-6 text-sm">Our Reach</h4>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Serving Corpus Christi, Laredo, Brownsville, San Antonio, Kingsville, Rockport, and surrounding areas.
            </p>
            <Link to="/contact" className="inline-block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-secondary px-4 py-3 rounded font-display font-bold text-xs tracking-widest transition-all">
              REQUEST A QUOTE
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} JE Construction Services, LLC. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
