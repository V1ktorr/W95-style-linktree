import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme.config';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = {
    ...(isDarkMode ? darkTheme : lightTheme),
    isDarkMode
  };

  useEffect(() => {
    // Kontrola uloženého nastavení
    const savedTheme = localStorage.getItem('win95Theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Výchozí nastavení podle preferencí systému
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
    
    // Přidání funkce do window objektu pro přístup z konzole
    window.toggleWin95DarkMode = () => {
      setIsDarkMode(prevMode => {
        const newMode = !prevMode;
        localStorage.setItem('win95Theme', newMode ? 'dark' : 'light');
        return newMode;
      });
    };
    
    // Přidání funkce pro nastavení konkrétního režimu
    window.setWin95Theme = (mode) => {
      if (mode === 'dark' || mode === 'light') {
        setIsDarkMode(mode === 'dark');
        localStorage.setItem('win95Theme', mode);
        console.log(`Windows 95 theme set to ${mode} mode`);
      } else {
        console.error('Invalid theme mode. Use "dark" or "light"');
      }
    };
  }, []);

  useEffect(() => {
    // Aktualizace třídy body při změně režimu
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode: () => window.toggleWin95DarkMode() }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}; 