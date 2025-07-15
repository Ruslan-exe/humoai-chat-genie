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
      title: '🤖 Разработка AI-ассистентов под ключ',
      description: 'Создаем персонализированных ассистентов, обученных на ваших данных и готовых работать в любых каналах коммуникации',
      features: [
        'Настройка и обучение на ваших данных (сайт, FAQ, документы, соцсети)',
        'Возможность брендировать ассистента под фирменный стиль компании',
        'Обучение на нескольких языках: узбекский, русский, английский, арабский и др.',
        'Круглосуточная поддержка клиентов без выходных',
        'Обработка тысяч запросов одновременно',
        'Аналитика качества ответов и обратной связи'
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: MessageSquare,
      title: '📲 Интеграция с каналами общения',
      description: 'Подключаем ваших AI-ассистентов ко всем популярным платформам и внутренним системам компании',
      features: [
        'Telegram, WhatsApp, Instagram Direct',
        'Внедрение на сайт компании и в клиентские порталы',
        'Интеграция с корпоративными CRM и чатами',
        'Синхронизация с системами учета и планирования',
        'API для подключения к любым внешним сервисам',
        'Единая панель управления всеми каналами'
      ],
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: BarChart3,
      title: '📊 Аналитика и оптимизация',
      description: 'Комплексный анализ работы ассистентов с рекомендациями по улучшению и постоянным развитием',
      features: [
        'Отслеживание пользовательских запросов и поведения',
        'Анализ эффективности ответов и удовлетворенности клиентов',
        'Постоянное улучшение знаний ассистента',
        'Детальная статистика по каналам и темам',
        'Прогнозирование нагрузки и планирование ресурсов',
        'Автоматические отчеты для руководства'
      ],
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: '⚙️ Поддержка и сопровождение',
      description: 'Полное техническое сопровождение и развитие ваших AI-решений',
      features: [
        'Круглосуточная техническая поддержка',
        'Индивидуальные консультации по оптимизации',
        'Регулярное обновление и масштабирование решений',
        'Обучение персонала работе с системой',
        'Резервное копирование и восстановление данных',
        'Мониторинг производительности 24/7'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Мгновенное развертывание',
      description: 'Запускаем ваш AI-офис за 24 часа. Никаких долгих настроек, сложных интеграций или технических барьеров. Просто быстрый результат.'
    },
    {
      icon: Globe,
      title: 'Многоязычная поддержка',
      description: 'Ваш ИИ-сотрудник говорит на 10+ языках, включая узбекский, русский, английский, арабский и другие региональные языки.'
    },
    {
      icon: Shield,
      title: 'Безопасность данных',
      description: 'Полное соответствие требованиям местного законодательства. Данные хранятся в Узбекистане с соблюдением всех норм конфиденциальности.'
    },
    {
      icon: Target,
      title: 'Доказанная эффективность',
      description: 'Наши клиенты фиксируют рост производительности на 40-60% уже в первый месяц работы с AI-ассистентом.'
    },
    {
      icon: Users,
      title: 'Простота использования',
      description: 'Интуитивная платформа без необходимости в программировании. Любой сотрудник освоит систему за несколько минут.'
    },
    {
      icon: Clock,
      title: 'Работа без перерывов',
      description: 'Ваш ИИ-сотрудник работает 24/7/365, обрабатывая тысячи запросов одновременно без усталости и выходных.'
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
              Мы предлагаем комплекс решений для автоматизации клиентской поддержки и цифровых коммуникаций с помощью искусственного интеллекта. Превратите свой бизнес в умную компанию будущего.
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
                    Заказать услугу
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
                    Получить поддержку
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