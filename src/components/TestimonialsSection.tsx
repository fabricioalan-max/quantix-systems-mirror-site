
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      position: 'CEO - TechCorp Soluções',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'A QUANTIX SISTEMAS transformou completamente nossa operação. O sistema que desenvolveram aumentou nossa produtividade em 300% e reduziu nossos custos operacionais significativamente. Equipe muito profissional!'
    },
    {
      name: 'Ana Beatriz Costa',
      position: 'Diretora de Operações - LogiMart',
      company: 'LogiMart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c93d4eb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Excelente trabalho! O aplicativo de gestão de frotas que desenvolveram revolucionou nossa logística. Agora temos controle total sobre nossas entregas e nossos clientes estão muito mais satisfeitos.'
    },
    {
      name: 'Roberto Mendes',
      position: 'Proprietário - Indústria Mendes',
      company: 'Indústria Mendes',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Sistema de automação industrial impecável! A QUANTIX entendeu perfeitamente nossas necessidades e entregou uma solução que superou nossas expectativas. ROI alcançado em apenas 6 meses.'
    },
    {
      name: 'Luciana Fernandes',
      position: 'Gerente de TI - HealthCare Plus',
      company: 'HealthCare Plus',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'O sistema de gestão hospitalar desenvolvido pela QUANTIX é fantástico. Interface intuitiva, performance excelente e suporte técnico sempre disponível. Recomendo para qualquer instituição de saúde.'
    },
    {
      name: 'Marcos Oliveira',
      position: 'Diretor Comercial - E-Shop Brasil',
      company: 'E-Shop Brasil',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Nossa plataforma de e-commerce desenvolvida pela QUANTIX aumentou nossas vendas em 250%. O sistema é robusto, seguro e tem uma performance excepcional. Parceria de longo prazo garantida!'
    },
    {
      name: 'Patricia Santos',
      position: 'CEO - DataVision Analytics',
      company: 'DataVision',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'O dashboard de BI criado pela QUANTIX transformou nossa tomada de decisões. Relatórios em tempo real, análises precisas e uma interface muito intuitiva. Investimento que se pagou rapidamente.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-4">
            ⭐ Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que Nossos Clientes{' '}
            <span className="text-primary-600">Dizem sobre Nós</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja os depoimentos de quem já transformou seu negócio conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <Quote className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-primary-100">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-100">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
