import { ContactForm } from '../ContactForm';
import { siteContent } from '../../content/siteContent';
import { isValidEmail } from '../../lib/isValidEmail';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export function ContactSection() {
  const emailIsValid = isValidEmail(siteContent.contact.info.email);

  return (
    <section id="contact" className="section-spacing bg-muted/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h2 className="section-heading break-words">
            {siteContent.contact.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {siteContent.contact.subtitle}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl border p-8 space-y-6 shadow-soft">
              <h3 className="text-2xl md:text-3xl font-semibold font-display mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-lg mb-2">Address</div>
                    <div className="text-base text-muted-foreground break-words leading-relaxed">
                      {siteContent.contact.info.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-lg mb-2">Phone</div>
                    <div className="text-base text-muted-foreground break-words">
                      {siteContent.contact.info.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-lg mb-2">Email</div>
                    {emailIsValid ? (
                      <a 
                        href={`mailto:${siteContent.contact.info.email}`}
                        className="text-base text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        {siteContent.contact.info.email}
                      </a>
                    ) : (
                      <div className="text-base text-muted-foreground break-all">
                        {siteContent.contact.info.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-base text-muted-foreground leading-relaxed">
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
