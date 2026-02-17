import { siteContent } from '../../content/siteContent';
import { Target, TrendingUp, Settings, DollarSign } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function WhyChooseUsSection() {
  const getFeatureIcon = (index: number) => {
    const icons = [Target, TrendingUp, Settings, DollarSign];
    return icons[index % icons.length];
  };

  return (
    <section id="why-choose-us" className="section-spacing bg-muted/30">
      <div className="container">
        <SectionHeader 
          title={siteContent.whyChooseUs.title}
          subtitle={siteContent.whyChooseUs.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {siteContent.whyChooseUs.items.map((item, index) => {
            const Icon = getFeatureIcon(index);
            return (
              <div 
                key={index}
                className="card-professional p-8 text-center hover:border-accent/30 transition-all group"
              >
                <div className="icon-container w-16 h-16 mx-auto mb-6 bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
