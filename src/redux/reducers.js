import { combineReducers } from "redux";

const username = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      console.log("user reducer state", state);
      console.log("user reducer action value", action.value);
      return { ...state, ...action.value };
    default:
      return state;
  }
};

const isAuthenticated = (state = {}, action) => {
  switch (action.type) {
    case "IS_AUTHENTICATED":
      console.log("auth recducer state", state);
      console.log("auth reducer action value", action.value);
      return { ...state, ...action.value };
    default:
      return state;
  }
};

const logout = (state = {}, action) => {
  switch (action.type) {
    case "LOGOUT":
      console.log("state", state);
      console.log("action value", action.value);
      return { ...state, ...action.value };
    default:
      return state;
  }
};

export default combineReducers({ username, isAuthenticated, logout });
