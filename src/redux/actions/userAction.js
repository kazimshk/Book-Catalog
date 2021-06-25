import { ActionTypes } from "../constants/action-types";
import { auth, userData } from "../../component/firebase/firebase.utils";
import { history } from "../../utils/history";

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: ActionTypes.LOGOUT_USER,
  });
};

export const loginUser = (user) => async (dispatch) => {
  if (user) {
    const userRef = await userData(user);

    userRef.onSnapshot((snapShot) => {
      dispatch({
        type: ActionTypes.LOGIN_USER,
        payload: {
          id: snapShot.id,
          ...snapShot.data(),
        },
      });
      history.push("/main");
    });
  }
};
