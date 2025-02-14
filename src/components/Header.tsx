import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://www.auxiliadorapredial.com.br/blog/wp-content/uploads/dedetizacao-capa.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-teal-900/30"></div>
      </div>

      <nav className="fixed w-full z-50 bg-gradient-to-b from-black/80 to-black/0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-white">Bio Imune</div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-white hover:text-teal-400 transition-colors"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-teal-400 transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-white hover:text-teal-400 transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
              >
                Orçamento
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden absolute w-full bg-black/95 backdrop-blur-lg transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="py-4 px-6 space-y-4">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-white hover:text-teal-400 py-2 transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left text-white hover:text-teal-400 py-2 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left text-white hover:text-teal-400 py-2 transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left text-white hover:text-teal-400 py-2 transition-colors"
            >
              Contate-nos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              Orçamento
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
          Dedetização Bio Imune
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-teal-50">
          Proteja seu ambiente com soluções profissionais e ecológicas de controle de pragas
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Fale Conosco
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full backdrop-blur-sm transition-all transform hover:scale-105"
          >
            Nossos Serviços
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;