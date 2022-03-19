import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productsReducers from "./productsReducers";
import userReducers from "./userReducer";

const rootReducer = combineReducers({
  products: productsReducers,
  product: productReducer,
  user: userReducers,
});

export default rootReducer;
