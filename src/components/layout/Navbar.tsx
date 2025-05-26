import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Lock } from 'lucide-react';
import logoBranca from '../../images/lockpv_header_logo_branca.png'; 
import logoAzul  from '../../images/lockpv_header_logo.png'; 

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Planos', path: '/planos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      src={isScrolled ? logoAzul : logoBranca}
                      alt="Logo Alô Rastreamento"
                      className="h-16 w-16 object-contain transition-all duration-300"
                    />
                    <span
                      className="text-2xl font-bold logo_alo transition-colors duration-300"
                      style={{ color: isScrolled ? '#0d6efd' : 'white' }}
                    >
                      Alô Rastreamento
                    </span>
                  </div>
                </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : isScrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white hover:text-primary-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="bg-white shadow-md rounded-md px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActive(link.path)
                    ? 'text-primary-600 bg-primary-50'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    : 'text-white hover:text-primary-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;