import React from 'react';
import Card, { CardHeader, CardBody } from '../ui/Card';

const ActivityChart: React.FC = () => {
  // In a real application, this would use a charting library like Chart.js or Recharts
  // Here we'll create a simple visualization with CSS
  
  const weeklyData = [
    { day: 'Seg', hours: 7.5 },
    { day: 'Ter', hours: 8.2 },
    { day: 'Qua', hours: 6.8 },
    { day: 'Qui', hours: 9.1 },
    { day: 'Sex', hours: 8.5 },
    { day: 'Sáb', hours: 4.2 },
    { day: 'Dom', hours: 1.5 },
  ];
  
  const maxHours = Math.max(...weeklyData.map(d => d.hours));
  
  return (
    <Card className="h-full">
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Atividade da Frota</h3>
        <select 
          className="border border-gray-300 rounded-md text-sm p-1"
          defaultValue="week"
        >
          <option value="day">Hoje</option>
          <option value="week">Esta Semana</option>
          <option value="month">Este Mês</option>
        </select>
      </CardHeader>
      <CardBody>
        <div className="h-64 flex items-end justify-between">
          {weeklyData.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div 
                className="w-10 bg-primary-500 rounded-t-md transition-all duration-500 ease-in-out hover:bg-primary-600"
                style={{ 
                  height: `${(item.hours / maxHours) * 100}%`,
                  maxHeight: '90%',
                }}
              ></div>
              <div className="mt-2 text-sm text-gray-600">{item.day}</div>
              <div className="text-xs font-medium text-gray-900">{item.hours}h</div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Total de horas esta semana</p>
              <p className="text-xl font-semibold text-gray-900">
                {weeklyData.reduce((acc, curr) => acc + curr.hours, 0).toFixed(1)}h
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Média diária</p>
              <p className="text-xl font-semibold text-gray-900">
                {(weeklyData.reduce((acc, curr) => acc + curr.hours, 0) / weeklyData.length).toFixed(1)}h
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ActivityChart;