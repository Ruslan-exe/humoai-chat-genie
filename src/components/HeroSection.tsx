import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Zap, TrendingUp, Clock } from 'lucide-react';
import aiChatMockup from '@/assets/ai-chat-mockup.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
                <br />
                <span className="text-white drop-shadow-lg">
                  {t('hero.subtitle')}
                </span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
                {t('hero.description')}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div className="text-3xl font-bold text-primary">x2</div>
                </div>
                <div className="text-sm text-white/80">{t('stats.conversion')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-5 h-5 text-accent" />
                  <div className="text-3xl font-bold text-accent">70%</div>
                </div>
                <div className="text-sm text-white/80">{t('stats.economy')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-primary" />
                  <div className="text-3xl font-bold text-primary">30с</div>
                </div>
                <div className="text-sm text-white/80">{t('stats.speed')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate('/hire')}
                className="group"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                className="group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t('hero.demo')}
              </Button>
            </div>

            {/* Users count */}
            <div className="flex items-center gap-2 text-white/70">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-white text-xs font-semibold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-sm">
                <span className="font-semibold text-white">600+</span> {t('stats.users')}
              </span>
            </div>
          </div>

          {/* Image/Mockup */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src={aiChatMockup}
                alt="AI Chat Interface"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-glow animate-float"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-gradient-primary text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-primary animate-pulse-glow">
                AI Online
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-card">
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};