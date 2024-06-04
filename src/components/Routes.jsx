import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/containers/NavBar';
import './RoutesStyle.css';
import { Introduccion } from './pages/containers/Introduccion';
import { Terminos } from './pages/containers/Terminos';
import { Clausulas } from './pages/containers/Clausulas';
import { Hechos } from './pages/containers/Hechos';
import { Reglas } from './pages/containers/Reglas';
import ReglasEjercicioComponent from './pages/components/ReglasEjercicioComponent';
import ReglasCuestionarioComponent from './pages/components/ReglasCuestionarioComponent';
import { Consultas } from './pages/containers/Consultas';
import { Operadores } from './pages/containers/Operadores';
import { Listas } from './pages/containers/Listas';
import { Register } from './pages/containers/Register';
import { Negacion } from './pages/containers/Negacion';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <NavBar>
            <Routes>
              <Route path="/introduccion" element={<Introduccion />} />
              <Route path="/terminos" element={<Terminos />} />
              <Route path="/clausulas" element={<Clausulas />} />
              <Route path="/hechos" element={<Hechos />} />
              <Route path="/reglas" element={<Reglas />} />
              <Route path="/reglas_ejercicio" element={<ReglasEjercicioComponent />} />
              <Route path="/reglas_cuestionario" element={<ReglasCuestionarioComponent />} />
              <Route path="/consultas" element={<Consultas />} />
              <Route path="/operadores" element={<Operadores />} />
              <Route path="/listas" element={<Listas />} />
              <Route path="/negacion" element={<Negacion />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </NavBar>
        }
      />
    </Routes>
  );
};
