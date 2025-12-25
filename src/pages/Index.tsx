import { Link } from "react-router-dom";
import { Eye, BookOpen, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { RTPlayer } from "@/components/RTPlayer";
import { articles } from "@/data/articles";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  // Agrupar artículos por categoría
  const articlesByCategory = articles.reduce((acc, article) => {
    const category = article.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {} as Record<string, typeof articles>);

  // Obtener los últimos 3 artículos por categoría
  const categoriesWithArticles = Object.entries(articlesByCategory)
    .map(([category, articles]) => ({
      category,
      articles: articles.slice(0, 3)
    }))
    .filter(item => item.articles.length > 0);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center particles-bg pt-20 md:pt-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center z-10 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 glow-blue">
              EL <span className="text-secondary glow-violet">DIVERGENTE</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-3xl mb-3 sm:mb-4 text-foreground/90 font-heading">
              Donde las teorías se transforman en conocimiento
            </p>
            
            <p className="text-sm sm:text-lg md:text-xl mb-8 sm:mb-12 text-muted-foreground max-w-2xl mx-auto px-2">
              Explora los hilos ocultos que mueven el mundo. Análisis independiente de conspiraciones, 
              geopolítica global y las verdades que otros prefieren ignorar.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center px-4 sm:px-0">
              <Link to="/articles" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full text-sm sm:text-base">
                  <BookOpen className="mr-2 shrink-0" size={18} />
                  Leer Artículos
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button variant="neon" size="lg" className="w-full text-sm sm:text-base">
                  Sobre el Autor
                </Button>
              </Link>
              <Link to="/donate" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full group text-sm sm:text-base">
                  <Heart className="mr-2 text-primary group-hover:text-secondary transition-colors shrink-0" size={18} />
                  <div className="flex flex-col items-start">
                    <span className="font-bold">Dona</span>
                    <span className="text-xs text-muted-foreground hidden sm:block">Ayúdanos a mantener la plataforma</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RT Player */}
      <RTPlayer />

      {/* Features */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 glow-blue">
            ¿Qué encontrarás aquí?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center p-4 sm:p-6 rounded-lg bg-card/50 border border-primary/20 glow-box-blue">
              <TrendingUp className="text-primary mx-auto mb-3 sm:mb-4" size={36} />
              <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary">Geopolítica Global</h3>
              <p className="text-muted-foreground text-sm">
                Análisis profundo de las dinámicas de poder mundial y las fuerzas que moldean nuestro presente.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg bg-card/50 border border-secondary/20 glow-box-violet">
              <Eye className="text-secondary mx-auto mb-3 sm:mb-4" size={36} />
              <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-secondary">Sociedades Secretas</h3>
              <p className="text-muted-foreground text-sm">
                Investigación sobre organizaciones y redes de influencia que operan en las sombras del poder.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg bg-card/50 border border-primary/20 glow-box-blue sm:col-span-2 md:col-span-1">
              <BookOpen className="text-primary mx-auto mb-3 sm:mb-4" size={36} />
              <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary">Economía Oculta</h3>
              <p className="text-muted-foreground text-sm">
                Desentrañando los mecanismos financieros y económicos que controlan nuestras sociedades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles by Category */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 glow-violet">
            Últimos Artículos por Categoría
          </h2>
          
          <div className="space-y-10 sm:space-y-16">
            {categoriesWithArticles.map(({ category, articles }) => (
              <div key={category} className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold glow-blue">
                    {category}
                  </h3>
                  <Link to={`/articles?category=${encodeURIComponent(category)}`}>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 text-xs sm:text-sm whitespace-nowrap">
                      Ver más →
                    </Button>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {articles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-16">
            <Link to="/articles">
              <Button variant="outline" size="lg" className="text-sm sm:text-base">
                Ver Todos los Artículos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
