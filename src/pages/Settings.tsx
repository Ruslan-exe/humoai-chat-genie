
import { Header } from '@/components/Header';
import { ApiKeyManager } from '@/components/ApiKeyManager';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Настройки
              </h1>
              <p className="text-muted-foreground">
                Управление API ключами и настройками приложения
              </p>
            </div>
            
            <div className="grid gap-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">OpenAI API Configuration</h2>
                <ApiKeyManager />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
