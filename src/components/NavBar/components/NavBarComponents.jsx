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
        <li>
          <ReusableNavLink
            url="/terminos"
            filter={checks.terminos}
            page="Términos"
          />
        </li>
        <li>
          <ReusableNavLink
            url="/clausulas"
            filter={checks.clausulas}
            page="Cláusulas"
          />
        </li>
        <li>
          <ReusableNavLink url="/hechos" filter={checks.hechos} page="Hechos" />
        </li>
        <li>
          <ReusableNavLink url="/reglas" filter={checks.reglas} page="Reglas" />
        </li>
        <li className="subcategory">
          <ReusableNavLink
            url="/reglas_ejercicio"
            filter={checks.reglas}
            page="Ejercicio"
            color={window.isCorrect === 1 ? 'grey' : window.isCorrect === 2 ? 'green' : window.isCorrect === 3 ? 'red' : 'grey'}
          />
        </li>
        <li className="subcategory">
          <ReusableNavLink
            url="/reglas_cuestionario"
            filter={checks.reglas}
            page="Cuestionario"
            color={window.isCorrect === 1 ? 'grey' : window.isCorrect === 2 ? 'green' : window.isCorrect === 3 ? 'red' : 'grey'}
          />
        </li>
        <li>
          <ReusableNavLink
            url="/consultas"
            filter={checks.consultas}
            page="Consultas"
          />
        </li>
        <li>
          <ReusableNavLink url="/negacion" filter={checks.negacion} page="Negación" />
        </li>
        <li>
          <ReusableNavLink url="/listas" filter={checks.listas} page="Listas" />
        </li>
        <li>
          <ReusableNavLink
            url="/operadores"
            filter={checks.operadores}
            page="Operadores"
          />
        </li>
      </ul>
    </div>
  );
};

export default NavBarComponents;
