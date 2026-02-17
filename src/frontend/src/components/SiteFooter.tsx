import { Mail, Phone, MapPin, Download, Heart } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { isValidEmail } from '../lib/isValidEmail';
import { BRAND_ASSETS } from '../lib/brandAssets';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const emailIsValid = isValidEmail(siteContent.contact.info.email);

  // Safely get app identifier for UTM tracking
  const getAppIdentifier = () => {
    if (typeof window !== 'undefined') {
      return encodeURIComponent(window.location.hostname || 'buildcraft-construction');
    }
    return 'buildcraft-construction';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src={BRAND_ASSETS.logoHorizontal}
                alt={siteContent.company.name} 
                className="h-10 w-auto max-w-full"
              />
            </div>
            <h3 className="font-bold text-lg break-words text-foreground">
              {siteContent.company.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteContent.company.description}
            </p>
            <div className="pt-2">
              <a
                href={BRAND_ASSETS.logoHorizontalJpg}
                download="buildcraft-construction-logo.png"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Download className="h-4 w-4" />
                Download Logo
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-base text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'Why Choose Us', id: 'why-choose-us' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <a
                  key={link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  href={`#${link.id}`}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="font-bold text-base text-foreground">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground break-words leading-relaxed">
                  {siteContent.contact.info.address}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground break-words">
                  {siteContent.contact.info.phone}
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                {emailIsValid ? (
                  <a 
                    href={`mailto:${siteContent.contact.info.email}`}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 break-all"
                  >
                    {siteContent.contact.info.email}
                  </a>
                ) : (
                  <span className="text-muted-foreground break-all">
                    {siteContent.contact.info.email}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {siteContent.company.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-accent transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
