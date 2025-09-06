import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

const Gallery = () => {
  // Sample gallery images - in real implementation, these would be actual photos
  const galleryItems = [
    {
      category: "Office",
      title: "Consultation Chamber",
      description: "Modern astrological consultation setup"
    },
    {
      category: "Events", 
      title: "Jyotish Parishad Meeting",
      description: "Leading astrologers gathering"
    },
    {
      category: "Client Sessions",
      title: "Kundali Analysis Session", 
      description: "Detailed horoscope reading"
    },
    {
      category: "Ceremonies",
      title: "Muhurat Ceremony",
      description: "Auspicious timing selection"
    },
    {
      category: "Office",
      title: "Astrology Library",
      description: "Ancient texts and manuscripts"
    },
    {
      category: "Events",
      title: "Astrology Workshop",
      description: "Teaching Vedic wisdom"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-mystical">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Glimpses of <span className="gradient-golden bg-clip-text text-transparent">Our Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our astrological practice, events, and client interactions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-mystical">
              <div className="relative">
                {/* Placeholder for actual images */}
                <div className="aspect-[4/3] bg-gradient-cosmic flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-mystical"></div>
                  <div className="relative z-10 text-center">
                    <Eye className="h-12 w-12 text-primary mx-auto mb-3 opacity-60" />
                    <p className="text-primary text-sm font-medium">{item.category}</p>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/80 transition-mystical flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <Badge 
                  className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs"
                >
                  {item.category}
                </Badge>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-mystical">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Note about actual images */}
        <div className="mt-12 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-primary/20 max-w-2xl mx-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Real Gallery Coming Soon</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We are currently updating our gallery with authentic photos of our office, 
                client sessions, astrology events, and Jyotish Parishad activities. 
                These will showcase the authentic practice and community engagement of Jyotish Chetan Oli.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;