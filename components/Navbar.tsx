
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants.tsx';
import { View } from '../App.tsx';

interface NavbarProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (e: React.MouseEvent, view: string) => {
    e.preventDefault();
    // Map href strings back to View types
    const v = view.replace('#/', '') || 'home';
    onNavigate(v as View);
    setIsOpen(false);
  };

  const YouTubeIcon = () => (
    <a 
      href="https://www.youtube.com/@KingCopeland96/videos" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[#FF0000] hover:scale-110 transition-transform flex items-center justify-center"
      title="KWF Wellness YouTube"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    </a>
  );

  const TikTokIcon = () => (
    <a 
      href="https://www.tiktok.com/@kingjourney444?_r=1&_t=ZT-92grOxfIdpX" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-black hover:text-gray-600 hover:scale-110 transition-transform flex items-center justify-center"
      title="KWF Wellness TikTok"
    >
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
      </svg>
    </a>
  );

  const InstagramIcon = () => (
    <a 
      href="https://www.instagram.com/iam_kingdom_fitness9/?igsh=MW81Z2c4d3FqMXphMw%3D%3D&utm_source=qr" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[#E4405F] hover:scale-110 transition-transform flex items-center justify-center"
      title="KWF Wellness Instagram"
    >
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5c3.176 0 5.75 2.574 5.75 5.75v8.5c0 3.176-2.574 5.75-5.75 5.75h-8.5C4.574 22 2 19.426 2 16.25v-8.5C2 4.574 4.574 2 7.75 2zm8.5 2h-8.5C5.681 4 4 5.681 4 7.75v8.5c0 2.069 1.681 3.75 3.75 3.75h8.5c2.069 0 3.75-1.681 3.75-3.75v-8.5C20 5.681 18.319 4 16.25 4z" />
        <path d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
        <path d="M17.335 5.51c-.46 0-.835.375-.835.835 0 .46.375.835.835.835.46 0 .835-.375.835-.835 0-.46-.375-.835-.835-.835z" />
      </svg>
    </a>
  );

  const PhoneLink = () => (
    <a 
      href="tel:17272700273" 
      className="flex items-center text-sm font-bold text-gray-700 hover:text-[#D4AF37] transition-colors gap-2"
      title="Call KWF Wellness"
    >
      <svg className="w-6 h-6 md:w-4 md:h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      <span className="hidden md:inline whitespace-nowrap">1 727 270 0273</span>
    </a>
  );

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex justify-between items-center gap-x-4 lg:gap-x-8">
        <button 
          onClick={(e) => handleNav(e, '#/')} 
          className="flex items-center space-x-2 sm:space-x-3 group focus:outline-none flex-shrink-0"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1PBozSQCJ6Gim_2dAbmRIPTb68s2UcW8-" 
            alt="KWF Logo" 
            className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
          />
          <div className="flex flex-col md:flex-row md:items-center md:space-x-2 text-left">
            <span className="text-xl sm:text-2xl font-bold tracking-tighter uppercase text-[#4B0082] group-hover:text-[#D4AF37] transition-colors leading-none">KWF</span>
            <span className="text-base sm:text-xl font-light tracking-[0.15em] uppercase text-gray-500 group-hover:text-gray-800 transition-colors leading-none">Wellness</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center flex-shrink-0">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={(e) => handleNav(e, item.href)}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#D4AF37] focus:outline-none whitespace-nowrap ${
                (item.href === '#/' && currentView === 'home') || (item.href.includes(currentView)) 
                ? 'text-[#D4AF37]' 
                : 'text-gray-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={(e) => handleNav(e, '#/pricing')}
            className="px-6 py-2 bg-[#D4AF37] text-white rounded-full text-sm font-bold glow-on-hover transition-all focus:outline-none whitespace-nowrap"
          >
            Book Now
          </button>
          <div className="h-6 w-px bg-gray-200 mx-2" />
          <PhoneLink />
          <div className="flex items-center space-x-4">
            <InstagramIcon />
            <TikTokIcon />
            <YouTubeIcon />
          </div>
        </div>

        {/* Mobile Toggle + Icons on Mobile Bar */}
        <div className="flex items-center space-x-3 sm:space-x-4 md:hidden">
          <InstagramIcon />
          <TikTokIcon />
          <YouTubeIcon />
          <button className="text-2xl text-[#4B0082] focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 flex flex-col p-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.label} 
              onClick={(e) => handleNav(e, item.href)}
              className="text-left text-lg font-medium tracking-wide border-b border-gray-50 pb-2 hover:text-[#D4AF37] focus:outline-none"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={(e) => handleNav(e, '#/pricing')}
            className="bg-[#D4AF37] text-white py-4 rounded-xl text-center font-bold shadow-lg"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
