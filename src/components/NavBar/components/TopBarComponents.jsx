import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TopBar.css';
import logo from '../../../assets/prolog_logo.svg';

export const TopBarComponents = () => {
  return (
    <div className="top-nav">
      <h2 className="logoImage">
          <NavLink to="/introduccion" style={{ paddingBottom: '0.313rem' }}>
            <img src={logo} alt="Logo Icon" />
          </NavLink>
      </h2>
      <div class="buttons-container">
        <Link to="/login">
          <button class="login-button">Iniciar Sesión</button>
        </Link>
        <Link to="/register">
          <button class="register-button">Registrarse</button>
        </Link>
      </div>
    </div>
  );
};

export default TopBarComponents;
