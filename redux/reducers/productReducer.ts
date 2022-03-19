import { Producto } from "../../types/Producto";
import actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const productReducer = (product: any = {}, action: any = {}) => {
  let newProduct: Producto;
  switch (action.type) {
    case HYDRATE:
      newProduct = { ...action.payload.product };
      break;
    case actionTypes.loadProduct:
      newProduct = { ...action.product };
      break;

    default:
      newProduct = { ...product };
      break;
  }

  return newProduct;
};

export default productReducer;
