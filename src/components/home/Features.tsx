import React from 'react';
import { Shield, Bell, MapPin, BarChart3, Lock, Clock, Settings, Smartphone } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

const features = [
  {
    icon: <MapPin className="h-6 w-6 text-primary-600" />,
    title: 'Rastreamento em Tempo Real',
    description: 'Acompanhe a localização exata de seus veículos a qualquer momento, com atualização em tempo real.',
  },
  {
    icon: <Bell className="h-6 w-6 text-primary-600" />,
    title: 'Alertas Instantâneos',
    description: 'Receba notificações imediatas sobre eventos importantes, como saída de rota ou velocidade excessiva.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary-600" />,
    title: 'Relatórios Detalhados',
    description: 'Acesse relatórios completos de histórico de rotas, paradas, velocidade e consumo de combustível.',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary-600" />,
    title: 'Segurança Avançada',
    description: 'A Alô rastreamento oferece proteção contra roubo com sistemas de bloqueio remoto e recuperação de veículos.',
  },
  {
    icon: <Clock className="h-6 w-6 text-primary-600" />,
    title: 'Histórico Completo',
    description: 'Consulte todo o histórico de movimentação de seus veículos, com dados armazenados por até 90 dias.',
  },
  {
    icon: <Lock className="h-6 w-6 text-primary-600" />,
    title: 'Controle de Acesso',
    description: 'Defina diferentes níveis de permissão para cada usuário da Alô conforme necessidade.',
  },
  {
    icon: <Settings className="h-6 w-6 text-primary-600" />,
    title: 'Manutenção Preventiva',
    description: 'Acompanhe o estado de seus veículos e receba alertas para manutenções programadas.',
  },
  {
    icon: <Smartphone className="h-6 w-6 text-primary-600" />,
    title: 'Aplicativo Mobile',
    description: 'Acesse todos os recursos da Alô rastreamento pelo seu smartphone, com aplicativos para iOS e Android.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recursos Poderosos da Alô Rastreamento
          </h2>
          <p className="text-lg text-gray-600">
            A Alô rastreamento oferece um conjunto completo de ferramentas para monitoramento
            e gerenciamento eficiente de seus veículos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hoverEffect className="h-full">
              <CardBody className="flex flex-col items-start">
                <div className="p-3 bg-primary-50 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
