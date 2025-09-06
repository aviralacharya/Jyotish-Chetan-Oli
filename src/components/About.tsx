import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, BookOpen } from "lucide-react";
import profileImage from "@/assets/jyotish-chetan-oli.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-mystical">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            About Our Astrologer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet <span className="gradient-golden bg-clip-text text-transparent">Jyotish Chetan Oli</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A beacon of wisdom in the celestial arts, guiding souls through the cosmic tapestry of life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={profileImage} 
                alt="Jyotish Chetan Oli - Trusted Astrologer in Jhapa" 
                className="rounded-2xl w-full max-w-md mx-auto shadow-cosmic border-4 border-primary/20"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                President, Jhapa District Nepal Jyotish Parishad
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 15 years of dedicated practice in Vedic astrology, Jyotish Chetan Oli has established 
                himself as one of Nepal's most trusted and authentic astrologers. His deep understanding of 
                ancient cosmic wisdom combined with modern insights has helped thousands find their true path.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As the President of Jhapa District Nepal Jyotish Parishad, he leads a community of astrologers 
                committed to preserving and sharing the sacred knowledge of Jyotish. His vision is to guide 
                people toward prosperity, happiness, and spiritual fulfillment through authentic astrological guidance.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">Expert</div>
                  <div className="text-sm text-muted-foreground">Vedic Astrology</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">President</div>
                  <div className="text-sm text-muted-foreground">Jyotish Parishad</div>
                </CardContent>
              </Card>
            </div>

            {/* Vision Statement */}
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  My Vision
                </h4>
                <p className="text-muted-foreground italic leading-relaxed">
                  "To illuminate the path of every soul seeking guidance, using the eternal wisdom of the stars 
                  to bring clarity, peace, and prosperity. Through authentic Jyotish practice, I strive to 
                  bridge the ancient and modern worlds, helping people understand their cosmic blueprint and 
                  live in harmony with universal energies."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;