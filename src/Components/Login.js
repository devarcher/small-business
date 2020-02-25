import React, { UseStyles } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  form: {
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  button: {
    color: "black"
  }
});

const Login = () => {
  const classes = useStyles();
  // handleTextChange = e => {
  //   const state = { ...this.state };
  //   state[e.target.name] = e.target.value;
  //   this.setState(state);
  // };

  // login = e => {
  //   e.preventDefault();
  //   document.cookie = "loggedIn=true;max-age=60*1000";
  //   window.location.replace("/");
  // };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className={classes.form} noValidate>
          <TextField
            required
            // onChange={this.handleTextChange}
            // value={this.state.username}
            name="username"
            label="Username"
            type="text"
          />
          <br />
          <TextField
            required
            // onChange={this.handleTextChange}
            // value={this.state.password}
            name="password"
            label="Password"
            type="password"
          />
          <br />
          <Button type="submit" className={classes.button} variant="contained">
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
