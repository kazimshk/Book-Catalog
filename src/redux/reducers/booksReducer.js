import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const booksReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_BOOKS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedBookReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_BOOK:
      return { ...state, ...payload };
    case ActionTypes.RESET_BOOK:
      return {};
    default:
      return state;
  }
};

export const loginUserReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, ...payload };
    case ActionTypes.LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
