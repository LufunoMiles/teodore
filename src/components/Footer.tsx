import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "WhatsApp", href: "https://wa.me/27825868078" },
    { name: "Email", href: "mailto:path2awareness0@gmail.com" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-2">
              PATH TO AWARENESS
            </h3>
            <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mb-5">
              by Theodore
            </p>
            <p className="text-primary-foreground/70 leading-relaxed text-sm sm:text-base max-w-xs">
              Navigating the complexities of modern life together through mindfulness 
              and self-awareness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-primary-foreground/80">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Blog", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-primary-foreground/80">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 text-sm sm:text-base inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-primary-foreground/80">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <span className="text-primary-foreground/70 text-sm">082-586-8078</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a
                  href="mailto:path2awareness0@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm break-all"
                >
                  path2awareness0@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="text-primary-foreground/70 text-sm">
                  Thohoyandou, 0950<br />
                  Limpopo, South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Path To Awareness. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              Made with ❤️ by Amour Tech 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
