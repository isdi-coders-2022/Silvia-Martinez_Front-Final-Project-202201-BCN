import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";

interface AppError {
  isErrorGeneric: Boolean;
  isUserOrPasswordIncorrect: Boolean;
  isMissingFieldsError: Boolean;
}

const initialState: AppError = {
  isErrorGeneric: false,
  isUserOrPasswordIncorrect: false,
  isMissingFieldsError: false,
};

const errorsReducer = (
  currentState: AppError = initialState,
  action: AnyAction = { type: "" }
): AppError => {
  switch (action.type) {
    case actionTypes.errorGeneric:
      return { ...initialState, isErrorGeneric: true };
    case actionTypes.errorUserOrPasswordIncorrect:
      return { ...initialState, isUserOrPasswordIncorrect: true };
    case actionTypes.errorMissingFields:
      return { ...initialState, isMissingFieldsError: true };
    case actionTypes.resetErrors:
      return { ...initialState };
    default:
      return currentState;
  }
};

export default errorsReducer;
