import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Link as LinkIcon, Loader2, CheckCircle, FileText, Globe, MessageCircle, Send, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const HireForm = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyInfo: '',
    website: '',
    file: null as File | null,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [testMessages, setTestMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [testInput, setTestInput] = useState('');
  const [isTestLoading, setIsTestLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');

  // Устанавливаем API ключ при монтировании компонента
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsProcessing(false);
    setIsTesting(true);
    
    // Store company data for the AI
    localStorage.setItem('companyData', JSON.stringify(formData));
    
    toast({
      title: "ИИ-специалист создан!",
      description: "Теперь вы можете протестировать его работу",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  const handleTestMessage = async () => {
    if (!testInput.trim()) return;
    
    const userMessage = testInput;
    setTestMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setTestInput('');
    setIsTestLoading(true);
    
    try {
      // Создаем контекст компании из данных формы
      const companyContext = `
        Информация о компании: ${formData.companyInfo}
        ${formData.website ? `Веб-сайт: ${formData.website}` : ''}
        ${formData.file ? `Загруженный файл: ${formData.file.name}` : ''}
        
        Вы профессиональный ИИ-специалист службы поддержки клиентов этой компании.
        Отвечайте дружелюбно, профессионально и по существу на основе информации о компании.
        Если клиент спрашивает о чем-то не связанном с компанией, вежливо перенаправьте разговор на услуги компании.
      `;

      if (!apiKey) {
        const fallbackMessages = {
          'ru': `Спасибо за ваш вопрос: "${userMessage}". Я ИИ-специалист компании ${formData.companyInfo.split(' ')[0] || 'вашей компании'}. Для полноценной работы требуется настройка API ключа, но я готов помочь с базовой информацией о наших услугах!`,
          'uz': `Savolingiz uchun rahmat: "${userMessage}". Men ${formData.companyInfo.split(' ')[0] || 'kompaniyangiz'} II mutaxassisiman. To'liq ishlash uchun API kalit sozlash kerak, ammo men bizning xizmatlar haqida asosiy ma'lumotlar berish uchun tayyorman!`,
          'en': `Thank you for your question: "${userMessage}". I'm an AI specialist of ${formData.companyInfo.split(' ')[0] || 'your company'}. For full functionality, API key setup is required, but I'm ready to help with basic information about our services!`
        };
        const fallbackResponse = fallbackMessages[language] || fallbackMessages['ru'];
        setTimeout(() => {
          setTestMessages(prev => [...prev, { role: 'assistant', content: fallbackResponse }]);
          setIsTestLoading(false);
        }, 1000);
        return;
      }

      // Формируем историю сообщений для OpenAI
      const conversationHistory = testMessages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

      // Добавляем текущее сообщение пользователя
      conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      const languageInstructions = {
        'ru': 'Отвечай только на русском языке.',
        'uz': 'Faqat o\'zbek tilida javob bering.',
        'en': 'Reply only in English.'
      };

      const systemPrompt = `Ты профессиональный ИИ-специалист службы поддержки клиентов. Отвечай дружелюбно, профессионально и по существу на основе информации о компании. Используй следующую информацию: ${companyContext}. ${languageInstructions[language]}. Если клиент спрашивает о чем-то не связанном с компанией, вежливо перенаправь разговор на услуги компании.`;

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
            ...conversationHistory
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('OpenAI API Error:', response.status, errorText);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || 'Извините, не удалось получить ответ. Попробуйте еще раз.';
      
      setTestMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      toast({
        title: "Ошибка API",
        description: "Не удалось получить ответ от ИИ-специалиста. Проверьте API ключ.",
        variant: "destructive",
      });
      
      // Fallback response
      const errorFallbackMessages = {
        'ru': `Извините, временно не могу обработать ваш запрос. Но я могу сказать, что наша компания "${formData.companyInfo.split(' ')[0] || 'ваша компания'}" предоставляет качественные услуги и готова помочь вам!`,
        'uz': `Kechirasiz, vaqtinchalik so'rovingizni qayta ishlay olmayman. Lekin bizning "${formData.companyInfo.split(' ')[0] || 'kompaniyangiz'}" kompaniyasi sifatli xizmatlar taqdim etadi va sizga yordam berishga tayyorligimizni aytishim mumkin!`,
        'en': `Sorry, I can't process your request temporarily. But I can say that our company "${formData.companyInfo.split(' ')[0] || 'your company'}" provides quality services and is ready to help you!`
      };
      const fallbackResponse = errorFallbackMessages[language] || errorFallbackMessages['ru'];
      setTestMessages(prev => [...prev, { role: 'assistant', content: fallbackResponse }]);
    } finally {
      setIsTestLoading(false);
    }
  };

  const handleStartUsing = () => {
    setIsTesting(false);
    setIsComplete(true);
  };

  if (isTesting) {
    return (
      <div className="min-h-screen bg-gradient-hero pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Тестирование ИИ-специалиста
              </h1>
              <p className="text-muted-foreground">
                Проверьте, как ваш ИИ-специалист отвечает на вопросы клиентов
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Company Info Panel */}
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Загруженная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Компания:</Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      {formData.companyInfo.slice(0, 100)}...
                    </p>
                  </div>
                  {formData.website && (
                    <div>
                      <Label className="text-sm font-medium">Сайт:</Label>
                      <p className="text-sm text-muted-foreground mt-1">{formData.website}</p>
                    </div>
                  )}
                  {formData.file && (
                    <div>
                      <Label className="text-sm font-medium">Файл:</Label>
                      <p className="text-sm text-muted-foreground mt-1">{formData.file.name}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Chat Panel */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card h-[600px] flex flex-col">
                  <CardHeader className="border-b">
                    <CardTitle className="flex items-center gap-2">
                      <Bot className="w-6 h-6 text-primary" />
                      Тестовый чат с ИИ-специалистом
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col p-0">
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {testMessages.length === 0 && (
                        <div className="text-center text-muted-foreground py-8">
                          <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>
                            {language === 'uz' ? 'II mutaxassisini sinovdan oʻtkazish uchun istalgan savolni bering' :
                             language === 'en' ? 'Ask any question to test the AI specialist' :
                             'Задайте любой вопрос, чтобы протестировать ИИ-специалиста'}
                          </p>
                        </div>
                      )}
                      
                       {testMessages.map((message, index) => (
                         <div
                           key={index}
                           className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                         >
                           <div
                             className={`max-w-[80%] p-3 rounded-lg ${
                               message.role === 'user'
                                 ? 'bg-primary text-primary-foreground'
                                 : 'bg-muted'
                             }`}
                           >
                             {message.content}
                           </div>
                         </div>
                       ))}
                       
                       {isTestLoading && (
                         <div className="flex justify-start">
                           <div className="bg-muted p-3 rounded-lg">
                             <div className="flex items-center gap-2">
                               <Loader2 className="w-4 h-4 animate-spin text-primary" />
                               <span className="text-sm text-muted-foreground">ИИ думает...</span>
                             </div>
                           </div>
                         </div>
                       )}
                    </div>
                    
                    {/* Input */}
                    <div className="border-t p-4">
                      <div className="flex gap-2">
                         <Input
                           value={testInput}
                           onChange={(e) => setTestInput(e.target.value)}
                           placeholder="Напишите вопрос клиента..."
                           onKeyPress={(e) => e.key === 'Enter' && !isTestLoading && handleTestMessage()}
                           className="flex-1"
                           disabled={isTestLoading}
                         />
                         <Button onClick={handleTestMessage} size="icon" disabled={isTestLoading}>
                           <Send className="w-4 h-4" />
                         </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6 text-center">
                  <Button variant="hero" size="xl" onClick={handleStartUsing}>
                    Начать использовать ИИ-специалиста
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-hero pt-20 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-4 bg-gradient-card shadow-glow">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ИИ-специалист готов!
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Ваш персональный ИИ-специалист успешно создан и обучен на основе предоставленной информации. 
              Теперь он готов отвечать на вопросы ваших клиентов 24/7.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Готовность</div>
              </div>
              <div className="bg-gradient-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Доступность</div>
              </div>
              <div className="bg-gradient-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
            </div>
            
            <Button variant="hero" size="xl" className="w-full" onClick={() => window.location.href = '/chat'}>
              Начать использовать
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('form.title')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('form.subtitle')}
            </p>
          </div>

          <Card className="bg-gradient-card shadow-glow border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Информация о вашем бизнесе
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Company Info */}
                <div className="space-y-2">
                  <Label htmlFor="companyInfo" className="text-lg font-medium flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {t('form.company.label')}
                  </Label>
                  <Textarea
                    id="companyInfo"
                    placeholder={t('form.company.placeholder')}
                    value={formData.companyInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, companyInfo: e.target.value }))}
                    className="min-h-[120px] resize-none"
                    required
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label className="text-lg font-medium flex items-center gap-2">
                    <Upload className="w-5 h-5 text-primary" />
                    {t('form.file.label')}
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="fileUpload"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {formData.file ? formData.file.name : t('form.file.placeholder')}
                      </p>
                    </label>
                  </div>
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-lg font-medium flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('form.website.label')}
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder={t('form.website.placeholder')}
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                    className="text-lg py-3"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isProcessing || !formData.companyInfo}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('form.processing')}
                    </>
                  ) : (
                    <>
                      <LinkIcon className="w-5 h-5" />
                      {t('form.submit')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};