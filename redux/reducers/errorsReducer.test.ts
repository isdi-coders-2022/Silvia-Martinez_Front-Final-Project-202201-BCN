import actionTypes from "../actions/actionTypes";
import errorsReducer from "./errorsReducer";

describe("Given a error Reducer", () => {
  describe("When it given a generic error action", () => {
    test("Then should return the generic error true", () => {
      const currentState = {
        isErrorGeneric: false,
        isUserOrPasswordIncorrect: false,
        isMissingFieldsError: false,
      };

      const expectedState = {
        isErrorGeneric: true,
        isUserOrPasswordIncorrect: false,
        isMissingFieldsError: false,
      };

      const action = {
        type: actionTypes.errorGeneric,
      };

      const errorState = errorsReducer(currentState, action);

      expect(errorState).toStrictEqual(expectedState);
    });
  });
  describe("When it given a isUserOrPasswordIncorrect state and an action", () => {
    test("Then should return the isUserOrPasswordIncorrect true", () => {
      const currentState = {
        isErrorGeneric: false,
        isUserOrPasswordIncorrect: false,
        isMissingFieldsError: false,
      };

      const expectedState = {
        isErrorGeneric: false,
        isUserOrPasswordIncorrect: true,
        isMissingFieldsError: false,
      };

      const action = {
        type: actionTypes.errorUserOrPasswordIncorrect,
      };

      const errorState = errorsReducer(currentState, action);

      expect(errorState).toStrictEqual(expectedState);
    });
  });
  describe("When it given a isMissingFieldsError state and an action", () => {
    test("Then should return the isMissingFieldsError true", () => {
      const currentState = {
        isErrorGeneric: false,
        isUserOrPasswordIncorrect: false,
        isMissingFieldsError: false,
      };

      const expectedState = {
        isErrorGeneric: false,
        isUserOrPasswordIncorrect: false,
        isMissingFieldsError: true,
      };

      const action = {
        type: actionTypes.errorMissingFields,
      };

      const errorState = errorsReducer(currentState, action);

      expect(errorState).toStrictEqual(expectedState);
    });
  });
  describe("When it given a resetError state and an action", () => {
    test("Then should return the all errors false", () => {
      const currentState = {
        isErrorGeneric: false,
        isUserOrPasswordIncorrect: false,
        isMissingFieldsError: true,
      };

      const expectedState = {
        isErrorGeneric: false,
        isUserOrPasswordIncorrect: false,
        isMissingFieldsError: false,
      };

      const action = {
        type: actionTypes.resetErrors,
      };

      const errorState = errorsReducer(currentState, action);

      expect(errorState).toStrictEqual(expectedState);
    });
  });
  describe("When given a currentState and empty action", () => {
    test("Then should return an empty list of products", () => {
      const currentState = {
        isErrorGeneric: false,
        isUserOrPasswordIncorrect: false,
        isMissingFieldsError: false,
      };

      const receivedErrors = errorsReducer();

      expect(receivedErrors).toEqual(currentState);
    });
  });
});
