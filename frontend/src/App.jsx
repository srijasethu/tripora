import { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import MySpace from './pages/MySpace';
import { UserProvider } from './context/UserContext';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'my-space'

  const handleNavigateToSection = (sectionId) => {
    setCurrentView('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <UserProvider>
      <div className="min-h-screen bg-[#0E0F12] text-[#E5E2DC] flex flex-col font-sans selection:bg-[#C85A32] selection:text-white">
        <Navbar
          currentView={currentView}
          setCurrentView={setCurrentView}
          onNavigateToSection={handleNavigateToSection}
        />
        <div className="flex-grow">
          {currentView === 'my-space' ? (
            <MySpace onNavigateToPlan={() => handleNavigateToSection('trip-match')} />
          ) : (
            <Home />
          )}
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}
