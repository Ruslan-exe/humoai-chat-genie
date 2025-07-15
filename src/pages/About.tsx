import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Users, Target, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Brain,
      title: t('about.values.innovation.title') || 'Технологические инновации',
      description: t('about.values.innovation.desc') || 'Используем самые современные модели ИИ: GPT-4, Claude, LLaMA. Постоянно изучаем новые технологии и внедряем их в наши решения для максимальной эффективности.'
    },
    {
      icon: Users,
      title: t('about.values.team.title') || 'Экспертная команда',
      description: t('about.values.team.desc') || 'Наша команда состоит из опытных разработчиков, data scientists и ML-инженеров с опытом работы в ведущих технологических компаниях.'
    },
    {
      icon: Target,
      title: t('about.values.results.title') || 'Фокус на результат',
      description: t('about.values.results.desc') || 'Мы не просто создаем ИИ-решения, мы решаем реальные бизнес-задачи. Наши клиенты видят измеримые результаты уже через месяц работы.'
    },
    {
      icon: Award,
      title: t('about.values.quality.title') || 'Качество и надежность',
      description: t('about.values.quality.desc') || 'Все наши решения проходят тщательное тестирование. Гарантируем стабильную работу 24/7 с уровнем доступности 99.9%.'
    },
    {
      icon: Globe,
      title: t('about.values.global.title') || 'Глобальное мышление',
      description: t('about.values.global.desc') || 'Работаем с клиентами по всему миру, понимаем специфику разных рынков и адаптируем решения под локальные особенности.'
    },
    {
      icon: Zap,
      title: t('about.values.speed.title') || 'Быстрое внедрение',
      description: t('about.values.speed.desc') || 'От идеи до запуска - всего 2-4 недели. Используем agile-методологии и готовые компоненты для ускорения разработки.'
    }
  ];

  const stats = [
    { number: '500+', label: t('about.stats.clients') || 'Довольных клиентов' },
    { number: '98%', label: t('about.stats.satisfaction') || 'Удовлетворенность клиентов' },
    { number: '50M+', label: t('about.stats.messages') || 'Сообщений обработано' },
    { number: '99.9%', label: t('about.stats.uptime') || 'Время работы' }
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
                {t('about.title') || 'О нас'}
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('about.subtitle') || 'HumoAI - ведущая компания в области разработки ИИ-решений для бизнеса. Мы помогаем компаниям автоматизировать процессы и улучшить клиентский сервис с помощью искусственного интеллекта.'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                {t('about.mission.title') || 'Наша миссия'}
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {t('about.mission.text') || 'HumoAI основана в 2021 году с простой, но амбициозной целью: сделать мощные технологии искусственного интеллекта доступными для бизнеса любого размера.'}
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы понимаем, что каждый бизнес уникален, поэтому создаем персонализированные ИИ-решения, которые идеально интегрируются в существующие процессы и помогают достигать конкретных целей - от автоматизации клиентского сервиса до оптимизации внутренних операций.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Globe className="w-32 h-32 text-white animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {t('about.values.title') || 'Наши ценности'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.subtitle') || 'Принципы, которыми мы руководствуемся в работе'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {t('about.team.title') || 'Наша команда'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.subtitle') || 'Профессионалы, которые делают будущее реальностью'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {t(`about.team.member${member}.name`) || `Эксперт ${member}`}
                  </h3>
                  <p className="text-primary mb-4">
                    {t(`about.team.member${member}.role`) || 'AI Специалист'}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t(`about.team.member${member}.desc`) || 'Опытный специалист в области искусственного интеллекта'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;