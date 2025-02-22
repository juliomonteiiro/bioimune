import { useState } from 'react';
import Section from './ui/Section';
import SectionTitle from './shared/SectionTitle';
import Card from './ui/Card';
import Button from './ui/Button';
import useMediaQuery from '../hooks/useMediaQuery';

const reviews = [
  {
    title: "Serviço Excepcional",
    text: "Profissionais altamente qualificados. O serviço foi realizado com muita atenção aos detalhes e segurança.",
    date: "Mar/2024",
    name: "Maria Silva",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    title: "Atendimento Profissional",
    text: "Pontualidade e eficiência no serviço. Resolveram nosso problema com pragas de forma rápida e eficaz.",
    date: "Mar/2024",
    name: "João Santos",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    title: "Recomendo Fortemente",
    text: "Ótima experiência com a Bio Imune. Utilizamos o serviço mensalmente e sempre com excelentes resultados.",
    date: "Fev/2024",
    name: "Ana Costa",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    title: "Qualidade Garantida",
    text: "Empresa séria e comprometida. Os produtos utilizados são de alta qualidade e seguros.",
    date: "Fev/2024",
    name: "Pedro Lima",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    title: "Excelente Custo-Benefício",
    text: "Preço justo pelo serviço prestado. A equipe é muito bem treinada e prestativa.",
    date: "Jan/2024",
    name: "Clara Oliveira",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    title: "Serviço Confiável",
    text: "Já utilizei várias vezes e sempre com ótimos resultados. Equipe muito profissional.",
    date: "Jan/2024",
    name: "Roberto Martins",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <Card>
    <div className="p-6">
      <div className="flex gap-1 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{review.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{review.text}</p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <img 
          src={review.image} 
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-400"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">{review.name}</p>
          <p className="text-xs text-gray-500">{review.date}</p>
        </div>
      </div>
    </div>
  </Card>
);

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1023px)');

  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const visibleReviews = reviews.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <Section id="depoimentos" bgColor="bg-gradient-to-b from-teal-800 to-teal-900">
      <SectionTitle
        title="O que nossos clientes dizem"
        className="text-white"
      />

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-8">
          <Button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            variant="secondary"
          >
            Anterior
          </Button>
          <Button
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1}
            variant="secondary"
          >
            Próximo
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentIndex ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir para o slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Reviews;