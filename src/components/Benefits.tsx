import { Shield, Clock, Award, Users } from 'lucide-react';
import Section from './ui/Section';
import Grid from './layout/Grid';
import Card from './ui/Card';

const Benefits = () => {
  const benefits = [
    { 
      number: "100%", 
      text: "Responsabilidade Ambiental",
      icon: Shield,
      description: "Produtos seguros e ecologicamente responsáveis"
    },
    { 
      number: "24h", 
      text: "Atendimento disponível",
      icon: Clock,
      description: "Suporte e emergências 24 horas"
    },
    { 
      number: "6+", 
      text: "Cidades atendidas",
      icon: Award,
      description: "Campinas, Sumaré, Hortolândia e região"
    },
    { 
      number: "500+", 
      text: "Ambientes protegidos",
      icon: Users,
      description: "Residências, comércios e indústrias"
    }
  ];

  return (
    <Section bgColor="bg-teal-700" className="text-white">
      <Grid cols={2} gap={12}>
      <div className="lg:pr-12 lg:border-r border-teal-600/30">
      <div className="relative mb-8 group">
        <div className="absolute -left-1 lg:-left-6 top-4 w-10 lg:w-10 h-0.5 bg-white 
                      transform origin-left transition-all duration-300 group-hover:scale-x-110"></div>
        <h2 className="text-2xl font-bold pl-5 transform transition-all duration-300 group-hover:translate-x-2">
          Por que escolher a Bio Imune?
        </h2>
      </div>
      <p className="text-sm opacity-90 leading-relaxed transform transition-all duration-500 hover:translate-x-1">
        A Bio Imune oferece soluções completas e eficientes no combate a pragas, 
        utilizando produtos de alta qualidade e profissionais especializados, 
        garantindo a eficácia em cada serviço. Nosso compromisso com a excelência 
        e a atenção aos detalhes asseguram resultados duradouros, sempre priorizando 
        a satisfação dos nossos clientes. Trabalhamos com dedicação para transformar 
        qualquer ambiente infestado em um local seguro, limpo e livre de pragas, 
        focando também na saúde e bem-estar das pessoas. A confiança de nossos clientes 
        reflete nosso esforço contínuo em entregar soluções inovadoras e de qualidade.
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