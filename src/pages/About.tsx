import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Users, Target, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Brain,
      title: t('about.values.innovation.title') || 'Инновации',
      description: t('about.values.innovation.desc') || 'Мы внедряем передовые технологии ИИ для решения бизнес-задач'
    },
    {
      icon: Users,
      title: t('about.values.team.title') || 'Команда',
      description: t('about.values.team.desc') || 'Профессиональная команда экспертов по искусственному интеллекту'
    },
    {
      icon: Target,
      title: t('about.values.results.title') || 'Результат',
      description: t('about.values.results.desc') || 'Фокусируемся на достижении конкретных бизнес-результатов'
    }
  ];

  const stats = [
    { number: '500+', label: t('about.stats.clients') || 'Довольных клиентов' },
    { number: '95%', label: t('about.stats.satisfaction') || 'Удовлетворенность' },
    { number: '24/7', label: t('about.stats.support') || 'Поддержка' },
    { number: '3 года', label: t('about.stats.experience') || 'Опыт работы' }
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
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.mission.text') || 'Мы стремимся сделать технологии искусственного интеллекта доступными для каждого бизнеса. Наша цель - помочь компаниям оптимизировать процессы, улучшить клиентский опыт и достичь новых высот в эффективности.'}
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
          
          <div className="grid md:grid-cols-3 gap-8">
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