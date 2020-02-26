import { combineReducers } from "redux";

const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USERNAME':
      return { username: action.value}
      
    default:
      return state;
  }
}

export default combineReducers({ user });
