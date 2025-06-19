import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, FileText, Leaf, Calendar, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const hoverItems = {
    Reports: {
      icon: <FileText className="w-6 h-6" />,
      preview: 'Generate comprehensive sustainability reports with AI-powered insights and automated compliance tracking.',
      color: 'from-blue-500 to-cyan-500'
    },
    Dashboards: {
      icon: <BarChart3 className="w-6 h-6" />,
      preview: 'Real-time analytics dashboards with customizable widgets and interactive data visualization.',
      color: 'from-purple-500 to-pink-500'
    },
    Emissions: {
      icon: <Leaf className="w-6 h-6" />,
      preview: 'Track and analyze carbon emissions across all operations with predictive modeling and reduction strategies.',
      color: 'from-green-500 to-emerald-500'
    },
    Events: {
      icon: <Calendar className="w-6 h-6" />,
      preview: 'Showcase successful sustainability initiatives and project outcomes with detailed case studies.',
      color: 'from-orange-500 to-red-500'
    }
  };

  return (
    <section id="home" className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${isDark ? 'bg-white/20' : 'bg-gray-400/20'} rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 3D Floating Orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Monitor your Organization's{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Pulse
              </span>
            </h1>
            
            <div className="text-2xl md:text-4xl font-medium space-y-2">
              {Object.entries(hoverItems).map(([key, item], index) => (
                <motion.span
                  key={key}
                  className={`inline-block mx-2 cursor-pointer transition-all duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  } ${hoveredItem === key ? 'scale-110' : ''}`}
                  onMouseEnter={() => setHoveredItem(key)}
                  onMouseLeave={() => setHoveredItem(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {key}
                  {index < Object.keys(hoverItems).length - 1 && '.'}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <AnimatePresence>
            {hoveredItem && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={`max-w-md mx-auto p-6 rounded-2xl backdrop-blur-lg ${
                  isDark ? 'bg-gray-800/80' : 'bg-white/80'
                } border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-2xl mb-12`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${hoverItems[hoveredItem as keyof typeof hoverItems].color} flex items-center justify-center`}>
                  {hoverItems[hoveredItem as keyof typeof hoverItems].icon}
                </div>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {hoverItems[hoveredItem as keyof typeof hoverItems].preview}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl flex items-center space-x-3 mx-auto group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Your AI Insights Console – Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;