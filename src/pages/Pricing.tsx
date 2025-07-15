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
      period: '/мес',
      description: 'Идеально для малого бизнеса и стартапов',
      icon: Zap,
      popular: false,
      features: [
        'До 1,000 сообщений в месяц',
        '1 ИИ-специалист с базовым обучением',
        'Интеграция с сайтом и мессенджерами',
        'Email поддержка в рабочие дни',
        'Базовая аналитика диалогов',
        'Готовые шаблоны ответов',
        'Обучение на 10 документах'
      ]
    },
    {
      name: 'Basic',
      price: '199',
      originalPrice: '299',
      period: '/мес',
      description: 'Оптимальное решение для растущего бизнеса',
      icon: Star,
      popular: true,
      features: [
        'До 10,000 сообщений в месяц',
        '5 ИИ-специалистов с углубленным обучением',
        'Интеграция с CRM, ERP системами',
        'Приоритетная поддержка 24/7',
        'Продвинутая аналитика и отчеты',
        'Полная кастомизация интерфейса',
        'API доступ и webhooks',
        'Обучение на 100 документах',
        'Многоязычная поддержка'
      ]
    },
    {
      name: 'Individual',
      price: 'По запросу',
      period: '',
      description: 'Корпоративные решения под ключ',
      icon: Crown,
      popular: false,
      features: [
        'Неограниченное количество сообщений',
        'Неограниченное количество ИИ-специалистов',
        'Индивидуальная разработка под задачи',
        'Выделенный менеджер проекта',
        'Корпоративная аналитика и BI',
        'Белый лейбл решения',
        'SLA 99.9% с гарантиями',
        'Обучение команды и сотрудников',
        'Приоритетная техподдержка',
        'Специальные условия интеграции'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Можно ли изменить тариф?',
      answer: 'Да, вы можете повысить или понизить тариф в любое время. При повышении тарифа изменения вступают в силу немедленно, при понижении - со следующего платежного периода. Мы вернем разницу пропорционально.'
    },
    {
      question: 'Есть ли бесплатный период?',
      answer: 'Да, мы предоставляем 14-дневный бесплатный пробный период для всех тарифов. Никаких обязательств - вы можете отменить в любое время без списания средств.'
    },
    {
      question: 'Что включает поддержка?',
      answer: 'Поддержка включает помощь в настройке ИИ-специалистов, обучение вашей команды, техническую поддержку, консультации по оптимизации и регулярные обновления системы.'
    },
    {
      question: 'Безопасны ли мои данные?',
      answer: 'Абсолютно. Мы используем шифрование AES-256, соблюдаем стандарты ISO 27001, GDPR и локальное законодательство по защите данных. Ваши данные хранятся на серверах в Узбекистане.'
    },
    {
      question: 'Сколько времени занимает внедрение?',
      answer: 'Базовое внедрение занимает 24 часа. Полная настройка под ваши процессы - от 3 до 7 дней в зависимости от сложности. Мы предоставляем поэтапный план внедрения.'
    },
    {
      question: 'Можно ли интегрироваться с нашими системами?',
      answer: 'Да, мы поддерживаем интеграцию с популярными CRM, ERP системами, мессенджерами и можем создать кастомные интеграции через API для любых систем.'
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
                Цены
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Прозрачные цены без скрытых платежей. Все тарифы включают бесплатный 14-дневный пробный период и возможность отказа в любое время.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                ✓ Бесплатный пробный период 14 дней
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                ✓ Без привязки карты
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                ✓ Отмена в любое время
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                ✓ Техподдержка 24/7
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
                    Популярный + Скидка 33%
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
                    Выбрать план
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
              Частые вопросы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о тарифах
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
              Что входит во все тарифы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Базовые возможности, доступные на всех тарифных планах
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Быстрое развертывание',
                description: 'Запуск за 24 часа без технических сложностей',
                icon: '🚀'
              },
              {
                title: 'Многоязычность',
                description: 'Поддержка узбекского, русского, английского и других языков',
                icon: '🌍'
              },
              {
                title: 'Интеграции',
                description: 'Подключение к сайту, Telegram, WhatsApp, Instagram',
                icon: '🔗'
              },
              {
                title: 'Безопасность',
                description: 'Соответствие местному законодательству и стандартам',
                icon: '🔐'
              },
              {
                title: 'Аналитика',
                description: 'Подробные отчеты о работе ИИ-специалистов',
                icon: '📊'
              },
              {
                title: 'Обновления',
                description: 'Регулярные улучшения и новые функции',
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
              Начните бесплатно уже сегодня
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              14 дней бесплатно, без привязки карты, полный доступ ко всем функциям
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate('/hire')}
                className="group"
              >
                Начать бесплатно
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => navigate('/contact')}
              >
                Связаться с экспертом
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;