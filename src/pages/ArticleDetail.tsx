import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/ArticleCard";
import { SocialShare } from "@/components/SocialShare";
import { Comments } from "@/components/Comments";
import { SEOHead } from "@/components/SEOHead";
import { articles } from "@/data/articles";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Artículo no encontrado</h1>
          <Link to="/articles">
            <Button variant="outline">Volver a Artículos</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 2);
  const articleUrl = `/article/${article.id}`;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={article.title}
        description={article.excerpt}
        image={article.image}
        url={articleUrl}
        type="article"
        author={article.author}
        publishedTime={article.date}
        category={article.category}
        keywords={[article.category, "análisis", "investigación"]}
      />
      
      <Header />

      {/* Article Header */}
      <article className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/articles">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Volver a Artículos
            </Button>
          </Link>

          <div className="mb-6">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/50">
              {article.category}
            </span>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 glow-blue leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-muted-foreground mb-6 sm:mb-8 text-sm">
            <div className="flex items-center gap-2">
              <User size={14} className="sm:w-4 sm:h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="sm:w-4 sm:h-4" />
              <time dateTime={article.date}>{article.date}</time>
            </div>
          </div>

          <figure className="relative mb-12 rounded-lg overflow-hidden border border-primary/20 glow-box-blue">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-auto"
              loading="eager"
            />
          </figure>

          <div className="prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none mb-8 sm:mb-12">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({ children }) => (
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6 text-primary glow-blue">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-secondary glow-violet">{children}</h3>
                ),
                p: ({ children }) => <p className="text-foreground/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{children}</p>,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {/* Share Buttons */}
          <SocialShare title={article.title} url={`${window.location.origin}${articleUrl}`} />

          {/* Comments Section */}
          <Comments articleId={article.id} />

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <aside className="border-t border-primary/20 pt-12">
              <h3 className="font-heading text-2xl font-bold mb-8 glow-violet">Artículos Relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.id} {...relatedArticle} />
                ))}
              </div>
            </aside>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
