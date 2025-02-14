import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5519978042000?text=Olá! Gostaria de fazer um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50 flex items-center gap-2 group"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="w-0 overflow-hidden whitespace-nowrap group-hover:w-24 transition-all duration-500 ease-in-out">
        Fale Conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;