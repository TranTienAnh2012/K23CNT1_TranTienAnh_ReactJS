import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const TtaThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Mặc định chế độ sáng

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div> {/* Gán class dựa vào theme */}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a TtaThemeProvider');
  }
  return context;
};
