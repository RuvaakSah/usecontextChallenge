import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';
import Button from '../components/Button';
import { useTheme } from '../themes/ThemeContext';

export default function RoutesApp() {
  const { theme } = useTheme();

  return (
    <Router>
      {/* Envolvemos todo en un div/section que cambie de clase según el contexto */}
      <div className={`App ${theme}`} style={{ minHeight: '100vh' }}>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/profile"> Profile</Link> | 
          <Link to="/myjob"> MyJob</Link>
          <Button /> {/* El botón aparece en todas las páginas porque está en el Nav */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myjob" element={<MyJob />} />
        </Routes>
      </div>
    </Router>
  );
}