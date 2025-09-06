import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Heart, 
  Briefcase, 
  Calendar, 
  Video, 
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Star,
      title: "Horoscope Reading",
      description: "Complete birth chart analysis revealing your personality, strengths, and life path.",
      features: ["Birth Chart Analysis", "Personality Insights", "Life Path Guidance", "Future Predictions"],
      // price: "Starting from NPR 2,000"
    },
    {
      icon: Calendar,
      title: "Kundali Analysis", 
      description: "Detailed Kundali matching and analysis for life decisions and compatibility.",
      features: ["Complete Kundali Preparation", "Dosh Analysis", "Remedy Suggestions", "Muhurat Selection"],
      // price: "Starting from NPR 3,000"
    },
    {
      icon: Heart,
      title: "Marriage Compatibility",
      description: "Comprehensive compatibility analysis for successful and harmonious relationships.",
      features: ["Guna Matching", "Manglik Analysis", "Compatibility Score", "Wedding Date Selection"],
      // price: "Starting from NPR 2,500"
    },
    {
      icon: Briefcase,
      title: "Career & Business Astrology",
      description: "Professional guidance for career choices and business success through cosmic insights.",
      features: ["Career Path Analysis", "Business Timing", "Success Periods", "Professional Growth"],
      // price: "Starting from NPR 3,500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-primary">Astrological Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your cosmic blueprint with our authentic Vedic astrology services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-cosmic transition-mystical bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-mystical">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-mystical">
                        {service.title}
                      </CardTitle>
                      {/* <Badge variant="outline" className="mt-1 text-xs">
                        {service.price}
                      </Badge> */}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-mystical"
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Consultation Options */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Choose Your Preferred Consultation Method
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Online Consultation */}
            <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-mystical">
              <CardHeader className="text-center pb-4">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Online Consultation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Available 24/7</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Video className="h-4 w-4" />
                    <span>Video/Audio Call</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Connect from anywhere in the world for authentic astrological guidance
                  </p>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Book Online Session
                </Button>
              </CardContent>
            </Card>

            {/* Offline Consultation */}
            <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-mystical">
              <CardHeader className="text-center pb-4">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Office Visit</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Jhapa, Nepal</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>By Appointment</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Personal face-to-face consultation at our office for deeper connection
                  </p>
                </div>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Schedule Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;