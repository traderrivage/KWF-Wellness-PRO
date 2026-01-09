
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Pricing from './pages/Pricing.tsx';
import GetStarted from './pages/GetStarted.tsx';
import Services from './pages/Services.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import Scheduling from './pages/Scheduling.tsx';

export type View = 'home' | 'services' | 'about' | 'pricing' | 'get-started' | 'privacy' | 'terms' | 'scheduling';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'services':
        return <Services onNavigate={navigateTo} />;
      case 'about':
        return <About />;
      case 'pricing':
        return <Pricing onNavigate={navigateTo} />;
      case 'get-started':
        return <GetStarted onNavigate={navigateTo} />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'scheduling':
        return <Scheduling />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Navbar onNavigate={navigateTo} currentView={currentView} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
