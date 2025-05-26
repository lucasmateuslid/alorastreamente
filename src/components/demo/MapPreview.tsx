import React, { useState } from 'react';
import { Car, Plus, Minus, Layers } from 'lucide-react';
import Card, { CardHeader, CardBody } from '../ui/Card';

interface Vehicle {
  id: string;
  plate: string;
  model: string;
  location: {
    lat: number;
    lng: number;
  };
  status: 'moving' | 'stopped' | 'idle';
  speed: number;
}

const demoVehicles: Vehicle[] = [
  {
    id: 'v1',
    plate: 'ABC1234',
    model: 'Ford Ranger',
    location: { lat: -23.5505, lng: -46.6333 },
    status: 'moving',
    speed: 65,
  },
  {
    id: 'v2',
    plate: 'DEF5678',
    model: 'Fiat Strada',
    location: { lat: -23.5605, lng: -46.6233 },
    status: 'stopped',
    speed: 0,
  },
  {
    id: 'v3',
    plate: 'GHI9012',
    model: 'VW Constellation',
    location: { lat: -23.5705, lng: -46.6433 },
    status: 'idle',
    speed: 3,
  },
];

const MapPreview: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [zoom, setZoom] = useState(14);
  
  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };
  
  const handleZoomIn = () => {
    if (zoom < 18) setZoom(zoom + 1);
  };
  
  const handleZoomOut = () => {
    if (zoom > 10) setZoom(zoom - 1);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px]">
      {/* Vehicle List */}
      <div className="md:col-span-1 h-full overflow-y-auto">
        <Card className="h-full">
          <CardHeader>
            <h3 className="text-lg font-semibold">Veículos na Demonstração</h3>
          </CardHeader>
          <CardBody className="p-0">
            <div className="divide-y divide-gray-200">
              {demoVehicles.map((vehicle) => (
                <div 
                  key={vehicle.id}
                  onClick={() => handleVehicleSelect(vehicle)}
                  className={`
                    p-4 cursor-pointer transition-colors
                    ${selectedVehicle?.id === vehicle.id ? 'bg-primary-50' : 'hover:bg-gray-50'}
                  `}
                >
                  <div className="flex items-center">
                    <div className={`
                      p-2 rounded-full mr-3
                      ${vehicle.status === 'moving' ? 'bg-green-100' : 
                        vehicle.status === 'stopped' ? 'bg-red-100' : 'bg-yellow-100'}
                    `}>
                      <Car className={`h-5 w-5 
                        ${vehicle.status === 'moving' ? 'text-green-600' : 
                          vehicle.status === 'stopped' ? 'text-red-600' : 'text-yellow-600'}
                      `} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{vehicle.plate}</p>
                      <p className="text-sm text-gray-600">{vehicle.model}</p>
                      <div className="mt-1 flex items-center">
                        <span className={`
                          inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
                          ${vehicle.status === 'moving' ? 'bg-green-100 text-green-800' : 
                            vehicle.status === 'stopped' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}
                        `}>
                          {vehicle.status === 'moving' ? 'Em movimento' : 
                           vehicle.status === 'stopped' ? 'Parado' : 'Marcha Lenta'}
                        </span>
                        {vehicle.status === 'moving' && (
                          <span className="ml-2 text-xs text-gray-600">{vehicle.speed} km/h</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Map View */}
      <div className="md:col-span-3 h-full">
        <Card className="h-full">
          <div className="relative h-full">
            {/* Simulated Map - In a real application, this would be a Google Maps or Leaflet component */}
            <div className="h-full bg-[url('https://images.pexels.com/photos/242077/pexels-photo-242077.jpeg')] bg-cover bg-center relative">
              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button 
                  onClick={handleZoomIn}
                  className="p-2 bg-white rounded-md shadow-md hover:bg-gray-100 transition-colors"
                >
                  <Plus className="h-5 w-5 text-gray-700" />
                </button>
                <button 
                  onClick={handleZoomOut}
                  className="p-2 bg-white rounded-md shadow-md hover:bg-gray-100 transition-colors"
                >
                  <Minus className="h-5 w-5 text-gray-700" />
                </button>
                <button className="p-2 bg-white rounded-md shadow-md hover:bg-gray-100 transition-colors">
                  <Layers className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              
              {/* Vehicle Indicators would be placed on the map here */}
              
              {/* Selected Vehicle Info */}
              {selectedVehicle && (
                <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className={`
                      p-3 rounded-full mr-4
                      ${selectedVehicle.status === 'moving' ? 'bg-green-100' : 
                        selectedVehicle.status === 'stopped' ? 'bg-red-100' : 'bg-yellow-100'}
                    `}>
                      <Car className={`h-6 w-6 
                        ${selectedVehicle.status === 'moving' ? 'text-green-600' : 
                          selectedVehicle.status === 'stopped' ? 'text-red-600' : 'text-yellow-600'}
                      `} />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-gray-900">{selectedVehicle.plate}</h3>
                        <span className={`
                          ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${selectedVehicle.status === 'moving' ? 'bg-green-100 text-green-800' : 
                            selectedVehicle.status === 'stopped' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}
                        `}>
                          {selectedVehicle.status === 'moving' ? 'Em movimento' : 
                           selectedVehicle.status === 'stopped' ? 'Parado' : 'Marcha Lenta'}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-1">{selectedVehicle.model}</p>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div>
                          <p className="text-sm text-gray-500">Velocidade</p>
                          <p className="font-medium">{selectedVehicle.speed} km/h</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Localização</p>
                          <p className="font-medium">Av. Paulista, São Paulo</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Última atualização</p>
                          <p className="font-medium">Agora</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Direção</p>
                          <p className="font-medium">Nordeste</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Map Loading Overlay - would be shown while map is loading */}
            {false && (
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MapPreview;