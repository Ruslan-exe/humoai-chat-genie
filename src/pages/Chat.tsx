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
  const [companyContext, setCompanyContext] = useState('');
  const [conversationHistory, setConversationHistory] = useState<{role: string, content: string}[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Устанавливаем API ключ из localStorage или используем предоставленный
  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key') || localStorage.getItem('chatgpt_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  // Загружаем полные данные компании включая содержимое файла
  useEffect(() => {
    const savedCompanyData = localStorage.getItem('companyData');
    if (savedCompanyData) {
      try {
        const companyData = JSON.parse(savedCompanyData);
        const fullContext = `
          Информация о компании: ${companyData.companyInfo}
          ${companyData.website ? `Веб-сайт: ${companyData.website}` : ''}
          ${companyData.file ? `Загруженный файл: ${companyData.file.name}` : ''}
          ${companyData.fileContent ? `Содержимое файла: ${companyData.fileContent}` : ''}
          
          ВАЖНО: Используйте ТОЛЬКО информацию выше для ответов на вопросы клиентов.
          Не используйте общие знания о других компаниях.
        `;
        setCompanyContext(fullContext);
      } catch (error) {
        console.error('Error parsing company data:', error);
        setCompanyContext('Информация о компании не найдена. Пожалуйста, вернитесь на страницу найма и заполните форму.');
      }
    } else {
      setCompanyContext('Информация о компании не найдена. Пожалуйста, вернитесь на страницу найма и заполните форму.');
    }
  }, []);

  const generateAIResponse = async (userMessage: string) => {
    if (!apiKey) {
      const apiKeyToastMessages = {
        title: {
          'ru': 'Необходим API ключ',
          'uz': 'API kaliti kerak',
          'en': 'API Key Required'
        },
        description: {
          'ru': 'Пожалуйста, добавьте ваш OpenAI API ключ в настройках для работы ИИ-специалиста',
          'uz': 'Iltimos, AI mutaxassisining ishlashi uchun sozlamalarga OpenAI API kalitingizni qo\'shing',
          'en': 'Please add your OpenAI API key in settings for AI specialist to work'
        }
      };
      
      toast({
        title: apiKeyToastMessages.title[language] || apiKeyToastMessages.title['ru'],
        description: apiKeyToastMessages.description[language] || apiKeyToastMessages.description['ru'],
        variant: "destructive",
      });
      
      // Temporary response without API
      return language === 'ru' 
        ? `Спасибо за ваш вопрос: "${userMessage}". Для полноценной работы ИИ-специалиста требуется настройка API ключа. Тем не менее, я готов помочь вам с вопросами о наших услугах ИИ-поддержки!`
        : language === 'uz'
        ? `Savolingiz uchun rahmat: "${userMessage}". AI mutaxassisining to'liq ishlashi uchun API kaliti sozlanishi kerak. Shunga qaramay, men sizga AI qo'llab-quvvatlash xizmatlarimiz bo'yicha savollar bilan yordam berishga tayyorman!`
        : `Thank you for your question: "${userMessage}". Full AI specialist functionality requires API key setup. Nevertheless, I'm ready to help you with questions about our AI support services!`;
    }

    try {
      const systemPrompt = language === 'ru'
        ? `Ты профессиональный ИИ-специалист службы поддержки клиентов. Отвечай только на русском языке. ВАЖНО: Используй ТОЛЬКО следующую информацию о компании для ответов: ${companyContext}. НЕ используй общие знания о других компаниях или услугах. Отвечай строго на основе предоставленной информации. Если клиент спрашивает о чем-то не связанном с компанией, вежливо перенаправь разговор на услуги компании.`
        : language === 'uz'
        ? `Siz professional mijozlarni qo'llab-quvvatlash bo'yicha AI mutaxassisiz. Faqat o'zbek tilida javob bering. MUHIM: Faqat quyidagi kompaniya ma'lumotlaridan foydalaning: ${companyContext}. Boshqa kompaniyalar yoki xizmatlar haqidagi umumiy bilimlardan foydalanmang. Faqat taqdim etilgan ma'lumotlar asosida javob bering. Agar mijoz kompaniya bilan bog'liq bo'lmagan narsa haqida so'rasa, muloyimlik bilan suhbatni kompaniya xizmatlariga yo'naltiring.`
        : `You are a professional AI customer support specialist. Respond only in English. IMPORTANT: Use ONLY the following company information for responses: ${companyContext}. Do NOT use general knowledge about other companies or services. Respond strictly based on the provided information. If the customer asks about something not related to the company, politely redirect the conversation to the company's services.`;

      // Формируем полную историю разговора для контекста
      const fullConversationHistory = [
        {
          role: 'system',
          content: systemPrompt
        },
        ...conversationHistory,
        {
          role: 'user',
          content: userMessage
        }
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: fullConversationHistory,
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || 
        (language === 'uz' 
          ? 'Kechirasiz, javob olishning iloji bo\'lmadi. Iltimos, yana urinib ko\'ring.' 
          : language === 'en'
          ? 'Sorry, failed to get a response. Please try again.'
          : 'Извините, не удалось получить ответ. Попробуйте еще раз.');
      
      // Обновляем историю разговора
      setConversationHistory(prev => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: aiResponse }
      ]);
      
      return aiResponse;
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      
      const toastMessages = {
        title: {
          'ru': 'Ошибка API',
          'uz': 'API xatosi',
          'en': 'API Error'
        },
        description: {
          'ru': 'Не удалось получить ответ от ИИ-специалиста. Проверьте API ключ.',
          'uz': 'AI mutaxassisdan javob olishning iloji bo\'lmadi. API kalitini tekshiring.',
          'en': 'Failed to get response from AI specialist. Check API key.'
        }
      };
      
      toast({
        title: toastMessages.title[language] || toastMessages.title['ru'],
        description: toastMessages.description[language] || toastMessages.description['ru'],
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
                      <Label htmlFor="apiKey">OpenAI API Key</Label>
                      <Input
                        id="apiKey"
                        type="password"
                        placeholder="sk-proj-..."
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        {language === 'uz' 
                          ? 'Kalitni olish uchun '
                          : language === 'en'
                          ? 'Get your key at '
                          : 'Получите ключ на '
                        }
                        <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">platform.openai.com</a>
                      </p>
                    </div>
                    <Button 
                      onClick={() => {
                        localStorage.setItem('openai_api_key', apiKey);
                        setIsSettingsOpen(false);
                        
                        const settingsToastMessages = {
                          title: {
                            'ru': 'Настройки сохранены',
                            'uz': 'Sozlamalar saqlandi',
                            'en': 'Settings saved'
                          },
                          description: {
                            'ru': 'API ключ успешно сохранен',
                            'uz': 'API kaliti muvaffaqiyatli saqlandi',
                            'en': 'API key saved successfully'
                          }
                        };
                        
                        toast({
                          title: settingsToastMessages.title[language] || settingsToastMessages.title['ru'],
                          description: settingsToastMessages.description[language] || settingsToastMessages.description['ru'],
                        });
                      }}
                      className="w-full"
                    >
                      {language === 'uz' ? 'Saqlash' : language === 'en' ? 'Save' : 'Сохранить'}
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
