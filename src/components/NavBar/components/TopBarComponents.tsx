import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './TopBar.css';
import logo from '../../../assets/capgemini_logos/Logo.svg';
import { NavBarIcons } from '../../../assets/navbarIcons/navBarSvg';
import { ReusableNavLinkAvatar, ReusableNavLink } from '../../elements/index';

export const TopBarComponents = () => {
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
    <div className="top-nav">
      <div className="left-section">
        <h2 className="logoImage">
          <NavLink to="/" style={{ paddingBottom: '0.313rem' }}>
            <img src={logo} alt="Logo Icon" />
          </NavLink>
        </h2>
      </div>
      <div className="right-section">
        <ReusableNavLink
          url="/manage/goals"
          src={NavBarIcons.manageGoals}
          alt="Notification Icon"
          filter={checks.manageGoals}
          page="Manage goals"
        />
        <ReusableNavLink
          url="/manage/activities"
          src={NavBarIcons.manageActivities}
          alt="Notification Icon"
          filter={checks.manageActivities}
          page="Manage activities"
        />

        <ReusableNavLink
          url="/manage/statistics"
          src={NavBarIcons.barChar}
          alt="Notification Icon"
          filter={checks.manageStatistics}
          page="Manage statistics"
        />
        <div className="blankSpace" />

        <ReusableNavLink
          url="/notifications"
          src={NavBarIcons.notifications}
          alt="Notification Icon"
          filter={checks.notification}
        />

        <ReusableNavLinkAvatar
          url="/profile"
          src={NavBarIcons.avatar}
          alt="Avatar Icon"
        />
      </div>
    </div>
  );
};

export default TopBarComponents;
