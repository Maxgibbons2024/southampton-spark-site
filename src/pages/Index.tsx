import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { 
  Phone, 
  Star, 
  Shield, 
  Clock, 
  CheckCircle, 
  Zap,
  Home,
  Car,
  Lightbulb,
  Settings,
  Search,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "EICR Testing",
      description: "Electrical Installation Condition Reports for landlords and homeowners",
      icon: CheckCircle,
      features: [
        "Full electrical safety inspection",
        "Detailed condition report",
        "Certificate for insurance/letting",
        "Fault identification & recommendations"
      ],
      fromPrice: "£150"
    },
    {
      title: "House Rewiring",
      description: "Complete or partial rewiring for older properties",
      icon: Home,
      features: [
        "Full house rewiring",
        "Partial rewiring upgrades",
        "New sockets & switches",
        "Minimal disruption approach"
      ],
      fromPrice: "£2,500"
    },
    {
      title: "Consumer Units",
      description: "Modern fuse box installation and upgrades",
      icon: Settings,
      features: [
        "RCD protection upgrades",
        "Modern circuit breakers",
        "18th Edition compliance",
        "Enhanced safety features"
      ],
      fromPrice: "£400"
    },
    {
      title: "EV Charger Installation",
      description: "Home electric vehicle charging point installation",
      icon: Car,
      features: [
        "Type 2 charging points",
        "OZEV grant application",
        "Tethered & untethered options",
        "Smart charging features"
      ],
      fromPrice: "£750"
    },
    {
      title: "LED Lighting",
      description: "Energy-efficient lighting solutions",
      icon: Lightbulb,
      features: [
        "LED downlight installation",
        "Smart lighting systems",
        "Outdoor security lighting",
        "Energy saving solutions"
      ],
      fromPrice: "£80"
    },
    {
      title: "Fault Finding",
      description: "Quick diagnosis and repair of electrical issues",
      icon: Search,
      features: [
        "Power outage diagnosis",
        "Tripping circuit repairs",
        "Socket & switch problems",
        "Emergency call-outs"
      ],
      fromPrice: "£85"
    }
  ];

  const testimonials = [
    {
      name: "Freya W.",
      location: "Southampton",
      rating: 5,
      text: "Professional, on time, and very happy with the work done.",
      service: "Consumer Unit Upgrade"
    },
    {
      name: "Nin Nin",
      location: "Eastleigh", 
      rating: 5,
      text: "Quick, reliable, and great price. Highly recommended.",
      service: "EICR Testing"
    },
    {
      name: "Stuart G.",
      location: "Romsey",
      rating: 5,
      text: "Listens to the customer, makes suggestions, and gets the job done at a fair price.",
      service: "LED Lighting Installation"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "5+", label: "Years Experience" },
    { number: "24hr", label: "Response Time" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative hero-gradient py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                ⚡ Qualified Electricians in Southampton
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Reliable electricians in{" "}
                <span className="text-primary">Southampton</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From EICRs to EV charger installs. Professional electrical services across 
                Southampton and surrounding areas. Fully insured. Tidy work. Fair pricing.
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-button" asChild>
                <a href="tel:07739794313" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call 07739 794313</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>NICEIC Qualified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>24hr Call-out</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Electrical Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Domestic and light commercial electrical work across Southampton and nearby areas. 
              Professional. Reliable. Competitively priced.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - see what our satisfied customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90">
              Get your free, no-obligation quote today. Fast response, competitive prices, 
              quality workmanship guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6" 
                asChild
              >
                <a href="tel:07739794313" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary" 
                asChild
              >
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;