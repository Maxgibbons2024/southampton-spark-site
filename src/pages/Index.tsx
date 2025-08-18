import { useState, useEffect } from "react";
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
import { reviewService, Review } from "../services/reviewService";

const Index = () => {
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const reviews = await reviewService.getAll();
      if (reviews.length > 0) {
        // Show only the first 3 reviews on the homepage
        setTestimonials(reviews.slice(0, 3));
      } else {
        // Fallback testimonials if no reviews in database
        setTestimonials([
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
        ]);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      // Fallback testimonials on error
      setTestimonials([
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
      ]);
    }
  };

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
                ⚡ NICEIC Qualified • Fast Response • No Callout Fee
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Southampton's trusted electricians for{" "}
                <span className="text-primary">home & business</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fast response times, transparent pricing, no hidden costs. From emergency repairs to EV charger installations - we deliver quality electrical work you can trust.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-primary">
                <span>✓ Emergency callouts from £85</span>
                <span>✓ Free quotes for installations</span>
                <span>✓ Same day service available</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-button pulse-animation" asChild>
                <a href="tel:07739794313" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now - 07739 794313</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/contact">Get Your Free Quote Today</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              🕐 Response within 2 hours • 💷 No hidden fees • ⭐ 5-star rated service
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>£2M Public Liability</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>NICEIC Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>24hr Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>★★★★★ Google Reviews</span>
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
              Transparent pricing with no hidden costs. All quotes include materials, labour and certification. 
              Professional electrical work across Southampton and surrounding areas.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Badge variant="secondary" className="text-sm">✓ No callout fees for quotes</Badge>
              <Badge variant="secondary" className="text-sm">✓ Fixed price guarantees</Badge>
              <Badge variant="secondary" className="text-sm">✓ Same day service available</Badge>
            </div>
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
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.9/5 on Google Reviews</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Real customers, real results</h2>
            <p className="text-xl text-muted-foreground">
              Over 500 happy customers across Southampton trust us with their electrical needs
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
              Need an electrician in Southampton today?
            </h2>
            <p className="text-xl opacity-90">
              Don't wait - electrical problems don't fix themselves. Get your free quote in minutes, not days. 
              Professional service guaranteed.
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <p className="text-lg font-semibold">⚡ Emergency? We're available 24/7</p>
              <p className="opacity-90">No extra charges for evenings or weekends</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6 font-semibold" 
                asChild
              >
                <a href="tel:07739794313" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now - 07739 794313</span>
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent font-semibold" 
                asChild
              >
                <Link to="/contact" className="text-white hover:text-primary">Book Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;