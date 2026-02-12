import { ContactForm } from '../ContactForm';
import { siteContent } from '../../content/siteContent';
import { isValidEmail } from '../../lib/isValidEmail';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const emailIsValid = isValidEmail(siteContent.contact.info.email);

  return (
    <section id="contact" className="section-spacing bg-muted/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="section-heading break-words">
            {siteContent.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {siteContent.contact.subtitle}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-8 space-y-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm mb-1">Address</div>
                    <div className="text-sm text-muted-foreground break-words leading-relaxed">
                      {siteContent.contact.info.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm mb-1">Phone</div>
                    <div className="text-sm text-muted-foreground break-words">
                      {siteContent.contact.info.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm mb-1">Email</div>
                    {emailIsValid ? (
                      <a 
                        href={`mailto:${siteContent.contact.info.email}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
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

            <div className="p-5 rounded-lg bg-primary/5 border border-primary/10">
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
