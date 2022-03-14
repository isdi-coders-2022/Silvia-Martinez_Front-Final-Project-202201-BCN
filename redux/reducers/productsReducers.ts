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
      newProducts = [
        ...currentProducts.map((product) => {
          if (product._id === action.product._id) {
            return action.product;
          }
          return product;
        }),
      ];

      break;

    default:
      newProducts = [...currentProducts];
      break;
  }

  return newProducts;
};

export default productsReducers;
