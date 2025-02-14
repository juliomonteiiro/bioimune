import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/shared/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div id="sobre">
        <About />
      </div>
      <Benefits />
      <div id="servicos">
        <Services />
      </div>
      <WhyChooseUs />
      <Reviews />
      <div id="contato">
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;