import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Link as LinkIcon, Loader2, CheckCircle, FileText, Globe, MessageCircle, Send, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const HireForm = () => {
  const { t } = useLanguage();
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
    
    // Simulate AI response based on company data
    const companyInfo = formData.companyInfo || 'HumoAI';
    const aiResponse = `Привет! Я ИИ-специалист компании ${companyInfo.split(' ')[0] || 'вашей компании'}. Я изучил всю информацию о компании и готов отвечать на вопросы клиентов. Ваш вопрос: "${userMessage}" - это отличный вопрос! Я готов предоставить подробную информацию на основе загруженных данных о компании.`;
    
    setTimeout(() => {
      setTestMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    }, 1000);
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
                          <p>Задайте любой вопрос, чтобы протестировать ИИ-специалиста</p>
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
                    </div>
                    
                    {/* Input */}
                    <div className="border-t p-4">
                      <div className="flex gap-2">
                        <Input
                          value={testInput}
                          onChange={(e) => setTestInput(e.target.value)}
                          placeholder="Напишите вопрос клиента..."
                          onKeyPress={(e) => e.key === 'Enter' && handleTestMessage()}
                          className="flex-1"
                        />
                        <Button onClick={handleTestMessage} size="icon">
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
                Нанять ИИ-специалиста
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Создайте персонального ИИ-сотрудника для вашего бизнеса за 1 минуту
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
                    Информация о компании
                  </Label>
                  <Textarea
                    id="companyInfo"
                    placeholder="Расскажите о вашей компании, товарах/услугах, целевой аудитории..."
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
                    Загрузите документы (необязательно)
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
                        {formData.file ? formData.file.name : 'Прайс-лист, FAQ, каталог товаров или другие материалы'}
                      </p>
                    </label>
                  </div>
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-lg font-medium flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Сайт компании (необязательно)
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://your-website.com"
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
                      Создаем ИИ-специалиста...
                    </>
                  ) : (
                    <>
                      <LinkIcon className="w-5 h-5" />
                      Создать ИИ-специалиста
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