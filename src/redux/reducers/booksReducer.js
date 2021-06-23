import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const booksReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BOOKS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedBookReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_BOOK:
      return { ...state, ...payload };
    default:
      return state;
  }
};
