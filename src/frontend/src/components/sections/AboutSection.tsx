import { siteContent } from '../../content/siteContent';
import { Users, HardHat, Target } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="container">
        <SectionHeader 
          title={siteContent.about.title}
          subtitle={siteContent.about.subtitle}
        />

        <div className="max-w-4xl mx-auto space-y-6 mb-20">
          {siteContent.about.content.map((paragraph, index) => (
            <p 
              key={index}
              className="text-base md:text-lg text-muted-foreground leading-relaxed text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Professional Construction Team Imagery */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/assets/generated/construction-about-team.dim_1600x900.jpg"
              alt="Professional construction team at work"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="card-professional p-8 text-center hover:border-accent/30 transition-all">
            <div className="icon-container w-16 h-16 mx-auto mb-6 bg-accent/10 text-accent">
              <HardHat className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Craftsmanship</h3>
            <p className="text-muted-foreground leading-relaxed">
              Expert workmanship and attention to detail in every project we undertake.
            </p>
          </div>
          <div className="card-professional p-8 text-center hover:border-accent/30 transition-all">
            <div className="icon-container w-16 h-16 mx-auto mb-6 bg-accent/10 text-accent">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reliable project timelines with clear communication and consistent progress.
            </p>
          </div>
          <div className="card-professional p-8 text-center hover:border-accent/30 transition-all">
            <div className="icon-container w-16 h-16 mx-auto mb-6 bg-accent/10 text-accent">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Customer Focused</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your satisfaction is our priority, from consultation to completion.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.about.partners.map((partner, index) => (
              <div 
                key={index}
                className="card-professional p-8 text-center hover:border-accent/30 transition-all"
              >
                <div className="icon-container w-20 h-20 mx-auto mb-6 bg-accent/10 text-accent rounded-full">
                  <Users className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold mb-2">{partner.name}</h4>
                <p className="text-sm font-semibold text-accent mb-3">{partner.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
