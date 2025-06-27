
import React from 'react';
import { Users, Target, Award, TrendingUp, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '15+', label: 'Anos de Experiência' },
    { icon: Target, number: '150+', label: 'Projetos Concluídos' },
    { icon: Award, number: '98%', label: 'Taxa de Satisfação' },
    { icon: TrendingUp, number: '200%', label: 'Crescimento Médio dos Clientes' }
  ];

  const values = [
    {
      title: 'Inovação Constante',
      description: 'Sempre buscamos as tecnologias mais avançadas e melhores práticas do mercado.'
    },
    {
      title: 'Qualidade Garantida',
      description: 'Entregamos soluções robustas, testadas e com total garantia de funcionamento.'
    },
    {
      title: 'Suporte Dedicado',
      description: 'Nossa equipe está sempre disponível para suporte técnico e evolutivo.'
    },
    {
      title: 'Parceria de Longo Prazo',
      description: 'Construímos relacionamentos duradouros, acompanhando o crescimento dos nossos clientes.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-6">
              🏢 Sobre a QUANTIX SISTEMAS
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transformando Empresas através da{' '}
              <span className="text-primary-600">Tecnologia</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A QUANTIX SISTEMAS nasceu com o propósito de democratizar o acesso à tecnologia de ponta 
              para empresas de todos os tamanhos. Com mais de 15 anos de experiência no mercado, 
              desenvolvemos soluções personalizadas que realmente fazem a diferença.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa equipe multidisciplinar combina expertise técnica com visão de negócios, 
              garantindo que cada projeto entregue não apenas funcione perfeitamente, 
              mas também gere resultados tangíveis para nossos clientes.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Equipe trabalhando em projetos de tecnologia"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Em desenvolvimento</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">Sistema ERP</div>
              <div className="text-sm text-gray-600">Projeto em andamento para cliente do setor industrial</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Números que Comprovam nossa Excelência
            </h3>
            <p className="text-lg text-gray-600">
              Resultados que falam por si só
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
