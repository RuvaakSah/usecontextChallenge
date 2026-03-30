import React from 'react';
import { useTheme } from '../themes/ThemeContext';

export default function Button() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-button">
      Cambiar a modo {theme === 'light' ? 'Oscuro 🌙' : 'Claro ☀️'}
    </button>
  );
}