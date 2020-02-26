import { combineReducers } from "redux";

const user = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      return { username: action.value };
    case "LOGOUT":
      return { username: action.value };
    default:
      return state;
  }
};

const isAuthenticaed = (state = null, action) => {
  switch (action.type) {
    case "IS_AUTHENTICATED":
      return [...state, true];
    default:
      return state;
  }
};

const logout = (state = null, action) => {
  switch (action.type) {
    case "LOGOUT":
      return [...state, ""];
    default:
      return state;
  }
};

export default combineReducers({ user, isAuthenticaed, logout });
