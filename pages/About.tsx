
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-32 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div className="flex flex-col items-center text-center mb-10">
              <h1 className="text-4xl font-bold mb-4 text-[#1A1A1A]">About King Shyheim</h1>
              
              {/* Certifications List */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">Certified Massage Therapist (CMT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">Certified Stretch Practitioner</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">Certified Personal Trainer</span>
                </div>
              </div>
            </div>
            
            {/* Bio Body */}
            <div className="space-y-8 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                My name is King Shyheim, though most people know me simply as King. My work is centered on intentional body care — helping people move better, feel stronger, and live with less pain over the long term.
              </p>
              <p>
                I don’t believe in quick fixes or temporary relief. I work with individuals who are committed to their health, understand the value of consistency, and want their bodies to support the life they’re building.
              </p>
              <p>
                Through a combination of stretch therapy, massage, and movement-based care, I help restore balance, improve mobility, and support the nervous system so the body can heal and perform as it was designed to.
              </p>
              <p>
                Every session is purposeful, focused, and tailored to the individual — no rush, no guesswork. My approach is calm, precise, and results-driven.
              </p>
              
              {/* Highlight Quote */}
              <div className="pt-10 border-t border-gray-100 mt-10">
                <p className="text-2xl font-light text-[#4B0082] italic leading-relaxed border-l-4 border-[#D4AF37] pl-8">
                  "I work best with clients who see their body as an asset and are ready to invest in long-term wellness, not just symptom management."
                </p>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-[#D4AF37] rounded-[3rem] -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
              
              <div className="w-full max-w-md aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082]/20 to-transparent pointer-events-none" />
                <img 
                  src="https://lh3.googleusercontent.com/d/14ENDdm-O7X2BJnaHBfRYRveoSqbyDx3H=s0" 
                  alt="King Shyheim" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Name Tag Floating */}
              <div className="absolute -bottom-6 -left-6 bg-white py-4 px-8 rounded-2xl shadow-xl border border-gray-50 hidden sm:block">
                <p className="font-script text-2xl text-[#D4AF37]">The Gift</p>
              </div>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Mission Statement */}
        <div className="mt-24 pt-20 border-t border-gray-100 text-center max-w-4xl mx-auto">
          <h3 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-sm mb-6">Foundation of Care</h3>
          <p className="text-2xl md:text-4xl font-light text-gray-900 leading-[1.2] tracking-tight">
            My work is for those who <span className="text-[#4B0082] font-semibold">prioritize their body and wellness</span> as a foundation for long-term health.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-12 rounded-full opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
