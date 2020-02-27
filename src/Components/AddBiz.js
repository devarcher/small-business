import React from "react";
import Map from "./Map";
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

const AddBiz = props => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.namediv}>
        <Typography className={classes.name}>
          Logged in as: {props.username}
        </Typography>
      </div>
      <Map />
    </div>
  );
};

export default AddBiz;
