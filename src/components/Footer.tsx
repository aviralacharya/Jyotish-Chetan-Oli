import { Facebook, Phone, MapPin, Star, Mail } from "lucide-react";
import logo from "@/assets/astrology-logo.jpg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneCall = () => {
    window.open('tel:+9779814044138', '_self');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/jyotishchetanoli/', '_blank');
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="Jyotish Chetan Oli" 
                className="h-12 w-12 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">Jyotish Chetan Oli</h3>
                <p className="text-sm text-muted-foreground">Trusted Astrologer in Jhapa</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              President of Jhapa District Nepal Jyotish Parishad, offering authentic Vedic astrology 
              guidance for over 15 years. Helping thousands discover their cosmic blueprint and life path.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm text-muted-foreground ml-2">5000+ Happy Clients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <nav className="space-y-3">
              <div className="text-muted-foreground">Horoscope Reading</div>
              <div className="text-muted-foreground">Kundali Analysis</div>
              <div className="text-muted-foreground">Marriage Compatibility</div>
              <div className="text-muted-foreground">Career & Business Astrology</div>
              <div className="text-muted-foreground">Online Consultation</div>
            </nav>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <button 
                  onClick={handlePhoneCall}
                  className="text-muted-foreground hover:text-primary transition-mystical"
                >
                9814044138 | 9824036543
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Jhapa District, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">chetanoli7090@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-md-end space-x-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <button 
                onClick={handleFacebook}
                className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-mystical text-primary"
              >
                <Facebook className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Copyright © 2025 - Astrologer Jyotish Chetan Oli. All rights reserved.
          </p>
        
          <br />
           <h4>Developed by <a href="http://aviralacharya.com.np" target="_blank">Abiral Acharya | Developer, SEO Person From Nepal</a>
            </h4> 
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;