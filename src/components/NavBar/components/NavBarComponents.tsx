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
    Goals = 'goals',
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
    [CheckKeys.Goals]: false,
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
    console.log('path', path);

    switch (path) {
      case '/':
        setChecks({ ...checkInitialStatement, [CheckKeys.Home]: true });
        break;
      case '/goals':
        setChecks({ ...checkInitialStatement, [CheckKeys.Goals]: true });
        break;
      case '/activities':
        setChecks({ ...checkInitialStatement, [CheckKeys.Activities]: true });
        break;
      case '/achievements':
        setChecks({ ...checkInitialStatement, [CheckKeys.Achievements]: true });
        break;
      case '/tools':
        setChecks({ ...checkInitialStatement, [CheckKeys.Tools]: true });
        break;
      case '/manage/activities':
        setChecks({
          ...checkInitialStatement,
          [CheckKeys.ManageActivities]: true,
        });
        break;
      case '/manage/goals':
        setChecks({ ...checkInitialStatement, [CheckKeys.ManageGoals]: true });
        break;
      case '/manage/statistics':
        setChecks({
          ...checkInitialStatement,
          [CheckKeys.ManageStatistics]: true,
        });
        break;
      case '/notifications':
        setChecks({ ...checkInitialStatement, [CheckKeys.Notification]: true });
        break;
      case '/profile':
        setChecks({ ...checkInitialStatement, [CheckKeys.Profile]: true });
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
              url="/"
              //src={NavBarIcons.homeIcon}
              filter={checks.home}
              page="Introducción"
            />
          </li>

          <li>
            <ReusableNavLink
              url="/goals"
              filter={checks.goals}
              page="Goals"
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
