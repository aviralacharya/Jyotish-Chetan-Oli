import { Button } from "@/components/ui/button";
import { Star, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/astrology-hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 47, 84, 0.85), rgba(34, 47, 84, 0.85)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-primary/20">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">President of Jhapa District, Nepal Jyotish Parishad</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Astrologer <span className="text-primary">Jyotish Chetan Oli</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Trusted Astrologer in Jhapa
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Guiding lives through ancient wisdom and cosmic insights. Experience authentic Vedic astrology 
            with Nepal's most trusted astrologer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-golden glow-golden transition-mystical px-8 py-4 text-lg font-semibold"
              onClick={scrollToContact}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Online Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-mystical px-8 py-4 text-lg font-semibold"
              onClick={scrollToContact}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Our Office
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Authentic Guidance</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-starlight rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-primary rounded-full animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default Hero;