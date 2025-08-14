import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const services = [
    "EICR Testing",
    "House Rewiring", 
    "Consumer Units",
    "EV Charger Installation",
    "LED Lighting",
    "Fault Finding"
  ];

  const areas = [
    "Southampton",
    "Eastleigh", 
    "Romsey",
    "Totton",
    "Hedge End",
    "Winchester"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/37275a0b-954e-4dd1-b429-f9588045f995.png" 
              alt="AM Young Electrical"
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm text-muted-foreground">
              Professional electrical services across Southampton and surrounding areas. 
              Fully qualified, insured, and committed to quality workmanship.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:07739794313" className="hover:text-primary transition-smooth">
                  07739 794313
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@amyoungelectricalltd.co.uk" className="hover:text-primary transition-smooth">
                  info@amyoungelectricalltd.co.uk
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Southampton, Hampshire, UK</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Service Areas</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-muted-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Get Free Quote
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 AM Young Electrical Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms
              </Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;