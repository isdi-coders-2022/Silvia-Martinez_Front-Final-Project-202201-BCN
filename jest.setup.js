import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { server } from "./__mocks__/server/server";
import "whatwg-fetch";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const store = createStore(rootReducer, applyMiddleware(thunk));

const renderWithProviders = (component) => {
  const Providers = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(component, { wrapper: Providers });
};

export default renderWithProviders;
