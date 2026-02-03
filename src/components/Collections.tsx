import collectionRings from "@/assets/collection-rings.jpg";
import collectionNecklaces from "@/assets/collection-necklaces.jpg";
import collectionBangles from "@/assets/collection-bangles.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import collectionGold from "@/assets/collection-gold.jpg";

const Collections = () => {
  const collections = [
    {
      name: "Gold Jewelry",
      image: collectionGold,
      description: "Pure 22K gold ornaments",
    },
    {
      name: "Bridal Collection",
      image: collectionBridal,
      description: "Complete wedding sets",
    },
    {
      name: "Necklaces",
      image: collectionNecklaces,
      description: "Traditional & modern designs",
    },
    {
      name: "Rings",
      image: collectionRings,
      description: "Elegant engagement rings",
    },
    {
      name: "Bangles",
      image: collectionBangles,
      description: "Handcrafted gold bangles",
    },
    {
      name: "Earrings",
      image: collectionEarrings,
      description: "Stunning drop earrings",
    },
  ];

  return (
    <section id="collections" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
              Our Collections
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Exquisite <span className="text-gold-gradient">Jewelry</span> Collections
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of fine jewelry, crafted with
            precision and designed to celebrate life's precious moments.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.name}
              className="group luxury-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#contact"
                    className="btn-gold text-center text-sm py-2"
                  >
                    View Collection
                  </a>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {collection.name}
                </h3>
                <p className="text-muted-foreground">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
