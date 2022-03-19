import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productsReducers from "./productsReducers";
import productsUserReducer from "./productsUserReducer";
import userReducers from "./userReducer";

const rootReducer = combineReducers({
  products: productsReducers,
  productsUser: productsUserReducer,
  product: productReducer,
  user: userReducers,
});

export default rootReducer;
