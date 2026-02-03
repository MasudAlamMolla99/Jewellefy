import { Star, Palette, Heart, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Star,
      title: "4.8★ Customer Rating",
      description:
        "Rated by 207+ happy customers who trust us for their precious jewelry needs.",
    },
    {
      icon: Palette,
      title: "Custom Designs",
      description:
        "Transform your vision into reality with our expert customization services.",
    },
    {
      icon: Heart,
      title: "Warm Hospitality",
      description:
        "Experience the warmth of traditional Indian hospitality with every visit.",
    },
    {
      icon: Shield,
      title: "Heritage & Quality",
      description:
        "25+ years of trusted service with BIS hallmarked certified gold.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-charcoal text-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
              Why Us
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Why Choose <span className="text-gold-gradient">Jewellefy</span>
          </h2>

          <p className="text-card/70 text-lg max-w-2xl mx-auto">
            We're not just a jewelry store – we're a destination where tradition
            meets excellence, and every customer becomes family.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center p-8 rounded-lg border border-card/10 bg-card/5 hover:bg-card/10 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-shimmer flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-card/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
