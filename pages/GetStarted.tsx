
import React, { useState } from 'react';
import Button from '../components/Button.tsx';
import { View } from '../App.tsx';

interface GetStartedProps {
  onNavigate: (view: View) => void;
}

const GetStarted: React.FC<GetStartedProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an issue submitting your application. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center text-4xl mb-10 shadow-inner">✓</div>
        <h1 className="text-4xl font-bold mb-6">Submission Received</h1>
        <p className="text-gray-500 max-w-md mx-auto leading-relaxed text-lg font-light">
          Thank you for sharing your journey with me. I personally review every application and will reach out within 24 hours to discuss your transformation.
        </p>
        <button 
          onClick={() => onNavigate('home')} 
          className="mt-16 text-[#4B0082] uppercase tracking-[0.3em] text-xs font-bold border-b-2 border-[#D4AF37] pb-2 hover:text-[#D4AF37] transition-all focus:outline-none"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Personalized Intake</h1>
        <p className="text-xl text-gray-500 font-light mb-16 leading-relaxed">
          This work is highly personalized. Please share a bit about what you’re experiencing and what you want your body to do better.
        </p>

        <form 
          name="intake-form" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit} 
          className="space-y-10 bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-purple-900/5 border border-gray-100"
        >
          <input type="hidden" name="form-name" value="intake-form" />
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
              <input 
                required
                type="text" 
                name="name"
                placeholder="Your Name"
                className="p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#D4AF37] focus:bg-white outline-none transition-all font-medium"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
              <input 
                required
                type="email" 
                name="email"
                placeholder="you@luxury.com"
                className="p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#D4AF37] focus:bg-white outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Areas of pain, tension, or limitation?</label>
            <textarea 
              required
              name="pain_points"
              rows={4}
              placeholder="Tell me where you feel restricted in your movement..."
              className="p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#D4AF37] focus:bg-white outline-none transition-all resize-none font-medium"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Goals for your body and movement?</label>
            <textarea 
              required
              name="goals"
              rows={3}
              placeholder="What do you want to be able to do comfortably again?"
              className="p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#D4AF37] focus:bg-white outline-none transition-all resize-none font-medium"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Ideal State</label>
            <textarea 
              required
              name="ideal_state"
              rows={3}
              placeholder="If you could live pain-free, what would your daily life look like?"
              className="p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#D4AF37] focus:bg-white outline-none transition-all resize-none font-medium"
            />
          </div>

          <div className="pt-10">
            <Button type="submit" label="Apply for Consultation" className="w-full" />
            <p className="text-center text-[10px] text-gray-400 mt-8 uppercase tracking-widest font-bold">
              By submitting, you agree to a professional consultation.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
