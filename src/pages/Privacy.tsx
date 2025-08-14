import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              How AM Young Electrical Limited collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
                  <li><strong>Service Information:</strong> Details about electrical work required, property information</li>
                  <li><strong>Photos:</strong> Images you provide of electrical installations or problem areas</li>
                  <li><strong>Communication Records:</strong> Records of our conversations and correspondence</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide electrical services and respond to your enquiries</li>
                  <li>Prepare quotes and estimates for electrical work</li>
                  <li>Schedule appointments and manage our service delivery</li>
                  <li>Communicate about your electrical projects</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Improve our services and customer experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in our business operations</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with business transfers or mergers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure data transmission and storage</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments and updates</li>
                  <li>Staff training on data protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Under UK data protection law, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Website Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our website may use cookies and similar technologies to improve user experience. 
                See our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link> for detailed information.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We retain your personal information only as long as necessary for the purposes outlined in this policy, 
                or as required by law. For electrical work records, this may be up to 7 years for warranty and insurance purposes.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>AM Young Electrical Limited</strong></p>
                  <p>Email: <a href="mailto:info@amyoungelectricalltd.co.uk" className="text-primary hover:underline">info@amyoungelectricalltd.co.uk</a></p>
                  <p>Phone: <a href="tel:07739794313" className="text-primary hover:underline">07739 794313</a></p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes 
                by posting the new Privacy Policy on our website with an updated revision date.</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Questions About Our Privacy Policy?</h2>
            <p className="text-muted-foreground">
              We're committed to protecting your privacy. If you have any questions or concerns, 
              please don't hesitate to get in touch.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;