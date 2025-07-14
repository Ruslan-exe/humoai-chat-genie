import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Brain, Headphones, Shield, Globe, BarChart } from 'lucide-react';

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('features.fast.title'),
      description: t('features.fast.desc'),
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Brain,
      title: t('features.smart.title'),
      description: t('features.smart.desc'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Headphones,
      title: t('features.support.title'),
      description: t('features.support.desc'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Защищенное хранение данных и соответствие стандартам',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Globe,
      title: 'Многоязычность',
      description: 'Поддержка узбекского, русского и английского языков',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
    },
    {
      icon: BarChart,
      title: 'Аналитика',
      description: 'Подробная статистика и отчеты по работе',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современные технологии искусственного интеллекта для развития вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-primary transition-all duration-300 hover:scale-105 border-0 bg-gradient-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};