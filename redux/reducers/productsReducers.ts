import { Producto } from "../../types/Producto";
import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";

import { HYDRATE } from "next-redux-wrapper";

const productsReducers = (
  currentProducts: Producto[] = [],
  action: AnyAction = { type: "" }
) => {
  let newProducts: Producto[];
  switch (action.type) {
    case HYDRATE:
      newProducts = [...action.payload.products];
      break;

    case actionTypes.loadProducts:
      console.log("here again");

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

    case actionTypes.updateProduct:
      newProducts = [...currentProducts, action.product];
      break;

    default:
      newProducts = [...currentProducts];
      break;
  }

  return newProducts;
};

export default productsReducers;
