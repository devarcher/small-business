export const getUsername = payload => {
  return {
    type: "GET_USERNAME",
    value: payload
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
