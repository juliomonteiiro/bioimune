import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (  
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-12 border-b border-teal-700/30 pb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Bio Imune</h3>
            <p className="text-sm opacity-80 mb-6">
              Proporcionando ambientes seguros e livres de pragas para famílias e empresas.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/bioimune" target="_blank" rel="noopener noreferrer" 
                className="hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/bimune" target="_blank" rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4 text-sm opacity-80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+5519978042000" className="hover:text-teal-400 transition-colors">
                  (19) 97804-2000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:bioimune1@gmail.com" className="hover:text-teal-400 transition-colors">
                  bioimune1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <p>Seg - Sáb: 8h às 18h</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#servicos" className="hover:text-teal-400 transition-colors">Dedetização Residencial</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-teal-400 transition-colors">Dedetização Comercial</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-teal-400 transition-colors">Sanitização</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-teal-400 transition-colors">Controle de Pragas</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Localização</h3>
            <div className="flex items-start gap-3 text-sm opacity-80 mb-4">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
              <p>Rua Exemplo, 123 - Centro<br />Campinas - SP<br />CEP: 13000-000</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975829016813!2d-46.6528347!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzknMTAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1625161561415!5m2!1spt-BR!2sbr"
                width="100%"
                height="150"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-sm opacity-70">
          <p>© {currentYear} Bio Imune. Todos os direitos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-teal-400 transition-colors">Política de Privacidade</a>
            {' • '}
            <a href="#" className="hover:text-teal-400 transition-colors">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;