import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Freya W.",
      location: "Southampton",
      rating: 5,
      text: "Professional, on time, and very happy with the work done. Ash explained everything clearly and left the area spotless.",
      service: "Consumer Unit Upgrade"
    },
    {
      name: "Nin Nin",
      location: "Eastleigh", 
      rating: 5,
      text: "Quick, reliable, and great price. Highly recommended. The EICR was completed efficiently and the report was very detailed.",
      service: "EICR Testing"
    },
    {
      name: "Stuart G.",
      location: "Romsey",
      rating: 5,
      text: "Listens to the customer, makes suggestions, and gets the job done at a fair price. Really pleased with the LED lighting installation.",
      service: "LED Lighting Installation"
    },
    {
      name: "Charlotte B.",
      location: "Totton",
      rating: 5,
      text: "Responsive, fast and efficient at sorting our fuse box, which wasn't safe. Ash came out the same day and fixed everything properly.",
      service: "Emergency Repair"
    },
    {
      name: "Helen S.",
      location: "Winchester",
      rating: 5,
      text: "Excellent service, very tidy installation, professional and great value. The EV charger installation was completed perfectly.",
      service: "EV Charger Installation"
    },
    {
      name: "Margaret H.",
      location: "Hedge End",
      rating: 5,
      text: "Great communication, very reasonable price, tidy work. Would definitely use AM Young Electrical again for future electrical work.",
      service: "Additional Sockets"
    },
    {
      name: "David L.",
      location: "Southampton",
      rating: 5,
      text: "Fantastic electrician. Ash rewired our kitchen extension and the work was completed to a very high standard. Highly recommended.",
      service: "Partial Rewiring"
    },
    {
      name: "Sarah M.",
      location: "Chandler's Ford",
      rating: 5,
      text: "Very professional service. The fault finding was quick and the repair was done efficiently. Great value for money.",
      service: "Fault Finding"
    },
    {
      name: "James R.",
      location: "Fareham",
      rating: 5,
      text: "Ash installed outdoor lighting for us and did an excellent job. Clean, tidy work and very competitive pricing.",
      service: "Outdoor Lighting"
    },
    {
      name: "Linda K.",
      location: "Portsmouth",
      rating: 5,
      text: "Reliable and trustworthy electrician. The consumer unit upgrade was completed quickly with minimal disruption to our daily routine.",
      service: "Consumer Unit Upgrade"
    },
    {
      name: "Michael T.",
      location: "Southampton",
      rating: 5,
      text: "Excellent work on our complete house rewire. Ash kept everything tidy and was very respectful of our home. Top quality work.",
      service: "Complete Rewiring"
    },
    {
      name: "Emma J.",
      location: "Eastleigh",
      rating: 5,
      text: "Great service for our rental property EICR. Quick turnaround and very thorough inspection. Perfect for landlord requirements.",
      service: "EICR Testing"
    }
  ];

  const averageRating = 5.0;
  const totalReviews = testimonials.length;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Customer <span className="text-primary">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See what our satisfied customers across Southampton and surrounding areas 
              have to say about our electrical services.
            </p>
            
            {/* Rating Summary */}
            <div className="flex items-center justify-center space-x-4 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-2xl font-bold">{averageRating}</div>
              <div className="text-muted-foreground">
                Based on {totalReviews} reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Customers Choose AM Young Electrical
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-lg font-semibold">Customer Satisfaction</div>
                <div className="text-muted-foreground">
                  Every customer rates our service 5 stars
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-lg font-semibold">Happy Customers</div>
                <div className="text-muted-foreground">
                  Serving Southampton area for over 5 years
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">24hr</div>
                <div className="text-lg font-semibold">Response Time</div>
                <div className="text-muted-foreground">
                  Fast quotes and emergency call-outs
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
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-xl opacity-90">
              Get your free, no-obligation quote today. Experience the quality service 
              that has earned us 5-star reviews across Southampton.
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

export default Testimonials;