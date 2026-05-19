import React, { createContext, useContext, useState } from 'react';

export type ThemeType = 'light' | 'dark';

export const COLORS = {
  light: {
    // New palette based on UI/UX specification
    background: '#F9FAFB', // Very light grey/clean white
    card: '#FFFFFF',
    border: '#E5E7EB', // Light grey
    textPrimary: '#2B2D42', // Dark blue-grey
    textSecondary: '#4B5563', // Medium grey
    textTertiary: '#9CA3AF', // Light grey
    // Primary accent colors
    primary: '#FF9F1C', // Warm yellow-orange (warmth, sunshine)
    primaryAlt: '#F4A261', // Alternative warm color
    // Status colors
    success: '#2A9D8F', // Teal green (everything is good)
    danger: '#E76F51', // Warm red-orange
    warning: '#F4A261', // Warm orange
    accent: '#3B82F6',  // Blue
    purple: '#8B5CF6',
    surface: '#F3F4F6', // Light surface
  },
  dark: {
    background: '#1C1C1E', 
    card: '#2C2C2E',
    border: '#3A3A3C',
    textPrimary: '#FFFFFF',
    textSecondary: '#8E8E93',
    textTertiary: '#71717A',
    primary: '#FF9F1C',
    primaryAlt: '#F4A261',
    success: '#2A9D8F',
    danger: '#E76F51',
    warning: '#F4A261',
    accent: '#3B82F6',
    purple: '#A78BFA',
    surface: '#3A3A3C',
  }
};

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: typeof COLORS.light;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  colors: COLORS.light,
});

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: COLORS[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
