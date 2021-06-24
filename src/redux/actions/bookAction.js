import { ActionTypes } from "../constants/action-types";
import { firestore, firebase } from "../../component/firebase/firebase.utils";

export const getBooks = () => async (dispatch) => {
  try {
    const booksArray = [];
    const books = await firestore.collection("Books").get();

    books.forEach((doc) => {
      booksArray.push({ id: doc.id, ...doc.data() });
    });
    dispatch({
      type: ActionTypes.GET_BOOKS,
      payload: booksArray,
    });
  } catch (error) {
    console.log(error);
  }
};

export const selectedBook = (book) => (dispatch) => {
  dispatch({
    type: ActionTypes.SELECTED_BOOK,
    payload: book,
  });
};

export const resetBook = () => (dispatch) => {
  dispatch({
    type: ActionTypes.RESET_BOOK,
  });
};

export const logoutUser = () => {
  return {
    type: ActionTypes.LOGOUT_USER,
  };
};
