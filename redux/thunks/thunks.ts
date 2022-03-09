import { loadProductsActions } from "../actions/actionCreator";
import { AppDispatch } from "../store";

export const loadProductsThunks = async (dispatch: AppDispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/list`
  );
  const products = await response.json();

  dispatch(loadProductsActions(products));
};
