import { Producto } from "../../types/Producto";
import { User } from "../../types/User";
import actionTypes from "./actionTypes";

export const loadProductsActions = (products: Producto[]) => ({
  type: actionTypes.loadProducts,
  products,
});

export const loadProductsUserActions = (products: Producto[]) => ({
  type: actionTypes.loadUserProducts,
  products,
});

export const deleteProductActions = (id: string) => ({
  type: actionTypes.deleteProduct,
  id,
});

export const createProductActions = (product: Producto) => ({
  type: actionTypes.createProduct,
  product,
});

export const updateProductActions = (product: Producto) => ({
  type: actionTypes.updateProduct,
  product,
});

export const loginUserActions = (user: User) => ({
  type: actionTypes.loginUser,
  user,
});

export const registerUserActions = (user: User) => ({
  type: actionTypes.registerUser,
  user,
});

export const loadUserActions = (user: User) => ({
  type: actionTypes.loadUser,
  user,
});

export const logoutUserActions = () => ({
  type: actionTypes.logoutUser,
});
