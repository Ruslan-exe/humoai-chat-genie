import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-primary rounded-lg hover:shadow-glow transition-all duration-300"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;
