import { combineReducers } from "redux";

const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USERNAME':
      console.log('inside reducer')
      return [...state, user.action.value];
    default:
      return state;
  }
}

export default combineReducers({ user });
