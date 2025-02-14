import React from 'react';
import SectionTitle from './shared/SectionTitle';
import Button from './ui/Button';
import Section from './ui/Section';
import Grid from './layout/Grid';

const About = () => {
  return (
    <Section id="sobre" bgColor="bg-white">
      <SectionTitle
        title="Quem Somos"
        subtitle="Sobre a Bio Imune"
      />

      <Grid cols={2} gap={16}>
        <div>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            A Bio Imune é líder em soluções de controle de pragas, com mais de 15 anos de experiência no mercado. 
            Nossa missão é proporcionar ambientes seguros e saudáveis através de métodos eficazes e ecologicamente responsáveis.
            Utilizamos produtos de última geração, aprovados pela ANVISA, e contamos com uma equipe altamente qualificada e 
            certificada para garantir os melhores resultados.
          </p>
          <Button 
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça nossos serviços
          </Button>
        </div>
        <div className="relative">
          <img 
            src="https://www.zet-tecdedetizadora.com.br/wp-content/uploads/2022/03/shutterstock_1545000641-1024x683.webp"
            alt="Profissional Bio Imune"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </Grid>
    </Section>
  );
}

export default About;