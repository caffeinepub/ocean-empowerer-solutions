import { siteContent } from '../../content/siteContent';
import { Quote } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-spacing">
      <div className="container">
        <SectionHeader 
          title={siteContent.testimonials.title}
          subtitle={siteContent.testimonials.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <div 
              key={index}
              className="card-professional p-8 hover:border-accent/30 transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-6">
                <Quote className="h-6 w-6 text-accent" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
