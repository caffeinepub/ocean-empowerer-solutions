import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { siteContent } from '../../content/siteContent';

export function HomeSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-muted/30 to-background" />

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-28">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-sm font-medium text-primary">
              {siteContent.company.tagline}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight break-words leading-tight">
            {siteContent.home.hero.title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            {siteContent.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group w-full sm:w-auto text-base px-8 h-12"
            >
              {siteContent.home.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base px-8 h-12"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
