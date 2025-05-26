import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import Card, { CardHeader, CardBody, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { Plan } from '../../types';

const plans: Plan[] = [
  {
    id: '1',
  name: 'Meu Alô',
  price: 49.90,
  frequency: 'monthly',
  acquisitionFee: 300.00,
  features: [
    'Equipamento adquirido pelo cliente',
    'Rastreamento e monitoramento 24h 📍',
    'Bloqueador 🔒',
    'Aplicativo para acompanhar o veículo em tempo real 📲',
    'Equipe de pronta-resposta para ações rápidas 🚔',
    'Assistência 24h para sua tranquilidade 👨‍💻',
    'Guincho e chaveiro 24h (em casos de furto/roubo) 🚗🔑'
    ],
  },
  {
    id: '2',
    name: 'Alô App',
    price: 59.90,
    frequency: 'monthly',
    acquisitionFee: 150.00, // taxa de adesão
    installationFee: 0.00,  // instalação grátis
    features: [
      'Rastreamento e monitoramento 24h 📍',
      'Bloqueador 🔒',
      'Aplicativo para acompanhar o veículo em tempo real 📲',
      'Equipe de pronta-resposta para ações rápidas 🚔',
      'Assistência 24h para sua tranquilidade 👨‍💻',
      'Guincho e chaveiro 24h (em casos de furto/roubo) 🚗🔑'
    ],
  },
  {
    id: '3',
    name: 'Alô Certo',
    price: 118.90,
    frequency: 'monthly',
    acquisitionFee: 150.00,  // taxa de adesão
    installationFee: 0.00,   // instalação grátis
    features: [
      'Rastreamento e monitoramento 24h 📍',
      'Bloqueador 🔒',
      'Aplicativo para acompanhar o veículo em tempo real 📲',
      'Equipe de pronta-resposta para ações rápidas 🚔',
      'Assistência 24h para sua tranquilidade 👨‍💻',
      'Guincho e chaveiro 24h (em casos de furto/roubo) 🚗🔑',
      'Auxílio substituição de lanternas e faróis 🔧',
      'Auxílio colisão 🚘💥',
      'Auxílio roubo e furto 🚨',
      'Guincho 24h (casos de pane) - 200KM (100KM ida / 100KM volta)',
      'Chaveiro 24h (abertura de porta)',
      '📌 Carência: 60 dias para benefícios adicionais',
      '📌 Carência: 30 dias para pane e chaveiro - consultar regras',
      'Leve e utilitário 118,90',
      'SUV leve 138,90',
      'SUV grande 158,90',
      'Valores a consultar'
      ],
          isPopular: true,
    },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos acessíveis para todos! 
          </h2>
          <p className="text-lg text-gray-600">
            Escolha o plano ideal e que melhor a tenda suas de rastreamento veicular.
            <br />
            Todos os planos incluem rastreamento em tempo real, alertas de velocidade e muito mais!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`
                h-full 
                ${plan.isPopular ? 'border-2 border-primary-500 relative' : ''}
              `}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Mais popular
                </div>
              )}
              <CardHeader className="text-center pb-6">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    R$ {plan.price.toFixed(2)}
                  </span>
                  <span className="text-gray-600 ml-2">/mês</span>
                </div>
              </CardHeader>
              <CardBody className="border-t border-b border-gray-100 py-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter className="text-center pt-6">
                <Button 
                  variant={plan.isPopular ? "primary" : "outline"} 
                  fullWidth
                >
                  Assinar agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Precisando de um plano personalizado para sua empresa?
          </p>
          <Button variant="outline">
            Entre em contato para soluções corporativas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;