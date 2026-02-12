import { Card, CardContent } from '../ui/card';
import { siteContent } from '../../content/siteContent';
import { Quote } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-spacing bg-muted/20">
      <div className="container">
        <SectionHeader 
          title={siteContent.testimonials.title}
          subtitle={siteContent.testimonials.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-soft transition-all duration-300 border-border shadow-xs"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <Quote className="w-6 h-6" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {testimonial.role}
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
