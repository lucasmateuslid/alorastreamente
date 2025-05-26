import React from 'react';
import { AlertTriangle, ArrowRight, Clock } from 'lucide-react';
import Card, { CardHeader, CardBody, CardFooter } from '../ui/Card';
import { Link } from 'react-router-dom';
import { Alert } from '../../types';

const recentAlerts: Alert[] = [
  {
    id: 'a1',
    vehicleId: 'v1',
    type: 'speeding',
    message: 'ABC1234 - Excesso de velocidade (95 km/h em zona de 60 km/h)',
    timestamp: new Date(Date.now() - 25 * 60000).toISOString(), // 25 minutes ago
    read: false,
  },
  {
    id: 'a2',
    vehicleId: 'v3',
    type: 'geofence',
    message: 'GHI9012 - Saída da cerca virtual (Região Centro)',
    timestamp: new Date(Date.now() - 120 * 60000).toISOString(), // 2 hours ago
    read: false,
  },
  {
    id: 'a3',
    vehicleId: 'v2',
    type: 'battery',
    message: 'DEF5678 - Bateria fraca (15%)',
    timestamp: new Date(Date.now() - 240 * 60000).toISOString(), // 4 hours ago
    read: true,
  },
  {
    id: 'a4',
    vehicleId: 'v1',
    type: 'engine',
    message: 'ABC1234 - Motor ligado por tempo prolongado em estado parado',
    timestamp: new Date(Date.now() - 300 * 60000).toISOString(), // 5 hours ago
    read: true,
  },
];

const formatTimeAgo = (timestamp: string) => {
  const now = new Date();
  const alertTime = new Date(timestamp);
  const diffMs = now.getTime() - alertTime.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 60) {
    return `${diffMins} min atrás`;
  } else if (diffMins < 1440) {
    const hours = Math.floor(diffMins / 60);
    return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
  } else {
    const days = Math.floor(diffMins / 1440);
    return `${days} dia${days > 1 ? 's' : ''} atrás`;
  }
};

const getAlertTypeStyles = (type: Alert['type']) => {
  switch (type) {
    case 'speeding':
      return {
        bg: 'bg-red-100',
        text: 'text-red-600',
        icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      };
    case 'geofence':
      return {
        bg: 'bg-yellow-100',
        text: 'text-yellow-600',
        icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
      };
    case 'battery':
      return {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        icon: <AlertTriangle className="h-5 w-5 text-orange-600" />,
      };
    case 'engine':
      return {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        icon: <AlertTriangle className="h-5 w-5 text-blue-600" />,
      };
    default:
      return {
        bg: 'bg-gray-100',
        text: 'text-gray-600',
        icon: <AlertTriangle className="h-5 w-5 text-gray-600" />,
      };
  }
};

const RecentAlerts: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Alertas Recentes</h3>
        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
          {recentAlerts.filter(alert => !alert.read).length} não lidos
        </span>
      </CardHeader>
      <CardBody className="p-0">
        <div className="divide-y divide-gray-100">
          {recentAlerts.map((alert) => {
            const alertStyles = getAlertTypeStyles(alert.type);
            
            return (
              <div key={alert.id} className={`p-4 ${!alert.read ? 'bg-primary-50' : ''}`}>
                <div className="flex items-start">
                  <div className={`${alertStyles.bg} p-2 rounded-full mr-3`}>
                    {alertStyles.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 font-medium">{alert.message}</p>
                    <div className="flex items-center mt-1">
                      <Clock className="h-3 w-3 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">{formatTimeAgo(alert.timestamp)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardBody>
      <CardFooter>
        <Link 
          to="/dashboard/alerts" 
          className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
        >
          Ver todos os alertas
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecentAlerts;