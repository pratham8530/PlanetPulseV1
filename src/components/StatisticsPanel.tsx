import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { StatPanel } from '../types';

interface StatisticsPanelProps {
  stats: StatPanel[];
  isDark: boolean;
  brandColor: string;
}

const StatisticsPanel: React.FC<StatisticsPanelProps> = ({ stats, isDark, brandColor }) => {
  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Your Pulse Over Time
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Track progress and measure impact across key sustainability metrics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {stat.title}
                </h3>
                <div className={`p-2 rounded-lg ${
                  stat.trend === 'positive' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {stat.trend === 'positive' ? (
                    <TrendingDown className="w-5 h-5 text-green-600" />
                  ) : (
                    <TrendingUp className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </div>

              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-baseline space-x-2"
                >
                  <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value.toLocaleString()}
                  </span>
                  <span className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.unit}
                  </span>
                </motion.div>

                <div className="flex items-center space-x-2 mt-2">
                  <span className={`text-sm font-medium ${
                    stat.trend === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change > 0 ? '+' : ''}{stat.change}%
                  </span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    vs previous period
                  </span>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-20 flex items-end space-x-1">
                {stat.data.map((value, i) => {
                  const maxValue = Math.max(...stat.data);
                  const height = (value / maxValue) * 100;
                  
                  return (
                    <motion.div
                      key={i}
                      className={`flex-1 bg-gradient-to-t ${
                        i === stat.data.length - 1
                          ? `from-${brandColor}-500 to-${brandColor}-400`
                          : isDark
                          ? 'from-gray-600 to-gray-500'
                          : 'from-gray-300 to-gray-200'
                      } rounded-t`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    />
                  );
                })}
              </div>

              <div className="flex justify-between text-xs mt-2">
                <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>2019</span>
                <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>2022</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsPanel;