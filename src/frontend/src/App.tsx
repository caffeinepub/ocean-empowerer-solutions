import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { SeoStructuredData } from './components/SeoStructuredData';
import { useRuntimeSeo } from './hooks/useRuntimeSeo';
import { AppErrorBoundary } from './components/AppErrorBoundary';

function App() {
  useRuntimeSeo();

  return (
    <AppErrorBoundary>
      <div className="min-h-screen flex flex-col bg-background">
        <SeoStructuredData />
        <SiteHeader />
        <main className="flex-1">
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </AppErrorBoundary>
  );
}

export default App;
