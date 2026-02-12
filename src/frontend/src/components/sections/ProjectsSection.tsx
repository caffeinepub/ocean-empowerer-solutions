import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { siteContent } from '../../content/siteContent';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing bg-muted/20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="/assets/generated/ocean-conservation-banner.dim_2400x1200.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <SectionHeader 
          title={siteContent.projects.title}
          subtitle={siteContent.projects.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {siteContent.projects.items.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-soft hover:border-accent/30 transition-all duration-300 border-border bg-card/98 backdrop-blur-sm shadow-xs"
            >
              <CardHeader className="space-y-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="pt-2 border-t border-border">
                  <div className="text-sm font-semibold text-accent">
                    {project.impact}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
