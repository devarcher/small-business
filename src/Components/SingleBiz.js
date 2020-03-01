import React from "react";
import Map from "./Map";
import { Container, Box, Typography } from "@material-ui/core";

const SingleBiz = props => {
  const id = props.match.params.id;
  const listings = props.listings;
  const biz = listings.find(listing => listing.id == id);

  return (
    <div>
      <Container maxWidth="sm">
        <Box marginBottom="10px" borderBottom="1px solid black" paddingTop={4}>
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
  );
};

export default SingleBiz;
