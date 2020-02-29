import React from "react";
// import { Container, Paper, Chip } from "@material-ui/core";

const SingleBiz = props => {
  const id = props.match.params.id;
  const listings = props.listings;
  const biz = listings.find(listing => listing.id == id)
  console.log(id, biz.id)
  
  return (
    <div>
      <div>{biz.name}</div>
      <div>{biz.description}</div>
    </div>
  );
};

export default SingleBiz;
