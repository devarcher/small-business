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
      return [...state, action.value];
    default:
      return state;
  }
};

export default combineReducers({
  username: username,
  listings: listings
});
