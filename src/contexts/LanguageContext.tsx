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
    
    // Form page
    'form.title': 'Создать ИИ-специалиста',
    'form.subtitle': 'Заполните информацию о вашем бизнесе, и мы создадим персонального ИИ-специалиста для поддержки ваших клиентов',
    'form.company.label': 'Информация о компании',
    'form.company.placeholder': 'Расскажите о вашей компании, услугах, продуктах...',
    'form.file.label': 'Загрузить файл',
    'form.file.placeholder': 'Перетащите файл сюда или нажмите для выбора',
    'form.website.label': 'Ссылка на сайт',
    'form.website.placeholder': 'https://example.com',
    'form.submit': 'Создать ИИ-специалиста',
    'form.processing': 'Обработка...',
    
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
    
    // Form page
    'form.title': 'AI mutaxassisini yaratish',
    'form.subtitle': 'Biznesingiz haqida ma\'lumot to\'ldiring va biz sizning mijozlaringizni qo\'llab-quvvatlash uchun shaxsiy AI mutaxassisini yaratamiz',
    'form.company.label': 'Kompaniya haqida ma\'lumot',
    'form.company.placeholder': 'Kompaniyangiz, xizmatlar, mahsulotlar haqida gapirib bering...',
    'form.file.label': 'Fayl yuklash',
    'form.file.placeholder': 'Faylni bu yerga sudrab oling yoki tanlash uchun bosing',
    'form.website.label': 'Sayt havolasi',
    'form.website.placeholder': 'https://example.com',
    'form.submit': 'AI mutaxassisini yaratish',
    'form.processing': 'Qayta ishlash...',
    
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
    
    // Form page
    'form.title': 'Create AI Specialist',
    'form.subtitle': 'Fill in information about your business, and we\'ll create a personal AI specialist to support your customers',
    'form.company.label': 'Company Information',
    'form.company.placeholder': 'Tell us about your company, services, products...',
    'form.file.label': 'Upload File',
    'form.file.placeholder': 'Drag file here or click to select',
    'form.website.label': 'Website Link',
    'form.website.placeholder': 'https://example.com',
    'form.submit': 'Create AI Specialist',
    'form.processing': 'Processing...',
    
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