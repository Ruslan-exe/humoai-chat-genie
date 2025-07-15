import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Users, Target, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Zap,
      title: 'Развертывание за 1 день',
      description: 'Запускаем вашего AI-ассистента за 24 часа. Никаких длительных настроек и сложных технических процедур — просто быстрый результат.'
    },
    {
      icon: Globe,
      title: 'Поддержка 10+ языков',
      description: 'Включая региональные языки: узбекский, таджикский, казахский, киргизский, туркменский, а также русский, английский и арабский.'
    },
    {
      icon: Award,
      title: 'Локальное законодательство',
      description: 'Хранение данных в соответствии с требованиями Узбекистана и других стран региона. Полное соблюдение законов о персональных данных.'
    },
    {
      icon: Target,
      title: 'Рост эффективности на 40–60%',
      description: 'Наши клиенты видят значительное улучшение клиентского сервиса и сокращение времени обработки запросов уже в первый месяц.'
    },
    {
      icon: Brain,
      title: 'Простой запуск без программирования',
      description: 'Интуитивно понятная платформа, которая не требует технических знаний. Любой сотрудник сможет настроить и управлять AI-ассистентом.'
    },
    {
      icon: Users,
      title: 'Персонализация под бренд',
      description: 'Каждый ассистент обучается на ваших данных и говорит языком вашей компании, отражая корпоративные ценности и стиль общения.'
    }
  ];

  const stats = [
    { number: '24 ч', label: 'Время развертывания' },
    { number: '10+', label: 'Поддерживаемых языков' },
    { number: '40-60%', label: 'Рост эффективности' },
    { number: '99.9%', label: 'Время работы' }
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
                {t('about.title')}
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              HumoAI — интеллектуальная AI-платформа нового поколения, созданная, чтобы трансформировать клиентскую поддержку и цифровое взаимодействие между бизнесом и клиентами. Мы помогаем компаниям быстро запускать собственного умного ассистента, который работает 24/7 и говорит на языке вашего бизнеса — буквально.
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
                {t('about.mission')}
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Наша миссия — демократизировать доступ к искусственному интеллекту для малого и среднего бизнеса в Узбекистане, Центральной Азии и странах Ближнего Востока. Мы верим, что качественная клиентская поддержка не должна быть роскошью, а технология — сложной.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                HumoAI обучается на ваших данных — сайте, документах, соцсетях, базе знаний — и превращает их в персонализированного ассистента, который готов отвечать на вопросы клиентов в Telegram, WhatsApp, на сайте и в корпоративных чатах.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Мы предлагаем:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Быстрое развертывание (до 24 часов)
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Интуитивно понятную платформу
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Локализацию под региональные языки
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Соответствие требованиям локального законодательства
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Простую и честную подписную модель оплаты
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground mt-4 font-medium">
                  С нами ваш бизнес станет доступнее, быстрее и ближе к клиенту.
                </p>
              </div>
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
              Почему выбирают HumoAI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ключевые преимущества нашей платформы
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

    </div>
  );
};

export default About;