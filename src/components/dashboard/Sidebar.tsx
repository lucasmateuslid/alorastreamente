import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Map, 
  BarChart, 
  Bell, 
  Settings, 
  Users, 
  HelpCircle, 
  LogOut,
  Home,
  Lock
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { name: 'Visão Geral', path: '/dashboard', icon: Home },
    { name: 'Mapa de Rastreamento', path: '/dashboard/map', icon: Map },
    { name: 'Relatórios', path: '/dashboard/reports', icon: BarChart },
    { name: 'Alertas', path: '/dashboard/alerts', icon: Bell },
    { name: 'Usuários', path: '/dashboard/users', icon: Users },
    { name: 'Configurações', path: '/dashboard/settings', icon: Settings },
    { name: 'Ajuda', path: '/dashboard/help', icon: HelpCircle },
  ];
  
  return (
    <div className="bg-primary-900 text-white h-full flex flex-col w-64 fixed inset-y-0 left-0 z-10">
      <div className="p-5 border-b border-primary-800">
        <Link to="/" className="flex items-center">
          <Lock className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-bold text-white">RastreioMax</span>
        </Link>
      </div>
      
      <div className="flex-grow overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  group flex items-center px-3 py-2 text-base font-medium rounded-md
                  ${isActive(item.path) 
                    ? 'bg-primary-800 text-white' 
                    : 'text-primary-100 hover:bg-primary-800 hover:text-white'}
                `}
              >
                <Icon className="mr-4 h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-primary-800">
        <button
          onClick={onLogout}
          className="group flex items-center px-3 py-2 text-base font-medium rounded-md text-primary-100 hover:bg-primary-800 hover:text-white w-full"
        >
          <LogOut className="mr-4 h-5 w-5 flex-shrink-0" />
          Sair
        </button>
      </div>
    </div>
  );
};

export default Sidebar;