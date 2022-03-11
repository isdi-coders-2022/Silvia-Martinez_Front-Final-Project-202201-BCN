import { Producto } from "../../types/Producto";
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
