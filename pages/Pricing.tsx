
import React from 'react';
import { MEMBERSHIPS, SINGLE_SESSIONS } from '../constants.tsx';
import Button from '../components/Button.tsx';
import { View } from '../App.tsx';

interface PricingProps {
  onNavigate: (view: View) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Memberships Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-sm mb-4">The Primary Path</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Memberships</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            True transformation happens through consistency. Our memberships are designed for those dedicated to a lifestyle of mobility and peak performance.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {MEMBERSHIPS.map((plan, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 ${
                plan.highlight 
                  ? 'bg-[#4B0082] text-white ring-8 ring-[#4B0082]/10 scale-105 shadow-2xl z-10' 
                  : 'bg-gray-50 text-gray-800 border border-gray-100'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
                    <p className={`text-sm ${plan.highlight ? 'text-purple-200' : 'text-gray-500'}`}>{plan.frequency}</p>
                  </div>
                  {plan.highlight && (
                    <span className="bg-[#D4AF37] text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest">Most Popular</span>
                  )}
                </div>
                
                <div className="mb-10">
                  <p className="text-5xl font-bold mb-1">{plan.price}<span className="text-base font-light opacity-60"> / mo</span></p>
                  <p className={`text-sm tracking-wide ${plan.highlight ? 'text-purple-200' : 'text-gray-400'}`}>{plan.pricePerSession}</p>
                </div>

                <div className="mb-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span className="font-medium">{plan.sessions}</span>
                  </div>
                  <div className="flex items-start gap-4 opacity-80 text-sm leading-relaxed">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{plan.tagline}</span>
                  </div>
                </div>
              </div>

              <Button 
                label="Join Membership" 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full"
                onClick={() => onNavigate('get-started')}
              />
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-32 border-y border-gray-50 py-12">
          <p className="text-xl font-light text-gray-600 italic leading-relaxed">
            "The more consistently you care for your body, the faster it responds. Memberships are designed for real results — not temporary relief."
          </p>
        </div>

        {/* Single Sessions */}
        <div id="single-sessions" className="pt-12">
          <div className="text-center mb-16">
             <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-sm mb-4">Introduction</h2>
             <h1 className="text-4xl font-bold mb-6">Single Sessions</h1>
             <p className="text-gray-500 max-w-2xl mx-auto font-light">
               Available for clients seeking an introduction or occasional care. For structural shifts, memberships are always recommended.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Stretch Therapy */}
            <div className="bg-[#FAFAFA] p-12 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#4B0082] mb-2 uppercase tracking-wide">{SINGLE_SESSIONS.stretch.name}</h3>
              <p className="text-gray-500 mb-10 text-sm">Restore balance • Improve flexibility</p>
              <div className="space-y-6">
                {SINGLE_SESSIONS.stretch.options.map((opt, i) => (
                  <div key={i} className="flex justify-between items-center pb-5 border-b border-gray-200 last:border-0">
                    <span className="font-medium text-gray-700">{opt.duration}</span>
                    <span className="font-bold text-2xl text-[#D4AF37]">{opt.price}</span>
                  </div>
                ))}
              </div>
              <Button label="Book Now" variant="outline" className="w-full mt-10" onClick={() => onNavigate('get-started')} />
            </div>

            {/* Kingdom Massage */}
            <div className="bg-[#FAFAFA] p-12 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#4B0082] mb-2 uppercase tracking-wide">{SINGLE_SESSIONS.massage.name}</h3>
              <p className="text-gray-500 mb-10 text-sm">Therapeutic healing for mind, body & soul</p>
              <div className="space-y-6">
                {SINGLE_SESSIONS.massage.options.map((opt, i) => (
                  <div key={i} className="flex justify-between items-center pb-5 border-b border-gray-200 last:border-0">
                    <span className="font-medium text-gray-700">{opt.duration}</span>
                    <span className="font-bold text-2xl text-[#D4AF37]">{opt.price}</span>
                  </div>
                ))}
              </div>
              <Button label="Book Now" variant="outline" className="w-full mt-10" onClick={() => onNavigate('get-started')} />
            </div>
          </div>

          {/* Combo Experience */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="bg-[#4B0082] text-white p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl">
              <div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest text-[#D4AF37]">The Full Body Reset</h3>
                <p className="text-purple-200 font-light">Premium combination of Stretch Therapy & Kingdom Massage</p>
              </div>
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300 mb-2">Duration</p>
                  <p className="text-3xl font-bold">90 Min</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300 mb-2">Investment</p>
                  <p className="text-3xl font-bold">$1,060</p>
                </div>
                <Button label="Book Combo" onClick={() => onNavigate('get-started')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
