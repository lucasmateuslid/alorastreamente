import React from 'react';
import { Car, Clock, AlertTriangle, Fuel, Activity } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change,
  trend,
  icon, 
  bgColor, 
  textColor 
}) => {
  return (
    <Card>
      <CardBody>
        <div className="flex items-center">
          <div className={`${bgColor} p-3 rounded-lg mr-4`}>
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {change && (
              <p className={`
                text-xs mt-1 flex items-center
                ${trend === 'up' ? 'text-green-600' : 
                  trend === 'down' ? 'text-red-600' : 'text-gray-500'}
              `}>
                {trend === 'up' && '↑ '}
                {trend === 'down' && '↓ '}
                {change}
              </p>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const VehicleStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Total de Veículos" 
        value="24" 
        change="2 novos este mês"
        trend="up"
        icon={<Car className="h-6 w-6 text-primary-600" />} 
        bgColor="bg-primary-100" 
        textColor="text-primary-600" 
      />
      
      <StatCard 
        title="Tempo de Operação" 
        value="187h" 
        change="12% acima do mês anterior"
        trend="up"
        icon={<Clock className="h-6 w-6 text-secondary-600" />} 
        bgColor="bg-secondary-100" 
        textColor="text-secondary-600" 
      />
      
      <StatCard 
        title="Alertas Ativos" 
        value="3" 
        change="5 resolvidos hoje"
        trend="down"
        icon={<AlertTriangle className="h-6 w-6 text-amber-600" />} 
        bgColor="bg-amber-100" 
        textColor="text-amber-600" 
      />
      
      <StatCard 
        title="Consumo Médio" 
        value="8.7 L/100km" 
        change="Estável"
        trend="neutral"
        icon={<Fuel className="h-6 w-6 text-blue-600" />} 
        bgColor="bg-blue-100" 
        textColor="text-blue-600" 
      />
    </div>
  );
};

export default VehicleStats;