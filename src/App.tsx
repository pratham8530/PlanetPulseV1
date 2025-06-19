import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BrandKits from './components/BrandKits';
import EmissionsDashboard from './components/EmissionsDashboard';
import ShowcaseSection from './components/ShowcaseSection';
import StatisticsPanel from './components/StatisticsPanel';
import AIToolsShop from './components/AIToolsShop';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { brands, emissionData, showcaseProjects, statPanels, aiTools, testimonials } from './data/mockData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, selectedBrand, toggleTheme, selectBrand } = useTheme();

  useEffect(() => {
    // Set default brand if none selected
    if (!selectedBrand && brands.length > 0) {
      selectBrand(brands[2]); // Default to "The Agency"
    }
  }, [selectedBrand, selectBrand]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Theme-aware styling
  useEffect(() => {
    document.documentElement.className = isDark ? 'dark' : '';
  }, [isDark]);

  const brandColor = selectedBrand?.color || 'blue';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navigation isDark={isDark} onToggleTheme={toggleTheme} />
          
          <main>
            <HeroSection isDark={isDark} />
            
            <BrandKits
              brands={brands}
              selectedBrand={selectedBrand}
              onSelectBrand={selectBrand}
              isDark={isDark}
            />
            
            <EmissionsDashboard
              data={emissionData}
              isDark={isDark}
              brandColor={brandColor}
            />
            
            <ShowcaseSection
              projects={showcaseProjects}
              isDark={isDark}
            />
            
            <StatisticsPanel
              stats={statPanels}
              isDark={isDark}
              brandColor={brandColor}
            />
            
            <AIToolsShop
              tools={aiTools}
              isDark={isDark}
            />
            
            <TestimonialsSection
              testimonials={testimonials}
              isDark={isDark}
            />
          </main>

          <Footer isDark={isDark} />
        </motion.div>
      )}
    </div>
  );
}

export default App;