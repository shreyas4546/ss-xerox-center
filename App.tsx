import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Navbar from './components/Navbar';
import LiquidBackground from './components/LiquidBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-slate-900 selection:bg-indigo-500 selection:text-white bg-[#FDFBF7]">
      {/* Global Background */}
      <LiquidBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex flex-col">
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default App;