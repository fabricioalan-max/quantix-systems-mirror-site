
import React from 'react';
import { Code, Cog, Database, Smartphone, Cloud, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Criamos sistemas web e desktop personalizados para atender às necessidades específicas do seu negócio.',
      features: ['Sistemas Web Responsivos', 'Aplicações Desktop', 'APIs e Integrações', 'Manutenção e Suporte'],
      color: 'bg-blue-500'
    },
    {
      icon: Cog,
      title: 'Automação de Processos',
      description: 'Automatizamos processos manuais para aumentar a eficiência e reduzir custos operacionais.',
      features: ['RPA (Robotic Process Automation)', 'Workflows Automatizados', 'Integração de Sistemas', 'Relatórios Automáticos'],
      color: 'bg-green-500'
    },
    {
      icon: Database,
      title: 'Gestão de Dados',
      description: 'Organizamos e estruturamos seus dados para tomadas de decisão mais inteligentes.',
      features: ['Business Intelligence', 'Data Warehouse', 'Análise de Dados', 'Dashboards Executivos'],
      color: 'bg-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvemos aplicativos móveis nativos e híbridos para iOS e Android.',
      features: ['Apps Nativos', 'Apps Híbridos', 'UI/UX Design', 'Publicação nas Stores'],
      color: 'bg-orange-500'
    },
    {
      icon: Cloud,
      title: 'Soluções Cloud',
      description: 'Migramos e otimizamos sistemas para a nuvem com segurança e escalabilidade.',
      features: ['Migração para Cloud', 'Infraestrutura AWS/Azure', 'Backup e Recuperação', 'Monitoramento 24/7'],
      color: 'bg-cyan-500'
    },
    {
      icon: Shield,
      title: 'Segurança Digital',
      description: 'Implementamos soluções de segurança para proteger seus dados e sistemas.',
      features: ['Auditoria de Segurança', 'Implementação de Firewalls', 'Criptografia de Dados', 'Compliance LGPD'],
      color: 'bg-red-500'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-4">
            💼 Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções Completas para{' '}
            <span className="text-primary-600">Seu Negócio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços tecnológicos para transformar 
            e digitalizar os processos da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Transformar seu Negócio?
          </h3>
          <p className="text-primary-100 mb-8 text-lg max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções podem 
            impulsionar o crescimento da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('contato')}
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('portfolio')}
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
