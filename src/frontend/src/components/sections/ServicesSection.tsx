import { siteContent } from '../../content/siteContent';
import { HardHat, Home, Wrench, Paintbrush, Grid3x3, Package } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function ServicesSection() {
  const getServiceIcon = (index: number) => {
    const icons = [HardHat, Home, Wrench, Paintbrush, Grid3x3, Package];
    return icons[index % icons.length];
  };

  return (
    <section id="services" className="section-spacing">
      <div className="container">
        <SectionHeader 
          title={siteContent.services.title}
          subtitle={siteContent.services.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {siteContent.services.items.map((service, index) => {
            const Icon = getServiceIcon(index);
            return (
              <div 
                key={index}
                className="card-professional p-8 hover:border-accent/30 transition-all group"
              >
                <div className="icon-container w-16 h-16 mb-6 bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
