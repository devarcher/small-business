
export const login = login => {
  return {
    type: "LOGIN",
    value: login
  };
};

export const logout = logout => {
  return {
    type: "LOGOUT",
    value: logout
  };
};

export const addListing = listing => {
  return {
    type: "ADD_LISTING",
    value: listing
  };
};

export const fetchCoordinates = () => {
  console.log("hit fetchCoordinates");
};
