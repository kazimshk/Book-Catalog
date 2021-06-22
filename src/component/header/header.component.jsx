import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="header-routes">
      {currentUser ? (
        <div className="header-route" onClick={() => auth.signOut()}>
          {currentUser.email}
        </div>
      ) : (
        <Link className="header-route" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
