import { useState, useEffect, useCallback } from 'react';
import { Brand } from '../types';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedBrand = localStorage.getItem('selectedBrand');
    
    setIsDark(savedTheme === 'dark');
    if (savedBrand) {
      setSelectedBrand(JSON.parse(savedBrand));
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  }, [isDark]);

  const selectBrand = useCallback((brand: Brand) => {
    setSelectedBrand(brand);
    localStorage.setItem('selectedBrand', JSON.stringify(brand));
  }, []);

  return {
    isDark,
    selectedBrand,
    toggleTheme,
    selectBrand
  };
};