
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

  const handleBooking = () => {
    window.open('https://near.place/booking/?id=PWtUTQ', '_blank');
  };

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
      {/* 1. Hero Section - Full Background Image */}
      <section 
        className="relative min-h-[95vh] md:min-h-[90vh] flex items-end md:items-center overflow-hidden bg-cover bg-[82%_0%] md:bg-center pb-8 pt-12 md:py-20"
        style={{ 
          backgroundImage: `url('https://lh3.googleusercontent.com/d/1uKOTF41TBz1AsZfJ_tP3-siTVNa5bUaN=s0')` 
        }}
      >
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col">
          <div className="max-w-lg mb-2 md:mb-0">
            <div className="bg-[#4B0082]/50 backdrop-blur-sm md:bg-[#4B0082]/65 md:backdrop-blur-md border border-white/10 md:shadow-2xl p-5 sm:p-8 md:p-10 rounded-[2.5rem] md:rounded-[4rem] opacity-0 animate-fade-up text-center">
              <h1 className="text-[26px] sm:text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-[1.15] drop-shadow-md md:drop-shadow-none">
                <span className="text-[#D4AF37]">Move Better.</span><br />
                Feel Stronger.<br />
                <span className="text-[#D4AF37]">Live Aligned.</span>
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-10 font-light tracking-wide opacity-0 animate-fade-up delay-200 drop-shadow-sm md:drop-shadow-none">
                Stretch • Massage • Movement Therapy
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 opacity-0 animate-fade-up delay-400 justify-center">
                <Button label="Book Your Session" onClick={handleBooking} className="md:px-8 py-3 md:py-4" />
                <Button label="Get Started" variant="outline" onClick={() => onNavigate('get-started')} className="md:px-8 py-3 md:py-4 border-white/40 text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10" />
              </div>
            </div>
          </div>

          {/* Floating Name Overlay */}
          <div className="mt-4 md:mt-24 flex justify-end opacity-0 animate-fade-up delay-700">
            <div className="text-[#D4AF37] font-bold text-base sm:text-2xl md:text-4xl uppercase tracking-[0.5em] md:tracking-[0.6em] drop-shadow-[0_4px_16px_rgba(0,0,0,1)] pointer-events-none select-none text-center w-full md:w-1/2 md:mr-0 lg:mr-10">
              King Shyheim
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

      {/* 3. Identity Section */}
      <section className="pt-8 pb-2 md:pt-10 md:pb-4 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="flex flex-col justify-center items-center h-full text-center">
            <div className="mb-4 md:mb-6 w-full max-w-[200px] px-4">
              <img 
                src="https://lh3.googleusercontent.com/d/1PBozSQCJ6Gim_2dAbmRIPTb68s2UcW8-" 
                alt="KWF Logo Large" 
                className="w-full h-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_15px_30px_rgba(212,175,55,0.4)] transition-all duration-700"
              />
            </div>
            <h2 className="text-3xl md:text-5xl uppercase tracking-[0.2em] text-[#D4AF37] mb-8 font-bold leading-tight">
              THE REALITY
            </h2>
            <div className="text-lg md:text-xl font-normal text-gray-900 leading-relaxed tracking-wide max-w-xl mx-auto space-y-6 text-center">
              <p>Most people are not broken — they are misaligned.</p>
              <p>They live in bodies that feel tight, heavy, and restricted, believing pain, stiffness, and limited movement are just part of getting older.</p>
              <p>What’s often ignored is the truth:<br /><span className="font-bold text-[#4B0082]">pain is usually a signal, not a sentence.</span></p>
              <p>When alignment, mobility, and movement are restored, the body remembers how to heal.</p>
              <p className="font-bold text-[#D4AF37] tracking-[0.2em] pt-4">-King Copeland</p>
            </div>
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

      {/* 4. Solution Section */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-6 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#4B0082] mb-6 text-center">Our Solutions</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Stretch Therapy</h4>
                  <p className="text-gray-600 leading-relaxed">Assisted stretching where you relax and I do the work. Release deep tension, improve flexibility, and increase range of motion safely.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Massage Therapy</h4>
                  <p className="text-gray-600 leading-relaxed">Focuses on relieving muscle tension and calming the body. Customized therapeutic work to help your body reset and recover.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] font-bold">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Movement Therapy</h4>
                  <p className="text-gray-600 leading-relaxed">Movement Therapy helps your body move the way it was designed to move, addressing walking, standing, and everyday motion to stop recurring pain.</p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* First Video */}
            <div className="flex justify-center">
              <div className="w-full max-w-[400px] aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50">
                <iframe 
                  src="https://www.youtube.com/embed/g4uSt1c7l5I" 
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Center Video */}
            <div className="flex justify-center">
              <div className="w-full max-w-[400px] aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50">
                <iframe 
                  src="https://www.youtube.com/embed/vnimz24ceFc" 
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Third Video */}
            <div className="flex justify-center">
              <div className="w-full max-w-[400px] aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-50">
                <iframe 
                  src="https://www.youtube.com/embed/SEAGf2d4hpw" 
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
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
