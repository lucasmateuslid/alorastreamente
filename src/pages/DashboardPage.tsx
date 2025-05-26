import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import VehicleStats from '../components/dashboard/VehicleStats';
import ActivityChart from '../components/dashboard/ActivityChart';
import RecentAlerts from '../components/dashboard/RecentAlerts';
import { Map, Car, Clock } from 'lucide-react';
import Card, { CardBody } from '../components/ui/Card';

const DashboardPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [username, setUsername] = useState('Usuário Demo');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('userEmail');
    
    if (!isLoggedIn) {
      navigate('/login');
    }
    
    if (userEmail) {
      // Extract username from email
      const name = userEmail.split('@')[0];
      setUsername(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const recentVehicles = [
    { id: 'v1', plate: 'ABC1234', status: 'active', lastLocation: 'Av. Paulista, São Paulo' },
    { id: 'v2', plate: 'DEF5678', status: 'inactive', lastLocation: 'Rua Augusta, São Paulo' },
    { id: 'v3', plate: 'GHI9012', status: 'maintenance', lastLocation: 'Av. Rebouças, São Paulo' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar onLogout={handleLogout} />
      
      <div className="md:pl-64">
        <Header toggleSidebar={toggleSidebar} username={username} />
        
        <main className="py-6 px-4 sm:px-6 md:px-8 mt-16">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Bem-vindo, {username}!</h1>
            <p className="text-gray-600">Aqui está o resumo da sua frota hoje.</p>
          </div>
          
          <VehicleStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <ActivityChart />
            </div>
            <div>
              <RecentAlerts />
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Veículos Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentVehicles.map((vehicle) => (
                <Card key={vehicle.id}>
                  <CardBody>
                    <div className="flex items-start">
                      <div className={`
                        p-3 rounded-full mr-4 
                        ${vehicle.status === 'active' ? 'bg-green-100' : 
                          vehicle.status === 'inactive' ? 'bg-red-100' : 'bg-yellow-100'}
                      `}>
                        <Car className={`
                          h-6 w-6 
                          ${vehicle.status === 'active' ? 'text-green-600' : 
                            vehicle.status === 'inactive' ? 'text-red-600' : 'text-yellow-600'}
                        `} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{vehicle.plate}</h3>
                        <div className="flex items-center mt-1">
                          <Map className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-600">{vehicle.lastLocation}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Clock className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">Atualizado há 5 min</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;