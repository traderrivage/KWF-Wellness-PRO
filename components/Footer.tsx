
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

  const InstagramIcon = () => (
    <a 
      href="https://www.instagram.com/iam_kingdom_fitness9/?igsh=MW81Z2c4d3FqMXphMw%3D%3D&utm_source=qr" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#E4405F] transition-all"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5c3.176 0 5.75 2.574 5.75 5.75v8.5c0 3.176-2.574 5.75-5.75 5.75h-8.5C4.574 22 2 19.426 2 16.25v-8.5C2 4.574 4.574 2 7.75 2zm8.5 2h-8.5C5.681 4 4 5.681 4 7.75v8.5c0 2.069 1.681 3.75 3.75 3.75h8.5c2.069 0 3.75-1.681 3.75-3.75v-8.5C20 5.681 18.319 4 16.25 4z" />
        <path d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
        <path d="M17.335 5.51c-.46 0-.835.375-.835.835 0 .46.375.835.835.835.46 0 .835-.375.835-.835 0-.46-.375-.835-.835-.835z" />
      </svg>
    </a>
  );

  const TikTokIcon = () => (
    <a 
      href="https://www.tiktok.com/@kingjourney444?_r=1&_t=ZT-92grOxfIdpX" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
      </svg>
    </a>
  );

  const YouTubeIcon = () => (
    <a 
      href="https://www.youtube.com/@KingCopeland96/videos" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#FF0000] transition-all"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    </a>
  );

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
                <InstagramIcon />
                <TikTokIcon />
                <YouTubeIcon />
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
