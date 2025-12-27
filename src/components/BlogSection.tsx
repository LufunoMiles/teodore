import BlogCard from "./BlogCard";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  comments: number;
  likes: number;
  image: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  return (
    <section id="blog" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent bg-accent/10 rounded-full border border-accent/20 mb-6">
            Latest Posts
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-display-sm font-serif font-semibold text-foreground">
            Blog
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Insights on mindfulness, life lessons, and navigating the complexities of modern life.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={post.id}
              title={post.title}
              author={post.author}
              date={post.date}
              views={post.views}
              comments={post.comments}
              likes={post.likes}
              image={post.image}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-6 py-3 text-primary font-medium rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
