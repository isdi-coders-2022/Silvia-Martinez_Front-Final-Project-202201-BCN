import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import productReducer from "./productReducer";
import productsReducers from "./productsReducers";
import productsUserReducer from "./productsUserReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  products: productsReducers,
  productsUser: productsUserReducer,
  product: productReducer,
  user: userReducer,
  appErrors: errorsReducer,
});

export default rootReducer;
