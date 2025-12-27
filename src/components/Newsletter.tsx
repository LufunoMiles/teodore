import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      toast({
        title: "Welcome to the journey!",
        description: "You've successfully subscribed to Path To Awareness.",
      });
      setEmail("");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-6 sm:mb-8">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-4">
            Stay in the Know
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg mb-8 sm:mb-10 max-w-md mx-auto">
            Get the latest insights on mindfulness and self-awareness 
            delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 focus:border-transparent transition-all text-base"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  Subscribing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Subscribe
                  <Send className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          <p className="mt-4 text-sm text-primary-foreground/60">
            {/* No spam, unsubscribe anytime. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
