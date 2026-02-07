import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ContactSection } from './components/sections/ContactSection';
import { SeoStructuredData } from './components/SeoStructuredData';
import { useRuntimeSeo } from './hooks/useRuntimeSeo';
import { AppErrorBoundary } from './components/AppErrorBoundary';

function App() {
  useRuntimeSeo();

  return (
    <AppErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <SeoStructuredData />
        <SiteHeader />
        <main className="flex-1">
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </AppErrorBoundary>
  );
}

export default App;
