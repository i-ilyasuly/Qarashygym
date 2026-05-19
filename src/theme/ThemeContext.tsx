import React, { createContext, useContext, useState } from 'react';

export type ThemeType = 'light' | 'dark';

export const COLORS = {
  light: {
    background: '#F8FAFC', // slate-50
    card: '#FFFFFF',
    border: '#E2E8F0', // slate-200
    textPrimary: '#0F172A', // slate-900
    textSecondary: '#475569', // slate-600
    textTertiary: '#94A3B8', // slate-400
    success: '#10B981', // Green
    danger: '#EF4444',  // Red
    warning: '#F59E0B', // Yellow
    accent: '#3B82F6',  // Blue
    purple: '#8B5CF6',
    surface: '#F1F5F9', // slate-100
  },
  dark: {
    background: '#1C1C1E', 
    card: '#2C2C2E',
    border: '#3A3A3C',
    textPrimary: '#FFFFFF',
    textSecondary: '#8E8E93',
    textTertiary: '#71717A',
    success: '#10B981',
    danger: '#EF4444',
    warning: '#F59E0B',
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
