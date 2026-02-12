import { Card, CardContent } from '../ui/card';
import { siteContent } from '../../content/siteContent';
import { Quote } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-spacing bg-muted/30">
      <div className="container">
        <SectionHeader 
          title={siteContent.testimonials.title}
          subtitle={siteContent.testimonials.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-md transition-all duration-300 border-border shadow-sm"
            >
              <CardContent className="pt-6 space-y-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary">
                  <Quote className="w-7 h-7" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-semibold">
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
