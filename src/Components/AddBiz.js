import React, { useState } from "react";
import Map from "./Map";

import { Typography, TextField, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    width: "35vw",
    marginTop: "50px",
    padding: "20px"
  },
  formButton: {
    width: "50%",
    marginTop: "20px",
    color: "white"
  },
  mapBox: {
    width: "35vw",
    marginTop: "50px",
    marginLeft: "20px"
  }
});

const AddBiz = props => {
  const classes = useStyles();

  const def = {
    name: 'Austin',
    address: '100 Congress Ave, Austin, Tx',
    Hours: null,
    Description: null
  }

  // Add agnostic input to state as an object
  const [input, setInput] = useState({});
  const [isSubmitted, setISSubmitted] = useState(false);

  // Handle change in inputs and set input field name, each name becomes key value pair in state object
  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });

  // Move form data to redux State
  const handleSubmit = e => {
    e.preventDefault();
    props.addListing(input);
    setISSubmitted(true);
  };

  return (
    <div>
    {console.log(isSubmitted)}
      <div className={classes.namediv}>
        <Typography className={classes.name}>
          Logged in as: {props.username}
        </Typography>
      </div>
      <Box display="flex" justifyContent="center">
        <Box width="80vw" height="40vh" display="flex">
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              name="name"
              label="Name"
              onChange={handleInputChange}
              value={input.name || ""}
            />
            <TextField
              name="address"
              label="Address"
              onChange={handleInputChange}
              value={input.address || ""}
            />
            <TextField
              name="hours"
              label="Hours (ex. 8am - 8pm)"
              onChange={handleInputChange}
              value={input.hours || ""}
            />
            <TextField
              name="description"
              label="Description"
              onChange={handleInputChange}
              value={input.description || ""}
            />
            <Button
              className={classes.formButton}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </form>
          <Box className={classes.mapBox}>
            {isSubmitted && <Map biz={input} />}
            {!isSubmitted && <Map biz={def} />}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AddBiz;
