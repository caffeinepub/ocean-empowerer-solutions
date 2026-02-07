interface MobileNavProps {
  isOpen: boolean;
  navLinks: Array<{ label: string; id: string }>;
  onNavigate: (id: string) => void;
  activeSection: string;
}

export function MobileNav({ isOpen, navLinks, onNavigate, activeSection }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t bg-background">
      <nav className="container py-4 flex flex-col gap-2">
        {navLinks.map((link) => (
          <a
            key={link.id}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link.id);
            }}
            href={`#${link.id}`}
            className={`text-left px-4 py-3 text-base font-medium rounded-md transition-all ${
              activeSection === link.id
                ? 'text-primary bg-primary/10 border-l-2 border-primary'
                : 'text-foreground/70 hover:text-foreground hover:bg-accent/50'
            }`}
            aria-current={activeSection === link.id ? 'page' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
