import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
  isLogged: boolean;
}

export const PrivateRoute = ({
  element,
  isLogged,
  ...props
}: PrivateRouteProps) => {
  return isLogged ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};
