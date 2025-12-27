import { Quote } from "lucide-react";
import IMG_3682 from '../../public/IMG_3682.JPG';

interface AboutSectionProps {
  aboutImage: string;
}

const AboutSection = ({ aboutImage }: AboutSectionProps) => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
          {/* Image */}
          <div className="relative animate-fade-up order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none">
              <img
                src={IMG_3682.src}
                alt="Netshedzo (Theodore) Tshitangano"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 sm:w-24 h-20 sm:h-24 bg-accent/10 rounded-full -z-10" />
            
            {/* Quote card */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-8 lg:-left-12 p-4 sm:p-5 bg-card rounded-2xl shadow-lg max-w-[200px] sm:max-w-xs hidden sm:block">
              <Quote className="w-6 h-6 text-primary mb-2" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Join me as we navigate the complexities of life together!"
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-display-sm font-serif font-semibold text-foreground mb-6 sm:mb-8">
              My Story
            </h2>
            <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Welcome to Path To Awareness! I'm <strong className="text-foreground font-medium">Netshedzo (Theodore) Tshitangano</strong>, 
                currently pursuing a BCom degree in Accounting Sciences in the vibrant town of 
                Thohoyandou, South Africa.
              </p>
              <p>
                This blog is a platform for me to share my personal views and experiences on 
                life lessons and self-awareness. I believe in the power of sharing our stories, 
                and I started this journey to empower the recent generation to speak up and 
                express themselves.
              </p>
              <p>
                Growing up, I often bottled things up, only to realize the toll it took on my 
                well-being. Through this blog, I aim to encourage open conversations about our 
                thoughts and feelings, fostering a community where we can learn, grow, and 
                support one another.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-border">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Articles</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">48+</div>
                <div className="text-sm text-muted-foreground mt-1">Likes</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">378+</div>
                <div className="text-sm text-muted-foreground mt-1">Readers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;