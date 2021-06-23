import { combineReducers } from "redux";
import {
  booksReducer,
  selectedBookReducer,
  loginUserReducer,
} from "./booksReducer";
const reducers = combineReducers({
  allProducts: booksReducer,
  productbook: selectedBookReducer,
  loginUser: loginUserReducer,
});
export default reducers;
