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

const isAuthenticated = (state = null, action) => {
  switch (action.type) {
    case "IS_AUTHENTICATED":
      return state.isAuthenticated, action.value;
    default:
      return state;
  }
};

const logout = (state = null, action) => {
  switch (action.type) {
    case "LOGOUT":
      return [...state, action.value];
    default:
      return state;
  }
};

export default combineReducers({ user, isAuthenticated, logout });
