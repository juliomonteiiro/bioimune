import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Compromisso Ambiental",
      description: "Utilizamos produtos aprovados pela ANVISA e ecologicamente responsáveis, garantindo a segurança de pessoas e animais."
    },
    {
      title: "Preço Justo",
      description: "Oferecemos serviços de alta qualidade com preços acessíveis, sem comprometer a eficácia do tratamento."
    },
    {
      title: "Garantia de Serviço",
      description: "Todos os nossos serviços incluem garantia e acompanhamento pós-tratamento para sua tranquilidade."
    },
    {
      title: "Atendimento Especializado",
      description: "Equipe treinada para identificar e solucionar problemas específicos de cada ambiente e tipo de infestação."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-medium">Por que nos escolher?</span>
          <h2 className="text-3xl font-bold mt-2">Excelência em Cada Serviço</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Solicite um Orçamento
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://www.dedetizadora.srv.br/wp-content/uploads/2015/07/dedetizacao-sidebar.jpg"
              alt="Profissional Bio Imune"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;