import { Heart, MessageCircle, Eye, ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  views: number;
  comments: number;
  likes: number;
  image: string;
  delay?: number;
}

const BlogCard = ({
  title,
  author,
  date,
  views,
  comments,
  likes,
  image,
  delay = 0,
}: BlogCardProps) => {
  return (
    <article
      className="group card-modern overflow-hidden animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover arrow */}
        <div className="absolute top-4 right-4 p-2 bg-card/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight className="w-4 h-4 text-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug">
          {title}
        </h3>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="font-medium text-foreground/80">{author}</span>
          <span className="text-border">•</span>
          <time>{date}</time>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Eye className="w-4 h-4" />
            <span className="text-sm">{views}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{comments}</span>
          </div>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors duration-300 ml-auto group/like">
            <Heart className="w-4 h-4 group-hover/like:fill-accent group-hover/like:text-accent transition-all" />
            <span className="text-sm font-medium">{likes}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
