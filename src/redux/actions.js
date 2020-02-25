export const getUsername = username => {
  return {
    type: "GET_USERNAME",
    value: username
  };
};

export const logout = logout => {
  return {
    type: "LOGOUT",
    value: ''
  };
};

export const addListing = listing => {
  return {
    type: "ADD_LISTING",
    value: listing
  };
};

export const deleteListing = id => {
  return {
    type: "DELETE_LISTING",
    value: id
  };
};

export const fetchCoordinates = () => {
  console.log("hit fetchCoordinates");
};
