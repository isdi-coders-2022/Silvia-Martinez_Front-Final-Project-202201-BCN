import { combineReducers } from "redux";
import productsReducers from "./productsReducers";
import userReducers from "./userReducer";

const rootReducer = combineReducers({
  products: productsReducers,
  user: userReducers,
});

export default rootReducer;
