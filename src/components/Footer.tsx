import { Facebook, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-card border-t border-card/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-gradient mb-3">
              Jewellefy
            </h3>
            <p className="text-card/60 text-sm">
              Your trusted jeweller in Gardenreach, Kolkata.
              Crafting timeless jewelry since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-card/70 hover:text-primary transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-card/70 hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#collections" className="text-card/70 hover:text-primary transition-colors text-sm">
              Collections
            </a>
            <a href="#services" className="text-card/70 hover:text-primary transition-colors text-sm">
              Services
            </a>
            <a href="#contact" className="text-card/70 hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-card/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-card/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-card/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/50 text-sm">
            © {currentYear} Jewellefy. All Rights Reserved.
          </p>
          <p className="text-card/50 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Kolkata
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
