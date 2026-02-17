import { ArrowRight, HardHat, Eye, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { siteContent } from '../../content/siteContent';

export function HomeSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Construction Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/generated/construction-hero-bg.dim_2400x1350.jpg"
          alt="Professional construction site"
          className="w-full h-full object-cover"
        />
        {/* Professional readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/96 via-background/88 to-background/96" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/94 via-background/80 to-background/94" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <HardHat className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              {siteContent.company.tagline}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight break-words leading-tight text-balance">
            {siteContent.home.hero.title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {siteContent.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('about')}
              className="group w-full sm:w-auto text-base px-8 h-12 shadow-sm hover:shadow-md transition-all font-semibold"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base px-8 h-12 bg-background/95 backdrop-blur-sm hover:bg-background border-border shadow-xs hover:shadow-sm transition-all font-semibold"
              onClick={() => scrollToSection('services')}
            >
              <Eye className="mr-2 h-5 w-5" />
              Our Services
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto text-base px-8 h-12 shadow-xs hover:shadow-sm transition-all font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              <Users className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="default"
              className="w-full sm:w-auto text-base px-8 h-12 shadow-sm hover:shadow-md transition-all font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
