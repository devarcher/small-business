import React, { useState, useEffect } from "react";
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
  
  const logoutHandler = () => {
    window.location.replace("/");
    console.log('logout')
    document.cookie = '';
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Austin Small Business
          </Typography>
          {(document.cookie === '') ? (
            <>
              <Button className={classes.button}>Listings</Button>
              <Link to="/login" className={classes.link}>
                <Button className={classes.button}>Login</Button>
              </Link>
            </>
          ) : (
            <>
              <Button className={classes.button}>Listings</Button>
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
