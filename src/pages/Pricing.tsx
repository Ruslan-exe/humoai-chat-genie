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
      name: t('pricing.starter.name') || 'Стартер',
      price: '299',
      period: t('pricing.period') || '/мес',
      description: t('pricing.starter.desc') || 'Идеально для малого бизнеса',
      icon: Zap,
      popular: false,
      features: [
        t('pricing.starter.feature1') || 'До 1,000 сообщений в месяц',
        t('pricing.starter.feature2') || '1 ИИ-специалист',
        t('pricing.starter.feature3') || 'Базовые интеграции',
        t('pricing.starter.feature4') || 'Email поддержка',
        t('pricing.starter.feature5') || 'Аналитика базовая'
      ]
    },
    {
      name: t('pricing.business.name') || 'Бизнес',
      price: '899',
      period: t('pricing.period') || '/мес',
      description: t('pricing.business.desc') || 'Для растущих компаний',
      icon: Star,
      popular: true,
      features: [
        t('pricing.business.feature1') || 'До 10,000 сообщений в месяц',
        t('pricing.business.feature2') || '5 ИИ-специалистов',
        t('pricing.business.feature3') || 'Все интеграции',
        t('pricing.business.feature4') || 'Приоритетная поддержка',
        t('pricing.business.feature5') || 'Продвинутая аналитика',
        t('pricing.business.feature6') || 'Кастомизация интерфейса',
        t('pricing.business.feature7') || 'API доступ'
      ]
    },
    {
      name: t('pricing.enterprise.name') || 'Корпоративный',
      price: t('pricing.enterprise.price') || 'По запросу',
      period: '',
      description: t('pricing.enterprise.desc') || 'Для крупных предприятий',
      icon: Crown,
      popular: false,
      features: [
        t('pricing.enterprise.feature1') || 'Неограниченные сообщения',
        t('pricing.enterprise.feature2') || 'Неограниченное количество ИИ',
        t('pricing.enterprise.feature3') || 'Персональные интеграции',
        t('pricing.enterprise.feature4') || 'Выделенный менеджер',
        t('pricing.enterprise.feature5') || 'Корпоративная аналитика',
        t('pricing.enterprise.feature6') || 'Белый лейбл',
        t('pricing.enterprise.feature7') || 'SLA 99.9%',
        t('pricing.enterprise.feature8') || 'Обучение команды'
      ]
    }
  ];

  const faqs = [
    {
      question: t('pricing.faq.q1') || 'Можно ли изменить тариф?',
      answer: t('pricing.faq.a1') || 'Да, вы можете повысить или понизить тариф в любое время. Изменения вступают в силу со следующего платежного периода.'
    },
    {
      question: t('pricing.faq.q2') || 'Есть ли бесплатный период?',
      answer: t('pricing.faq.a2') || 'Да, мы предоставляем 14-дневный бесплатный пробный период для всех тарифов.'
    },
    {
      question: t('pricing.faq.q3') || 'Что включает поддержка?',
      answer: t('pricing.faq.a3') || 'Поддержка включает помощь в настройке, обучение, техническую поддержку и консультации по оптимизации.'
    },
    {
      question: t('pricing.faq.q4') || 'Безопасны ли мои данные?',
      answer: t('pricing.faq.a4') || 'Абсолютно. Мы используем шифрование высокого уровня и соблюдаем все стандарты безопасности данных.'
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
                {t('pricing.title') || 'Цены'}
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('pricing.subtitle') || 'Выберите тариф, который подходит вашему бизнесу. Все планы включают бесплатный 14-дневный пробный период.'}
            </p>
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
                    {t('pricing.popular') || 'Популярный'}
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
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
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
                    {t('pricing.choose') || 'Выбрать план'}
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
              {t('pricing.faq.title') || 'Частые вопросы'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.faq.subtitle') || 'Ответы на популярные вопросы о тарифах'}
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              {t('pricing.cta.title') || 'Начните бесплатно уже сегодня'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('pricing.cta.subtitle') || '14 дней бесплатно, без привязки карты, полный доступ ко всем функциям'}
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() => navigate('/hire')}
              className="group"
            >
              {t('pricing.cta.start') || 'Начать бесплатно'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;