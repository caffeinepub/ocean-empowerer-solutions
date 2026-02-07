import { siteContent } from '../../content/siteContent';
import { Users, Award, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-muted/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="section-heading">
            {siteContent.about.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {siteContent.about.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-20">
          {siteContent.about.content.map((paragraph, index) => (
            <p 
              key={index}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-24">
          <div className="stat-card">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 mx-auto">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">06 Feb 2026</div>
            <div className="text-base text-muted-foreground font-medium">Started Our Journey</div>
          </div>
          <div className="stat-card">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4 mx-auto">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">Multi-National</div>
            <div className="text-base text-muted-foreground font-medium">Project Delivery</div>
          </div>
          <div className="stat-card">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 mx-auto">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200%</div>
            <div className="text-base text-muted-foreground font-medium">Client Satisfaction Goal</div>
          </div>
        </div>

        {siteContent.about.partners && siteContent.about.partners.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our Partners
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                Led by experienced professionals committed to excellence
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {siteContent.about.partners.map((partner, index) => (
                <div 
                  key={index}
                  className="partner-card"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display text-2xl font-bold mb-3">
                    {partner.name}
                  </h4>
                  <p className="text-base text-muted-foreground font-medium">
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
