import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import { Star, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { reviewService, Review } from "../services/reviewService";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const reviews = await reviewService.getAll();
      setTestimonials(reviews);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      // Fallback to empty array on error
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  const averageRating = testimonials.length > 0 
    ? Number((testimonials.reduce((sum, review) => sum + review.rating, 0) / testimonials.length).toFixed(1))
    : 5.0;
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
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2 text-muted-foreground">Loading testimonials...</span>
            </div>
          ) : testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id || index} {...testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No testimonials available yet. Check back soon!
              </p>
            </div>
          )}
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