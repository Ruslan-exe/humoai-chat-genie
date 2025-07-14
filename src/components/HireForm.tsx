import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Link as LinkIcon, Loader2, CheckCircle, FileText, Globe } from 'lucide-react';
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
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsProcessing(false);
    setIsComplete(true);
    
    toast({
      title: "ИИ-специалист создан!",
      description: "Ваш персональный ИИ-специалист готов к работе",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

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
            
            <Button variant="hero" size="xl" className="w-full">
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