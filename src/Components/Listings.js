import React from "react";
import { checkAuth } from "../Router";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  namediv: {
    padding: "5px",
    background: "lightgrey"
  },
  name: {
    marginLeft: "20px"
  }
});

export default function Listings(props) {
  const classes = useStyles();
  const rows = props.listings;

  const handleDelete = id => {
    props.deleteListing(id);
  };

  return (
    <>
      {!checkAuth() ? (
        <>
          <Box display="flex" justifyContent="center" padding={8}>
            <Box width="80vw">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Names</TableCell>
                      <TableCell align="center">Description</TableCell>
                      <TableCell align="left">Hours</TableCell>
                      <TableCell align="left">Address</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component={Link} to={`/singlebiz/${row.id}`}>
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="left">{row.hours}</TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <div className={classes.namediv}>
            <Typography className={classes.name}>
              Logged in as: {props.username}
            </Typography>
          </div>
          <Box display="flex" justifyContent="center" padding={8}>
            <Box width="80vw">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Names</TableCell>
                      <TableCell align="center">Description</TableCell>
                      <TableCell align="left">Hours</TableCell>
                      <TableCell align="left">Address</TableCell>
                      <TableCell align="left">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell
                          component="th"
                          scope="row"
                          component={Link}
                          to={`/singlebiz/${row.id}`}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.description}</TableCell>
                        <TableCell align="left">{row.hours}</TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">
                          <DeleteForeverIcon
                            onClick={() => {
                              handleDelete(row.id);
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
