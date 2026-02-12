import { siteContent } from '../../content/siteContent';
import { Waves, Fish, Ship, Droplets } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function ProjectsSection() {
  const getProjectIcon = (index: number) => {
    const icons = [Waves, Fish, Ship, Droplets];
    return icons[index % icons.length];
  };

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      {/* Light Blue Subtle Texture Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img 
          src="/assets/generated/light-blue-section-texture-worldclass.dim_2400x1200.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <SectionHeader 
          title={siteContent.projects.title}
          subtitle={siteContent.projects.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {siteContent.projects.items.map((project, index) => {
            const Icon = getProjectIcon(index);
            return (
              <div 
                key={index}
                className="card-professional p-8 hover:border-accent/30 transition-all group"
              >
                <div className="icon-container w-16 h-16 mb-6 bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-accent">Impact:</span>
                    <p className="text-sm text-muted-foreground mt-1">{project.impact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
