import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Gerente de Logística',
    company: 'Transportadora Express',
    content: 'O sistema de rastreamento da Alô rastreamento revolucionou nossa operação logística. Conseguimos reduzir custos operacionais e melhorar significativamente a eficiência de nossa frota.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Ana Ferreira',
    role: 'Empresária',
    company: 'Distribuidora Central',
    content: 'Desde que implementamos o rastreamento da Alô, as entregas ficaram mais eficientes e nossos clientes mais satisfeitos. O suporte técnico é excelente e sempre nos ajuda com rapidez.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Roberto Almeida',
    role: 'Diretor de Operações',
    company: 'Construtora Horizonte',
    content: 'A Alô rastreamento nos proporcionou total controle sobre nossa frota de veículos e maquinário pesado. Os relatórios detalhados nos ajudam a tomar decisões estratégicas importantes.',
    rating: 4,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600">
            Confira os depoimentos de empresas e profissionais que confiam em nossos serviços de rastreamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
