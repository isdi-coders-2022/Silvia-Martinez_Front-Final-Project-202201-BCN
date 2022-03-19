import { Producto } from "../../types/Producto";
import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const productsUserReducer = (
  currentProducts: Producto[] = [],
  action: AnyAction = { type: "" }
) => {
  let newProducts: Producto[];
  switch (action.type) {
    case HYDRATE:
      newProducts = [...action.payload.productsUser];
      break;

    case actionTypes.loadUserProducts:
      newProducts = [...action.productsUser];
      break;

    default:
      newProducts = [...currentProducts];
      break;
  }

  return newProducts;
};

export default productsUserReducer;
