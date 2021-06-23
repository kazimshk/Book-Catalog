import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SignInAndSignUpPage from "./pages/sign-in/sign-in-page.component";
import HomePage from "./pages/homepage/homepage.component";
import LandingPage from "./pages/landing-page/landing-page.component";
//import MainPage from './pages/mainpage/main-page.component';
import { auth, userData } from "./component/firebase/firebase.utils";
import Header from "./component/header/header.component";
//import { userData } from './component/firebase/firebase.utils';
//import { login, isLogin } from "./component/token/token.utils";
import BookListing from "./component/bookListing/book-listing";
import PrivateRoute from "./component/routes/private-route.component";
import PublicRoute from "./component/routes/public-route.component";
import "./App.css";

const Apps = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await userData(user);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(user);
      //login(currentUser);
      console.log("updated" + currentUser);
    });
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <PublicRoute
          restricted={false}
          component={SignInAndSignUpPage}
          path="/signin"
          exact
        />
        <PrivateRoute component={HomePage} path="/home" exact />
        <PrivateRoute component={BookListing} path="/main" exact />
      </Switch>
    </div>
  );
};

export default Apps;

// <Switch>
//   <Route exact path="/" component={LandingPage} />
//   <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
//   <Route exact path="/home" component={HomePage} />
//   <Route exact path="/main" component={BookListing} />
// </Switch>;

//<PublicRoute restricted={false} component={LandingPage} path="/" exact />;
