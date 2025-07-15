import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Send, Bot, User, Settings, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chat = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: language === 'ru' 
        ? 'Здравствуйте! Я ваш ИИ-специалист по поддержке клиентов. Чем могу помочь?' 
        : language === 'uz'
        ? 'Salom! Men sizning AI mijozlarni qo\'llab-quvvatlash bo\'yicha mutaxassisingizman. Sizga qanday yordam bera olaman?'
        : 'Hello! I am your AI customer support specialist. How can I help you?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [companyContext, setCompanyContext] = useState(`
    Компания: HumoAI
    Описание: Компания разрабатывает ИИ-специалистов чат поддержки для бизнеса в Узбекистане
    Услуги: 
    - Создание персональных ИИ-специалистов за 1 минуту
    - 24/7 поддержка клиентов
    - Интеграция с существующими системами
    - Многоязычная поддержка (русский, узбекский, английский)
    - Аналитика и отчетность
    
    Преимущества:
    - Увеличение конверсии в 2 раза
    - Экономия до 70% затрат на поддержку
    - Быстрое внедрение за 30 секунд
    - Круглосуточная работа без выходных
  `);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Устанавливаем API ключ из localStorage или используем предоставленный
  useEffect(() => {
    const savedApiKey = localStorage.getItem('chatgpt_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    } else {
      // Используем предоставленный API ключ
      const providedKey = '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';
      setApiKey(providedKey);
      localStorage.setItem('chatgpt_api_key', providedKey);
    }
  }, []);

  // Загружаем данные компании из формы найма
  useEffect(() => {
    const savedCompanyData = localStorage.getItem('companyData');
    if (savedCompanyData) {
      try {
        const companyData = JSON.parse(savedCompanyData);
        const customContext = `
          Информация о компании: ${companyData.companyInfo}
          ${companyData.website ? `Веб-сайт: ${companyData.website}` : ''}
          ${companyData.file ? `Загруженный файл: ${companyData.file.name}` : ''}
          
          Дополнительные услуги HumoAI:
          - Создание персональных ИИ-специалистов за 1 минуту
          - 24/7 поддержка клиентов
          - Интеграция с существующими системами
          - Многоязычная поддержка (русский, узбекский, английский)
          - Аналитика и отчетность
        `;
        setCompanyContext(customContext);
      } catch (error) {
        console.error('Error parsing company data:', error);
      }
    }
  }, []);

  const generateAIResponse = async (userMessage: string) => {
    if (!apiKey) {
      toast({
        title: "Необходим API ключ",
        description: "Пожалуйста, добавьте ваш ChatGPT API ключ в настройках для работы ИИ-специалиста",
        variant: "destructive",
      });
      
      // Временный ответ без API
      return language === 'ru' 
        ? `Спасибо за ваш вопрос: "${userMessage}". Для полноценной работы ИИ-специалиста требуется настройка API ключа. Тем не менее, я готов помочь вам с вопросами о наших услугах ИИ-поддержки!`
        : language === 'uz'
        ? `Savolingiz uchun rahmat: "${userMessage}". AI mutaxassisining to'liq ishlashi uchun API kaliti sozlanishi kerak. Shunga qaramay, men sizga AI qo'llab-quvvatlash xizmatlarimiz bo'yicha savollar bilan yordam berishga tayyorman!`
        : `Thank you for your question: "${userMessage}". Full AI specialist functionality requires API key setup. Nevertheless, I'm ready to help you with questions about our AI support services!`;
    }

    try {
      const systemPrompt = language === 'ru'
        ? `Ты профессиональный ИИ-специалист службы поддержки клиентов. Отвечай дружелюбно, профессионально и по существу на основе информации о компании. Используй следующую информацию: ${companyContext}. Отвечай только на русском языке. Если клиент спрашивает о чем-то не связанном с компанией, вежливо перенаправь разговор на услуги компании.`
        : language === 'uz'
        ? `Siz professional mijozlarni qo'llab-quvvatlash bo'yicha AI mutaxassisiz. Do'stona, professional va aniq javob bering. Quyidagi kompaniya ma'lumotlaridan foydalaning: ${companyContext}. Faqat o'zbek tilida javob bering. Agar mijoz kompaniya bilan bog'liq bo'lmagan narsa haqida so'rasa, muloyimlik bilan suhbatni kompaniya xizmatlariga yo'naltiring.`
        : `You are a professional AI customer support specialist. Respond in a friendly, professional and relevant manner based on company information. Use the following information: ${companyContext}. Respond only in English. If the customer asks about something not related to the company, politely redirect the conversation to the company's services.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'Извините, не удалось получить ответ. Попробуйте еще раз.';
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      toast({
        title: "Ошибка API",
        description: "Не удалось получить ответ от ИИ-специалиста. Проверьте API ключ.",
        variant: "destructive",
      });
      
      // Fallback response
      return language === 'ru' 
        ? `Извините, временно не могу обработать ваш запрос. Но я могу сказать, что HumoAI предлагает создание персональных ИИ-специалистов для поддержки клиентов за 1 минуту с поддержкой 24/7.`
        : language === 'uz'
        ? `Kechirasiz, so'rovingizni vaqtincha qayta ishlay olmayman. Lekin men HumoAI 24/7 qo'llab-quvvatlash bilan mijozlarni qo'llab-quvvatlash uchun 1 daqiqada shaxsiy AI mutaxassislarini yaratishni taklif qilishini ayta olaman.`
        : `Sorry, I temporarily cannot process your request. But I can tell you that HumoAI offers creation of personal AI specialists for customer support in 1 minute with 24/7 support.`;
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await generateAIResponse(inputMessage);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error generating AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="pt-20 pb-4">
        <div className="container mx-auto px-4 h-[calc(100vh-6rem)]">
          <div className="max-w-4xl mx-auto h-full flex flex-col">
            {/* Chat Header */}
            <div className="bg-gradient-card rounded-t-xl p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">
                    {t('chat.specialist_name')}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {t('chat.status')}
                  </p>
                </div>
              </div>
              
              <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="w-5 h-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t('chat.settings')}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="apiKey">ChatGPT API Key</Label>
                      <Input
                        id="apiKey"
                        type="password"
                        placeholder="sk-proj-..."
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Получите ключ на <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">platform.openai.com</a>
                      </p>
                    </div>
                    <Button 
                      onClick={() => {
                        localStorage.setItem('chatgpt_api_key', apiKey);
                        setIsSettingsOpen(false);
                        toast({
                          title: "Настройки сохранены",
                          description: "API ключ успешно сохранен",
                        });
                      }}
                      className="w-full"
                    >
                      Сохранить
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-background/50 p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 animate-slide-up ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'ai' && (
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-md p-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-primary text-white ml-auto'
                        : 'bg-card shadow-card'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString('ru-RU', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>

                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 justify-start animate-fade-in">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-card p-3 rounded-xl shadow-card">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">{t('chat.typing')}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="bg-gradient-card rounded-b-xl p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={t('chat.placeholder')}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={isLoading || !inputMessage.trim()}
                  className="shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;