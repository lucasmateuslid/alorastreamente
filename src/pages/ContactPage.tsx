import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactSection from '../components/home/ContactSection';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  const officeHours = [
    { day: 'Segunda a Quinta', hours: '08:00 - 18:00' },
    {day: 'Sexta', hours: '08:00 - 17:00' },
    { day: 'Sábado', hours: '09:00 - 13:00' },
    { day: 'Domingo', hours: 'Fechado' },
  ];

  const offices = [
    {
      city: 'Natal',
      address: 'Av. Prudente de Morais, 2700 - Lagoa Nova',
      phone: '(84) 4042-0962',
      email: 'contato@alorastreamento.com.br',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="bg-primary-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Entre em Contato
              </h1>
              <p className="text-xl text-primary-100">
                Estamos prontos para ajudar com todas as suas dúvidas sobre rastreamento veicular
              </p>
            </div>
          </div>
        </section>
        
        <ContactSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nossos Escritórios
              </h2>
              <p className="text-lg text-gray-600">
                Visite um de nossos escritórios regionais para conhecer melhor nossos serviços
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-primary-600 hover:text-primary-700">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Horário de Atendimento
              </h2>
              <p className="text-lg text-gray-600">
                Nossa equipe está disponível nos seguintes horários
              </p>
            </div>
            
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                {officeHours.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary-600 mr-3" />
                      <span className="text-gray-900 font-medium">{item.day}</span>
                    </div>
                    <span className="text-gray-700">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;