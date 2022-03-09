import { Producto } from "../../types/Producto";
import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";

const productsReducers = (
  currentProducts: Producto[] = [],
  action: AnyAction = { type: "" }
) => {
  let newProducts: Producto[];
  switch (action.type) {
    case actionTypes.loadProducts:
      newProducts = [...action.products];
      break;

    default:
      newProducts = [...currentProducts];
      break;
  }
  return newProducts;
};

export default productsReducers;
