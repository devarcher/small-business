import React, { useState } from "react";
import Listings from "./Listings";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  namediv: {
    padding: "5px",
    background: "lightgrey"
  },
  name: {
    marginLeft: "20px"
  }
});

const DashBoard = props => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.namediv}>
        <Typography className={classes.name}>
          Logged in as: {props.username}
        </Typography>
      </div>
      <Listings />
    </div>
  );
};

export default DashBoard;
