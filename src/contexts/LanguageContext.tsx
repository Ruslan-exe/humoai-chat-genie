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
    
    // Pricing features section
    'pricing.features.title': 'Что входит во все тарифы',
    'pricing.features.subtitle': 'Базовые возможности, доступные на всех тарифных планах',
    'pricing.features.deployment.title': 'Быстрое развертывание',
    'pricing.features.deployment.description': 'Запуск за 24 часа без технических сложностей',
    'pricing.features.multilang.title': 'Многоязычность',
    'pricing.features.multilang.description': 'Поддержка узбекского, русского, английского и других языков',
    'pricing.features.integrations.title': 'Интеграции',
    'pricing.features.integrations.description': 'Подключение к сайту, Telegram, WhatsApp, Instagram',
    'pricing.features.security.title': 'Безопасность',
    'pricing.features.security.description': 'Соответствие местному законодательству и стандартам',
    'pricing.features.analytics.title': 'Аналитика',
    'pricing.features.analytics.description': 'Подробные отчеты о работе ИИ-специалистов',
    'pricing.features.updates.title': 'Обновления',
    'pricing.features.updates.description': 'Регулярные улучшения и новые функции',
    
    // Final CTA section
    'pricing.final_cta.title': 'Начните бесплатно уже сегодня',
    'pricing.final_cta.subtitle': '14 дней бесплатно, без привязки карты, полный доступ ко всем функциям',
    
    // Benefits
    'pricing.benefits.free_trial': '14 дней бесплатного тестирования',
    'pricing.benefits.no_card': 'Без привязки банковской карты',
    'pricing.benefits.cancel_anytime': 'Отмена подписки в любое время',
    'pricing.benefits.support_24_7': 'Круглосуточная поддержка',
    
    // Pricing plan features
    'pricing.plans.lite.feature1': 'До 1,000 сообщений в месяц',
    'pricing.plans.lite.feature2': '1 ИИ-специалист с базовым обучением',
    'pricing.plans.lite.feature3': 'Интеграция с сайтом и мессенджерами',
    'pricing.plans.lite.feature4': 'Email поддержка в рабочие дни',
    'pricing.plans.lite.feature5': 'Базовая аналитика диалогов',
    'pricing.plans.lite.feature6': 'Готовые шаблоны ответов',
    'pricing.plans.lite.feature7': 'Обучение на 10 документах',
    
    'pricing.plans.basic.feature1': 'До 10,000 сообщений в месяц',
    'pricing.plans.basic.feature2': '5 ИИ-специалистов с углубленным обучением',
    'pricing.plans.basic.feature3': 'Интеграция с CRM, ERP системами',
    'pricing.plans.basic.feature4': 'Приоритетная поддержка 24/7',
    'pricing.plans.basic.feature5': 'Продвинутая аналитика и отчеты',
    'pricing.plans.basic.feature6': 'Полная кастомизация интерфейса',
    'pricing.plans.basic.feature7': 'API доступ и webhooks',
    'pricing.plans.basic.feature8': 'Обучение на 100 документах',
    'pricing.plans.basic.feature9': 'Многоязычная поддержка',
    
    'pricing.plans.individual.feature1': 'Неограниченное количество сообщений',
    'pricing.plans.individual.feature2': 'Неограниченное количество ИИ-специалистов',
    'pricing.plans.individual.feature3': 'Индивидуальная разработка под задачи',
    'pricing.plans.individual.feature4': 'Выделенный менеджер проекта',
    'pricing.plans.individual.feature5': 'Корпоративная аналитика и BI',
    'pricing.plans.individual.feature6': 'Белый лейбл решения',
    'pricing.plans.individual.feature7': 'SLA 99.9% с гарантиями',
    'pricing.plans.individual.feature8': 'Обучение команды и сотрудников',
    'pricing.plans.individual.feature9': 'Приоритетная техподдержка',
    'pricing.plans.individual.feature10': 'Специальные условия интеграции',
    
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
    'features.subtitle': 'Современные технологии искусственного интеллекта для развития вашего бизнеса',
    'features.fast.title': 'Быстрое внедрение',
    'features.fast.desc': 'Готовый к работе ИИ-специалист за 1 минуту',
    'features.smart.title': 'Умная обработка',
    'features.smart.desc': 'Автоматическое изучение вашего бизнеса',
    'features.support.title': '24/7 Поддержка',
    'features.support.desc': 'Круглосуточная работа без выходных',
    'features.security.title': 'Безопасность',
    'features.security.desc': 'Защищенное хранение данных и соответствие стандартам',
    'features.multilang.title': 'Многоязычность',
    'features.multilang.desc': 'Поддержка узбекского, русского и английского языков',
    'features.analytics.title': 'Аналитика',
    'features.analytics.desc': 'Подробная статистика и отчеты по работе',
    
    // About page content
    'about.description': 'HumoAI — интеллектуальная AI-платформа нового поколения, созданная, чтобы трансформировать клиентскую поддержку и цифровое взаимодействие между бизнесом и клиентами. Мы помогаем компаниям быстро запускать собственного умного ассистента, который работает 24/7 и говорит на языке вашего бизнеса — буквально.',
    'about.mission.description1': 'Наша миссия — демократизировать доступ к искусственному интеллекту для малого и среднего бизнеса в Узбекистане, Центральной Азии и странах Ближнего Востока. Мы верим, что качественная клиентская поддержка не должна быть роскошью, а технология — сложной.',
    'about.mission.description2': 'HumoAI обучается на ваших данных — сайте, документах, соцсетях, базе знаний — и превращает их в персонализированного ассистента, который готов отвечать на вопросы клиентов в Telegram, WhatsApp, на сайте и в корпоративных чатах.',
    'about.mission.offers': 'Мы предлагаем:',
    'about.mission.offer1': 'Быстрое развертывание (до 24 часов)',
    'about.mission.offer2': 'Интуитивно понятную платформу',
    'about.mission.offer3': 'Локализацию под региональные языки',
    'about.mission.offer4': 'Соответствие требованиям локального законодательства',
    'about.mission.offer5': 'Простую и честную подписную модель оплаты',
      'about.mission.conclusion': 'С нами ваш бизнес станет доступнее, быстрее и ближе к клиенту.',
      'about.why_choose': 'Почему выбирают HumoAI',
      'about.why_choose.subtitle': 'Ключевые преимущества нашей платформы',
      
      // About page values
      'about.values.deployment.title': 'Развертывание за 1 день',
      'about.values.deployment.description': 'Запускаем вашего AI-ассистента за 24 часа. Никаких длительных настроек и сложных технических процедур — просто быстрый результат.',
      'about.values.languages.title': 'Поддержка 10+ языков',
      'about.values.languages.description': 'Включая региональные языки: узбекский, таджикский, казахский, киргизский, туркменский, а также русский, английский и арабский.',
      'about.values.legal.title': 'Локальное законодательство',
      'about.values.legal.description': 'Хранение данных в соответствии с требованиями Узбекистана и других стран региона. Полное соблюдение законов о персональных данных.',
      'about.values.efficiency.title': 'Рост эффективности на 40–60%',
      'about.values.efficiency.description': 'Наши клиенты видят значительное улучшение клиентского сервиса и сокращение времени обработки запросов уже в первый месяц.',
      'about.values.simple.title': 'Простой запуск без программирования',
      'about.values.simple.description': 'Интуитивно понятная платформа, которая не требует технических знаний. Любой сотрудник сможет настроить и управлять AI-ассистентом.',
      'about.values.brand.title': 'Персонализация под бренд',
      'about.values.brand.description': 'Каждый ассистент обучается на ваших данных и говорит языком вашей компании, отражая корпоративные ценности и стиль общения.',
    
    // Services page content  
    'services.description': 'Мы предлагаем комплекс решений для автоматизации клиентской поддержки и цифровых коммуникаций с помощью искусственного интеллекта. Превратите свой бизнес в умную компанию будущего.',
    
    // Pricing plans
    'pricing.plans.lite.name': 'Lite',
    'pricing.plans.lite.period': '/мес',
    'pricing.plans.lite.description': 'Идеально для малого бизнеса и стартапов',
    'pricing.plans.basic.name': 'Basic',
    'pricing.plans.basic.period': '/мес',
    'pricing.plans.basic.description': 'Оптимальное решение для растущего бизнеса',
    'pricing.plans.individual.name': 'Individual',
    'pricing.plans.individual.price': 'По запросу',
    'pricing.plans.individual.description': 'Корпоративные решения под ключ',
    
    // FAQ questions
    'pricing.faq.q1': 'Можно ли изменить тариф?',
    'pricing.faq.a1': 'Да, вы можете повысить или понизить тариф в любое время. При повышении тарифа изменения вступают в силу немедленно, при понижении - со следующего платежного периода. Мы вернем разницу пропорционально.',
    'pricing.faq.q2': 'Есть ли бесплатный период?',
    'pricing.faq.a2': 'Да, мы предоставляем 14-дневный бесплатный пробный период для всех тарифов. Никаких обязательств - вы можете отменить в любое время без списания средств.',
    'pricing.faq.q3': 'Что включает поддержка?',
    'pricing.faq.a3': 'Поддержка включает помощь в настройке ИИ-специалистов, обучение вашей команды, техническую поддержку, консультации по оптимизации и регулярные обновления системы.',
    'pricing.faq.q4': 'Безопасны ли мои данные?',
    'pricing.faq.a4': 'Абсолютно. Мы используем шифрование AES-256, соблюдаем стандарты ISO 27001, GDPR и локальное законодательство по защите данных. Ваши данные хранятся на серверах в Узбекистане.',
    'pricing.faq.q5': 'Сколько времени занимает внедрение?',
    'pricing.faq.a5': 'Базовое внедрение занимает 24 часа. Полная настройка под ваши процессы - от 3 до 7 дней в зависимости от сложности. Мы предоставляем поэтапный план внедрения.',
    'pricing.faq.q6': 'Можно ли интегрироваться с нашими системами?',
    'pricing.faq.a6': 'Да, мы поддерживаем интеграцию с популярными CRM, ERP системами, мессенджерами и можем создать кастомные интеграции через API для любых систем.',
    
    // Chat page
    'chat.specialist_name': 'ИИ-специалист HumoAI',
    'chat.status': 'Онлайн • Готов помочь 24/7',
    'chat.settings': 'Настройки ИИ-специалиста',
    'chat.placeholder': 'Напишите ваш вопрос...',
    'chat.typing': 'Печатает...',
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
    'features.subtitle': 'Biznesingizni rivojlantirish uchun zamonaviy sun\'iy intellekt texnologiyalari',
    'features.fast.title': 'Tez joriy etish',
    'features.fast.desc': '1 daqiqada ishga tayyor AI mutaxassis',
    'features.smart.title': 'Aqlli qayta ishlash',
    'features.smart.desc': 'Biznesingizni avtomatik o\'rganish',
    'features.support.title': '24/7 Qo\'llab-quvvatlash',
    'features.support.desc': 'Dam olish kunlarisiz 24 soat ishlash',
    'features.security.title': 'Xavfsizlik',
    'features.security.desc': 'Ma\'lumotlarni himoyalangan saqlash va standartlarga muvofiqlik',
    'features.multilang.title': 'Ko\'p tillilik',
    'features.multilang.desc': 'O\'zbek, rus va ingliz tillarini qo\'llab-quvvatlash',
    'features.analytics.title': 'Analitika',
    'features.analytics.desc': 'Ish bo\'yicha batafsil statistika va hisobotlar',
    
    // About page content
    'about.description': 'HumoAI — mijozlarni qo\'llab-quvvatlash va biznes hamda mijozlar o\'rtasidagi raqamli o\'zaro aloqani o\'zgartirish uchun yaratilgan yangi avlod intellektual AI platformasi. Biz kompaniyalarga o\'zlarining aqlli yordamchisini tezda ishga tushirishda yordam beramiz, u 24/7 ishlaydi va sizning biznes tilingizda gaplashadi — tom ma\'noda.',
    'about.mission.description1': 'Bizning missiyamiz — O\'zbekiston, Markaziy Osiyo va Yaqin Sharq mamlakatlaridagi kichik va o\'rta biznes uchun sun\'iy intellektga kirishni demokratlashtirish. Biz sifatli mijozlarni qo\'llab-quvvatlash hashamat bo\'lmasligi va texnologiya murakkab bo\'lmasligi kerakligiga ishonamiz.',
    'about.mission.description2': 'HumoAI sizning ma\'lumotlaringizdan — sayt, hujjatlar, ijtimoiy tarmoqlar, bilimlar bazasi — o\'rganadi va ularni shaxsiylashtirilgan yordamchiga aylantiradi, u Telegram, WhatsApp, sayt va korporativ chatlarda mijozlar savollariga javob berishga tayyor.',
    'about.mission.offers': 'Biz taklif qilamiz:',
    'about.mission.offer1': 'Tez joylashtirish (24 soatigacha)',
    'about.mission.offer2': 'Tushunarli platforma',
    'about.mission.offer3': 'Mintaqaviy tillarga moslashtirish',
    'about.mission.offer4': 'Mahalliy qonunchilik talablariga muvofiqlik',
    'about.mission.offer5': 'Oddiy va halol obuna to\'lov modeli',
    'about.mission.conclusion': 'Biz bilan sizning biznesingiz qulayroq, tezroq va mijozga yaqinroq bo\'ladi.',
    'about.why_choose': 'Nega HumoAI ni tanlashadi',
    'about.why_choose.subtitle': 'Bizning platformamizning asosiy afzalliklari',
    
    // About page values
    'about.values.deployment.title': '1 kunda ishga tushirish',
    'about.values.deployment.description': 'AI-yordamchingizni 24 soat ichida ishga tushiramiz. Uzoq sozlamalar va murakkab texnik jarayonlar yo\'q — faqat tez natija.',
    'about.values.languages.title': '10+ tilni qo\'llab-quvvatlash',
    'about.values.languages.description': 'Mintaqaviy tillar: o\'zbek, tojik, qozoq, qirg\'iz, turkman, shuningdek rus, ingliz va arab tillarini o\'z ichiga oladi.',
    'about.values.legal.title': 'Mahalliy qonunchilik',
    'about.values.legal.description': 'O\'zbekiston va mintaqa boshqa davlatlarining talablariga muvofiq ma\'lumotlarni saqlash. Shaxsiy ma\'lumotlar qonunlariga to\'liq rioya qilish.',
    'about.values.efficiency.title': 'Samaradorlik 40-60% o\'sishi',
    'about.values.efficiency.description': 'Mijozlarimiz birinchi oyda mijozlarga xizmat ko\'rsatishda sezilarli yaxshilanish va so\'rovlarni qayta ishlash vaqtining qisqarishini ko\'rishadi.',
    'about.values.simple.title': 'Dasturlashsiz oddiy ishga tushirish',
    'about.values.simple.description': 'Texnik bilim talab qilmaydigan tushunarli platforma. Har qanday xodim AI-yordamchini sozlashi va boshqarishi mumkin.',
    'about.values.brand.title': 'Brend uchun shaxsiylashtirish',
    'about.values.brand.description': 'Har bir yordamchi sizning ma\'lumotlaringizda o\'qitiladi va kompaniyangizning tilida gapiradi, korporativ qadriyatlar va muloqot uslubini aks ettiradi.',
    
    // Services page content
    'services.ai_development.title': '🤖 AI yordamchilarni kalit ostida ishlab chiqish',
    'services.ai_development.description': 'Sizning ma\'lumotlaringizda o\'qitilgan va har qanday aloqa kanallarida ishlashga tayyor shaxsiylashtirilgan yordamchilarni yaratamiz',
    'services.ai_development.feature1': 'Sizning ma\'lumotlaringizda sozlash va o\'qitish (sayt, FAQ, hujjatlar, ijtimoiy tarmoqlar)',
    'services.ai_development.feature2': 'Yordamchini kompaniya korporativ uslubida brendlash imkoniyati',
    'services.ai_development.feature3': 'Bir nechta tillarda o\'qitish: o\'zbek, rus, ingliz, arab va boshqalar',
    'services.ai_development.feature4': 'Dam olish kunlarisiz 24 soat mijozlarni qo\'llab-quvvatlash',
    'services.ai_development.feature5': 'Minglab so\'rovlarni bir vaqtda qayta ishlash',
    'services.ai_development.feature6': 'Javoblar sifati va fikr-mulohazalarni tahlil qilish',
    'services.integration.title': '📲 Aloqa kanallari bilan integratsiya',
    'services.integration.description': 'Sizning AI yordamchilaringizni barcha mashhur platformalar va kompaniya ichki tizimlariga ulaymiz',
    'services.integration.feature1': 'Telegram, WhatsApp, Instagram Direct',
    'services.integration.feature2': 'Kompaniya sayti va mijozlar portallariga joriy qilish',
    'services.integration.feature3': 'Korporativ CRM va chatlar bilan integratsiya',
    'services.integration.feature4': 'Hisobot va rejalashtirish tizimlari bilan sinxronizatsiya',
    'services.integration.feature5': 'Har qanday tashqi xizmatlarga ulanish uchun API',
    'services.integration.feature6': 'Barcha kanallarni boshqarish uchun yagona panel',
    'services.analytics.title': '📊 Analitika va optimallashtirish',
    'services.analytics.description': 'Yordamchilar ishini keng qamrovli tahlil qilish va yaxshilash bo\'yicha tavsiyalar berish',
    'services.analytics.feature1': 'Foydalanuvchi so\'rovlari va xatti-harakatlarini kuzatish',
    'services.analytics.feature2': 'Javoblar samaradorligi va mijozlar qoniqishini tahlil qilish',
    'services.analytics.feature3': 'Yordamchi bilimlarini doimiy yaxshilash',
    'services.analytics.feature4': 'Kanallar va mavzular bo\'yicha batafsil statistika',
    'services.analytics.feature5': 'Yuklamani bashorat qilish va resurslarni rejalashtirish',
    'services.analytics.feature6': 'Rahbariyat uchun avtomatik hisobotlar',
    'services.support.title': '⚙️ Qo\'llab-quvvatlash va hamrohlik',
    'services.support.description': 'Sizning AI echimlaringizni to\'liq texnik qo\'llab-quvvatlash va rivojlantirish',
    'services.support.feature1': '24 soat texnik qo\'llab-quvvatlash',
    'services.support.feature2': 'Optimallashtirish bo\'yicha individual maslahatlar',
    'services.support.feature3': 'Muntazam yangilanish va echimlarni kengaytirish',
    'services.support.feature4': 'Xodimlarni tizim bilan ishlash bo\'yicha o\'qitish',
    'services.support.feature5': 'Ma\'lumotlarni zaxiralash va tiklash',
    'services.support.feature6': '24/7 ishlash samaradorligini kuzatish',
    'services.benefits.instant.title': 'Bir zumda joylashtirish',
    'services.benefits.instant.description': '24 soat ichida AI ofisingizni ishga tushiramiz. Uzoq sozlamalar, murakkab integratsiyalar yoki texnik to\'siqlar yo\'q. Faqat tez natija.',
    'services.benefits.multilang.title': 'Ko\'p tillik qo\'llab-quvvatlash',
    'services.benefits.multilang.description': 'Sizning AI xodiminz 10+ tillarda gaplashadi, jumladan o\'zbek, rus, ingliz, arab va boshqa mintaqaviy tillar.',
    'services.benefits.security.title': 'Ma\'lumotlar xavfsizligi',
    'services.benefits.security.description': 'Mahalliy qonunchilik talablariga to\'liq muvofiqlik. Ma\'lumotlar O\'zbekistonda barcha maxfiylik me\'yorlariga rioya qilgan holda saqlanadi.',
    'services.benefits.efficiency.title': 'Isbotlangan samaradorlik',
    'services.benefits.efficiency.description': 'Mijozlarimiz AI yordamchi bilan ishlashning birinchi oyida 40-60% samaradorlik o\'sishini qayd etadilar.',
    'services.benefits.simplicity.title': 'Foydalanish osonligi',
    'services.benefits.simplicity.description': 'Dasturlash zarur bo\'lmagan tushunarli platforma. Har qanday xodim tizimni bir necha daqiqada o\'rganadi.',
    'services.benefits.nonstop.title': 'Tanaffussiz ish',
    'services.benefits.nonstop.description': 'Sizning AI xodiminz 24/7/365 ishlaydi, charchash va dam olish kunlarisiz minglab so\'rovlarni bir vaqtda qayta ishlaydi.',
    'services.order_service': 'Xizmatni buyurtma qilish',
    'services.get_support': 'Qo\'llab-quvvatlash olish',
    
    // Pricing page content
    'pricing.plans.lite.description': 'Kichik biznes va startaplar uchun ideal',
    'pricing.plans.lite.feature1': 'Oyiga 1,000 gacha xabar',
    'pricing.plans.lite.feature2': 'Asosiy o\'qitish bilan 1 AI mutaxassis',
    'pricing.plans.lite.feature3': 'Sayt va messenjerlar bilan integratsiya',
    'pricing.plans.lite.feature4': 'Ish kunlarida email qo\'llab-quvvatlash',
    'pricing.plans.lite.feature5': 'Suhbatlarning asosiy analitikasi',
    'pricing.plans.lite.feature6': 'Tayyor javob andozalari',
    'pricing.plans.lite.feature7': '10 hujjatda o\'qitish',
    'pricing.plans.basic.description': 'O\'sib borayotgan biznes uchun optimal yechim',
    'pricing.plans.basic.feature1': 'Oyiga 10,000 gacha xabar',
    'pricing.plans.basic.feature2': 'Chuqur o\'qitish bilan 5 AI mutaxassis',
    'pricing.plans.basic.feature3': 'CRM, ERP tizimlari bilan integratsiya',
    'pricing.plans.basic.feature4': '24/7 ustuvor qo\'llab-quvvatlash',
    'pricing.plans.basic.feature5': 'Rivojlangan analitika va hisobotlar',
    'pricing.plans.basic.feature6': 'Interfeys to\'liq sozlash',
    'pricing.plans.basic.feature7': 'API kirish va webhooks',
    'pricing.plans.basic.feature8': '100 hujjatda o\'qitish',
    'pricing.plans.basic.feature9': 'Ko\'p tillik qo\'llab-quvvatlash',
    'pricing.plans.individual.description': 'Kalit ostida korporativ echimlar',
    'pricing.plans.individual.feature1': 'Cheksiz xabarlar soni',
    'pricing.plans.individual.feature2': 'Cheksiz AI mutaxassislar soni',
    'pricing.plans.individual.feature3': 'Vazifalar uchun individual ishlab chiqish',
    'pricing.plans.individual.feature4': 'Maxsus loyiha menejeri',
    'pricing.plans.individual.feature5': 'Korporativ analitika va BI',
    'pricing.plans.individual.feature6': 'Oq yorliq echimlari',
    'pricing.plans.individual.feature7': 'Kafolatlar bilan SLA 99.9%',
    'pricing.plans.individual.feature8': 'Jamoa va xodimlarni o\'qitish',
    'pricing.plans.individual.feature9': 'Ustuvor texnik qo\'llab-quvvatlash',
    'pricing.plans.individual.feature10': 'Integratsiya uchun maxsus shartlar',
    'pricing.features.title': 'Barcha tariflarga nima kiradi',
    'pricing.features.subtitle': 'Barcha tarif rejalarida mavjud asosiy imkoniyatlar',
    'pricing.features.deployment.title': 'Tez joylashtirish',
    'pricing.features.deployment.description': '24 soat ichida texnik qiyinchiliksiz ishga tushirish',
    'pricing.features.multilang.title': 'Ko\'p tillilik',
    'pricing.features.multilang.description': 'O\'zbek, rus, ingliz va boshqa tillarni qo\'llab-quvvatlash',
    'pricing.features.integrations.title': 'Integratsiyalar',
    'pricing.features.integrations.description': 'Sayt, Telegram, WhatsApp, Instagram ga ulanish',
    'pricing.features.security.title': 'Xavfsizlik',
    'pricing.features.security.description': 'Mahalliy qonunchilik va standartlarga muvofiqlik',
    'pricing.features.analytics.title': 'Analitika',
    'pricing.features.analytics.description': 'AI mutaxassislar ishi bo\'yicha batafsil hisobotlar',
    'pricing.features.updates.title': 'Yangilanishlar',
    'pricing.features.updates.description': 'Muntazam yaxshilanishlar va yangi funksiyalar',
    'pricing.benefits.free_trial': '14 kun bepul sinov davri',
    'pricing.benefits.no_card': 'Karta bog\'lamasdan',
    'pricing.benefits.cancel_anytime': 'Istalgan vaqtda bekor qilish',
    'pricing.benefits.support_24_7': '24/7 texnik qo\'llab-quvvatlash',
    'pricing.final_cta.title': 'Bugun bepul boshlang',
    'pricing.final_cta.subtitle': '14 kun bepul, karta bog\'lamasdan, barcha funksiyalarga to\'liq kirish',
    'pricing.contact_expert': 'Mutaxassis bilan bog\'lanish',
    
    // Services page content
    'services.description': 'Biz sun\'iy intellekt yordamida mijozlarni qo\'llab-quvvatlash va raqamli aloqani avtomatlashtirish uchun kompleks yechimlar taklif qilamiz. Biznesingizni kelajakning aqlli kompaniyasiga aylantiring.',
    
    // FAQ questions  
    'pricing.faq.q1': 'Tarifni o\'zgartirish mumkinmi?',
    'pricing.faq.a1': 'Ha, siz istalgan vaqtda tarifni oshirish yoki kamaytirish mumkin. Tarifni oshirishda o\'zgarishlar darhol kuchga kiradi, kamaytirishda esa keyingi to\'lov davridan. Biz farqni proporsional ravishda qaytaramiz.',
    'pricing.faq.q2': 'Bepul davr mavjudmi?',
    'pricing.faq.a2': 'Ha, biz barcha tariflar uchun 14 kunlik bepul sinov davrini taqdim etamiz. Hech qanday majburiyat yo\'q - siz istalgan vaqtda to\'lovni to\'xtatishingiz mumkin.',
    'pricing.faq.q3': 'Qo\'llab-quvvatlash nimani o\'z ichiga oladi?',
    'pricing.faq.a3': 'Qo\'llab-quvvatlash AI mutaxassislarini sozlashda yordam, jamoangizni o\'qitish, texnik yordam, optimallash bo\'yicha maslahatlar va tizimni muntazam yangilashni o\'z ichiga oladi.',
    'pricing.faq.q4': 'Mening ma\'lumotlarim xavfsiizmi?',
    'pricing.faq.a4': 'Mutlaqo. Biz AES-256 shifrlashdan foydalanamiz, ISO 27001, GDPR standartlariga va ma\'lumotlarni himoya qilish bo\'yicha mahalliy qonunchilikka rioya qilamiz. Sizning ma\'lumotlaringiz O\'zbekistondagi serverlarda saqlanadi.',
    'pricing.faq.q5': 'Joriy etish qancha vaqt oladi?',
    'pricing.faq.a5': 'Asosiy joriy etish 24 soat davom etadi. Jarayonlaringizga to\'liq sozlash murakkablikka qarab 3 dan 7 kungacha. Biz bosqichma-bosqich joriy etish rejasini taqdim etamiz.',
    'pricing.faq.q6': 'Bizning tizimlarimiz bilan integratsiya qilish mumkinmi?',
    'pricing.faq.a6': 'Ha, biz mashhur CRM, ERP tizimlari, messenjerlar bilan integratsiyani qo\'llab-quvvatlaymiz va har qanday tizimlar uchun API orqali maxsus integratsiyalar yarata olamiz.',
    
    // Chat page
    'chat.specialist_name': 'HumoAI AI mutaxassisi',
    'chat.status': 'Onlayn • 24/7 yordam berishga tayyor',
    'chat.settings': 'AI mutaxassis sozlamalari',
    'chat.placeholder': 'Savolingizni yozing...',
    'chat.typing': 'Yozmoqda...',
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
    'features.security.title': 'Security',
    'features.security.desc': 'Secure data storage and compliance with standards',
    'features.multilang.title': 'Multilingual',
    'features.multilang.desc': 'Support for Uzbek, Russian and English languages',
    'features.analytics.title': 'Analytics',
    'features.analytics.desc': 'Detailed statistics and reports on work',
    
    // About page content
    'about.description': 'HumoAI is a next-generation intelligent AI platform created to transform customer support and digital interaction between business and customers. We help companies quickly launch their own smart assistant that works 24/7 and speaks the language of your business — literally.',
    'about.mission.description1': 'Our mission is to democratize access to artificial intelligence for small and medium businesses in Uzbekistan, Central Asia and Middle Eastern countries. We believe that quality customer support should not be a luxury, and technology should not be complex.',
    'about.mission.description2': 'HumoAI learns from your data — website, documents, social networks, knowledge base — and turns them into a personalized assistant that is ready to answer customer questions in Telegram, WhatsApp, on the website and in corporate chats.',
    'about.mission.offers': 'We offer:',
    'about.mission.offer1': 'Fast deployment (up to 24 hours)',
    'about.mission.offer2': 'Intuitive platform',
    'about.mission.offer3': 'Localization for regional languages',
    'about.mission.offer4': 'Compliance with local legislation requirements',
    'about.mission.offer5': 'Simple and honest subscription payment model',
      'about.mission.conclusion': 'With us, your business will become more accessible, faster and closer to the customer.',
      'about.why_choose': 'Why Choose HumoAI',
      'about.why_choose.subtitle': 'Key advantages of our platform',
      
      // About page values
      'about.values.deployment.title': '1-Day Deployment',
      'about.values.deployment.description': 'We launch your AI assistant in 24 hours. No lengthy setups and complex technical procedures — just fast results.',
      'about.values.languages.title': '10+ Language Support',
      'about.values.languages.description': 'Including regional languages: Uzbek, Tajik, Kazakh, Kyrgyz, Turkmen, as well as Russian, English and Arabic.',
      'about.values.legal.title': 'Local Legislation',
      'about.values.legal.description': 'Data storage in accordance with the requirements of Uzbekistan and other countries in the region. Full compliance with personal data laws.',
      'about.values.efficiency.title': '40-60% Efficiency Growth',
      'about.values.efficiency.description': 'Our clients see significant improvement in customer service and reduction in request processing time in the first month.',
      'about.values.simple.title': 'Simple Launch Without Programming',
      'about.values.simple.description': 'An intuitive platform that does not require technical knowledge. Any employee can set up and manage the AI assistant.',
      'about.values.brand.title': 'Brand Personalization',
      'about.values.brand.description': 'Each assistant is trained on your data and speaks in your company\'s language, reflecting corporate values and communication style.',
    
    // Services page content
    'services.description': 'We offer a complex of solutions for automating customer support and digital communications using artificial intelligence. Turn your business into a smart company of the future.',
    
    // AI Development Service
    'services.ai_development.title': 'Turnkey AI Assistant Development',
    'services.ai_development.description': 'We create personalized assistants trained on your data and ready to work in any communication channels',
    'services.ai_development.feature1': 'Setup and training on your data (website, FAQ, documents, social media)',
    'services.ai_development.feature2': 'Ability to brand the assistant to match your company style',
    'services.ai_development.feature3': 'Training in multiple languages: Uzbek, Russian, English, Arabic, etc.',
    'services.ai_development.feature4': '24/7 customer support without weekends',
    'services.ai_development.feature5': 'Processing thousands of requests simultaneously',
    'services.ai_development.feature6': 'Analytics of response quality and feedback',
    'services.order_service': 'Order Service',
    
    // Integration Service
    'services.integration.title': 'Integration with Communication Channels',
    'services.integration.description': 'We connect your AI assistants to all popular platforms and internal company systems',
    'services.integration.feature1': 'Telegram, WhatsApp, Instagram Direct',
    'services.integration.feature2': 'Implementation on company website and client portals',
    'services.integration.feature3': 'Integration with corporate CRM and chats',
    'services.integration.feature4': 'Synchronization with accounting and planning systems',
    'services.integration.feature5': 'API for connecting to any external services',
    'services.integration.feature6': 'Unified control panel for all channels',
    
    // Analytics Service
    'services.analytics.title': 'Analytics and Optimization',
    'services.analytics.description': 'Comprehensive analysis of assistant performance with improvement recommendations and continuous development',
    'services.analytics.feature1': 'Tracking user requests and behavior',
    'services.analytics.feature2': 'Analysis of response effectiveness and customer satisfaction',
    'services.analytics.feature3': 'Continuous improvement of assistant knowledge',
    'services.analytics.feature4': 'Detailed statistics by channels and topics',
    'services.analytics.feature5': 'Load forecasting and resource planning',
    'services.analytics.feature6': 'Automated reports for management',
    
    // Support Service
    'services.support.title': 'Support and Maintenance',
    'services.support.description': 'Complete technical support and development of your AI solutions',
    'services.support.feature1': 'Round-the-clock technical support',
    'services.support.feature2': 'Individual optimization consultations',
    'services.support.feature3': 'Regular updates and scaling of solutions',
    'services.support.feature4': 'Staff training on system operation',
    'services.support.feature5': 'Data backup and recovery',
    'services.support.feature6': '24/7 performance monitoring',
    'services.get_support': 'Get Support',
    
    // Benefits section
    'services.benefits.instant.title': 'Instant Deployment',
    'services.benefits.instant.description': 'We launch your AI office in 24 hours. No long setups, complex integrations or technical barriers. Just fast results.',
    
    // Service 1: AI Assistant Development
    'services.service1.title': 'Turnkey AI Assistant Development',
    'services.service1.description': 'We create personalized assistants trained on your data and ready to work in any communication channels',
    'services.service1.feature1': 'Setup and training on your data (website, FAQ, documents, social media)',
    'services.service1.feature2': 'Ability to brand the assistant to match your company style',
    'services.service1.feature3': 'Training in multiple languages: Uzbek, Russian, English, Arabic, etc.',
    'services.service1.feature4': '24/7 customer support without weekends',
    'services.service1.feature5': 'Processing thousands of requests simultaneously',
    'services.service1.feature6': 'Analytics of response quality and feedback',
    'services.service1.action': 'Order Service',
    
    // Service 2: Channel Integration
    'services.service2.title': 'Integration with Communication Channels',
    'services.service2.description': 'We connect your AI assistants to all popular platforms and internal company systems',
    'services.service2.feature1': 'Telegram, WhatsApp, Instagram Direct',
    'services.service2.feature2': 'Implementation on company website and client portals',
    'services.service2.feature3': 'Integration with corporate CRM and chats',
    'services.service2.feature4': 'Synchronization with accounting and planning systems',
    'services.service2.feature5': 'API for connecting to any external services',
    'services.service2.feature6': 'Unified control panel for all channels',
    'services.service2.action': 'Order Service',
    
    // Service 3: Analytics and Optimization
    'services.service3.title': 'Analytics and Optimization',
    'services.service3.description': 'Comprehensive analysis of assistant performance with improvement recommendations and continuous development',
    'services.service3.feature1': 'Tracking user requests and behavior',
    'services.service3.feature2': 'Analysis of response effectiveness and customer satisfaction',
    'services.service3.feature3': 'Continuous improvement of assistant knowledge',
    'services.service3.feature4': 'Detailed statistics by channels and topics',
    'services.service3.feature5': 'Load forecasting and resource planning',
    'services.service3.feature6': 'Automated reports for management',
    'services.service3.action': 'Order Service',
    
    // Service 4: Support and Maintenance
    'services.service4.title': 'Support and Maintenance',
    'services.service4.description': 'Complete technical support and development of your AI solutions',
    'services.service4.feature1': 'Round-the-clock technical support',
    'services.service4.feature2': 'Individual optimization consultations',
    'services.service4.feature3': 'Regular updates and scaling of solutions',
    'services.service4.feature4': 'Staff training on system operation',
    'services.service4.feature5': 'Data backup and recovery',
    'services.service4.feature6': '24/7 performance monitoring',
    'services.service4.action': 'Get Support',
    
    // Benefits section
    'services.benefits.fast.title': 'Instant Deployment',
    'services.benefits.fast.description': 'We launch your AI office in 24 hours. No long setups, complex integrations or technical barriers. Just fast results.',
    'services.benefits.multilang.title': 'Multilingual Support',
    'services.benefits.multilang.description': 'Your AI employee speaks 10+ languages, including Uzbek, Russian, English, Arabic and other regional languages.',
    'services.benefits.security.title': 'Data Security',
    'services.benefits.security.description': 'Full compliance with local legislation requirements. Data is stored in Uzbekistan with compliance to all confidentiality standards.',
    'services.benefits.efficiency.title': 'Proven Efficiency',
    'services.benefits.efficiency.description': 'Our clients record productivity growth of 40-60% in the first month of working with the AI assistant.',
    'services.benefits.simplicity.title': 'Ease of Use',
    'services.benefits.simplicity.description': 'Intuitive platform without need for programming. Any employee will master the system in a few minutes.',
    'services.benefits.nonstop.title': 'Work Without Breaks',
    'services.benefits.nonstop.description': 'Your AI employee works 24/7/365, processing thousands of requests simultaneously without fatigue and days off.',
    
    // Pricing plans
    'pricing.plans.lite.name': 'Lite',
    'pricing.plans.lite.period': '/month',
    'pricing.plans.lite.description': 'Perfect for small business and startups',
    'pricing.plans.basic.name': 'Basic',
    'pricing.plans.basic.period': '/month',
    'pricing.plans.basic.description': 'Optimal solution for growing business',
    'pricing.plans.individual.name': 'Individual',
    'pricing.plans.individual.price': 'By request',
    'pricing.plans.individual.description': 'Turnkey corporate solutions',
    
    // Pricing plan features - Lite
    'pricing.plans.lite.feature1': 'Up to 1,000 messages per month',
    'pricing.plans.lite.feature2': '1 AI specialist with basic training',
    'pricing.plans.lite.feature3': 'Website and messenger integration',
    'pricing.plans.lite.feature4': 'Email support on business days',
    'pricing.plans.lite.feature5': 'Basic dialog analytics',
    'pricing.plans.lite.feature6': 'Ready-made response templates',
    'pricing.plans.lite.feature7': 'Training on 10 documents',
    
    // Pricing plan features - Basic
    'pricing.plans.basic.feature1': 'Up to 10,000 messages per month',
    'pricing.plans.basic.feature2': '5 AI specialists with advanced training',
    'pricing.plans.basic.feature3': 'Integration with CRM, ERP systems',
    'pricing.plans.basic.feature4': 'Priority 24/7 support',
    'pricing.plans.basic.feature5': 'Advanced analytics and reports',
    'pricing.plans.basic.feature6': 'Full interface customization',
    'pricing.plans.basic.feature7': 'API access and webhooks',
    'pricing.plans.basic.feature8': 'Training on 100 documents',
    'pricing.plans.basic.feature9': 'Multilingual support',
    
    // Pricing plan features - Individual
    'pricing.plans.individual.feature1': 'Unlimited number of messages',
    'pricing.plans.individual.feature2': 'Unlimited number of AI specialists',
    'pricing.plans.individual.feature3': 'Individual development for tasks',
    'pricing.plans.individual.feature4': 'Dedicated project manager',
    'pricing.plans.individual.feature5': 'Corporate analytics and BI',
    'pricing.plans.individual.feature6': 'White label solutions',
    'pricing.plans.individual.feature7': '99.9% SLA with guarantees',
    'pricing.plans.individual.feature8': 'Team and staff training',
    'pricing.plans.individual.feature9': 'Priority technical support',
    'pricing.plans.individual.feature10': 'Special integration conditions',
    
    // Pricing features section
    'pricing.features.title': 'What\'s included in all plans',
    'pricing.features.subtitle': 'Basic features available on all pricing plans',
    'pricing.features.deployment.title': 'Fast Deployment',
    'pricing.features.deployment.description': 'Launch in 24 hours without technical difficulties',
    'pricing.features.multilang.title': 'Multilingual',
    'pricing.features.multilang.description': 'Support for Uzbek, Russian, English and other languages',
    'pricing.features.integrations.title': 'Integrations',
    'pricing.features.integrations.description': 'Connection to website, Telegram, WhatsApp, Instagram',
    'pricing.features.security.title': 'Security',
    'pricing.features.security.description': 'Compliance with local legislation and standards',
    'pricing.features.analytics.title': 'Analytics',
    'pricing.features.analytics.description': 'Detailed reports on AI specialist performance',
    'pricing.features.updates.title': 'Updates',
    'pricing.features.updates.description': 'Regular improvements and new features',
    
    // Pricing benefits
    'pricing.benefits.free_trial': '14-day free trial',
    'pricing.benefits.no_card': 'No card required',
    'pricing.benefits.cancel_anytime': 'Cancel anytime',
    'pricing.benefits.support_24_7': '24/7 technical support',
    'pricing.final_cta.title': 'Start for free today',
    'pricing.final_cta.subtitle': '14 days free, no card required, full access to all features',
    'pricing.contact_expert': 'Contact Expert',
    
    // FAQ questions
    'pricing.faq.q1': 'Can I change the plan?',
    'pricing.faq.a1': 'Yes, you can upgrade or downgrade the plan at any time. When upgrading, changes take effect immediately, when downgrading - from the next billing period. We will refund the difference proportionally.',
    'pricing.faq.q2': 'Is there a free period?',
    'pricing.faq.a2': 'Yes, we provide a 14-day free trial period for all plans. No obligations - you can cancel at any time without charge.',
    'pricing.faq.q3': 'What does support include?',
    'pricing.faq.a3': 'Support includes help with AI specialist setup, training your team, technical support, optimization consultations and regular system updates.',
    'pricing.faq.q4': 'Is my data safe?',
    'pricing.faq.a4': 'Absolutely. We use AES-256 encryption, comply with ISO 27001, GDPR standards and local data protection legislation. Your data is stored on servers in Uzbekistan.',
    'pricing.faq.q5': 'How long does implementation take?',
    'pricing.faq.a5': 'Basic implementation takes 24 hours. Full customization for your processes takes 3 to 7 days depending on complexity. We provide a phased implementation plan.',
    'pricing.faq.q6': 'Can it integrate with our systems?',
    'pricing.faq.a6': 'Yes, we support integration with popular CRM, ERP systems, messengers and can create custom integrations via API for any systems.',
    
    // Chat page
    'chat.specialist_name': 'HumoAI AI Specialist',
    'chat.status': 'Online • Ready to help 24/7',
    'chat.settings': 'AI specialist settings',
    'chat.placeholder': 'Write your question...',
    'chat.typing': 'Typing...',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Загружаем сохраненный язык из localStorage или используем русский по умолчанию
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    return savedLanguage && ['ru', 'uz', 'en'].includes(savedLanguage) ? savedLanguage : 'ru';
  });

  // Сохраняем язык в localStorage при изменении
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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