import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { MobileNav } from './MobileNav';
import { siteContent } from '../content/siteContent';
import { useActiveSection } from '../hooks/useActiveSection';
import { BRAND_ASSETS } from '../lib/brandAssets';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const headerRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/98 backdrop-blur-sm supports-[backdrop-filter]:bg-background/95"
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <img 
            src={BRAND_ASSETS.logoHorizontal}
            alt="Ocean Empowerer Solutions" 
            className="h-9 md:h-10 w-auto flex-shrink-0 max-w-[180px] sm:max-w-[220px] md:max-w-[260px]"
          />
          <span className="hidden sm:inline-block font-bold text-base md:text-lg truncate text-foreground">
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
              className={`nav-link text-sm lg:text-base transition-colors duration-200 whitespace-nowrap ${
                activeSection === link.id
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden flex-shrink-0 hover:bg-muted"
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
