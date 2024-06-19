import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './NavBar.css';
import { ReusableNavLink } from '../../elements/navLink/ReusableNavLink';

export const NavBarComponents = () => {
  const location = useLocation();

  const CheckKeys = {
    Introduccion: 'introduccion',
    Terminos: 'terminos',
    Clausulas: 'clausulas',
    Hechos: 'hechos',
    Reglas: 'reglas',
    Consultas: 'consultas',
    Operadores: 'operadores',
    Listas: 'listas',
    Negacion: 'negacion',
  };

  const checkInitialStatement = {
    [CheckKeys.Introduccion]: false,
    [CheckKeys.Terminos]: false,
    [CheckKeys.Clausulas]: false,
    [CheckKeys.Hechos]: false,
    [CheckKeys.Reglas]: false,
    [CheckKeys.Consultas]: false,
    [CheckKeys.Negacion]: false,
    [CheckKeys.Listas]: false,
    [CheckKeys.Operadores]: false,
  };

  const [checks, setChecks] = useState(checkInitialStatement);

  useEffect(() => {
    isActiveLink(location.pathname);
  }, [location]);

  const isActiveLink = (path) => {
    switch (path) {
      case '/introduccion':
        setChecks({ ...checkInitialStatement, [CheckKeys.Introduccion]: true });
        break;
      case '/terminos':
        setChecks({ ...checkInitialStatement, [CheckKeys.Terminos]: true });
        break;
      case '/clausulas':
        setChecks({ ...checkInitialStatement, [CheckKeys.Clausulas]: true });
        break;
      case '/hechos':
        setChecks({ ...checkInitialStatement, [CheckKeys.Hechos]: true });
        break;
      case '/reglas':
        setChecks({ ...checkInitialStatement, [CheckKeys.Reglas]: true });
        break;
      case '/consultas':
        setChecks({ ...checkInitialStatement, [CheckKeys.Consultas]: true });
        break;
      case '/operadores':
        setChecks({ ...checkInitialStatement, [CheckKeys.Operadores]: true });
        break;
      case '/listas':
        setChecks({ ...checkInitialStatement, [CheckKeys.Listas]: true });
        break;
      case '/negacion':
        setChecks({ ...checkInitialStatement, [CheckKeys.Negacion]: true });
        break;
      default:
        return;
    }
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <ReusableNavLink
            url="/introduccion"
            filter={checks.introduccion}
            page="Introducción"
          />
        </li>
        <li className="subcategory">
          <ReusableNavLink
            url="/introduccion_cuestionario"
            filter={checks.introduccion}
            page="Cuestionario"
            color={window.isCorrectIntroduccionCuestionario === 1 ? 'grey' : window.isCorrectIntroduccionCuestionario === 2 ? 'green' : window.isCorrectIntroduccionCuestionario === 3 ? 'red' : 'grey'}
          />
        </li>
        <li>
          <ReusableNavLink
            url="/terminos"
            filter={checks.terminos}
            page="Términos"
          />
        </li>
        {/* <li className="subcategory">
          <ReusableNavLink
            url="/terminos_ejercicio"
            filter={checks.terminos}
            page="Ejercicio"
            color={window.isCorrectTerminosEjercicio === 1 ? 'grey' : window.isCorrectTerminosEjercicio === 2 ? 'green' : window.isCorrectTerminosEjercicio === 3 ? 'red' : 'grey'}
          />
        </li> */}
        <li className="subcategory">
          <ReusableNavLink
            url="/terminos_cuestionario"
            filter={checks.terminos}
            page="Cuestionario"
            color={window.isCorrectTerminosCuestionario === 1 ? 'grey' : window.isCorrectTerminosCuestionario === 2 ? 'green' : window.isCorrectTerminosCuestionario === 3 ? 'red' : 'grey'}
          />
        </li>

        <li>
          <ReusableNavLink url="/hechos" filter={checks.hechos} page="Hechos" />
        </li>
        <li className="subcategory">
          <ReusableNavLink
            url="/hechos_ejercicio"
            filter={checks.hechos}
            page="Ejercicio"
            color={window.isCorrectHechosEjercicio === 1 ? 'grey' : window.isCorrectHechosEjercicio === 2 ? 'green' : window.isCorrectHechosEjercicio === 3 ? 'red' : 'grey'}
          />
        </li>
        <li className="subcategory">
          <ReusableNavLink
            url="/hechos_cuestionario"
            filter={checks.hechos}
            page="Cuestionario"
            color={window.isCorrectHechosCuestionario === 1 ? 'grey' : window.isCorrectHechosCuestionario === 2 ? 'green' : window.isCorrectHechosCuestionario === 3 ? 'red' : 'grey'}
          />
        </li>
        <li>
          <ReusableNavLink url="/reglas" filter={checks.reglas} page="Reglas" />
        </li>
        <li className="subcategory">
          <ReusableNavLink
            url="/reglas_ejercicio"
            filter={checks.reglas}
            page="Ejercicio"
            color={window.isCorrectReglasEjercicio === 1 ? 'grey' : window.isCorrectReglasEjercicio === 2 ? 'green' : window.isCorrectReglasEjercicio === 3 ? 'red' : 'grey'}
          />
        </li>
        <li className="subcategory">
          <ReusableNavLink
            url="/reglas_cuestionario"
            filter={checks.reglas}
            page="Cuestionario"
            color={window.isCorrectReglasCuestionario === 1 ? 'grey' : window.isCorrectReglasCuestionario === 2 ? 'green' : window.isCorrectReglasCuestionario === 3 ? 'red' : 'grey'}
          />
        </li>
        <li>
          <ReusableNavLink
            url="/clausulas"
            filter={checks.clausulas}
            page="Cláusulas"
          />
        </li>
        {/* <li className="subcategory">
          <ReusableNavLink
            url="/clausulas_ejercicio"
            filter={checks.clausulas}
            page="Ejercicio"
            color={window.isCorrectClausulasEjercicio === 1 ? 'grey' : window.isCorrectClausulasEjercicio === 2 ? 'green' : window.isCorrectClausulasEjercicio === 3 ? 'red' : 'grey'}
          />
        </li> */}
        <li className="subcategory">
          <ReusableNavLink
            url="/clausulas_cuestionario"
            filter={checks.clausulas}
            page="Cuestionario"
            color={window.isCorrectClausulasCuestionario === 1 ? 'grey' : window.isCorrectClausulasCuestionario === 2 ? 'green' : window.isCorrectClausulasCuestionario === 3 ? 'red' : 'grey'}
          />
        </li>
        <li>
          <ReusableNavLink
            url="/consultas"
            filter={checks.consultas}
            page="Consultas"
          />
        </li>
        {/* <li className="subcategory">
          <ReusableNavLink
            url="/consultas_ejercicio"
            filter={checks.consultas}
            page="Ejercicio"
            color={window.isCorrectConsultasEjercicio === 1 ? 'grey' : window.isCorrectConsultasEjercicio === 2 ? 'green' : window.isCorrectConsultasEjercicio === 3 ? 'red' : 'grey'}
          />
        </li> */}
        <li className="subcategory">
          <ReusableNavLink
            url="/consultas_cuestionario"
            filter={checks.consultas}
            page="Cuestionario"
            color={window.isCorrectConsultasCuestionario === 1 ? 'grey' : window.isCorrectConsultasCuestionario === 2 ? 'green' : window.isCorrectConsultasCuestionario === 3 ? 'red' : 'grey'}
          />
        </li>
        <li>
          <ReusableNavLink url="/negacion" filter={checks.negacion} page="Negación" />
        </li>
        {/* <li className="subcategory">
          <ReusableNavLink
            url="/negacion_ejercicio"
            filter={checks.negacion}
            page="Ejercicio"
            color={window.isCorrectNegacionEjercicio === 1 ? 'grey' : window.isCorrectNegacionEjercicio === 2 ? 'green' : window.isCorrectNegacionEjercicio === 3 ? 'red' : 'grey'}
          />
        </li> */}
        <li className="subcategory">
          <ReusableNavLink
            url="/negacion_cuestionario"
            filter={checks.negacion}
            page="Cuestionario"
            color={window.isCorrectNegacionCuestionario === 1 ? 'grey' : window.isCorrectNegacionCuestionario === 2 ? 'green' : window.isCorrectNegacionCuestionario === 3 ? 'red' : 'grey'}
          />
        </li>
        <li>
          <ReusableNavLink url="/listas" filter={checks.listas} page="Listas" />
        </li>
        {/* <li className="subcategory">
          <ReusableNavLink
            url="/listas_ejercicio"
            filter={checks.listas}
            page="Ejercicio"
            color={window.isCorrectListasEjercicio === 1 ? 'grey' : window.isCorrectListasEjercicio === 2 ? 'green' : window.isCorrectListasEjercicio === 3 ? 'red' : 'grey'}
          />
        </li> */}
        <li className="subcategory">
          <ReusableNavLink
            url="/listas_cuestionario"
            filter={checks.listas}
            page="Cuestionario"
            color={window.isCorrectListasCuestionario === 1 ? 'grey' : window.isCorrectListasCuestionario === 2 ? 'green' : window.isCorrectListasCuestionario === 3 ? 'red' : 'grey'}
          />
        </li>
        <li>
          <ReusableNavLink
            url="/operadores"
            filter={checks.operadores}
            page="Operadores"
          />
        </li>
        {/* <li className="subcategory">
          <ReusableNavLink
            url="/operadores_ejercicio"
            filter={checks.operadores}
            page="Ejercicio"
            color={window.isCorrectOperadoresEjercicio === 1 ? 'grey' : window.isCorrectOperadoresEjercicio === 2 ? 'green' : window.isCorrectOperadoresEjercicio === 3 ? 'red' : 'grey'}
          />
        </li> */}
        <li className="subcategory">
          <ReusableNavLink
            url="/operadores_cuestionario"
            filter={checks.operadores}
            page="Cuestionario"
            color={window.isCorrectOperadoresCuestionario === 1 ? 'grey' : window.isCorrectOperadoresCuestionario === 2 ? 'green' : window.isCorrectOperadoresCuestionario === 3 ? 'red' : 'grey'}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavBarComponents;
