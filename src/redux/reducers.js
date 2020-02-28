import { combineReducers } from "redux";

const username = (state = null, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      return action.value;
    default:
      return state;
  }
};

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      console.log("**REDUCER**", action.value);
      const newState = [...state];
      const obj = action.value;
      console.log("**Reducer State**:", newState);
      return newState.push(obj);
    default:
      return state;
  }
};

export default combineReducers({ username, listings });
