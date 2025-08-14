import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { CheckCircle, Home, Settings, Car, Lightbulb, Search, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "EICR Testing",
      description: "Electrical Installation Condition Reports for landlords and homeowners. Required every 5 years for rental properties.",
      icon: CheckCircle,
      features: [
        "Full electrical safety inspection",
        "Detailed condition report with photos",
        "Certificate for insurance/letting agents",
        "Fault identification & recommendations",
        "Code 1, 2, 3 classifications explained",
        "Remedial work quotes provided"
      ],
      fromPrice: "£150"
    },
    {
      title: "Complete House Rewiring",
      description: "Full or partial rewiring services for older properties that need updating to modern standards.",
      icon: Home,
      features: [
        "Complete house rewiring",
        "Partial rewiring & extensions",
        "New sockets & switch installation",
        "Modern cable routing",
        "Minimal disruption approach",
        "18th Edition compliance"
      ],
      fromPrice: "£2,500"
    },
    {
      title: "Consumer Unit Upgrades",
      description: "Replace old fuse boxes with modern consumer units featuring RCD protection and circuit breakers.",
      icon: Settings,
      features: [
        "RCD protection installation",
        "Modern RCBO circuit breakers",
        "18th Edition compliance",
        "Enhanced safety features",
        "Surge protection devices",
        "Clear circuit labeling"
      ],
      fromPrice: "£400"
    },
    {
      title: "EV Charger Installation",
      description: "Professional installation of electric vehicle charging points for your home.",
      icon: Car,
      features: [
        "Type 2 charging points (7kW & 22kW)",
        "OZEV grant application assistance",
        "Tethered & untethered options",
        "Smart charging with app control",
        "Load balancing capability",
        "3-year manufacturer warranty"
      ],
      fromPrice: "£750"
    },
    {
      title: "LED Lighting Solutions",
      description: "Energy-efficient lighting installation for indoor and outdoor applications.",
      icon: Lightbulb,
      features: [
        "LED downlight installation",
        "Smart lighting systems",
        "Outdoor security lighting",
        "Under-cabinet lighting",
        "Energy saving calculations",
        "Dimmer switch installation"
      ],
      fromPrice: "£80"
    },
    {
      title: "Electrical Fault Finding",
      description: "Quick diagnosis and repair of electrical problems. Emergency call-outs available.",
      icon: Search,
      features: [
        "Power outage diagnosis",
        "Tripping circuit investigation",
        "Socket & switch repairs",
        "Emergency call-outs",
        "Safety testing after repairs",
        "Preventive maintenance advice"
      ],
      fromPrice: "£85"
    },
    {
      title: "Additional Sockets & Switches",
      description: "Installation of new electrical outlets and switches throughout your property.",
      icon: Zap,
      features: [
        "New socket installation",
        "USB charging sockets",
        "Outdoor weatherproof sockets",
        "Switch replacements",
        "Timer switches",
        "Smart switch installation"
      ],
      fromPrice: "£45"
    },
    {
      title: "Emergency Electrical Services",
      description: "24-hour emergency electrical services for urgent electrical problems.",
      icon: Clock,
      features: [
        "24/7 emergency response",
        "Power restoration services",
        "Safety hazard elimination",
        "Temporary repairs",
        "Insurance claim support",
        "Fast response guarantee"
      ],
      fromPrice: "£120"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Professional Electrical Services in <span className="text-primary">Southampton</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive electrical services for homes and businesses across Southampton, 
              Eastleigh, Romsey, and surrounding areas. Fully qualified, insured, and committed to quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-button" asChild>
                <a href="tel:07739794313">Call 07739 794313</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Why Choose AM Young Electrical?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Fully Qualified & Insured</h3>
                <p className="text-muted-foreground">
                  NICEIC qualified electricians with comprehensive public liability insurance for your peace of mind.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Fast Response Times</h3>
                <p className="text-muted-foreground">
                  Quick response to enquiries and flexible scheduling to work around your availability.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  All work guaranteed with certificates provided. Tidy work practices and competitive pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Need an Electrician in Southampton?
            </h2>
            <p className="text-xl opacity-90">
              Get your free quote today. We cover Southampton, Eastleigh, Romsey, Totton, 
              Hedge End, Winchester, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a href="tel:07739794313">Call Now</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary" 
                asChild
              >
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;