import { combineReducers } from "redux";

const username = (state = null, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      console.log("***USER reducer state***", state);
      console.log("***USER reducer action value***", action.value);
      return action.value;

    default:
      return state;
  }
};

export default combineReducers({ username });
