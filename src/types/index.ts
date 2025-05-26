export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client';
}

export interface Vehicle {
  id: string;
  plate: string;
  model: string;
  year: string;
  color: string;
  clientId: string;
  status: 'active' | 'inactive' | 'maintenance';
  lastUpdate: string;
  location: {
    latitude: number;
    longitude: number;
    speed: number;
    direction: number;
    address?: string;
  };
}

export interface Alert {
  id: string;
  vehicleId: string;
  type: 'speeding' | 'geofence' | 'battery' | 'engine' | 'other';
  message: string;
  timestamp: string;
  read: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  frequency: 'monthly' | 'yearly';
  features: string[];
  isPopular?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}