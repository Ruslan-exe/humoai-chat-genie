import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'uz' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.pricing': 'Цены',
    'nav.contact': 'Контакты',
    'nav.hire': 'Нанять сотрудника',
    
    // Hero section
    'hero.title': 'ИИ-специалисты чат поддержки',
    'hero.subtitle': 'для бизнеса в Узбекистане',
    'hero.description': 'Готовые ИИ-сотрудники для поддержки клиентов, продаж и сервиса. Встроенные знания, скрипты и навыки — вам не нужно ничего "конструировать"',
    'hero.cta': 'НАНЯТЬ ЗА 1 МИНУТУ!',
    'hero.demo': 'ДЕМО',
    
    // Stats
    'stats.conversion': 'Конверсия',
    'stats.economy': 'Экономия',
    'stats.speed': 'Скорость',
    'stats.users': 'пользователей',
    
    // Contact page
    'contact.title': 'Контакты',
    'contact.subtitle': 'Свяжитесь с нами любым удобным способом. Наши эксперты готовы обсудить ваш проект, ответить на вопросы и помочь выбрать оптимальное ИИ-решение для вашего бизнеса.',
    'contact.quick_response': 'Быстрый ответ',
    'contact.quick_response_time': 'В течение 2 часов',
    'contact.support_24_7': '24/7 Поддержка',
    'contact.round_clock': 'Круглосуточно',
    'contact.free_consultation': 'Бесплатная консультация',
    'contact.consultation_duration': '30 минут с экспертом',
    'contact.phone': 'Телефон',
    'contact.phone_desc': 'Ответим в течение 1 минуты',
    'contact.email': 'Email',
    'contact.email_desc': 'Ответим в течение 1 часа',
    'contact.office': 'Офис',
    'contact.office_location': 'Ташкент, Узбекистан',
    'contact.office_desc': 'Центр Азии',
    'contact.telegram_desc': 'Быстрые ответы в мессенджере',
    'contact.support.title': 'Поддержка',
    'contact.support.subtitle': 'Выберите удобный способ получения помощи',
    'contact.support.chat': 'Онлайн чат',
    'contact.support.chat_desc': 'Мгновенные ответы на ваши вопросы через чат на сайте или Telegram',
    'contact.support.chat_action': 'Начать чат',
    'contact.support.chat_details': 'Среднее время ответа: 2 минуты',
    'contact.support.call': 'Телефонная поддержка',
    'contact.support.call_desc': 'Персональная консультация с экспертом по телефону или видеозвонку',
    'contact.support.call_action': 'Заказать звонок',
    'contact.support.call_details': 'Бесплатные консультации до 30 минут',
    'contact.support.technical': 'Техническая поддержка',
    'contact.support.technical_desc': 'Помощь в настройке, интеграции и решении технических вопросов',
    'contact.support.technical_action': 'Создать тикет',
    'contact.support.technical_details': 'Приоритетная поддержка 24/7',
    'contact.hours.title': 'Часы работы',
    'contact.hours.weekdays': 'Понедельник - Пятница',
    'contact.hours.saturday': 'Суббота',
    'contact.hours.sunday': 'Воскресенье',
    'contact.hours.closed': 'Выходной',
    'contact.hours.emergency': 'Экстренная поддержка',
    
    // About page
    'about.title': 'Наша компания',
    'about.mission': 'Миссия',
    
    // Services page
    'services.title': 'Найдем для вас ИИ-сотрудника',
    'services.benefits.title': 'Преимущества наших решений',
    'services.benefits.subtitle': 'Почему клиенты выбирают HumoAI',
    'services.cta.title': 'Готовы начать?',
    'services.cta.subtitle': 'Получите персонального ИИ-специалиста для вашего бизнеса уже сегодня',
    'services.cta.hire': 'Нанять ИИ-специалиста',
    'services.cta.demo': 'Попробовать демо',
    
    // Pricing page
    'pricing.title': 'Цены',
    'pricing.subtitle': 'Прозрачные цены без скрытых платежей. Все тарифы включают бесплатный 14-дневный пробный период и возможность отказа в любое время.',
    'pricing.popular': 'Популярный + Скидка 33%',
    'pricing.choose': 'Выбрать план',
    'pricing.faq.title': 'Частые вопросы',
    'pricing.faq.subtitle': 'Ответы на популярные вопросы о тарифах',
    'pricing.cta.title': 'Начните бесплатно уже сегодня',
    'pricing.cta.subtitle': '14 дней бесплатно, без привязки карты, полный доступ ко всем функциям',
    'pricing.cta.start': 'Начать бесплатно',
    
    // Form page
    'form.title': 'Нанять ИИ-специалиста',
    'form.subtitle': 'Создайте персонального ИИ-сотрудника для вашего бизнеса за 1 минуту',
    'form.company.label': 'Информация о компании',
    'form.company.placeholder': 'Расскажите о вашей компании, товарах/услугах, целевой аудитории...',
    'form.file.label': 'Загрузите документы (необязательно)',
    'form.file.placeholder': 'Прайс-лист, FAQ, каталог товаров или другие материалы',
    'form.website.label': 'Сайт компании (необязательно)',
    'form.website.placeholder': 'https://your-website.com',
    'form.submit': 'Создать ИИ-специалиста',
    'form.processing': 'Создаем ИИ-специалиста...',
    
    // Features
    'features.title': 'Почему выбирают HumoAI',
    'features.fast.title': 'Быстрое внедрение',
    'features.fast.desc': 'Готовый к работе ИИ-специалист за 1 минуту',
    'features.smart.title': 'Умная обработка',
    'features.smart.desc': 'Автоматическое изучение вашего бизнеса',
    'features.support.title': '24/7 Поддержка',
    'features.support.desc': 'Круглосуточная работа без выходных',
  },
  
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.services': 'Xizmatlar',
    'nav.pricing': 'Narxlar',
    'nav.contact': 'Aloqa',
    'nav.hire': 'Xodim yollash',
    
    // Hero section
    'hero.title': 'AI chat qo\'llab-quvvatlash mutaxassislari',
    'hero.subtitle': 'O\'zbekistondagi biznes uchun',
    'hero.description': 'Mijozlarni qo\'llab-quvvatlash, sotish va xizmat ko\'rsatish uchun tayyor AI xodimlar. O\'rnatilgan bilimlar, skriptlar va ko\'nikmalar — sizga hech narsa "konstruksiya qilish" kerak emas',
    'hero.cta': '1 DAQIQADA YOLLASH!',
    'hero.demo': 'DEMO',
    
    // Stats
    'stats.conversion': 'Konversiya',
    'stats.economy': 'Tejash',
    'stats.speed': 'Tezlik',
    'stats.users': 'foydalanuvchi',
    
    // Contact page
    'contact.title': 'Aloqa',
    'contact.subtitle': 'Biz bilan qulay usulda bog\'laning. Bizning mutaxassislarimiz loyihangizni muhokama qilish, savollarga javob berish va biznesingiz uchun optimal AI yechimini tanlashda yordam berishga tayyor.',
    'contact.quick_response': 'Tez javob',
    'contact.quick_response_time': '2 soat ichida',
    'contact.support_24_7': '24/7 Qo\'llab-quvvatlash',
    'contact.round_clock': 'Doimo',
    'contact.free_consultation': 'Bepul maslahat',
    'contact.consultation_duration': 'Mutaxassis bilan 30 daqiqa',
    'contact.phone': 'Telefon',
    'contact.phone_desc': '1 daqiqa ichida javob beramiz',
    'contact.email': 'Email',
    'contact.email_desc': '1 soat ichida javob beramiz',
    'contact.office': 'Ofis',
    'contact.office_location': 'Toshkent, O\'zbekiston',
    'contact.office_desc': 'Osiyo markazi',
    'contact.telegram_desc': 'Messenjerda tez javoblar',
    'contact.support.title': 'Qo\'llab-quvvatlash',
    'contact.support.subtitle': 'Yordam olish uchun qulay usulni tanlang',
    'contact.support.chat': 'Onlayn chat',
    'contact.support.chat_desc': 'Sayt yoki Telegram orqali savollaringizga zudlik bilan javob',
    'contact.support.chat_action': 'Chatni boshlash',
    'contact.support.chat_details': 'O\'rtacha javob vaqti: 2 daqiqa',
    'contact.support.call': 'Telefon qo\'llab-quvvatlash',
    'contact.support.call_desc': 'Telefon yoki video qo\'ng\'iroq orqali mutaxassis bilan shaxsiy maslahat',
    'contact.support.call_action': 'Qo\'ng\'iroq buyurtma qilish',
    'contact.support.call_details': '30 daqiqagacha bepul maslahatlar',
    'contact.support.technical': 'Texnik qo\'llab-quvvatlash',
    'contact.support.technical_desc': 'Sozlash, integratsiya va texnik masalalarni hal qilishda yordam',
    'contact.support.technical_action': 'Tiket yaratish',
    'contact.support.technical_details': 'Ustuvor qo\'llab-quvvatlash 24/7',
    'contact.hours.title': 'Ish vaqti',
    'contact.hours.weekdays': 'Dushanba - Juma',
    'contact.hours.saturday': 'Shanba',
    'contact.hours.sunday': 'Yakshanba',
    'contact.hours.closed': 'Dam olish kuni',
    'contact.hours.emergency': 'Shoshilinch qo\'llab-quvvatlash',
    
    // About page
    'about.title': 'Bizning kompaniya',
    'about.mission': 'Missiya',
    
    // Services page
    'services.title': 'Siz uchun AI xodim topamiz',
    'services.benefits.title': 'Bizning yechimlarimizning afzalliklari',
    'services.benefits.subtitle': 'Nega mijozlar HumoAI ni tanlashadi',
    'services.cta.title': 'Boshlashga tayyormisiz?',
    'services.cta.subtitle': 'Biznesingiz uchun shaxsiy AI mutaxassisni bugun oling',
    'services.cta.hire': 'AI mutaxassisni yollash',
    'services.cta.demo': 'Demo sinab ko\'rish',
    
    // Pricing page
    'pricing.title': 'Narxlar',
    'pricing.subtitle': 'Yashirin to\'lovlarsiz shaffof narxlar. Barcha tariflar bepul 14 kunlik sinov davrini va istalgan vaqtda bekor qilish imkoniyatini o\'z ichiga oladi.',
    'pricing.popular': 'Mashhur + 33% chegirma',
    'pricing.choose': 'Rejani tanlash',
    'pricing.faq.title': 'Tez-tez so\'raladigan savollar',
    'pricing.faq.subtitle': 'Tariflar bo\'yicha mashhur savollarga javoblar',
    'pricing.cta.title': 'Bugun bepul boshlang',
    'pricing.cta.subtitle': '14 kun bepul, karta bog\'lamasdan, barcha funksiyalarga to\'liq kirish',
    'pricing.cta.start': 'Bepul boshlash',
    
    // Form page
    'form.title': 'AI mutaxassisni yollash',
    'form.subtitle': '1 daqiqada biznesingiz uchun shaxsiy AI xodimni yarating',
    'form.company.label': 'Kompaniya haqida ma\'lumot',
    'form.company.placeholder': 'Kompaniyangiz, mahsulot/xizmatlar, maqsadli auditoriya haqida gapirib bering...',
    'form.file.label': 'Hujjatlarni yuklash (ixtiyoriy)',
    'form.file.placeholder': 'Narx ro\'yxati, FAQ, mahsulotlar katalogi yoki boshqa materiallar',
    'form.website.label': 'Kompaniya sayti (ixtiyoriy)',
    'form.website.placeholder': 'https://your-website.com',
    'form.submit': 'AI mutaxassisni yaratish',
    'form.processing': 'AI mutaxassisni yaratmoqdamiz...',
    
    // Features
    'features.title': 'Nega HumoAI ni tanlashadi',
    'features.fast.title': 'Tez joriy etish',
    'features.fast.desc': '1 daqiqada ishga tayyor AI mutaxassis',
    'features.smart.title': 'Aqlli qayta ishlash',
    'features.smart.desc': 'Biznesingizni avtomatik o\'rganish',
    'features.support.title': '24/7 Qo\'llab-quvvatlash',
    'features.support.desc': 'Dam olish kunlarisiz 24 soat ishlash',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Employee',
    
    // Hero section
    'hero.title': 'AI Chat Support Specialists',
    'hero.subtitle': 'for Business in Uzbekistan',
    'hero.description': 'Ready-to-use AI employees for customer support, sales, and service. Built-in knowledge, scripts, and skills — you don\'t need to "construct" anything',
    'hero.cta': 'HIRE IN 1 MINUTE!',
    'hero.demo': 'DEMO',
    
    // Stats
    'stats.conversion': 'Conversion',
    'stats.economy': 'Savings',
    'stats.speed': 'Speed',
    'stats.users': 'users',
    
    // Contact page
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact us in any convenient way. Our experts are ready to discuss your project, answer questions and help you choose the optimal AI solution for your business.',
    'contact.quick_response': 'Quick Response',
    'contact.quick_response_time': 'Within 2 hours',
    'contact.support_24_7': '24/7 Support',
    'contact.round_clock': 'Round the clock',
    'contact.free_consultation': 'Free Consultation',
    'contact.consultation_duration': '30 minutes with expert',
    'contact.phone': 'Phone',
    'contact.phone_desc': 'We\'ll answer within 1 minute',
    'contact.email': 'Email',
    'contact.email_desc': 'We\'ll answer within 1 hour',
    'contact.office': 'Office',
    'contact.office_location': 'Tashkent, Uzbekistan',
    'contact.office_desc': 'Center of Asia',
    'contact.telegram_desc': 'Quick responses in messenger',
    'contact.support.title': 'Support',
    'contact.support.subtitle': 'Choose a convenient way to get help',
    'contact.support.chat': 'Online Chat',
    'contact.support.chat_desc': 'Instant answers to your questions via website chat or Telegram',
    'contact.support.chat_action': 'Start Chat',
    'contact.support.chat_details': 'Average response time: 2 minutes',
    'contact.support.call': 'Phone Support',
    'contact.support.call_desc': 'Personal consultation with an expert via phone or video call',
    'contact.support.call_action': 'Request Call',
    'contact.support.call_details': 'Free consultations up to 30 minutes',
    'contact.support.technical': 'Technical Support',
    'contact.support.technical_desc': 'Help with setup, integration and solving technical issues',
    'contact.support.technical_action': 'Create Ticket',
    'contact.support.technical_details': 'Priority support 24/7',
    'contact.hours.title': 'Working Hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.closed': 'Closed',
    'contact.hours.emergency': 'Emergency Support',
    
    // About page
    'about.title': 'Our Company',
    'about.mission': 'Mission',
    
    // Services page
    'services.title': 'We\'ll find an AI employee for you',
    'services.benefits.title': 'Benefits of our solutions',
    'services.benefits.subtitle': 'Why clients choose HumoAI',
    'services.cta.title': 'Ready to start?',
    'services.cta.subtitle': 'Get a personal AI specialist for your business today',
    'services.cta.hire': 'Hire AI Specialist',
    'services.cta.demo': 'Try Demo',
    
    // Pricing page
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent pricing with no hidden fees. All plans include a free 14-day trial period and the ability to cancel at any time.',
    'pricing.popular': 'Popular + 33% Discount',
    'pricing.choose': 'Choose Plan',
    'pricing.faq.title': 'Frequently Asked Questions',
    'pricing.faq.subtitle': 'Answers to popular pricing questions',
    'pricing.cta.title': 'Start for free today',
    'pricing.cta.subtitle': '14 days free, no card required, full access to all features',
    'pricing.cta.start': 'Start Free',
    
    // Form page
    'form.title': 'Hire AI Specialist',
    'form.subtitle': 'Create a personal AI employee for your business in 1 minute',
    'form.company.label': 'Company Information',
    'form.company.placeholder': 'Tell us about your company, products/services, target audience...',
    'form.file.label': 'Upload Documents (optional)',
    'form.file.placeholder': 'Price list, FAQ, product catalog or other materials',
    'form.website.label': 'Company Website (optional)',
    'form.website.placeholder': 'https://your-website.com',
    'form.submit': 'Create AI Specialist',
    'form.processing': 'Creating AI specialist...',
    
    // Features
    'features.title': 'Why Choose HumoAI',
    'features.fast.title': 'Fast Implementation',
    'features.fast.desc': 'Work-ready AI specialist in 1 minute',
    'features.smart.title': 'Smart Processing',
    'features.smart.desc': 'Automatic learning of your business',
    'features.support.title': '24/7 Support',
    'features.support.desc': 'Round-the-clock operation without weekends',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};