import { Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { isValidEmail } from '../lib/isValidEmail';
import { BRAND_ASSETS } from '../lib/brandAssets';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const emailIsValid = isValidEmail(siteContent.contact.info.email);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src={BRAND_ASSETS.logoHorizontal}
                alt="OCEAN EMPOWERER SOLUTIONS" 
                className="h-10 w-auto max-w-full"
              />
            </div>
            <h3 className="font-semibold text-lg break-words">
              {siteContent.company.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteContent.company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-semibold text-base">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <a
                  key={link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.toLowerCase());
                  }}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="font-semibold text-base">Contact Information</h4>
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
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                {emailIsValid ? (
                  <a 
                    href={`mailto:${siteContent.contact.info.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
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

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear}. Built with <span className="text-primary">♥</span> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
