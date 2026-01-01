
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-[#4B0082]">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-600 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by KWF Wellness, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">2. Services and Appointments</h2>
            <p>
              KWF Wellness provides therapeutic stretch, massage, and movement therapy. All sessions must be booked in advance. While we strive to provide the highest quality care, results are not guaranteed and vary by individual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">3. Cancellation Policy</h2>
            <p>
              Your appointments are very important to us. We understand that sometimes schedule adjustments are necessary; therefore, we respectfully request at least <strong>24 hours notice</strong> for cancellations. Late cancellations or "no-shows" may be subject to a fee up to the full cost of the scheduled service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">4. Health Disclosures</h2>
            <p>
              Clients are responsible for providing accurate and complete health information. You must notify your practitioner of any changes in your physical health or medical status. KWF Wellness services are not a substitute for medical diagnosis or treatment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">5. Memberships</h2>
            <p>
              Memberships are billed monthly and provide a set number of sessions per cycle. Unused sessions do not roll over unless explicitly stated. Memberships may be cancelled with 30 days written notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">6. Limitation of Liability</h2>
            <p>
              KWF Wellness and its practitioners shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the services.
            </p>
          </section>

          <p className="text-sm text-gray-400 pt-10">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
