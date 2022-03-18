import { Producto } from "../../types/Producto";
import {
  createProductActions,
  deleteProductActions,
  loadProductsActions,
  loadProductsUserActions,
  loadUserActions,
  loginUserActions,
  registerUserActions,
  updateProductActions,
} from "../actions/actionCreator";
import { AppDispatch } from "../store";
import { toast } from "react-toastify";
import { User } from "../../types/User";
import jwtDecode from "jwt-decode";

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
    `${process.env.NEXT_PUBLIC_WALLAPLOP}products/user`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
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
  (product: Producto) => async (dispatch: AppDispatch) => {
    const data = new FormData();
    data.append("description", product.description);
    data.append("title", product.title);
    data.append("price", product.price);
    data.append("category", product.category);
    data.append("picture", product.picture);
    data.append("lat", "41.38879");
    data.append("long", "2.15899 ");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WALLAPLOP}products/create`,
      {
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const newProduct = await response.json();
    if (response.ok) {
      dispatch(createProductActions(newProduct));
      toast("Has creado un nuevo producto 🥳");
    }
  };

export const updateProductThunk =
  (product: Producto) => async (dispatch: AppDispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WALLAPLOP}products/${product._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          title: product.title,
          description: product.description,
          category: product.category,
          price: product.price,
          location: { lat: 41.38879, long: 2.15899 },
        }),
      }
    );

    const updateProduct = await response.json();
    if (response.ok) {
      dispatch(updateProductActions(updateProduct));
      toast("Has modificado tu producto 🌈");
    }
  };

export const registerUserThunks =
  (user: User) => async (dispatch: AppDispatch) => {
    const data = new FormData();
    data.append("name", user.name);
    data.append("username", user.username);
    data.append("password", user.password);
    data.append("email", user.password);
    data.append("picture", user.picture);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WALLAPLOP}user/register`,
      {
        method: "POST",
        body: data,
      }
    );
    const newUser = await response.json();
    if (response.ok) {
      dispatch(loginUserThunks(user));
      dispatch(registerUserActions(newUser));
      toast("Te has registrado 🦋");
    }
  };

export const loginUserThunks =
  (user: User) => async (dispatch: AppDispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WALLAPLOP}user/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
      }
    );

    if (response.ok) {
      const tokenResponse = await response.json();
      const userResponse: User = await jwtDecode(tokenResponse.token);
      localStorage.setItem(
        "token",
        JSON.stringify({
          ...userResponse,
          token: tokenResponse.token,
        })
      );
      localStorage.setItem("token", tokenResponse.token);
      dispatch(loginUserActions(user));
      toast("Ahora estas dentro!🐙");
    }
  };

export const LoadUserThunks = async (dispatch: AppDispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WALLAPLOP}user/user`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const user: User = await response.json();

  dispatch(loadUserActions(user));
};
