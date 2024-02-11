import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/containers/Home';
import { Terms } from './pages/containers/Terms';
import './RoutesStyle.css';
import { NavBar } from './NavBar/containers/NavBar';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <NavBar>
            <Routes>
              <Route path="/introduccion" element={<Home />} />
              <Route path="/terminos" element={<Terms />} />
            </Routes>
          </NavBar>
        }
      />
    </Routes>
  );
};
