import { Award, Heart, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Certified Quality",
      description: "BIS hallmarked gold with guaranteed purity",
    },
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "Every piece tells a story of tradition",
    },
    {
      icon: Users,
      title: "Warm Hospitality",
      description: "Experience personalized service",
    },
    {
      icon: Award,
      title: "Trusted Legacy",
      description: "Serving families for over 25 years",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
              A Legacy of{" "}
              <span className="text-gold-gradient">Trust & Excellence</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled in the heart of Gardenreach, Kolkata, Jewellefy has been
              the trusted destination for exquisite gold jewelry since 1995. Our
              commitment to quality craftsmanship and customer satisfaction has
              made us a beloved jeweller for generations of families.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe that every piece of jewelry should be as unique as the
              person wearing it. That's why we offer custom designs alongside our
              stunning collection of traditional and contemporary pieces.
            </p>

            <a href="#collections" className="btn-gold">
              Explore Collections
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="luxury-card p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
