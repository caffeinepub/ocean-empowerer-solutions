import { Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { isValidEmail } from '../lib/isValidEmail';

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
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/Gemini_Generated_Image_g6vnjig6vnjig6vn.png" 
                alt="OCEAN EMPOWERER SOLUTIONS" 
                className="h-10 w-auto max-w-full"
              />
            </div>
            <h3 className="font-display text-xl font-semibold break-words">
              {siteContent.company.name}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {siteContent.company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg font-display">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <a
                  key={link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.toLowerCase());
                  }}
                  href={`#${link.toLowerCase()}`}
                  className="text-base text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg font-display">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-base">
                <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground break-words leading-relaxed">
                  {siteContent.contact.info.address}
                </span>
              </div>
              <div className="flex items-center gap-4 text-base">
                <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground break-words">
                  {siteContent.contact.info.phone}
                </span>
              </div>
              <div className="flex items-center gap-4 text-base">
                <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
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

        <div className="mt-16 pt-8 border-t text-center text-base text-muted-foreground">
          <p>
            © {currentYear}. Built with <span className="text-primary">♥</span> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
