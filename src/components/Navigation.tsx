import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex flex-col">
            <span className="text-xl sm:text-2xl font-serif font-semibold text-foreground tracking-tight transition-colors group-hover:text-primary">
              PATH TO AWARENESS
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground tracking-[0.2em] uppercase">
              by Theodore
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground link-underline transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Search Bar */}
        <div
          className={`hidden md:block overflow-hidden transition-all duration-300 ${
            isSearchOpen ? "max-h-20 mt-4" : "max-h-0"
          }`}
        >
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full max-w-md px-5 py-3 rounded-xl border border-border bg-card/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-96 mt-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 py-4 border-t border-border">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-4">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
