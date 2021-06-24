import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";

import SignInAndSignUpPage from "./pages/sign-in/sign-in-page.component";
import Header from "./component/header/header.component";
import BookListing from "./component/bookListing/book-listing";
import PrivateRoute from "./component/routes/private-route.component";
import PublicRoute from "./component/routes/public-route.component";
import { loginUser } from "./redux/actions/userAction";

const Apps = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(loginUser());
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <PrivateRoute component={BookListing} path="/main" />
        <PublicRoute component={SignInAndSignUpPage} path="/" exact />
      </Switch>
    </div>
  );
};

export default Apps;
