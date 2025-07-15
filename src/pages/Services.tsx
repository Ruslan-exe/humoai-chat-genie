import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  Bot, 
  BarChart3, 
  Shield, 
  Zap, 
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Target
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      icon: Bot,
      title: t('services.ai_development.title'),
      description: t('services.ai_development.description'),
      features: [
        t('services.ai_development.feature1'),
        t('services.ai_development.feature2'),
        t('services.ai_development.feature3'),
        t('services.ai_development.feature4'),
        t('services.ai_development.feature5'),
        t('services.ai_development.feature6')
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: MessageSquare,
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      features: [
        t('services.integration.feature1'),
        t('services.integration.feature2'),
        t('services.integration.feature3'),
        t('services.integration.feature4'),
        t('services.integration.feature5'),
        t('services.integration.feature6')
      ],
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      features: [
        t('services.analytics.feature1'),
        t('services.analytics.feature2'),
        t('services.analytics.feature3'),
        t('services.analytics.feature4'),
        t('services.analytics.feature5'),
        t('services.analytics.feature6')
      ],
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: [
        t('services.support.feature1'),
        t('services.support.feature2'),
        t('services.support.feature3'),
        t('services.support.feature4'),
        t('services.support.feature5'),
        t('services.support.feature6')
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: t('services.benefits.instant.title'),
      description: t('services.benefits.instant.description')
    },
    {
      icon: Globe,
      title: t('services.benefits.multilang.title'),
      description: t('services.benefits.multilang.description')
    },
    {
      icon: Shield,
      title: t('services.benefits.security.title'),
      description: t('services.benefits.security.description')
    },
    {
      icon: Target,
      title: t('services.benefits.efficiency.title'),
      description: t('services.benefits.efficiency.description')
    },
    {
      icon: Users,
      title: t('services.benefits.simplicity.title'),
      description: t('services.benefits.simplicity.description')
    },
    {
      icon: Clock,
      title: t('services.benefits.nonstop.title'),
      description: t('services.benefits.nonstop.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('services.title')}
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('services.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 h-full">
                <CardHeader>
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => navigate('/hire')}
                  >
                    {t('services.order_service')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="grid lg:grid-cols-1 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 group"
                    onClick={() => navigate('/hire')}
                  >
                    {t('services.get_support')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {t('services.benefits.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              {t('services.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('services.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate('/hire')}
                className="group"
              >
                {t('services.cta.hire')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => navigate('/chat')}
              >
                {t('services.cta.demo')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;