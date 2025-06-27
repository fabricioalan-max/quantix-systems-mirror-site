
import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Sistema de Gestão Empresarial',
      category: 'ERP/CRM',
      description: 'Sistema completo de gestão para empresa do setor de varejo com mais de 50 funcionários.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      date: '2024',
      results: '+300% aumento na eficiência operacional'
    },
    {
      title: 'Plataforma de E-commerce',
      category: 'E-commerce',
      description: 'Loja virtual completa com sistema de pagamentos integrado e gestão de estoque.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Vercel'],
      date: '2023',
      results: '+250% aumento nas vendas online'
    },
    {
      title: 'Sistema de Automação Industrial',
      category: 'Automação',
      description: 'Solução IoT para monitoramento e controle de equipamentos industriais em tempo real.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tech: ['Python', 'MQTT', 'InfluxDB', 'Grafana'],
      date: '2023',
      results: '-40% redução no tempo de parada'
    },
    {
      title: 'App de Gestão de Frotas',
      category: 'Mobile',
      description: 'Aplicativo móvel para rastreamento e gestão de frotas de veículos comerciais.',
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tech: ['React Native', 'Firebase', 'Google Maps API'],
      date: '2024',
      results: '+180% eficiência no controle de rotas'
    },
    {
      title: 'Dashboard de Business Intelligence',
      category: 'BI/Analytics',
      description: 'Painel executivo com análises avançadas e relatórios automatizados.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tech: ['Power BI', 'Python', 'SQL Server', 'Azure'],
      date: '2023',
      results: '+500% velocidade na tomada de decisões'
    },
    {
      title: 'Sistema de Gestão Hospitalar',
      category: 'Saúde',
      description: 'Plataforma completa para gestão de prontuários eletrônicos e agendamentos.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      date: '2024',
      results: '+90% redução no tempo de atendimento'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-4">
            🚀 Nosso Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Projetos que{' '}
            <span className="text-primary-600">Transformaram Negócios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados extraordinários 
            que alcançamos para nossos clientes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-600">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <ExternalLink className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.date}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-600 font-medium">{project.results}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quer ver seu projeto aqui?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos transformar sua ideia em uma solução tecnológica de sucesso.
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection('contato')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Iniciar Meu Projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
