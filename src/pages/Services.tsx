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
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      icon: MessageSquare,
      title: t('services.chat.title') || 'Умные ИИ-ассистенты',
      description: t('services.chat.desc') || 'Персональные ИИ-специалисты для вашего бизнеса, обученные на ваших данных и готовые отвечать клиентам 24/7',
      features: [
        t('services.chat.feature1') || 'Круглосуточная поддержка клиентов без выходных',
        t('services.chat.feature2') || 'Обработка тысяч запросов одновременно',
        t('services.chat.feature3') || 'Интеграция с CRM, ERP и другими системами',
        t('services.chat.feature4') || 'Обучение на документах и базе знаний компании',
        t('services.chat.feature5') || 'Поддержка 50+ языков',
        t('services.chat.feature6') || 'Аналитика разговоров и качества ответов'
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Bot,
      title: t('services.automation.title') || 'Автоматизация бизнес-процессов',
      description: t('services.automation.desc') || 'Комплексные ИИ-решения для автоматизации рутинных задач и оптимизации рабочих процессов',
      features: [
        t('services.automation.feature1') || 'Автоматическая обработка и анализ документов',
        t('services.automation.feature2') || 'Интеллектуальная классификация и сортировка данных',
        t('services.automation.feature3') || 'Генерация отчетов и аналитических сводок',
        t('services.automation.feature4') || 'Умная маршрутизация задач между сотрудниками',
        t('services.automation.feature5') || 'Автоматизация email-рассылок и уведомлений',
        t('services.automation.feature6') || 'Интеграция с существующими IT-системами'
      ],
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title') || 'ИИ-аналитика и прогнозирование',
      description: t('services.analytics.desc') || 'Продвинутая аналитика с использованием машинного обучения для принятия стратегических решений',
      features: [
        t('services.analytics.feature1') || 'Прогнозирование продаж и трендов рынка',
        t('services.analytics.feature2') || 'Анализ поведения клиентов и сегментация',
        t('services.analytics.feature3') || 'Персонализированные рекомендации товаров',
        t('services.analytics.feature4') || 'Интерактивные дашборды и визуализация',
        t('services.analytics.feature5') || 'Анализ рисков и выявление аномалий',
        t('services.analytics.feature6') || 'Оптимизация цен и маркетинговых кампаний'
      ],
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: t('services.benefits.efficiency') || 'Повышение эффективности на 70%',
      description: t('services.benefits.efficiency.desc') || 'Автоматизируем рутинные задачи, освобождая время сотрудников для стратегической работы'
    },
    {
      icon: Clock,
      title: t('services.benefits.time') || 'Мгновенные ответы клиентам',
      description: t('services.benefits.time.desc') || 'Среднее время ответа сокращается с часов до секунд благодаря ИИ-ассистентам'
    },
    {
      icon: Users,
      title: t('services.benefits.satisfaction') || 'Счастливые клиенты',
      description: t('services.benefits.satisfaction.desc') || '98% клиентов довольны качеством обслуживания наших ИИ-ассистентов'
    },
    {
      icon: Shield,
      title: t('services.benefits.reliability') || 'Безупречная надежность',
      description: t('services.benefits.reliability.desc') || 'Гарантированная работа 24/7 с уровнем доступности 99.9% и защитой данных'
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
                {t('services.title') || 'Наши услуги'}
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('services.subtitle') || 'Превратите свой бизнес в умную компанию будущего. Наши ИИ-решения автоматизируют процессы, улучшают клиентский сервис и повышают прибыльность.'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
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
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => navigate('/hire')}
                  >
                    {t('services.order') || 'Заказать'}
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
              {t('services.benefits.title') || 'Преимущества наших решений'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.benefits.subtitle') || 'Почему клиенты выбирают HumoAI'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              {t('services.cta.title') || 'Готовы начать?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('services.cta.subtitle') || 'Получите персонального ИИ-специалиста для вашего бизнеса уже сегодня'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate('/hire')}
                className="group"
              >
                {t('services.cta.hire') || 'Нанять ИИ-специалиста'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => navigate('/chat')}
              >
                {t('services.cta.demo') || 'Попробовать демо'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;