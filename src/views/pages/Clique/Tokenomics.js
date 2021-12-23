import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Container } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  assignDetailsPaper: {
    overflow: "hidden",
    padding: "100px 0 ",
    position: "relative",
    zIndex: "1",
    // margin: 15,
    borderRadius: 5,
    // backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      padding: " 50px 0px 0px",
    },
    "& h2": {
      color: "#42E8E0",
      fontSize: "50px",
    },
    "& h4": {
      color: "#42E8E0",
      fontSize: "24px",
      lineHeight: "32px",
    },
    "& .apexcharts-legend": {
      display: "none",
    },
  },
  textbox: {
    paddingBottom: "80px",
    position: "relative",
    textAlign: "center",
    "& h1": {
      fontSize: "63px",
      fontWeight: "600",
      background: "linear-gradient(90deg, #2599FA -23.36%, #42E8E0 59.43%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      lineHeight: "70px",
      [theme.breakpoints.down("md")]: {
        fontSize: "50px",
        lineHeight: "60px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "32px",
        lineHeight: "40px",
      },
    },
    "& p": {
      fontSize: "16px",
      color: "#C1C0C0 ",
      lineHeight: "28px",
      fontWeight: 300,
      marginTop: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
  },
  shade: {
    position: "absolute",
    left: "auto",
    top: "auto",
    right: "10%",
    bottom: "10%",
    transform: "rotate(45deg)",
    zIndex: " -1",
    width: " 300px",
    height: "300px",
    borderRadius: " 1000px",
    backgroundImage:
      "radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(42 123 135) 0%, rgb(39 121 124) 95.78%)",
    opacity: "0.55",
    // -webkit-filter: blur(100px);
    filter: "blur(100px)",
  },
  shade2: {
    position: "absolute",
    left: "auto",
    top: "10%",
    right: "10%",
    bottom: "auto",
    zIndex: " -1",
    width: " 300px",
    height: "300px",
    borderRadius: " 1000px",
    backgroundImage:
      "radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(18 52 140 / 58%) 0%, rgb(18 52 140 / 55%) 95.78%)",
    opacity: "0.55",
    // -webkit-filter: blur(100px);
    filter: "blur(100px)",
  },
  shade3: {
    position: "absolute",
    left: "10%",
    top: "21%",
    right: "auto",
    bottom: "auto",
    transform: "rotate(45deg)",
    zIndex: " -1",
    width: " 250px",
    height: "250px",
    borderRadius: " 1000px",
    backgroundImage:
      "radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(42 123 135) 0%, rgb(39 121 124) 95.78%)",
    opacity: "0.55",
    // -webkit-filter: blur(100px);
    filter: "blur(100px)",
  },
}));

function Tokenomics() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.assignDetailsPaper}>
        <div className={classes.shade2}></div>
        <div className={classes.shade3}></div>
        <Container maxWidth="sm">
          <Box className={classes.textbox}>
            <Typography variant="h1" className="wow slideInRight" data-wow-duration="0.2s" data-wow-delay="0.2s">TOKENOMICS</Typography>
            <Typography variant="body1" className="wow slideInRight" data-wow-duration="0.4s" data-wow-delay="0.4s">
              EZE is a DeFi protocol that empowers liquidity providers and
              traders to participate in a financial marketplace that is open and
              accessible to all.
            </Typography>
          </Box>
        </Container>

        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="flex-start">
         
            <Box style={{ width: "100%", textAlign: "center" }} className="wow slideInRight" data-wow-duration="0.4s" data-wow-delay="0.4s">
              <img
                src="/images/tokenomics.svg"
                alt="tokenomics"
                style={{ width: "800px", margin: "0 auto" }}
              />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Tokenomics;
