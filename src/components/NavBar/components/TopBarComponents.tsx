import { NavLink } from 'react-router-dom';
import './TopBar.css';
import logo from '../../../assets/prolog_logos/prolog_logo.svg';

export const TopBarComponents = () => {
  return (
    <div className="top-nav">
      <h2 className="logoImage">
          <NavLink to="/introduccion" style={{ paddingBottom: '0.313rem' }}>
            <img src={logo} alt="Logo Icon" />
          </NavLink>
      </h2>
    </div>
  );
};

export default TopBarComponents;
