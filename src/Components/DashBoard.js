import React, { useState } from "react";
import Listings from "./Listings";

const DashBoard = props => {
  console.log("***DASHBOARD PROPS***", props);
  return (
    <div>
      <div></div>
      <Listings />
    </div>
  );
};

export default DashBoard;
