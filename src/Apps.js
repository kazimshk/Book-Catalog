import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SignInAndSignUpPage from "./pages/sign-in/sign-in-page.component";
import { auth, userData } from "./component/firebase/firebase.utils";
import Header from "./component/header/header.component";
import BookListing from "./component/bookListing/book-listing";
import PrivateRoute from "./component/routes/private-route.component";
import { loginUser } from "./redux/actions/bookAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./App.css";

const Apps = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await userData(user);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            loginUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
          history.push("/main");
        });
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <PrivateRoute component={BookListing} path="/main" />
        <Route component={SignInAndSignUpPage} path="/" exact />
      </Switch>
    </div>
  );
};

export default Apps;
