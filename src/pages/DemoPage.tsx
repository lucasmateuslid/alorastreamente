import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MapPreview from '../components/demo/MapPreview';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="bg-primary-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Experimente Nossa Plataforma de Rastreamento
              </h1>
              <p className="text-xl text-primary-100">
                Veja como é fácil monitorar sua frota em tempo real com nossa solução completa
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Demonstração Interativa
              </h2>
              <p className="text-lg text-gray-600">
                Explore nosso sistema de rastreamento simulado para ver como funcionam os recursos em tempo real.
              </p>
            </div>
            
            <MapPreview />
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Gostou do que viu? Entre em contato para uma demonstração completa com seus próprios veículos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  as={Link}
                  to="/contato"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Solicitar Demonstração Completa
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  as={Link}
                  to="/planos"
                >
                  Ver Planos e Preços
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Como Funciona
              </h2>
              <p className="text-lg text-gray-600">
                Entenda o processo simples de implementação do nosso sistema de rastreamento
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instalação</h3>
                <p className="text-gray-600">
                  Nossos técnicos realizam a instalação dos rastreadores em seus veículos com rapidez e segurança.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Configuração</h3>
                <p className="text-gray-600">
                  Configuramos o sistema de acordo com suas necessidades, incluindo cercas virtuais e alertas personalizados.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoramento</h3>
                <p className="text-gray-600">
                  Acesse a plataforma de qualquer dispositivo e comece a monitorar sua frota em tempo real.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DemoPage;