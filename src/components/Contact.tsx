import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  Facebook,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const handlePhoneCall = () => {
    window.open('tel:+9779814044138', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/9779814044138', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  const handleGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/LT5QmSXKzePKKfrU6', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in touch with the  <span className="text-primary">Best Jyotish Chetan Oli</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discover your cosmic blueprint? Connect with us for authentic astrological guidance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Phone */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-mystical">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Phone Number</h4>
                        <p className="text-muted-foreground mb-3">Available for calls and WhatsApp</p>
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            onClick={handlePhoneCall}
                            size="sm" 
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Call 9814044138 | 9824036543
                          </Button>
                          <Button 
                            onClick={handleWhatsApp}
                            size="sm" 
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-mystical">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Office Location</h4>
                        <p className="text-muted-foreground mb-3">Birtamode-8, Jhapa, Nepal</p>
                        <Button 
                          onClick={handleGoogleMaps}
                          size="sm" 
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          View on Maps
                          <ExternalLink className="h-3 w-3 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Consultation Hours */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-mystical">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Consultation Hours</h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>Online: Available 24/7</p>
                          <p>Office Visit: By Appointment</p>
                          <p>Response Time: Within 2-4 hours</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Google Map Embed */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Location</h3>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-mystical">
                <CardContent className="p-6">
                  <div className="overflow-hidden rounded-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14272.775458898848!2d88.01262045444935!3d26.57815360425557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5af03a9054d4d%3A0xd42be57f9517ca08!2sJyotish%20Chetan%20Oli!5e0!3m2!1sen!2snp!4v1757159483205!5m2!1sen!2snp"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location Map"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Consultation Form */}
          <div>
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-primary flex items-center justify-center">
                  <Calendar className="h-6 w-6 mr-2" />
                  Book Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Choose your preferred method to connect with Jyotish Chetan Oli for authentic astrological guidance.
                  </p>
                </div>

                {/* Quick Contact Options */}
                <div className="space-y-4">
                  <Button 
                    onClick={handlePhoneCall}
                    size="lg" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-golden transition-mystical"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    Call Now: 9814044138
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    size="lg" 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-mystical"
                  >
                    <MessageCircle className="h-5 w-5 mr-3" />
                    WhatsApp Consultation
                  </Button>
                  
                  <Button 
                    onClick={handleFacebook}
                    size="lg" 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-mystical"
                  >
                    <Facebook className="h-5 w-5 mr-3" />
                    Message on Facebook
                  </Button>
                </div>

                {/* Consultation Types */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-4">Available Consultations:</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Horoscope Reading</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Kundali Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Marriage Matching</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Career Guidance</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground border-t border-border pt-4">
                  <p>Response within 2-4 hours • Available in Nepali & Hindi</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;