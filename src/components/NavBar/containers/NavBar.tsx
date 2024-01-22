import { NavBarComponents } from '../components/NavBarComponents';
import { TopBarComponents } from '../components/TopBarComponents';
import Colors from '../../../assets/colors';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const NavBar: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div
      className="organizer"
      style={{ backgroundColor: Colors.tags.light_mode_background }}
    >
      <TopBarComponents />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <NavBarComponents />
        <div style={{ width: '100%' }}>{children}</div>
      </div>
    </div>
  );
};
