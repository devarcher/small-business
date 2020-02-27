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

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      console.log("***REDUCER LISTING***", action.value);
      const newState = [...state];
      console.log("***new state***", newState);
      newState.push(action.value);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ username, listings });
