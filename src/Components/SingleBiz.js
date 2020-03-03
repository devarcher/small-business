import React from "react";
import Map from "./Map";
import { checkAuth } from '../Router'

import { Container, Box, Typography } from "@material-ui/core";
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

const SingleBiz = props => {
  const classes = useStyles();

  const id = parseInt(props.match.params.id);
  const listings = props.listings;
  const biz = listings.find(listing => listing.id === id);

  return (
    <>
      {checkAuth()  && (
        <div className={classes.namediv}>
          <Typography className={classes.name}>
            Logged in as: {props.username}
          </Typography>
        </div>
      )}
      <div>
        <Container maxWidth="sm">
          <Box
            marginBottom="10px"
            borderBottom="1px solid black"
            paddingTop={4}
          >
            <Typography variant="h3" fontWeight="bold">
              {biz.name}
            </Typography>
          </Box>
          <Box marginBottom="10px">
            <Typography variant="h4" fontWeight="bold">
              {biz.address}
            </Typography>
          </Box>
          <Box marginBottom="10px">
            <Typography variant="h4" fontWeight="bold">
              {biz.hours}
            </Typography>
          </Box>
          <Box marginBottom="10px">
            <Typography variant="h6">{biz.description}</Typography>
          </Box>
          <Map biz={biz} />
        </Container>
      </div>
    </>
  );
};

export default SingleBiz;
