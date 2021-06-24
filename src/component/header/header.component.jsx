import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./header.styles.scss";

import { auth } from "../firebase/firebase.utils";
import { logoutUser } from "../../redux/actions/bookAction";

const Header = () => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  return (
    <div className="header">
      {loginUser ? (
        <div
          className="header-route"
          onClick={() =>
            auth.signOut().then(() => {
              dispatch(logoutUser());
            })
          }
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="header-route" to="/">
          SIGN IN
        </Link>
      )}
    </div>
  );
};

export default Header;
