import { Target, TrendingUp, Settings, Compass } from 'lucide-react';
import { siteContent } from '../../content/siteContent';
import { SectionHeader } from '../SectionHeader';

const iconMap = {
  target: Target,
  chart: TrendingUp,
  settings: Settings,
  compass: Compass,
};

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section-spacing">
      <div className="container">
        <SectionHeader 
          title={siteContent.whyChooseUs.title}
          subtitle={siteContent.whyChooseUs.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {siteContent.whyChooseUs.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div 
                key={index}
                className="text-center space-y-4 p-8 rounded-lg bg-card border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
