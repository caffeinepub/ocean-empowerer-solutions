import { ArrowRight, Sparkles } from 'lucide-react';
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
    <section id="home" className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Hero Background with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/generated/abc-hero-bg.dim_1600x900.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl space-y-8 sm:space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm sm:text-base font-medium text-primary">
              {siteContent.company.tagline}
            </span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight break-words leading-tight">
            {siteContent.home.hero.title}
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            {siteContent.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-6">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group w-full sm:w-auto text-base px-8 py-6 shadow-soft hover:shadow-medium"
            >
              {siteContent.home.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base px-8 py-6 border-2"
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
