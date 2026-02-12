import { siteContent } from '../../content/siteContent';
import { Users, Waves, Target } from 'lucide-react';
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

        {/* Professional World-Class Imagery */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/assets/generated/light-blue-corporate-teamwork-1.dim_1600x900.jpg"
              alt="Professional team collaboration and innovation"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="card-professional p-8 text-center hover:border-accent/30 transition-all">
            <div className="icon-container w-16 h-16 mx-auto mb-6 bg-accent/10 text-accent">
              <Waves className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cutting-edge technology and creative solutions to protect marine ecosystems.
            </p>
          </div>
          <div className="card-professional p-8 text-center hover:border-accent/30 transition-all">
            <div className="icon-container w-16 h-16 mx-auto mb-6 bg-accent/10 text-accent">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sustainability</h3>
            <p className="text-muted-foreground leading-relaxed">
              Long-term environmental stewardship and responsible resource management.
            </p>
          </div>
          <div className="card-professional p-8 text-center hover:border-accent/30 transition-all">
            <div className="icon-container w-16 h-16 mx-auto mb-6 bg-accent/10 text-accent">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Protection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Safeguarding ocean health and biodiversity for future generations.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Leadership</h3>
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
