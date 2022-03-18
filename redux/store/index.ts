import thunk, { ThunkDispatch } from "redux-thunk";
import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper, Context } from "next-redux-wrapper";
import { Producto } from "../../types/Producto";
import { User } from "../../types/User";

interface State {
  products: Producto[];
  user: User;
}

const makeStore = (context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store<State>>(makeStore, {
  debug: false,
});

export type AppDispatch = Store["dispatch"] &
  ThunkDispatch<RootState, null, AnyAction>;
export type RootState = ReturnType<Store["getState"]>;
