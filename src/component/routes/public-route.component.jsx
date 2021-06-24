import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isLogin = useSelector((state) => state.loginUser);
  console.log("islogin", isLogin);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Redirect to="/main" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
