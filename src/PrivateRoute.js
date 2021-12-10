import React from "react";
import { useContext } from "react";
import { Route, Navigate } from "react-router";
import { AuthContext } from "./components/Auth";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
