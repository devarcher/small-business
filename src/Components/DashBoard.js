import React, { useState } from "react";
import Listings from "./Listings";

const DashBoard = props => {
  console.log("props username: ", props.username);
  return (
    <div>
      <div>{props.username}</div>
      <Listings />
    </div>
  );
};

export default DashBoard;
