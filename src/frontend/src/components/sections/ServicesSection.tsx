import { Briefcase, Target, Settings, TrendingUp, Users, Compass } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { siteContent } from '../../content/siteContent';

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
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="section-heading">
            {siteContent.services.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {siteContent.services.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {siteContent.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card 
                key={index}
                className="group hover:shadow-soft transition-all duration-300 border-border"
              >
                <CardHeader className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <Icon className="h-6 w-6" />
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
