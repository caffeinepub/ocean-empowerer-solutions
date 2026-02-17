import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { SignInScreen } from './components/screens/SignInScreen';
import { SeoStructuredData } from './components/SeoStructuredData';
import { BrandAssetPreloader } from './components/BrandAssetPreloader';
import { useRuntimeSeo } from './hooks/useRuntimeSeo';
import { AppErrorBoundary } from './components/AppErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function AppContent() {
  const [currentView, setCurrentView] = useState<'main' | 'signin'>('main');

  useRuntimeSeo();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'signin') {
        setCurrentView('signin');
      } else {
        setCurrentView('main');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentView === 'signin') {
    return <SignInScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
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
      <SeoStructuredData />
      <BrandAssetPreloader />
    </div>
  );
}

export default function App() {
  return (
    <AppErrorBoundary>
      <InternetIdentityProvider>
        <QueryClientProvider client={queryClient}>
          <AppContent />
        </QueryClientProvider>
      </InternetIdentityProvider>
    </AppErrorBoundary>
  );
}
