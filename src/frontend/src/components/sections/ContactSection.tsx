import { ContactForm } from '../ContactForm';
import { siteContent } from '../../content/siteContent';
import { isValidEmail } from '../../lib/isValidEmail';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function ContactSection() {
  const emailIsValid = isValidEmail(siteContent.contact.info.email);

  return (
    <section id="contact" className="section-spacing">
      <div className="container">
        <div id="get-started">
          <SectionHeader 
            title={siteContent.contact.title}
            subtitle={siteContent.contact.subtitle}
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-8 space-y-6 shadow-xs">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm mb-1 text-foreground">Address</div>
                    <div className="text-sm text-muted-foreground break-words leading-relaxed">
                      {siteContent.contact.info.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm mb-1 text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground break-words">
                      {siteContent.contact.info.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm mb-1 text-foreground">Email</div>
                    {emailIsValid ? (
                      <a 
                        href={`mailto:${siteContent.contact.info.email}`}
                        className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 break-all font-medium"
                      >
                        {siteContent.contact.info.email}
                      </a>
                    ) : (
                      <div className="text-sm text-muted-foreground break-all">
                        {siteContent.contact.info.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-accent/10 border border-accent/20 shadow-xs">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {siteContent.contact.form.note}
              </p>
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
