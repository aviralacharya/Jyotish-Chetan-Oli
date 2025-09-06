import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import logo from "@/assets/astrology-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Jyotish Chetan Oli Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Jyotish Chetan Oli</h1>
              <p className="text-sm text-muted-foreground">Trusted Astrologer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-mystical"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-mystical"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-mystical"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-mystical"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-mystical"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>9814044138</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Jhapa, Nepal</span>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-mystical"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-mystical"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-mystical"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-foreground hover:text-primary transition-mystical"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-mystical"
              >
                Contact
              </button>
              <div className="pt-2 border-t border-border">
                <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                  <Phone className="h-4 w-4" />
                  <span>9814044138</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;