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
                className="text-center space-y-4 p-6 rounded-xl bg-card border border-border shadow-xs hover:shadow-soft hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mx-auto">
                  <Icon className="w-7 h-7 text-primary" />
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
