import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = {
  fusion: {
    id: 'fusion',
    name: 'Prismatic Fusion',
    subtitle: 'Burgundy + Lavender + Copper (All Combined)',
    badge: 'COMBINED',
    dots: ['#ea7e3b', '#be123c', '#c084fc', '#fef08a'],
    gradient: 'from-amber-500 via-rose-600 via-purple-500 to-cyan-400',
    primary: '#ea7e3b',
    border: 'border-amber-500/40',
    bg: '#06070b'
  },
  burgundy: {
    id: 'burgundy',
    name: 'Royal Burgundy',
    subtitle: 'Theme 4: Burgundy + Champagne + White',
    badge: 'THEME 4',
    dots: ['#be123c', '#9f1239', '#fef08a', '#ffffff'],
    gradient: 'from-rose-600 via-red-700 to-amber-200',
    primary: '#be123c',
    border: 'border-rose-600/40',
    bg: '#0a0407'
  },
  lavender: {
    id: 'lavender',
    name: 'Cyber Lavender',
    subtitle: 'Theme 5: Lavender + Charcoal + Silver',
    badge: 'THEME 5',
    dots: ['#c084fc', '#a855f7', '#7e22ce', '#cbd5e1'],
    gradient: 'from-purple-400 via-violet-600 to-slate-200',
    primary: '#c084fc',
    border: 'border-purple-400/40',
    bg: '#08060f'
  },
  copper: {
    id: 'copper',
    name: 'Industrial Copper',
    subtitle: 'Theme 1: Black + Copper + Cream',
    badge: 'THEME 1',
    dots: ['#ea7e3b', '#f59e0b', '#fbbf24', '#fef3c7'],
    gradient: 'from-amber-600 via-orange-500 to-amber-200',
    primary: '#ea7e3b',
    border: 'border-amber-500/40',
    bg: '#07070a'
  }
};

const ThemeContext = createContext({
  theme: 'fusion',
  currentThemeConfig: THEMES.fusion,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('sk_mechatronics_theme');
      return (saved && THEMES[saved]) ? saved : 'fusion';
    } catch {
      return 'fusion';
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('sk_mechatronics_theme', theme);
    } catch (e) {
      console.warn('Could not save theme preference:', e);
    }
  }, [theme]);

  const currentThemeConfig = THEMES[theme] || THEMES.fusion;

  return (
    <ThemeContext.Provider value={{ theme, currentThemeConfig, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
