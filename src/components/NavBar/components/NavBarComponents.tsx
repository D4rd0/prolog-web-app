import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './NavBar.css';
import { ReusableNavLink } from '../../elements/navLink/ReusableNavLink';

export const NavBarComponents = () => {

  const location = useLocation();

  enum CheckKeys {
    Home = 'home',
    Notification = 'notification',
    Profile = 'profile',
    Terms = 'terms',
    Activities = 'activities',
    Achievements = 'achievements',
    Tools = 'tools',
    ManageGoals = 'manageGoals',
    ManageActivities = 'manageActivities',
    ManageStatistics = 'manageStatistics',
  }

  const checkInitialStatement: Record<CheckKeys, boolean> = {
    [CheckKeys.Home]: false,
    [CheckKeys.Notification]: false,
    [CheckKeys.Profile]: false,
    [CheckKeys.Terms]: false,
    [CheckKeys.Activities]: false,
    [CheckKeys.Achievements]: false,
    [CheckKeys.Tools]: false,
    [CheckKeys.ManageGoals]: false,
    [CheckKeys.ManageActivities]: false,
    [CheckKeys.ManageStatistics]: false,
  };

  const [checks, setChecks] = useState(checkInitialStatement);

  useEffect(() => {
    isActiveLink(location.pathname);
  }, [location]);

  const isActiveLink = (path: string) => {
    switch (path) {
      case '/introduccion':
        setChecks({ ...checkInitialStatement, [CheckKeys.Home]: true });
        break;
      case '/terminos':
        setChecks({ ...checkInitialStatement, [CheckKeys.Terms]: true });
        break;

      default:
        return;
    }
  };

  return (
    <div className={`sidebar`}>
      <div className="subSidebar">
        <ul>
          <li>
            <ReusableNavLink
              url="/introduccion"
              //src={NavBarIcons.homeIcon}
              filter={checks.home}
              page="Introducción"
            />
          </li>

          <li>
            <ReusableNavLink
              url="/terminos"
              filter={checks.terms}
              page="Términos"
            />
          </li>

          <li>
            <ReusableNavLink
              url="/activities"
              filter={checks.activities}
              page="Activities"
            />
          </li>

          <li>
            <ReusableNavLink
              url="/achievements"
              filter={checks.achievements}
              page="Achievements"
            />
          </li>

          <li>
            <ReusableNavLink
              url="/tools"
              filter={checks.tools}
              page="Other tools"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
