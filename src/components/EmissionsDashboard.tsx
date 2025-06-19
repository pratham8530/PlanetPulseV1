import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { EmissionData } from '../types';

interface EmissionsDashboardProps {
  data: EmissionData[];
  isDark: boolean;
  brandColor: string;
}

const EmissionsDashboard: React.FC<EmissionsDashboardProps> = ({ data, isDark, brandColor }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Refurbishment', 'New Build', 'Operations', 'Transport'];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-green-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const filteredData = selectedFilter === 'All' 
    ? data 
    : data.filter(item => item.category === selectedFilter);

  return (
    <section id="dashboard" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Planet Emission Overview
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Real-time carbon tracking with intelligent insights
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all ${
                selectedFilter === filter
                  ? `bg-${brandColor}-500 text-white shadow-lg`
                  : isDark
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span>{filter}</span>
            </motion.button>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredData.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              } shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.category}
                </h3>
                {getTrendIcon(item.trend)}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {item.value}
                    </p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.unit}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Target: {item.target}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className={`w-full h-4 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <motion.div
                      className={`h-4 rounded-full bg-gradient-to-r ${
                        item.value <= item.target
                          ? 'from-green-500 to-emerald-500'
                          : 'from-yellow-500 to-red-500'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min((item.value / item.target) * 100, 100)}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>0</span>
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{item.target}</span>
                  </div>
                </div>

                {/* Target Lines */}
                <div className="text-center">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    item.value <= item.target
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.value <= item.target ? 'On Target' : 'Above Target'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmissionsDashboard;