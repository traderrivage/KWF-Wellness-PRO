
import React from 'react';
import { View } from '../App.tsx';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, view: View) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter uppercase text-[#D4AF37] mb-4">KWF Wellness</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Elevated movement, therapeutic stretch, and luxury massage for those who view their health as a legacy.
            </p>
          </div>
          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={(e) => handleNav(e, 'home')} className="hover:text-white transition-colors focus:outline-none">Home</button></li>
              <li><button onClick={(e) => handleNav(e, 'about')} className="hover:text-white transition-colors focus:outline-none">About King</button></li>
              <li><button onClick={(e) => handleNav(e, 'pricing')} className="hover:text-white transition-colors focus:outline-none">Memberships</button></li>
              <li><button onClick={(e) => handleNav(e, 'get-started')} className="hover:text-white transition-colors focus:outline-none">Get Started</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Bookings: kingshyheim@kwfwellness.com</li>
              <li>Studio: Luxury Concierge & Private Sessions</li>
              <li className="flex space-x-4 mt-6">
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-all">IG</span>
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-all">LI</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} KWF Wellness. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <button onClick={(e) => handleNav(e, 'privacy')} className="hover:text-white cursor-pointer focus:outline-none">Privacy Policy</button>
            <button onClick={(e) => handleNav(e, 'terms')} className="hover:text-white cursor-pointer focus:outline-none">Terms of Service</button>
            <a 
              href="https://nextlevellocalbusiness.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              website by Next Level Local Business
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
