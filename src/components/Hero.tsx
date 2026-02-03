import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Exquisite gold jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl animate-fade-in">
          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
              Since 1995
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-card leading-tight mb-6">
            Timeless Jewellery{" "}
            <span className="text-gold-gradient">Crafted with Trust</span> & Elegance
          </h1>

          <p className="text-card/80 text-lg md:text-xl mb-8 leading-relaxed">
            Discover exquisite gold jewelry crafted with generations of expertise.
            Your trusted jeweller in Gardenreach, Kolkata.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-serif text-primary">4.8★</div>
              <div className="text-card/60 text-sm">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-primary">207+</div>
              <div className="text-card/60 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-primary">25+</div>
              <div className="text-card/60 text-sm">Years of Trust</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold">
              Contact Us
            </a>
            <a href="#collections" className="btn-outline-gold border-card text-card hover:bg-card hover:text-charcoal">
              View Collection
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
