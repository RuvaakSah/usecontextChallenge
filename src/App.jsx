import React from 'react';
import { ThemeProvider } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <RoutesApp />
    </ThemeProvider>
  );
}

export default App;
