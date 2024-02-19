import React from 'react';
import { NavBarComponents } from '../components/NavBarComponents';
import { TopBarComponents } from '../components/TopBarComponents';

export const NavBar = (props) => {
  const { children } = props;
  return (
    <div
      className="organizer"
      style={{ backgroundColor: "#F4F8FB" }}
    >
      <TopBarComponents />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <NavBarComponents />
        <div style={{ width: '100%' }}>{children}</div>
      </div>
    </div>
  );
};

export default NavBar;

