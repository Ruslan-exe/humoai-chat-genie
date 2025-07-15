import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare,
  Headphones
} from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая валидация
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Здесь был бы API вызов для отправки формы
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    // Очистка формы
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+998917982104',
      description: t('contact.phone_desc')
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'isanbaevruslan04@gmail.com',
      description: t('contact.email_desc')
    },
    {
      icon: MapPin,
      title: t('contact.office'),
      value: t('contact.office_location'),
      description: t('contact.office_desc')
    },
    {
      icon: MessageSquare,
      title: 'Telegram',
      value: '@MEDSOFT1',
      description: t('contact.telegram_desc')
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: t('contact.support.chat'),
      description: t('contact.support.chat_desc'),
      action: t('contact.support.chat_action'),
      details: t('contact.support.chat_details')
    },
    {
      icon: Headphones,
      title: t('contact.support.call'),
      description: t('contact.support.call_desc'),
      action: t('contact.support.call_action'),
      details: t('contact.support.call_details')
    },
    {
      icon: Clock,
      title: t('contact.support.technical'),
      description: t('contact.support.technical_desc'),
      action: t('contact.support.technical_action'),
      details: t('contact.support.technical_details')
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
                {t('contact.title')}
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {t('contact.subtitle')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">{t('contact.quick_response')}</div>
                <div className="text-white/80 text-sm">{t('contact.quick_response_time')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Headphones className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">{t('contact.support_24_7')}</div>
                <div className="text-white/80 text-sm">{t('contact.round_clock')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <MessageSquare className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">{t('contact.free_consultation')}</div>
                <div className="text-white/80 text-sm">{t('contact.consultation_duration')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Support Options */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t('contact.support.title')}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('contact.support.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {supportOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{option.title}</h3>
                        <p className="text-muted-foreground mb-2">{option.description}</p>
                        <p className="text-sm text-primary mb-4">{option.details}</p>
                        <Button variant="outline" size="sm">
                          {option.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Hours */}
            <Card className="bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{t('contact.hours.title')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('contact.hours.weekdays')}</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('contact.hours.saturday')}</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('contact.hours.sunday')}</span>
                    <span className="font-medium">{t('contact.hours.closed')}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-primary font-medium">{t('contact.hours.emergency')}</span>
                      <span className="text-primary font-medium">24/7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;