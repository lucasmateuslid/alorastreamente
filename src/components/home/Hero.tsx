import React from 'react';
import { ArrowRight, Shield, Map, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary-900 opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('#')] bg-cover bg-center"></div>
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Monitoramento veicular em tempo real para sua tranquilidade
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-100">
            Rastreamento avançado com tecnologia de ponta para proteger seu patrimônio 24 horas por dia, 7 dias por semana.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="primary"
              className="text-primary-700" // REMOVIDO: hover:bg-gray-100
              rightIcon={<ArrowRight className="h-5 w-5" />}
              as={Link}
              to="/planos"
            >
              Conheça nossos planos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              as={Link}
              to="/demo"
            >
              Demonstração gratuita
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Proteção Avançada</h3>
                <p className="text-gray-200">Segurança para seu patrimônio</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-full">
                <Map className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Localização Precisa</h3>
                <p className="text-gray-200">Monitoramento em tempo real</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Relatórios Detalhados</h3>
                <p className="text-gray-200">Análise completa de rotas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
