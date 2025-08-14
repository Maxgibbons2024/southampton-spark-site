import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Cookie <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              How AM Young Electrical Limited uses cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and improving website functionality.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We use cookies for several purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Analytical Cookies:</strong> Help us improve our website and services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground mb-2">These cookies are necessary for our website to function properly:</p>
                  <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                    <li>Session management and security</li>
                    <li>Contact form functionality</li>
                    <li>Cookie consent preferences</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground mb-2">Help us understand website usage (anonymized data):</p>
                  <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                    <li>Page views and visitor numbers</li>
                    <li>Time spent on pages</li>
                    <li>Navigation patterns</li>
                    <li>Device and browser information</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Functional Cookies</h4>
                  <p className="text-sm text-muted-foreground mb-2">Enhance your experience on our website:</p>
                  <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                    <li>Language preferences</li>
                    <li>Form data retention</li>
                    <li>User interface preferences</li>
                  </ul>
                </div>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We may use third-party services that set their own cookies:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                  <li><strong>Google Maps:</strong> Location and mapping services</li>
                  <li><strong>Contact Forms:</strong> Form submission and anti-spam protection</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  These third parties have their own privacy policies governing their use of cookies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>You can control and manage cookies in several ways:</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Browser Settings</h4>
                    <p className="text-sm text-muted-foreground">
                      Most browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="text-sm list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Set notifications when cookies are being sent</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Opt-Out Links</h4>
                    <ul className="text-sm list-disc list-inside space-y-1 ml-4">
                      <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
                      <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a></li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground bg-muted p-4 rounded">
                  <strong>Note:</strong> Disabling cookies may affect website functionality and your user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookie Duration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1-24 months)</li>
                  <li><strong>Analytics Cookies:</strong> Usually retained for 24 months</li>
                  <li><strong>Preference Cookies:</strong> Retained until you change your settings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We may update this Cookie Policy from time to time to reflect changes in technology, 
                legislation, or our business practices. Any updates will be posted on this page with a revised date.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>If you have questions about our use of cookies, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>AM Young Electrical Limited</strong></p>
                  <p>Email: <a href="mailto:info@amyoungelectricalltd.co.uk" className="text-primary hover:underline">info@amyoungelectricalltd.co.uk</a></p>
                  <p>Phone: <a href="tel:07739794313" className="text-primary hover:underline">07739 794313</a></p>
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
            <h2 className="text-3xl font-bold">Questions About Cookies?</h2>
            <p className="text-muted-foreground">
              We're committed to transparency about how we use cookies and protect your privacy.
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

export default Cookies;