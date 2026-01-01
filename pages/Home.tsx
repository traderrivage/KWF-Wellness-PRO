
import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/Button.tsx';
import { TESTIMONIALS, FAQS } from '../constants.tsx';
import { View } from '../App.tsx';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [reflectionsVisible, setReflectionsVisible] = useState(false);
  const reflectionsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReflectionsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (reflectionsRef.current) {
      observer.observe(reflectionsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20">
      {/* 1. Hero Section - Optimized Overlay for Mobile/Desktop */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#0F001F]">
        {/* DESKTOP OVERLAY: Left-to-right deep rich gradient */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0F001F] via-[#0F001F]/90 to-transparent hidden md:block w-3/4 pointer-events-none" />
        
        {/* MOBILE OVERLAY: Bottom-to-top gradient only (leaves top face area clear) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0F001F] via-[#0F001F]/60 to-transparent md:hidden pointer-events-none" />

        {/* Hero Image Container */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-[45%] z-10 flex items-center md:items-end justify-center md:justify-end md:pr-12 lg:pr-24">
          <div className="relative h-[70%] md:h-[80%] w-[85%] md:w-[95%] max-w-2xl group overflow-hidden md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
            <img 
              src="https://lh3.googleusercontent.com/d/1qvngA5_8jYGHc9MuHrJC3_Jii-ggTYJU=s0" 
              alt="King Shyheim - KWF Wellness" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          </div>
        </div>

        {/* Floating Name Label */}
        <div className="absolute bottom-10 right-12 lg:right-24 z-30 hidden md:block opacity-0 animate-fade-up delay-700">
          <div className="text-[#D4AF37] font-bold text-3xl uppercase tracking-[0.4em] drop-shadow-lg">
            King Shyheim
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-40 max-w-7xl mx-auto px-6 lg:px-12 w-full h-full flex flex-col justify-end pb-12 md:justify-center md:pb-0">
          <div className="max-w-2xl">
            <h1 className="text-[32px] sm:text-5xl md:text-8xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-up delay-200 drop-shadow-2xl">
              Move Better.<br />
              Feel Stronger.<br />
              <span className="text-[#D4AF37]">Live Aligned.</span>
            </h1>
            <p className="text-base md:text-2xl text-gray-200 mb-10 font-light tracking-wide opacity-0 animate-fade-up delay-400 drop-shadow-md">
              Stretch • Massage • Movement Therapy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-500">
              <Button label="Book Your Session" onClick={() => onNavigate('pricing')} className="md:px-10" />
              <Button label="Get Started" variant="outline" onClick={() => onNavigate('get-started')} className="md:px-10 border-white/30 text-white hover:border-[#D4AF37]" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Credentials Section */}
      <section className="pt-8 pb-4 md:pt-10 md:pb-6 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-4 md:gap-16 lg:gap-24 uppercase tracking-widest text-gray-900 font-bold">
            <div className="flex flex-col items-center flex-1">
              <span className="text-[#D4AF37] text-4xl md:text-5xl mb-4">★</span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">Certified Massage Therapist</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-[#D4AF37] text-4xl md:text-5xl mb-4">★</span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">Certified Personal Trainer</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-[#D4AF37] text-4xl md:text-5xl mb-4">★</span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">Certified Stretch Coach</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Identity Section - Tighter Logo and Shadows */}
      <section className="pt-8 pb-2 md:pt-10 md:pb-4 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="flex flex-col justify-center items-center h-full text-center">
            <div className="mb-4 md:mb-6 w-full max-w-[200px] px-4"> {/* Logo size reduced further */}
              <img 
                src="https://lh3.googleusercontent.com/d/1PBozSQCJ6Gim_2dAbmRIPTb68s2UcW8-" 
                alt="KWF Logo Large" 
                className="w-full h-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_15px_30px_rgba(212,175,55,0.4)] transition-all duration-700"
              />
            </div>
            <h2 className="text-3xl md:text-5xl uppercase tracking-[0.2em] text-[#D4AF37] mb-4 font-bold leading-tight">
              THE REALITY
            </h2>
            <h3 className="text-lg md:text-2xl font-normal text-gray-900 leading-tight tracking-wide max-w-lg mx-auto">
              Most people live in a body that feels like a cage. Tension, chronic pain, and limited mobility are treated as "normal," while the underlying misalignment remains untouched.
            </h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-full max-w-[340px] transition-transform hover:scale-105 duration-500">
              <img 
                src="https://lh3.googleusercontent.com/d/1G9NpqEF6_b38oBh6YuQ2AIizzUj7Ybbx=s0" 
                alt="Majestic Giraffe" 
                className="w-full h-auto rounded-2xl shadow-[-8px_-8px_15px_rgba(0,0,0,0.2)] border border-gray-100"
              />
            </div>
            <div className="space-y-1">
              <p className="font-script text-4xl md:text-5xl text-[#D4AF37]">The Gift</p>
              <p className="text-sm font-light tracking-[0.3em] uppercase text-gray-400">
                Shyheim — meaning <span className="font-semibold text-gray-600">The Gift</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution Section - Reduced Top Spacing */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-6 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#4B0082] mb-6 text-center">Our Solutions</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Stretch Therapy</h4>
                  <p className="text-gray-600 leading-relaxed">Restore balance and improve flexibility through assisted movement that targets deep connective tissue.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Kingdom Massage</h4>
                  <p className="text-gray-600 leading-relaxed">Therapeutic healing for mind, body, and soul. Relieve tension while resetting your nervous system.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Movement Therapy</h4>
                  <p className="text-gray-600 leading-relaxed">Re-learning how to move with power and grace, ensuring your results last a lifetime.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white">
               <img 
                 src="https://lh3.googleusercontent.com/d/14IxZr6td8BFeZhms149f4GSkfvZSZFDt=s0" 
                 alt="The Solution - Integration" 
                 className="w-full h-auto object-cover"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Visual Experience Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-4xl font-bold text-[#4B0082] mb-4">Unlock the Body's Potential</h3>
            <p className="text-[#D4AF37] font-script text-2xl">Witness the Transformation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50">
              <iframe 
                src="https://drive.google.com/file/d/1xq4D-PunYtF9grFpwUZGUPfdBsFfJlCf/preview" 
                className="w-full h-full border-none"
                allow="autoplay"
              ></iframe>
            </div>
            <div className="aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50">
              <iframe 
                src="https://drive.google.com/file/d/14FN5-bliXXnHlfq4KZrvxuULVLxB9ww-/preview" 
                className="w-full h-full border-none"
                allow="autoplay"
              ></iframe>
            </div>
            <div className="aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50">
              <iframe 
                src="https://drive.google.com/file/d/1gnSAhDpNG317ggMkB_Jzpnzw6FxdsoVZ/preview" 
                className="w-full h-full border-none"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section ref={reflectionsRef} className="py-12 md:py-16 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-10 md:mb-12 text-center transition-all duration-1000 ${reflectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-4xl font-bold">Client Reflections:</h3>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={i} 
                style={{ transitionDelay: `${i * 200}ms` }}
                className={`bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-h-[240px] hover:shadow-xl hover:-translate-y-2 transition-all duration-700 reveal-hidden ${reflectionsVisible ? 'reveal-visible' : ''}`}
              >
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-[#D4AF37]/10 font-serif">“</span>
                  <p className="text-lg md:text-xl text-gray-700 italic mb-6 md:mb-8 leading-relaxed relative z-10">{t.text}</p>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-gray-800 tracking-wide uppercase text-xs border-l-4 border-[#D4AF37] pl-4">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-4xl font-bold">Common Inquiries</h3>
          </div>
          <div className="space-y-4 md:space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-8 md:p-10 bg-[#FAFAFA] rounded-[2rem] border border-gray-100 hover:border-[#D4AF37]/30 transition-colors">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4">
                  <span className="text-[#D4AF37] text-3xl font-script font-bold">Q.</span>
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-10">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Offer Section */}
      <section className="pt-6 pb-20 md:pt-10 md:pb-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-[#4B0082] rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 organic-shape -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">Ready to Claim Your Gift?</h2>
          <p className="text-lg md:text-xl text-purple-100 mb-10 md:mb-12 max-w-2xl mx-auto font-light">
            Memberships are designed for real results — not temporary relief. This is a commitment to your long-term wellness and physical longevity.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button label="View Membership Options" onClick={() => onNavigate('pricing')} />
            <p className="text-sm text-purple-200 uppercase tracking-widest font-bold">Starting at $1,080 / month</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
