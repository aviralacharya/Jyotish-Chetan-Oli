import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import officeImage from "@/assets/jyotish-chetan-oli.jpg";
import consultationImage from "@/assets/Jyotish Chetan Oli Consulting.jpg";
import parishadImage from "@/assets/Jyotish Chetan Oli Speech.jpg";
import sessionImage from "@/assets/Jyotish Chetan Oli Profile.jpg";
import AstrologersMeeting from "@/assets/Jyotish Chetan Oli Appreciated.jpg";
import serviceImage from "@/assets/Jyotish Chetan Oli Services.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: officeImage,
      category: "In House",
      title: "Consultation Chamber",
      description: "In house modern astrological consultation setup with traditional elements"
    },
    {
      image: parishadImage,
      category: "Events", 
      title: "Jyotish Parishad Meeting",
      description: "Leading astrologers gathering for knowledge sharing"
    },
    {
      image: consultationImage,
      category: "Client Sessions",
      title: "Kundali Analysis Session", 
      description: "Detailed horoscope reading and guidance session"
    },
    {
      image: AstrologersMeeting,
      category: "Ceremonies",
      title: "Astrologers meetup back in 2007",
      description: "Jyotish events where astrolgers were recognized"
    },
    {
      image: sessionImage,
      category: "Consultation",
      title: "Virtual Consulatation",
      description: "Jyotish Chetan Oli from Jhapa providing services virtually"
    },
    {
      image: serviceImage,
      category: "Services",
      title: "Here's the services Jyotish Chetan Oli provides",
      description: "From career guidance to love relationship and more"
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
            Glimpses of <span className="text-primary">Our Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our astrological practice, events, and client interactions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-mystical">
              <div className="relative">
                {/* Real Images */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} - ${item.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-mystical"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/80 transition-mystical flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-4">
                      <Eye className="h-8 w-8 text-primary mx-auto mb-3" />
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

        {/* Testimonial section */}
        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-primary/20 max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Authentic Astrological Practice</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years of Dedicated Service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-muted-foreground">Lives Guided Successfully</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Traditional Vedic Methods</div>
                </div>
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Each consultation is conducted with the highest level of authenticity, using time-tested 
                Vedic astrological principles. Our gallery showcases real moments from our practice, 
                reflecting the genuine dedication to helping people discover their cosmic purpose.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;