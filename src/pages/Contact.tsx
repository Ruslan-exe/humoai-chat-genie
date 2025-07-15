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
      title: t('contact.phone') || 'Телефон',
      value: '+998917982104',
      description: t('contact.phone.desc') || 'Звоните в рабочее время'
    },
    {
      icon: Mail,
      title: t('contact.email') || 'Email',
      value: 'isanbaevruslan04@gmail.com',
      description: t('contact.email.desc') || 'Ответим в течение 24 часов'
    },
    {
      icon: MapPin,
      title: t('contact.address') || 'Адрес',
      value: 'Москва, ул. Тверская, 1',
      description: t('contact.address.desc') || 'Центральный офис'
    },
    {
      icon: MessageSquare,
      title: 'Telegram',
      value: '@MEDSOFT1',
      description: 'Быстрые ответы в мессенджере'
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: t('contact.support.chat') || 'Онлайн чат',
      description: t('contact.support.chat.desc') || 'Мгновенные ответы на ваши вопросы',
      action: t('contact.support.chat.action') || 'Начать чат'
    },
    {
      icon: Headphones,
      title: t('contact.support.call') || 'Телефонная поддержка',
      description: t('contact.support.call.desc') || 'Персональная консультация по телефону',
      action: t('contact.support.call.action') || 'Заказать звонок'
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
                {t('contact.title') || 'Контакты'}
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('contact.subtitle') || 'Готовы обсудить ваш проект? Наши эксперты помогут выбрать оптимальное ИИ-решение и просчитают стоимость внедрения.'}
            </p>
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {t('contact.form.title') || 'Напишите нам'}
                </CardTitle>
                <p className="text-muted-foreground">
                  {t('contact.form.subtitle') || 'Заполните форму и мы свяжемся с вами в ближайшее время'}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('contact.form.name') || 'Имя'} *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.name.placeholder') || 'Ваше имя'}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('contact.form.email') || 'Email'} *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.email.placeholder') || 'your@email.com'}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('contact.form.phone') || 'Телефон'}
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.phone.placeholder') || '+7 (___) ___-__-__'}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('contact.form.company') || 'Компания'}
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.company.placeholder') || 'Название компании'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('contact.form.message') || 'Сообщение'} *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.message.placeholder') || 'Расскажите о вашем проекте...'}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    {t('contact.form.send') || 'Отправить сообщение'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Options */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  {t('contact.support.title') || 'Поддержка'}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('contact.support.subtitle') || 'Выберите удобный способ получения помощи'}
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
                          <p className="text-muted-foreground mb-4">{option.description}</p>
                          <Button variant="outline" size="sm">
                            {option.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gradient-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t('contact.map.title') || 'Наш офис'}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('contact.map.desc') || 'Москва, ул. Тверская, 1'}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;