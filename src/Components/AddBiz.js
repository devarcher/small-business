import React from "react";
import Map from "./Map";
import { Typography, TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles({
  namediv: {
    padding: "5px",
    background: "lightgrey"
  },
  name: {
    marginLeft: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: '35vw',
    marginTop: '50px'
  },

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
      <Box display='flex' justifyContent='center'>

      <Box width='80vw'>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField label="Name" />
          <TextField label="Address" />
          <TextField label="Hours (ex. 8am - 8pm)" />
          <TextField label="Description" />
        </form>
        <Map />
      </Box>
      </Box>
    </div>
  );
};

export default AddBiz;
