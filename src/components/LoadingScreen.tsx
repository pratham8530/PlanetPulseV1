import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowLogo(true);
          setTimeout(() => {
            onComplete();
          }, 1500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {!showLogo ? (
        <div className="relative w-96 h-2">
          <div className="absolute inset-0 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="absolute -bottom-8 left-0 text-green-400 font-mono text-lg tracking-wider">
            {String(progress).padStart(3, '0')}%
          </div>
        </div>
      ) : (
        <motion.div
          className="relative"
          initial={{ scale: 1 }}
          animate={{ scale: 20 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <span className="text-white font-bold text-2xl">P</span>
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur-xl opacity-50"
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default LoadingScreen;