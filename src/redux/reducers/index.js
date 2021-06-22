import { combineReducers } from "redux";
import { booksReducer ,selectedBookReducer} from "./booksReducer";
const reducers = combineReducers({
  allProducts: booksReducer,
  productbook: selectedBookReducer,
});
export default reducers;