
import React from 'react';
import Button from '../components/Button.tsx';
import { SERVICE_DETAILS } from '../constants.tsx';
import { View } from '../App.tsx';

interface ServicesProps {
  onNavigate: (view: View) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const handleBooking = () => {
    window.open('https://near.place/booking/?id=PWtUTQ', '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-sm mb-4">The Craft</h2>
          <h1 className="text-5xl font-bold mb-6">Our Modalities</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A three-pillar approach to physical longevity: release tension, restore alignment, and reinforce healthy movement patterns.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICE_DETAILS.map((service, index) => (
            <div key={service.id} className={`grid md:grid-cols-2 gap-16 items-center ${service.reversed ? 'md:flex-row-reverse' : ''}`}>
              <div className={`rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500 ${service.reversed ? 'md:order-2' : ''}`}>
                <img src={service.image} alt={service.title} className="w-full h-[550px] object-cover" />
              </div>
              <div className={`${service.reversed ? 'md:order-1' : ''}`}>
                <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Modality {service.id}
                </div>
                <h3 className="text-4xl font-bold mb-8 text-[#4B0082]">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                  {service.description}
                </p>
                <ul className="space-y-5 mb-12">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-800 font-semibold text-sm tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span> {bullet}
                    </li>
                  ))}
                </ul>
                <Button label={service.buttonLabel} variant="primary" onClick={handleBooking} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
