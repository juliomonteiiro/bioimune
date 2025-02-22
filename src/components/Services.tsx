import { Bug, Building2, SprayCan as Spray } from 'lucide-react';
import Section from './ui/Section';
import SectionTitle from './shared/SectionTitle';
import Card from './ui/Card';
import Button from './ui/Button';

const ServiceCard = ({ title, description, image, icon: Icon, color, price }: { 
  title: string; 
  description: string; 
  image: string;
  icon: any;
  color: string;
  price: string;
}) => (
  <Card className={`bg-gradient-to-br ${color}`}>
    <div className="relative aspect-w-16 aspect-h-9">
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <Icon className="w-8 h-8 mb-2" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
    <div className="p-6 bg-white">
      <p className="text-gray-600 text-sm leading-relaxed mb-4 h-24 overflow-hidden">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-teal-600 font-bold">{price}</span>
        <Button 
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          size="sm"
        >
          Solicitar Orçamento
        </Button>
      </div>
    </div>
  </Card>
);

const Services = () => {
  const services = [
    {
      title: "Dedetização Residencial",
      description: "Proteção completa para sua casa contra insetos, roedores e aracnídeos. Serviço inclui vistoria detalhada, aplicação de produtos específicos e ecológicos, com garantia de 3 meses.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtEbvCFTZdT1jQthGCSV6oU6W7EL3tJI4wQ&s",
      icon: Bug,
      color: "from-teal-500/10 to-teal-600/10",
      price: "A partir de R$ 180,00"
    },
    {
      title: "Dedetização Comercial",
      description: "Soluções especializadas para comércios e indústrias, incluindo manejo integrado de pragas, relatórios técnicos e certificação para vigilância sanitária. Atendimento personalizado.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Building2,
      color: "from-teal-500/10 to-teal-600/10",
      price: "A partir de R$ 250,00"
    },
    {
      title: "Sanitização Profissional",
      description: "Eliminação eficaz de vírus e bactérias com produtos específicos e tecnologia avançada. Ideal para estabelecimentos comerciais, escritórios e áreas de grande circulação.",
      image: "https://exterminseto.com.br/uploads/pagina/elemento/campo/2023/11/sLoFi940H1PG0zQ3/sanitizacao-de-ambientes-de-trabalho-importancia-e-frequencia-recomendada.jpg",
      icon: Spray,
      color: "from-teal-500/10 to-teal-600/10",
      price: "A partir de R$ 200,00"
    }
  ];

  return (
    <Section id="servicos" bgColor="bg-gray-50">
      <SectionTitle
        title="Soluções Profissionais"
        subtitle="Nossos Serviços"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Atendemos Campinas, Sumaré, Hortolândia, Paulínia, Americana e Valinhos
        </p>
        <Button 
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          size="lg"
        >
          Agende uma Avaliação Gratuita
        </Button>
      </div>
    </Section>
  );
}

export default Services;