import { combineReducers } from "redux";
import { Producto } from "../../types/Producto";
import productsReducers from "./productsReducers";

const rootReducer = combineReducers({
  products: productsReducers,
});

export default rootReducer;
