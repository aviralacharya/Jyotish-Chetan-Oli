import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "Best Astrologer in Jhapa | Jyotish Chetan Oli | Online Jyotish Birtamode";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Jyotish Chetan Oli - Trusted Astrologer in Jhapa, President of Nepal Jyotish Parishad. Expert in Horoscope Reading, Kundali Analysis, Marriage Compatibility. Online & Offline Consultation available.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Astrologer Jyotish Chetan Oli",
      "description": "Trusted Astrologer in Jhapa, President of Jhapa District Nepal Jyotish Parishad",
      "url": window.location.href,
      "telephone": "+977-9814044138",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jhapa",
        "addressCountry": "Nepal"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.6500",
        "longitude": "87.9000"
      },
      "areaServed": "Nepal",
      "priceRange": "$$",
      "openingHours": "Mo-Su 00:00-23:59",
      "image": window.location.origin + "/astrology-logo.jpg",
      "sameAs": [
        "https://www.facebook.com"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Astrology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Horoscope Reading",
              "description": "Complete birth chart analysis and future predictions"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Kundali Analysis",
              "description": "Detailed Kundali matching and compatibility analysis"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Marriage Compatibility",
              "description": "Comprehensive compatibility analysis for successful relationships"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Career & Business Astrology", 
              "description": "Professional guidance for career and business success"
            }
          }
        ]
      },
      "founder": {
        "@type": "Person",
        "name": "Jyotish Chetan Oli",
        "jobTitle": "President, Jhapa District Nepal Jyotish Parishad",
        "description": "Expert Vedic Astrologer with over 15 years of experience"
      }
    };

    // Add structured data to head
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Add keywords meta tag
    let keywordsTag = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.name = 'keywords';
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.content = 'Best Astrologer in Jhapa, Astrology in Nepal, Jyotish in Birtamode, Online Astrology Services Nepal, Horoscope Reading Nepal, Kundali Analysis, Marriage Compatibility, Vedic Astrology, Nepal Jyotish Parishad, Astrologer Chetan Oli';

    // Add author meta tag
    let authorTag = document.querySelector('meta[name="author"]') as HTMLMetaElement;
    if (!authorTag) {
      authorTag = document.createElement('meta');
      authorTag.name = 'author';
      document.head.appendChild(authorTag);
    }
    authorTag.content = 'Jyotish Chetan Oli';

    // Add robots meta tag
    let robotsTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.name = 'robots';
      document.head.appendChild(robotsTag);
    }
    robotsTag.content = 'index, follow';

    // Add canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = window.location.href;
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;