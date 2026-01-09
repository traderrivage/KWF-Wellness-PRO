
import React from 'react';

const Scheduling: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#4B0082] min-h-screen flex flex-col items-center">
      <div className="max-w-5xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
          Schedule Your Transformation
        </h1>
        <p className="text-purple-100 text-lg font-light max-w-2xl mx-auto">
          Secure your session time below. Select your preferred modality and duration to begin.
        </p>
      </div>

      <div className="w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative" style={{ height: '800px' }}>
        <iframe 
          src="https://near.place/appt/" 
          frameBorder="0" 
          style={{
            overflow: 'hidden',
            overflowX: 'hidden',
            overflowY: 'hidden',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px'
          }} 
          height="100%" 
          width="100%"
          title="KWF Wellness Scheduling Portal"
        ></iframe>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-purple-200 text-sm uppercase tracking-[0.3em] font-bold">
          Luxury Wellness • Kingdom Standards
        </p>
      </div>
    </div>
  );
};

export default Scheduling;
