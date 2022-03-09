import { Producto } from "../../types/Producto";
import { loadProductsActions } from "../actions/actionCreator";
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
