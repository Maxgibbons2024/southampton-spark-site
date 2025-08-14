import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "rewiring", label: "Rewiring" },
    { id: "consumer-units", label: "Consumer Units" },
    { id: "ev-chargers", label: "EV Chargers" },
    { id: "lighting", label: "Lighting" },
    { id: "eicr", label: "EICR Testing" }
  ];

  // Placeholder gallery items - in a real implementation, these would be actual project photos
  const galleryItems = [
    {
      id: 1,
      title: "Consumer Unit Upgrade - Southampton",
      category: "consumer-units",
      description: "Modern consumer unit installation with RCD protection",
      beforeAfter: true
    },
    {
      id: 2,
      title: "EV Charger Installation - Eastleigh",
      category: "ev-chargers", 
      description: "7kW Type 2 electric vehicle charging point installation",
      beforeAfter: false
    },
    {
      id: 3,
      title: "Kitchen Rewire - Romsey",
      category: "rewiring",
      description: "Complete kitchen electrical rewiring with new sockets",
      beforeAfter: true
    },
    {
      id: 4,
      title: "LED Downlights - Winchester",
      category: "lighting",
      description: "Modern LED downlight installation in living areas",
      beforeAfter: true
    },
    {
      id: 5,
      title: "Full House Rewire - Southampton",
      category: "rewiring",
      description: "Complete 3-bedroom house rewiring to 18th Edition standards",
      beforeAfter: true
    },
    {
      id: 6,
      title: "EICR Testing - Hedge End",
      category: "eicr",
      description: "Electrical safety inspection for rental property",
      beforeAfter: false
    },
    {
      id: 7,
      title: "Outdoor Security Lighting - Totton",
      category: "lighting",
      description: "PIR sensor security lighting installation",
      beforeAfter: false
    },
    {
      id: 8,
      title: "Home Office Electrical - Fareham",
      category: "rewiring",
      description: "Additional sockets and network points for home office",
      beforeAfter: true
    },
    {
      id: 9,
      title: "Smart EV Charger - Portsmouth",
      category: "ev-chargers",
      description: "Smart EV charging point with app control",
      beforeAfter: false
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Our <span className="text-primary">Electrical Work</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse our portfolio of completed electrical projects across Southampton 
              and surrounding areas. Quality workmanship you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className="transition-smooth"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-card hover:shadow-hero transition-smooth group">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-2">⚡</div>
                    <div className="text-sm">Project Photo</div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                      {item.title}
                    </h3>
                    {item.beforeAfter && (
                      <Badge variant="secondary" className="text-xs">
                        Before/After
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found for this category. Check back soon for more examples!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">Professional Photography</h2>
            <p className="text-muted-foreground">
              We document our work to showcase the quality and attention to detail 
              that goes into every electrical installation. All photos shown with 
              customer permission.
            </p>
            <p className="text-sm text-muted-foreground">
              * Some project photos are still being processed. Gallery updated regularly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready for Your Electrical Project?
            </h2>
            <p className="text-xl opacity-90">
              Join our portfolio of satisfied customers. Get your free quote 
              for professional electrical work in Southampton and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a href="tel:07739794313">Call 07739 794313</a>
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

export default Gallery;