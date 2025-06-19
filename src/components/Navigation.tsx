import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Zap } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDark, onToggleTheme }) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Shop', href: '#shop' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isDark ? 'bg-gray-900/90' : 'bg-white/90'
      } backdrop-blur-lg border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Planet PULSE
              </h1>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                AI-Powered Sustainability
              </p>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;