import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { MobileNav } from './MobileNav';
import { siteContent } from '../content/siteContent';
import { useActiveSection } from '../hooks/useActiveSection';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 sm:h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img 
            src="/assets/Gemini_Generated_Image_g6vnjig6vnjig6vn.png" 
            alt="OCEAN EMPOWERER SOLUTIONS" 
            className="h-8 sm:h-10 w-auto flex-shrink-0"
          />
          <span className="hidden sm:inline-block font-display text-base sm:text-xl font-semibold truncate">
            {siteContent.company.name}
          </span>
        </div>

        {/* Desktop Navigation - Right Aligned */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              href={`#${link.id}`}
              className={`nav-link text-base lg:text-lg font-medium transition-all duration-200 whitespace-nowrap relative ${
                activeSection === link.id
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
              <span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={mobileMenuOpen} 
        navLinks={navLinks}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />
    </header>
  );
}
