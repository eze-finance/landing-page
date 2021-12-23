import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    padding: "100px 0px 50px",
    overflow: "hidden",
    marginTop:"70px",
    zIndex: " 1",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 0px 50px",
      marginTop:"20px",
    },
  },
  textbox: {
    position: "relative",
    textAlign: "center",
    padding:"10px 30px",
    "& h1": {
      fontSize: "45px",
      fontWeight: "600",
      color:theme.palette.primary.main,
      lineHeight: "55px",
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "28px",
        lineHeight: "35px",
      },
    },
    "& h6": {
      fontSize: "14px",
      color:theme.palette.primary.dark,
      lineHeight: "21px",
      fontWeight: 300,
      maxWidth:"767px",
      margin:"15px auto 0",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
  },
  counter: {
    padding:"65px 0 0",
    position: "relative",
    '& figure':{
      height:"110px",
      [theme.breakpoints.down("xs")]: {
        height:"60px",
        '& img':{
          height:"50px",
        },
      },
    },
   
    "& p": {
      fontSize: "21px",
      fontWeight: "500",
      marginBottom: "15px",
      color:theme.palette.primary.dark,
      lineHeight: "23px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
  },

  totalValuesWrap: {
    position:" absolute",
    top: "-1px",
    right: "-1px",
    bottom: "-1px",
    left: "-1px",
    zIndex: "-1",
    width: "100%",
},
}));

export default function SkeletonChildrenDemo(props) {
  const classes = useStyles();
  return (
    <Box className={`${classes.bannerBox} wow bounceInUp`} data-wow-duration="0.4s" data-wow-delay="0.4s">
       <Container maxWidth="lg" style={{position:"ralative"}}>
      <Box className={classes.counter}>
      <Box className={classes.textbox} mb={6}>
      <Typography variant="h1">Problem</Typography>
          <Typography variant="h6">
          Unlike the stock market where passive investors can select managed funds to invest in, Crypto markets have yet to devise a way for investors to find market-makers or managed funds with a proven track record.
          </Typography>
      </Box>
        <img className={classes.totalValuesWrap} src="/images/home/total-values-border.svg" alt="Total values border" loading="lazy" />
          <Grid container spacing={2} align="center">
            <Grid item xs={6} sm={3}>
              <figure>
                <img src="/images/home/iconproblem2.svg" alt="" />
              </figure>
              <Typography variant="body2">Accessibility</Typography>
             
            </Grid>
            <Grid item xs={6} sm={3}>
            <figure>
                <img src="/images/home/iconproblem3.svg" alt="" />
              </figure>
              <Typography variant="body2">Time Managemnt</Typography>
             
            </Grid>
            <Grid item xs={6} sm={3}>
            <figure>
                <img src="/images/home/iconproblem1.svg" alt="" />
              </figure>
              <Typography variant="body2">Inflated Claims</Typography>
            
            </Grid>
            <Grid item xs={6} sm={3}>
            <figure>
                <img src="/images/home/iconproblem.svg" alt="" />
              </figure>
              <Typography variant="body2">Trust</Typography>
            
            </Grid>
          </Grid>
        
       
      </Box>
      </Container>
    </Box>
  );
}
