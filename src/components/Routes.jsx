import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/containers/NavBar';
import './RoutesStyle.css';
import { Introduccion } from './pages/containers/Introduccion';
import { Terminos } from './pages/containers/Terminos';
import { Clausulas } from './pages/containers/Clausulas';
import { Hechos } from './pages/containers/Hechos';
import { Reglas } from './pages/containers/Reglas';
import TerminosEjercicioComponent from './pages/components/ReglasEjercicioComponent';
import TerminosCuestionarioComponent from './pages/components/TerminosCuestionarioComponent';
import IntroduccionCuestionarioComponent from './pages/components/IntroduccionCuestionarioComponent';
import ClausulasEjercicioComponent from './pages/components/ClausulasEjercicioComponent';
import ClausulasCuestionarioComponent from './pages/components/ClausulasCuestionarioComponent';
import HechosEjercicioComponent from './pages/components/HechosEjercicioComponent';
import HechosCuestionarioComponent from './pages/components/HechosCuestionarioComponent';
import ReglasEjercicioComponent from './pages/components/ReglasEjercicioComponent';
import ReglasCuestionarioComponent from './pages/components/ReglasCuestionarioComponent';
import ConsultasEjercicioComponent from './pages/components/ConsultasEjercicioComponent';
import ConsultasCuestionarioComponent from './pages/components/ConsultasCuestionarioComponent';
import OperadoresEjercicioComponent from './pages/components/ReglasEjercicioComponent';
import OperadoresCuestionarioComponent from './pages/components/OperadoresCuestionarioComponent';
import ListasEjercicioComponent from './pages/components/ReglasEjercicioComponent';
import ListasCuestionarioComponent from './pages/components/ListasCuestionarioComponent';
import NegacionEjercicioComponent from './pages/components/NegacionEjercicioComponent';
import NegacionCuestionarioComponent from './pages/components/NegacionCuestionarioComponent';
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
              <Route path="/introduccion_cuestionario" element={<IntroduccionCuestionarioComponent />} />
              <Route path="/terminos" element={<Terminos />} />
              <Route path="/terminos_ejercicio" element={<TerminosEjercicioComponent />} />
              <Route path="/terminos_cuestionario" element={<TerminosCuestionarioComponent />} />
              <Route path="/clausulas" element={<Clausulas />} />
              <Route path="/clausulas_ejercicio" element={<ClausulasEjercicioComponent />} />
              <Route path="/clausulas_cuestionario" element={<ClausulasCuestionarioComponent />} />
              <Route path="/hechos" element={<Hechos />} />
              <Route path="/hechos_ejercicio" element={<HechosEjercicioComponent />} />
              <Route path="/hechos_cuestionario" element={<HechosCuestionarioComponent />} />
              <Route path="/reglas" element={<Reglas />} />
              <Route path="/reglas_ejercicio" element={<ReglasEjercicioComponent />} />
              <Route path="/reglas_cuestionario" element={<ReglasCuestionarioComponent />} />
              <Route path="/consultas" element={<Consultas />} />
              <Route path="/consultas_ejercicio" element={<ConsultasEjercicioComponent />} />
              <Route path="/consultas_cuestionario" element={<ConsultasCuestionarioComponent />} />
              <Route path="/operadores" element={<Operadores />} />
              <Route path="/operadores_ejercicio" element={<OperadoresEjercicioComponent />} />
              <Route path="/operadores_cuestionario" element={<OperadoresCuestionarioComponent />} />
              <Route path="/listas" element={<Listas />} />
              <Route path="/listas_ejercicio" element={<ListasEjercicioComponent />} />
              <Route path="/listas_cuestionario" element={<ListasCuestionarioComponent />} />
              <Route path="/negacion" element={<Negacion />} />
              <Route path="/negacion_ejercicio" element={<NegacionEjercicioComponent />} />
              <Route path="/negacion_cuestionario" element={<NegacionCuestionarioComponent />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </NavBar>
        }
      />
    </Routes>
  );
};
