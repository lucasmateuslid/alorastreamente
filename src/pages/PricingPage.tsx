import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PricingSection from '../components/home/PricingSection';
import { CheckCircle } from 'lucide-react';

const PricingPage: React.FC = () => {
  const features = [
    {
      title: 'Rastreamento em Tempo Real',
      description: 'Acompanhe seus veículos 24 horas por dia, 7 dias por semana, com atualizações a cada 30 segundos.',
    },
    {
      title: 'Histórico de Rotas',
      description: 'Acesse o histórico completo de rotas percorridas, com detalhes de velocidade, paradas e tempo de percurso.',
    },
    {
      title: 'Alertas Personalizados',
      description: 'Configure alertas para excesso de velocidade, saída de rota, entrada em áreas restritas e muito mais.',
    },
    {
      title: 'Relatórios Detalhados',
      description: 'Gere relatórios completos de quilometragem, consumo de combustível, tempo de uso e muito mais.',
    },
    {
      title: 'Aplicativo Mobile',
      description: 'Acesse todas as funcionalidades pelo seu smartphone, com aplicativos para iOS e Android.',
    },
    {
      title: 'Suporte Técnico',
      description: 'Conte com nossa equipe de suporte técnico para ajudar com qualquer dúvida ou problema.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="bg-primary-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Planos e Preços
              </h1>
              <p className="text-xl text-primary-100">
                Escolha o plano ideal para sua necessidade de rastreamento veicular
              </p>
            </div>
          </div>
        </section>
        
        <PricingSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Todos os Planos Incluem
              </h2>
              <p className="text-lg text-gray-600">
                Recursos essenciais disponíveis em todos os nossos planos de rastreamento
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary-50 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Precisa de um Plano Personalizado?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Empresas com grandes frotas ou necessidades específicas podem se beneficiar de um plano corporativo personalizado.
                </p>
                <a 
                  href="/contato" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
                >
                  Fale com um Consultor
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;