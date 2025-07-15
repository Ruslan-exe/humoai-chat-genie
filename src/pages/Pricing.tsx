import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Star, Zap, Crown, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Lite',
      price: '100',
      period: t('pricing.plans.lite.period'),
      description: t('pricing.plans.lite.description'),
      icon: Zap,
      popular: false,
      features: [
        t('pricing.plans.lite.feature1'),
        t('pricing.plans.lite.feature2'),
        t('pricing.plans.lite.feature3'),
        t('pricing.plans.lite.feature4'),
        t('pricing.plans.lite.feature5'),
        t('pricing.plans.lite.feature6'),
        t('pricing.plans.lite.feature7')
      ]
    },
    {
      name: 'Basic',
      price: '199',
      originalPrice: '299',
      period: t('pricing.plans.basic.period'),
      description: t('pricing.plans.basic.description'),
      icon: Star,
      popular: true,
      features: [
        t('pricing.plans.basic.feature1'),
        t('pricing.plans.basic.feature2'),
        t('pricing.plans.basic.feature3'),
        t('pricing.plans.basic.feature4'),
        t('pricing.plans.basic.feature5'),
        t('pricing.plans.basic.feature6'),
        t('pricing.plans.basic.feature7'),
        t('pricing.plans.basic.feature8'),
        t('pricing.plans.basic.feature9')
      ]
    },
    {
      name: 'Individual',
      price: t('pricing.plans.individual.price'),
      period: '',
      description: t('pricing.plans.individual.description'),
      icon: Crown,
      popular: false,
      features: [
        t('pricing.plans.individual.feature1'),
        t('pricing.plans.individual.feature2'),
        t('pricing.plans.individual.feature3'),
        t('pricing.plans.individual.feature4'),
        t('pricing.plans.individual.feature5'),
        t('pricing.plans.individual.feature6'),
        t('pricing.plans.individual.feature7'),
        t('pricing.plans.individual.feature8'),
        t('pricing.plans.individual.feature9'),
        t('pricing.plans.individual.feature10')
      ]
    }
  ];

  const faqs = [
    {
      question: t('pricing.faq.q1'),
      answer: t('pricing.faq.a1')
    },
    {
      question: t('pricing.faq.q2'),
      answer: t('pricing.faq.a2')
    },
    {
      question: t('pricing.faq.q3'),
      answer: t('pricing.faq.a3')
    },
    {
      question: t('pricing.faq.q4'),
      answer: t('pricing.faq.a4')
    },
    {
      question: t('pricing.faq.q5'),
      answer: t('pricing.faq.a5')
    },
    {
      question: t('pricing.faq.q6'),
      answer: t('pricing.faq.a6')
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
                {t('pricing.title')}
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {t('pricing.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                ✓ {t('pricing.benefits.free_trial')}
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                ✓ {t('pricing.benefits.no_card')}
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                ✓ {t('pricing.benefits.cancel_anytime')}
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                ✓ {t('pricing.benefits.support_24_7')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-glow transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                    {t('pricing.popular')}
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-gradient-primary' : 'bg-secondary'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                  
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through mb-1">
                        ${plan.originalPrice}{plan.period}
                      </div>
                    )}
                    <div>
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full group"
                    onClick={() => navigate('/hire')}
                  >
                    {t('pricing.choose')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {t('pricing.faq.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.faq.subtitle')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {t('pricing.features.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t('pricing.features.deployment.title'),
                description: t('pricing.features.deployment.description'),
                icon: '🚀'
              },
              {
                title: t('pricing.features.multilang.title'),
                description: t('pricing.features.multilang.description'),
                icon: '🌍'
              },
              {
                title: t('pricing.features.integrations.title'),
                description: t('pricing.features.integrations.description'),
                icon: '🔗'
              },
              {
                title: t('pricing.features.security.title'),
                description: t('pricing.features.security.description'),
                icon: '🔐'
              },
              {
                title: t('pricing.features.analytics.title'),
                description: t('pricing.features.analytics.description'),
                icon: '📊'
              },
              {
                title: t('pricing.features.updates.title'),
                description: t('pricing.features.updates.description'),
                icon: '🔄'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              {t('pricing.final_cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('pricing.final_cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate('/hire')}
                className="group"
              >
                {t('pricing.cta.start')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => navigate('/contact')}
              >
                {t('pricing.contact_expert')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;