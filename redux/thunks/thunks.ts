import { Producto } from "../../types/Producto";
import {
  deleteProductActions,
  loadProductsActions,
  loadProductsUserActions,
} from "../actions/actionCreator";
import { AppDispatch } from "../store";

interface ProductsResponse {
  products: Producto[];
}
export const loadProductsThunks = async (dispatch: AppDispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/list`
  );
  const jsonRespone: ProductsResponse = await response.json();

  dispatch(loadProductsActions(jsonRespone.products));
};

export const loadProductsUserThunks = async (dispatch: AppDispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/user`
  );
  const jsonRespone: ProductsResponse = await response.json();

  dispatch(loadProductsUserActions(jsonRespone.products));
};

export const deleteProductThunks =
  (id: string) => async (dispatch: AppDispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WALLAPLOP}products/${id}`,
      { method: "DELETE" }
    );
    if (response.ok) {
      dispatch(deleteProductActions(id));
    }
  };
