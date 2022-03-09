import { Producto } from "../../types/Producto";
import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";

const productsReducers = (
  currentProducts: Producto[] = [],
  action: AnyAction
) => {
  let newProducts;
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
