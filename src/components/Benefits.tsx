import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';
import Section from './ui/Section';
import Grid from './layout/Grid';
import Card from './ui/Card';

const Benefits = () => {
  const benefits = [
    { 
      number: "98%", 
      text: "Satisfação dos clientes",
      icon: Users,
      description: "Avaliações positivas e clientes satisfeitos"
    },
    { 
      number: "24h", 
      text: "Atendimento disponível",
      icon: Clock,
      description: "Suporte e emergências 24 horas"
    },
    { 
      number: "15+", 
      text: "Anos de experiência",
      icon: Award,
      description: "Tradição e conhecimento no mercado"
    },
    { 
      number: "5k+", 
      text: "Clientes atendidos",
      icon: Shield,
      description: "Confiança de milhares de clientes"
    }
  ];

  return (
    <Section bgColor="bg-teal-700" className="text-white">
      <Grid cols={2} gap={12}>
        <div className="lg:pr-12 lg:border-r border-teal-600/30">
          <div className="relative mb-8 group">
            <div className="absolute -left-4 lg:-left-10 top-4 w-12 lg:w-20 h-0.5 bg-white 
                          transform origin-left transition-all duration-300 group-hover:scale-x-110"></div>
            <h2 className="text-2xl font-bold pl-10 transform transition-all duration-300 group-hover:translate-x-2">
              Por que dedetizar com a Bio Imune?
            </h2>
          </div>
          <p className="text-sm opacity-90 leading-relaxed transform transition-all duration-500 hover:translate-x-1">
            A Bio Imune oferece soluções completas em controle de pragas, com produtos de alta qualidade
            e profissionais especializados. Nossa experiência e compromisso com a excelência garantem
            resultados duradouros e a satisfação total dos nossos clientes.
          </p>
        </div>
        
        <Grid cols={2} gap={8} className="lg:pl-12">
          {benefits.map((benefit, i) => (
            <Card 
              key={i}
              className="bg-white/5 backdrop-blur-sm text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-4"
            >
              <div className="flex justify-center mb-3">
                <benefit.icon className="w-8 h-8 text-teal-300" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
                {benefit.number}
              </div>
              <p className="text-sm font-medium mb-2">
                {benefit.text}
              </p>
              <p className="text-xs text-teal-200/80">
                {benefit.description}
              </p>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
}

export default Benefits;