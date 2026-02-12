import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import { BrandAssetPreloader } from './components/BrandAssetPreloader';
import { useRuntimeSeo } from './hooks/useRuntimeSeo';
import { AppErrorBoundary } from './components/AppErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  useRuntimeSeo();

  return (
    <div className="min-h-screen bg-background">
      <BrandAssetPreloader />
      <SeoStructuredData />
      <SiteHeader />
      <main>
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
  );
}

export default function App() {
  return (
    <AppErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </AppErrorBoundary>
  );
}
