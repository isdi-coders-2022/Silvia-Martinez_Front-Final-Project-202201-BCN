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

    case actionTypes.loadUserProducts:
      newProducts = [...action.products];
      break;

    case actionTypes.deleteProduct:
      newProducts = currentProducts.filter(
        (product) => product._id !== action.id
      );
      break;

    case actionTypes.createProduct:
      newProducts = [...currentProducts, action.product];
      break;

    default:
      newProducts = [...currentProducts];
      break;
  }

  return newProducts;
};

export default productsReducers;
