import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import Apps from "./Apps";
import configureStore from "./redux/store/store";
import { history } from "../src/utils/history";
import Loader from "react-loader-spinner";
import { auth } from "./component/firebase/firebase.utils";
import { loginUser } from "./redux/actions/userAction";

ReactDOM.render(
  <Loader
    type="Puff"
    color="#ce4076"
    height={60}
    width={60}
    className="spinner"
  />,
  document.getElementById("root")
);

auth.onAuthStateChanged(async (user) => {
  (await user) && (await store.dispatch(loginUser(user)));
  {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter history={history}>
          <Provider store={store}>
            <Apps />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
});
