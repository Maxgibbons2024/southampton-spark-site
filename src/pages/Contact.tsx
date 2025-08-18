import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours. For urgent matters, please call us directly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Get Your Free <span className="text-primary">Electrical Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us what you need. Add a photo if helpful. We reply within 2 hours with competitive, 
              no-obligation quotes. Over 500 satisfied customers across Southampton.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                ✓ Response within 2 hours
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                ✓ No callout fee for quotes
              </Badge>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                ✓ Fixed price guarantees
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you with a competitive quote within 2 hours. 
                  No obligation, no pressure - just honest advice and fair pricing.
                </CardDescription>
                <div className="flex items-center gap-2 mt-2 text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>Over 500 quotes provided with 98% customer satisfaction</span>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        required 
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input 
                      id="postcode" 
                      name="postcode" 
                      placeholder="SO15 2AA"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5}
                      placeholder="Tell us about your electrical requirements - what work needs doing, timeframes, any specific requirements..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="photo">Upload Photos (Optional)</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <input 
                        type="file" 
                        id="photo" 
                        name="photo" 
                        accept="image/*" 
                        multiple 
                        className="hidden"
                      />
                      <Label 
                        htmlFor="photo" 
                        className="cursor-pointer text-sm text-muted-foreground hover:text-primary"
                      >
                        Click to upload photos of your electrical work area
                      </Label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full shadow-button font-semibold" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Your Quote Request..." : "Get My Free Quote Now"}
                  </Button>
                  
                  <div className="text-center space-y-2">
                    <p className="text-sm text-green-600 font-medium">
                      🔒 Your information is secure • 📞 We'll call within 2 hours • 💷 No hidden fees
                    </p>
                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy. 
                      We'll only use your details to provide your quote and never share them with third parties.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                  <CardDescription>
                    Prefer to speak directly? Give us a call or send an email.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <a 
                        href="tel:07739794313" 
                        className="text-primary hover:underline text-lg"
                      >
                        07739 794313
                      </a>
                      <div className="text-sm text-muted-foreground">
                        Available for emergencies 24/7
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <a 
                        href="mailto:info@amyoungelectricalltd.co.uk" 
                        className="text-primary hover:underline"
                      >
                        info@amyoungelectricalltd.co.uk
                      </a>
                      <div className="text-sm text-muted-foreground">
                        We respond within 24 hours
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Service Area</div>
                      <div className="text-sm text-muted-foreground">
                        Southampton, Eastleigh, Romsey, Totton, 
                        Hedge End, Winchester, Chandler's Ford, 
                        Fareham, Portsmouth & surrounding areas
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Opening Hours</div>
                      <div className="text-sm text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Emergency calls only
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-card">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <div className="font-semibold">Southampton Area</div>
                      <div className="text-sm">Covering Southampton & surrounding areas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-12 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">⚡ Electrical Emergency?</h2>
          <p className="text-lg mb-6">
            If you have an electrical emergency, don't use the form above. Call us immediately.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="tel:07739794313" className="text-lg px-8 py-6">
              Emergency Call: 07739 794313
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;