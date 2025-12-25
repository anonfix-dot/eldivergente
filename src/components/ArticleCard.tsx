import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export const ArticleCard = ({ id, title, excerpt, image, category, date }: ArticleCardProps) => {
  return (
    <Card className="bg-card border border-primary/20 overflow-hidden group hover:border-primary/50 transition-all duration-300 glow-box-blue h-full flex flex-col">
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="bg-primary/90 text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6">
        <h3 className="font-heading text-base sm:text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow pb-2 sm:pb-3 px-3 sm:px-6">
        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{excerpt}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-3 sm:px-6 pb-3 sm:pb-6">
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
          <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
          <span>{date}</span>
        </div>
        <Link to={`/article/${id}`}>
          <Button variant="ghost" size="sm" className="group/btn text-xs sm:text-sm px-2 sm:px-4">
            Leer más
            <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform sm:w-4 sm:h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
