import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../token/token.utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/signin" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
