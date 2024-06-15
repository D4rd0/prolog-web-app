import React, { useState } from 'react';
import { NavBarComponents } from '../components/NavBarComponents';
import { TopBarComponents } from '../components/TopBarComponents';

export const NavBar = (props) => {
  const { children } = props;
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="organizer" style={{ background: 'linear-gradient(to right, #fcfcfc, #dcdcdc)' }}>
      <TopBarComponents setLoggedInCallback={setLoggedIn} loggedIn={loggedIn} />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        {loggedIn && <NavBarComponents />}
        <div style={{ width: '100%', marginLeft: '10px' }}>{children}</div>
      </div>
    </div>
  );
};

export default NavBar;