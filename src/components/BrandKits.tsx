import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Factory, Rocket, Settings } from 'lucide-react';
import { Brand } from '../types';

interface BrandKitsProps {
  brands: Brand[];
  selectedBrand: Brand | null;
  onSelectBrand: (brand: Brand) => void;
  isDark: boolean;
}

const BrandKits: React.FC<BrandKitsProps> = ({ brands, selectedBrand, onSelectBrand, isDark }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-8 h-8" />;
      case 'Factory': return <Factory className="w-8 h-8" />;
      case 'Rocket': return <Rocket className="w-8 h-8" />;
      default: return <Zap className="w-8 h-8" />;
    }
  };

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Universe
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Switch between different organizational contexts and see your data transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative cursor-pointer group ${
                selectedBrand?.id === brand.id ? 'scale-105' : ''
              }`}
              onClick={() => onSelectBrand(brand)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`p-8 rounded-2xl backdrop-blur-lg transition-all duration-300 ${
                  selectedBrand?.id === brand.id
                    ? `bg-${brand.color}-500/20 border-2 border-${brand.color}-500 shadow-2xl`
                    : isDark
                    ? 'bg-gray-700/50 border border-gray-600 hover:bg-gray-700/70'
                    : 'bg-white/80 border border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center bg-${brand.color}-500 text-white shadow-lg`}
                  >
                    {getIcon(brand.icon)}
                  </div>
                  <motion.button
                    className={`p-2 rounded-lg transition-colors ${
                      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                    }`}
                    whileHover={{ rotate: 90 }}
                  >
                    <Settings className="w-5 h-5" />
                  </motion.button>
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {brand.name}
                </h3>
                <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {brand.tagline}
                </p>

                {selectedBrand?.id === brand.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>
                )}

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandKits;