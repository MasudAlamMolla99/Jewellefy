import { MapPin, Mail, Clock, Navigation, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-charcoal text-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
              Visit Us
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Find <span className="text-gold-gradient">Jewellefy</span>
          </h2>

          <p className="text-card/70 text-lg max-w-2xl mx-auto">
            Visit our showroom in Gardenreach, Kolkata and experience our
            exquisite collection in person.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-2xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0644193847876!2d88.30896841495842!3d22.535554985205367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027890e0b12e4d%3A0x5e0c8e2e5a1e0d0!2sGarden%20Reach%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jewellefy Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Our Location
                </h3>
                <p className="text-card/70">
                  Gardenreach, Kolkata
                  <br />
                  West Bengal, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Email Us
                </h3>
                <a
                  href="mailto:official.masudalam@gmail.com"
                  className="text-card/70 hover:text-primary transition-colors"
                >
                  official.masudalam@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Business Hours
                </h3>
                <p className="text-card/70">
                  Opens at 11:00 AM
                  <br />
                  <span className="text-sm">(Closed on select days)</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:official.masudalam@gmail.com"
                className="btn-gold flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Garden+Reach+Kolkata+West+Bengal+India"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold border-card text-card hover:bg-card hover:text-charcoal flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
