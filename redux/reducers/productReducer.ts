import { Producto } from "../../types/Producto";
import actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

const initProduct = {
  _id: "",
  price: "",
  title: "",
  description: "",
  category: "",
  picture: "",
  userID: {
    username: "",
    name: "",
    picture: "",
    _id: "",
    password: "",
    email: "",
  },
};

const productReducer = (
  product: Producto = initProduct,
  action: AnyAction = { type: "" }
) => {
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
