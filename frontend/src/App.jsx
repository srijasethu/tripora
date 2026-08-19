import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-[#E5E2DC] flex flex-col font-sans selection:bg-[#C85A32] selection:text-white">
      <Navbar />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
