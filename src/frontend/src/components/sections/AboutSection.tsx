import { siteContent } from '../../content/siteContent';
import { Users, Waves, Target } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-muted/20">
      <div className="container">
        <SectionHeader 
          title={siteContent.about.title}
          subtitle={siteContent.about.subtitle}
        />

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {siteContent.about.content.map((paragraph, index) => (
            <p 
              key={index}
              className="text-base md:text-lg text-muted-foreground leading-relaxed text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-20 max-w-5xl mx-auto">
          <div className="text-center space-y-3 p-8 rounded-xl bg-card border border-border shadow-xs hover:shadow-soft transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-3 mx-auto">
              <Waves className="w-7 h-7 text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">Ocean First</div>
            <div className="text-sm text-muted-foreground font-medium">Our Core Value</div>
          </div>
          <div className="text-center space-y-3 p-8 rounded-xl bg-card border border-border shadow-xs hover:shadow-soft transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-3 mx-auto">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">Global Impact</div>
            <div className="text-sm text-muted-foreground font-medium">Worldwide Reach</div>
          </div>
          <div className="text-center space-y-3 p-8 rounded-xl bg-card border border-border shadow-xs hover:shadow-soft transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 mb-3 mx-auto">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">Sustainable</div>
            <div className="text-sm text-muted-foreground font-medium">Long-term Solutions</div>
          </div>
        </div>

        {siteContent.about.partners && siteContent.about.partners.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                Our Leadership
              </h3>
              <p className="text-base text-muted-foreground">
                Experienced professionals dedicated to ocean conservation
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {siteContent.about.partners.map((partner, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border p-8 text-center space-y-3 shadow-xs hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 mx-auto">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">
                    {partner.credentials}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
