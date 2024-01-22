import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/containers/Home';
import { Login } from './Login/containers/Login';
import { Goals } from './Goals/Goals';
import { Activities } from './Activities/container/Activities';
import './RoutesStyle.css';
import { ManageActivities } from './ManageActivities/container/ManageActivities';
import { NavBar } from './NavBar/containers/NavBar';
import FormActivities from './FormActivities/container/FormActivities';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <NavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/profile" element={<Login />} />
              <Route path="/activities" element={<Activities />} />

              <Route path="/manage/activities" element={<ManageActivities />} />
              <Route
                path="/manage/activities/form"
                element={<FormActivities />}
              />
            </Routes>
          </NavBar>
        }
      />
    </Routes>
  );
};
