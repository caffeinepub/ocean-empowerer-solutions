import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../ContactForm';
import { siteContent } from '../../content/siteContent';
import { SectionHeader } from '../SectionHeader';

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing bg-muted/30">
      <div className="container">
        <SectionHeader 
          title={siteContent.contact.title}
          subtitle={siteContent.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information with Professional Imagery */}
          <div className="space-y-8">
            <div className="card-professional p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="flex items-start gap-4">
                <div className="icon-container w-12 h-12 bg-accent/10 text-accent flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href={`mailto:${siteContent.contact.info.email}`}
                    className="text-accent hover:underline transition-colors"
                  >
                    {siteContent.contact.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-container w-12 h-12 bg-accent/10 text-accent flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">{siteContent.contact.info.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-container w-12 h-12 bg-accent/10 text-accent flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-muted-foreground">{siteContent.contact.info.address}</p>
                </div>
              </div>
            </div>

            {/* Professional Supporting Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/assets/generated/light-blue-corporate-sustainability-1.dim_1600x900.jpg"
                alt="Sustainable technology and innovation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
