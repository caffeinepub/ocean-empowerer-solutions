import { ArrowRight, Waves, Eye, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { siteContent } from '../../content/siteContent';

export function HomeSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Ocean Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/generated/ocean-hero-bg.dim_2400x1350.jpg"
          alt="Ocean underwater scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/96 via-background/88 to-background/96" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/75 to-background/92" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-xs">
            <Waves className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {siteContent.company.tagline}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight break-words leading-tight text-balance">
            {siteContent.home.hero.title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {siteContent.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('about')}
              className="group w-full sm:w-auto text-base px-8 h-12 shadow-soft hover:shadow-medium transition-all"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base px-8 h-12 bg-background/90 backdrop-blur-sm hover:bg-background border-border/60 shadow-xs hover:shadow-soft transition-all"
              onClick={() => scrollToSection('why-choose-us')}
            >
              <Eye className="mr-2 h-5 w-5" />
              Our Vision
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto text-base px-8 h-12 shadow-xs hover:shadow-soft transition-all"
              onClick={() => scrollToSection('projects')}
            >
              <Users className="mr-2 h-5 w-5" />
              Get Involved
            </Button>
            <Button 
              size="lg" 
              variant="default"
              className="w-full sm:w-auto text-base px-8 h-12 shadow-soft hover:shadow-medium transition-all"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
