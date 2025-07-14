import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
  { code: 'uz' as Language, name: 'O\'zbek', flag: '🇺🇿' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className="h-8 px-2 text-xs"
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.code.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};