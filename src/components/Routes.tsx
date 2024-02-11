import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/containers/Home';
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
              <Route path="/" element={<Home />} />
            </Routes>
          </NavBar>
        }
      />
    </Routes>
  );
};
