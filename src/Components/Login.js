import React, { useState } from "react";
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

const Login = props => {
  const classes = useStyles();

  const [username, setUsername] = useState("");

  const loginSubmit = () => {
    props.history.push("/dashboard");
    props.getUsername(username);
    setUsername("");
    document.cookie = "loggedIn=true;max-age=60*1000";
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className={classes.form} noValidate>
          <TextField
            required
            onChange={e => setUsername(e.target.value)}
            value={username}
            name="username"
            label="Username"
            type="text"
          />
          <br />
          <TextField
            required
            name="password"
            label="Password"
            type="password"
          />
          <br />
          <Button
            onClick={loginSubmit}
            className={classes.button}
            variant="contained"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
