import { Producto } from "../../types/Producto";
import { User } from "../../types/User";
import actionTypes from "./actionTypes";

export const loadProductsActions = (products: Producto[]) => ({
  type: actionTypes.loadProducts,
  products,
});

export const loadProductAction = (product: Producto) => ({
  type: actionTypes.loadProduct,
  product,
});

export const loadProductsUserActions = (productsUser: Producto[]) => ({
  type: actionTypes.loadUserProducts,
  productsUser,
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
