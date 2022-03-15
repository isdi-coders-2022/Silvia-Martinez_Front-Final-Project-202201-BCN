import { Producto } from "../../types/Producto";
import {
  createProductActions,
  deleteProductActions,
  loadProductsActions,
  loadProductsUserActions,
  updateProductActions,
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

/* location: { lat: 41.38879, long: 2.15899 }, */

export const createProductThunk =
  (data: FormData) => async (dispatch: AppDispatch) => {
    data.append("lat", "41.38879");
    data.append("long", "2.15899 ");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WALLAPLOP}products/create`,
      {
        method: "POST",
        body: data,
      }
    );
    const newProduct = await response.json();
    if (response.ok) {
      dispatch(createProductActions(newProduct));
    }
  };

export const updateProductThunk =
  ({ _id }: Producto, data: FormData) =>
  async (dispatch: AppDispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WALLAPLOP}products/${_id}`,
      {
        method: "PUT",
        body: data,
      }
    );

    const updateProduct = await response.json();
    if (response.ok) {
      dispatch(updateProductActions(updateProduct));
    }
  };
