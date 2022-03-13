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

export const createProductThunk =
  ({ price, title, description, picture, category }: Producto) =>
  async (dispatch: AppDispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WALLAPLOP}products/create`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price,
          title,
          description,
          picture,
          category,
          location: { lat: 41.38879, long: 2.15899 },
        }),
      }
    );
    const newProduct = await response.json();
    if (response.ok) {
      dispatch(createProductActions(newProduct));
    }
  };

export const updateProductThunk =
  ({ price, title, description, picture, category, _id }: Producto) =>
  async (dispatch: AppDispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WALLAPLOP}products/${_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price,
          title,
          description,
          picture,
          category,
          location: { lat: 41.38879, long: 2.15899 },
        }),
      }
    );
    const updateProduct = await response.json();
    if (response.ok) {
      dispatch(updateProductActions(updateProduct));
    }
  };
