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
            A Bio Imune nasceu em 2024 com uma missão clara: ser referência no combate e prevenção 
            de pragas urbanas na região metropolitana de Campinas. Nosso compromisso é proporcionar 
            ambientes seguros e saudáveis através de métodos eficazes e ecologicamente responsáveis. 
            Especializamo-nos no controle de insetos, roedores e aracnídeos, atendendo residências, 
            comércios, indústrias e condomínios com excelência e preços acessíveis.
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