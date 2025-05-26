import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">

              <span className="ml-2 text-2xl font-bold">Alô Rastreamento</span>
            </div>
            <p className="text-gray-300 mt-2">
              Soluções avançadas de rastreamento veicular para proteger seu patrimônio e otimizar sua operação.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/alorastreamento/" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/suporte" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Suporte Técnico
                </Link>
              </li>
              <li>
                <Link to="/tutorial" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Tutoriais
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <a href="https://maps.app.goo.gl/nP7vwvZtDoKHH5wC6" target='_blank'><span className="text-gray-300">Avenida Prudente de Morais, 2700 - Lagoa Nova</span></a>
                
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2" />
                <a href="tel:+558440420962"><span className="text-gray-300">(84) 4042-0962</span></a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2" />
                <a href="mailto:contato@alorastreamento.com.br" className="text-gray-300 hover:text-primary-400 transition-colors">
                  contato@alorastreamento.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Alô Rastreamento. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacidade" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;