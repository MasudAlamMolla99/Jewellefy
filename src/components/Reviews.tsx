import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Excellent collection, good customisation available. The staff was extremely helpful in creating my dream wedding set.",
      date: "2 weeks ago",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Varieties of ornaments and generous hospitality. Have been buying from Jewellefy for over 10 years. Highly recommended!",
      date: "1 month ago",
    },
    {
      name: "Anita Das",
      rating: 5,
      text: "Great collection, everyone is so helpful. Loved the experience. The quality of gold is exceptional and the designs are beautiful.",
      date: "3 weeks ago",
    },
    {
      name: "Sunil Ghosh",
      rating: 4,
      text: "Traditional designs with modern touch. Fair pricing and transparent dealings. Will definitely visit again.",
      date: "1 month ago",
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
              Testimonials
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            What Our <span className="text-gold-gradient">Customers</span> Say
          </h2>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-primary fill-primary"
                />
              ))}
            </div>
            <span className="text-foreground font-semibold ml-2">4.8</span>
            <span className="text-muted-foreground">(207 reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="luxury-card p-8 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "text-primary fill-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif font-semibold text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-muted-foreground text-sm">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
