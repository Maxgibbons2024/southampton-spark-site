import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Terms and conditions for electrical services provided by AM Young Electrical Limited.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle>1. About These Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>These Terms of Service govern the provision of electrical services by AM Young Electrical Limited 
                ("we", "us", "our") to our customers ("you", "your").</p>
                <p>By engaging our services, you agree to be bound by these terms and conditions.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Our Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We provide electrical installation, testing, and repair services including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Electrical Installation Condition Reports (EICR)</li>
                  <li>House rewiring and electrical upgrades</li>
                  <li>Consumer unit installation and upgrades</li>
                  <li>EV charger installation</li>
                  <li>LED lighting installation</li>
                  <li>Electrical fault finding and repair</li>
                  <li>Emergency electrical services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Quotes and Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Quotes are provided free of charge and are valid for 30 days unless otherwise stated</li>
                  <li>Prices may vary based on site conditions discovered during work</li>
                  <li>Additional work outside the original scope requires separate agreement</li>
                  <li>Emergency call-out charges apply for urgent work outside normal hours</li>
                  <li>Payment terms are net 30 days unless otherwise agreed</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Customer Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>As our customer, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate information about the electrical work required</li>
                  <li>Ensure safe access to all work areas</li>
                  <li>Inform us of any known hazards or special conditions</li>
                  <li>Obtain any necessary permissions from landlords or property managers</li>
                  <li>Make payment according to agreed terms</li>
                  <li>Test electrical installations regularly as recommended</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Our Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We commit to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Carry out work in accordance with current electrical regulations</li>
                  <li>Use qualified and competent electricians</li>
                  <li>Maintain appropriate insurance coverage</li>
                  <li>Provide certificates for all notifiable electrical work</li>
                  <li>Complete work in a professional and timely manner</li>
                  <li>Clean up work areas upon completion</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Warranties and Guarantees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We guarantee our workmanship for 12 months from completion</li>
                  <li>Electrical components carry manufacturer warranties</li>
                  <li>Warranties are void if work is modified by unauthorized persons</li>
                  <li>Emergency repairs carry a 30-day guarantee</li>
                  <li>EICR certificates are valid for 5 years (domestic) or 1 year (commercial)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Liability and Insurance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We carry public liability insurance of £2 million</li>
                  <li>Our liability is limited to the value of work performed</li>
                  <li>We are not liable for pre-existing electrical faults not related to our work</li>
                  <li>Claims must be reported within 7 days of discovery</li>
                  <li>Consequential or indirect losses are excluded</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Health and Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We follow all relevant health and safety regulations</li>
                  <li>Work may be suspended if unsafe conditions are discovered</li>
                  <li>Customer premises must be made safe for our operatives</li>
                  <li>We reserve the right to refuse unsafe work</li>
                  <li>All electrical work complies with BS 7671 wiring regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Appointments can be cancelled with 24 hours notice</li>
                  <li>Short notice cancellations may incur a call-out charge</li>
                  <li>Work in progress can be cancelled with payment for work completed</li>
                  <li>Materials ordered specifically for your project may be chargeable</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Disputes and Complaints</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>If you have a complaint:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact us directly to discuss the issue</li>
                  <li>We aim to resolve complaints within 7 working days</li>
                  <li>Unresolved disputes may be referred to alternative dispute resolution</li>
                  <li>These terms are governed by English law</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p><strong>AM Young Electrical Limited</strong></p>
                  <p>Email: <a href="mailto:info@amyoungelectricalltd.co.uk" className="text-primary hover:underline">info@amyoungelectricalltd.co.uk</a></p>
                  <p>Phone: <a href="tel:07739794313" className="text-primary hover:underline">07739 794313</a></p>
                  <p>Service Area: Southampton and surrounding areas</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Contact us today for professional electrical services you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:07739794313">Call 07739 794313</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;