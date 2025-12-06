import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CareerHero from './components/CareerHero';
import CareerTracks from './components/CareerTracks';
import Career from './components/Career';
import MentorSection from './components/MentorSection';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CareerLaunch from './components/CareerLaunch';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HowItWorks />
      <CareerHero />
      <CareerTracks />
      <Career />
      <MentorSection />
      <Stats />
      <Testimonials />
      <CareerLaunch />
      <Footer />
      
      {/* You can add your page content here later */}
      <main>
      </main>
    </div>
  );
}

export default App;