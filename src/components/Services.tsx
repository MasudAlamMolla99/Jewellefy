import { Wrench, Palette, Gem } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Gem,
      title: "Gold & Jewelry Sales",
      description:
        "Explore our extensive collection of 22K and 24K gold jewelry, diamonds, and precious gemstones. From traditional Indian designs to contemporary styles.",
    },
    {
      icon: Palette,
      title: "Custom Jewelry Design",
      description:
        "Transform your ideas into stunning reality. Our master craftsmen work closely with you to create bespoke pieces that reflect your unique style.",
    },
    {
      icon: Wrench,
      title: "Jewelry Repair",
      description:
        "Expert repair and restoration services for your cherished pieces. From resizing to polishing, we handle your jewelry with the utmost care.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
              Our Services
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Premium <span className="text-gold-gradient">Services</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From selection to customization to care, we offer comprehensive
            services to meet all your jewelry needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="luxury-card p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-charcoal flex items-center justify-center group-hover:gold-shimmer transition-all duration-500">
                <service.icon className="w-10 h-10 text-primary group-hover:text-charcoal transition-colors duration-500" />
              </div>

              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
