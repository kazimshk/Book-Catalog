import { ActionTypes } from "../constants/action-types";

export const setBooks = (books) => {
  return {
    type: ActionTypes.SET_BOOKS,
    payload: books,
  };
};

export const selectedBook = (book) => {
  return {
    type: ActionTypes.SELECTED_BOOK,
    payload: book,
  };
};

export const resetBook = () => {
  return {
    type: ActionTypes.RESET_BOOK,
  };
};

export const loginUser = (currentUser) => {
  return {
    type: ActionTypes.LOGIN_USER,
    payload: currentUser,
  };
};

export const logoutUser = () => {
  return {
    type: ActionTypes.LOGOUT_USER,
  };
};
