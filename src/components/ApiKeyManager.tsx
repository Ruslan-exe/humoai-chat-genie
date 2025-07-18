
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Key, Save } from 'lucide-react';

export const ApiKeyManager = () => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите API ключ",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Save to localStorage as backup and for immediate use
      localStorage.setItem('openai_api_key', apiKey);
      
      toast({
        title: "API ключ сохранен",
        description: "Новый OpenAI API ключ успешно сохранен",
      });
      
      // Clear the input for security
      setApiKey('');
    } catch (error) {
      console.error('Error saving API key:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить API ключ",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="w-5 h-5 text-primary" />
          Настройка OpenAI API
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="apiKey">OpenAI API Key</Label>
          <Input
            id="apiKey"
            type="password"
            placeholder="sk-proj-..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="font-mono text-sm"
          />
          <p className="text-xs text-muted-foreground">
            Получите ключ на{' '}
            <a 
              href="https://platform.openai.com/api-keys" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              platform.openai.com
            </a>
          </p>
        </div>
        
        <Button 
          onClick={handleSaveApiKey}
          disabled={isLoading || !apiKey.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>Сохранение...</>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Сохранить ключ
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
