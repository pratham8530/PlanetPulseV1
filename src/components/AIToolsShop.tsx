import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Zap, FileText, BarChart3, Brain } from 'lucide-react';
import { AITool } from '../types';

interface AIToolsShopProps {
  tools: AITool[];
  isDark: boolean;
}

const AIToolsShop: React.FC<AIToolsShopProps> = ({ tools, isDark }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Templates': return <FileText className="w-6 h-6" />;
      case 'Automation': return <Brain className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Analytics': return 'from-blue-500 to-cyan-500';
      case 'Templates': return 'from-purple-500 to-pink-500';
      case 'Automation': return 'from-green-500 to-emerald-500';
      default: return 'from-orange-500 to-red-500';
    }
  };

  return (
    <section id="shop" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Upgrade Your Console
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Enhance your AI capabilities with premium tools and templates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl ${
                isDark ? 'bg-gray-700' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {tool.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Popular</span>
                </div>
              )}

              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${getCategoryColor(tool.category)} flex items-center justify-center text-white shadow-lg`}>
                {getCategoryIcon(tool.category)}
              </div>

              <div className="text-center mb-4">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {tool.name}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  {tool.description}
                </p>
                <div className="text-3xl font-bold mb-4">
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                    ${tool.price}
                  </span>
                  <span className={`text-sm font-normal ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    /month
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {tool.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl flex items-center justify-center space-x-2 group-hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </motion.button>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            Need something custom? Our AI team can build personalized solutions for your organization.
          </p>
          <motion.button
            className={`px-8 py-3 rounded-full border-2 ${
              isDark 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                : 'border-gray-300 text-gray-600 hover:border-gray-400'
            } transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Custom Solution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIToolsShop;