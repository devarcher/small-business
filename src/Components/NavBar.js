import React from "react";

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
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Austin Small Business
          </Typography>
          <Button className={classes.button}>Listings</Button>
          <Button className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
