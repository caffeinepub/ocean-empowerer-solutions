import { Briefcase, Target, Settings, TrendingUp, Users, Compass } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { siteContent } from '../../content/siteContent';
import { SectionHeader } from '../SectionHeader';

const iconMap = {
  briefcase: Briefcase,
  target: Target,
  settings: Settings,
  chart: TrendingUp,
  users: Users,
  compass: Compass,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-spacing">
      <div className="container">
        <SectionHeader 
          title={siteContent.services.title}
          subtitle={siteContent.services.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {siteContent.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card 
                key={index}
                className="group hover:shadow-soft hover:border-primary/30 transition-all duration-300 border-border shadow-xs"
              >
                <CardHeader className="space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
