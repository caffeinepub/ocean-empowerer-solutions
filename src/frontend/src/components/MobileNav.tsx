interface MobileNavProps {
  isOpen: boolean;
  navLinks: Array<{ label: string; id: string }>;
  onNavigate: (id: string) => void;
  activeSection: string;
}

export function MobileNav({ isOpen, navLinks, onNavigate, activeSection }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-sm">
      <nav className="container py-4 flex flex-col gap-1">
        {navLinks.map((link) => (
          <a
            key={link.id}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link.id);
            }}
            href={`#${link.id}`}
            className={`text-left px-4 py-3 text-base font-semibold rounded-md transition-all duration-200 ${
              activeSection === link.id
                ? 'text-accent bg-accent/10'
                : 'text-foreground hover:text-accent hover:bg-muted'
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
