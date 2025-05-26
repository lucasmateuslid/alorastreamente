import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/login/LoginForm';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogin = (email: string, password: string) => {
    // In a real application, this would involve proper authentication
    // For demo purposes, we'll just navigate to the dashboard
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <LoginForm onLogin={handleLogin} />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;