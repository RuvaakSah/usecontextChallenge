import React, { createContext, useState, useContext } from 'react';

// 1. Creamos el contexto
const ThemeContext = createContext();

// 2. Creamos el proveedor
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el tema fácilmente
export const useTheme = () => useContext(ThemeContext);