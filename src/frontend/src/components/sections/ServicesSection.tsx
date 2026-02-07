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
    <section id="services" className="section-spacing relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h2 className="section-heading">
            {siteContent.services.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {siteContent.services.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {siteContent.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card 
                key={index}
                className="group service-card"
              >
                <CardHeader className="space-y-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
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
