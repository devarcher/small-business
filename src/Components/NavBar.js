import React from "react";
import { Link } from "react-router-dom";
import { checkAuth } from "../Router";

// Material Ui
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontWeight: "bold"
  },
  button: {
    color: "white"
  },
  link: {
    textDecoration: "none"
  },
  buttonLogout: {
    color: "white",
    fontWeight: "bold"
  }
}));

export default function NavBar(props) {
  const classes = useStyles();

  const logoutHandler = e => {
    e.preventDefault();
    window.location.replace("/");
    document.cookie = "loggedIn=";
    console.log("logout");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Austin Small Business
          </Typography>
          {!checkAuth() ? (
            <>
              <Link to="/" className={classes.link}>
                <Button className={classes.button}>Listings</Button>
              </Link>
              <Link to="/login" className={classes.link}>
                <Button className={classes.button}>Login</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className={classes.link}>
                <Button className={classes.button}>Listings</Button>
              </Link>
              <Link to="/addbiz" className={classes.link}>
                <Button className={classes.button}>Add</Button>
              </Link>
              <Link to="/" className={classes.link}>
                <Button
                  onClick={logoutHandler}
                  className={classes.buttonLogout}
                >
                  Logout
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
