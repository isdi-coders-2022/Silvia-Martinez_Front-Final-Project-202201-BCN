import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper, Context } from "next-redux-wrapper";
import { Producto } from "../../types/Producto";

interface State {
  products: Producto[];
}

const makeStore = (context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store<State>>(makeStore, {
  debug: true,
});

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
