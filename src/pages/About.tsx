import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Clock, Users, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const qualifications = [
    "NICEIC Qualified Electrician",
    "18th Edition BS 7671 Certified", 
    "Part P Building Regulations",
    "City & Guilds Electrical Installation",
    "EV Charger Installation Certified",
    "Public Liability Insurance £2M"
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every installation meets the highest safety standards with comprehensive testing and certification."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time arrivals, fast responses, and work completed when promised. Your time matters."
    },
    {
      icon: Award,
      title: "Quality Workmanship",
      description: "Professional, tidy installation practices with attention to detail and pride in our work."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Clear communication, fair pricing, and work that exceeds expectations every time."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              About <span className="text-primary">AM Young Electrical</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional electrical services you can trust in Southampton and surrounding areas. 
              Qualified, insured, and committed to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Meet Ash Young
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  I'm Ash Young, and I run AM Young Electrical Limited in Southampton. 
                  With years of experience in the electrical industry, I'm committed to 
                  providing professional, reliable electrical services across Southampton 
                  and the surrounding areas.
                </p>
                <p>
                  What sets me apart is my commitment to clear communication, tidy work, 
                  and fair pricing. Whether you need an EICR for your rental property, 
                  a consumer unit upgrade, or an EV charger installation, I'll explain 
                  what needs doing and why, so you can make informed decisions.
                </p>
                <p>
                  I believe in doing the job right the first time, which is why all my 
                  work is fully guaranteed and I'm proud to have built a reputation for 
                  quality workmanship across Southampton, Eastleigh, Romsey, and beyond.
                </p>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div className="order-first lg:order-last">
              <Card className="shadow-card">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <div className="text-8xl mb-4">👨‍🔧</div>
                      <div className="text-lg font-semibold">Ash Young</div>
                      <div className="text-sm">Qualified Electrician</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Qualifications & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-card">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{qualification}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card hover:shadow-hero transition-smooth">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Areas We Cover
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide electrical services across Southampton and the surrounding areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Southampton", "Eastleigh", "Romsey", "Totton",
                "Hedge End", "Winchester", "Chandler's Ford", "Fareham",
                "Portsmouth", "Fair Oak", "Botley", "Hamble"
              ].map((area, index) => (
                <Badge key={index} variant="outline" className="p-2 text-center">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Why Choose AM Young Electrical?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-lg font-semibold">Years Experience</div>
                <div className="text-muted-foreground text-sm">
                  Established electrical contractor serving Southampton area
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-lg font-semibold">Happy Customers</div>
                <div className="text-muted-foreground text-sm">
                  Satisfied homeowners and businesses across Hampshire
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">24hr</div>
                <div className="text-lg font-semibold">Emergency Response</div>
                <div className="text-muted-foreground text-sm">
                  Available for emergency electrical problems
                </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl opacity-90">
              Experience the AM Young Electrical difference. Professional service, 
              competitive prices, and work you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a href="tel:07739794313" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call 07739 794313</span>
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

export default About;