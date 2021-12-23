import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles, Link,
  Button, Grid, Theme 
} from "@material-ui/core";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
 zIndex:"9",
    padding: " 100px 0px",

    [theme.breakpoints.down("xs")]: {
      padding: " 50px 0px 80px",
    },
  },



  textbox: {
    position: "relative",
    textAlign: "center",
    "& h1": {
      fontSize: "63px",
      fontWeight: "600",
      color:theme.palette.primary.main,
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
    
  },
  team:{
    "& img": {
      width:"250px",
      [theme.breakpoints.down("xs")]: {
        width:"200px",
      },
    },
    "& h3": {
      fontSize: "14px",
      color:theme.palette.secondary.main,
      lineHeight: "28px",
      fontWeight: 600,
      marginTop: "0px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
    "& p": {
      fontSize: "12px",
      color:theme.palette.primary.dark,
      lineHeight: "18px",
      fontWeight: 300,
      marginTop: "0px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
    "& h2": {
      fontSize: "17px",
      color:theme.palette.primary.main,
      lineHeight: "28px",
      fontWeight: 500,
      marginTop: "10px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
    "& a": {
      background: "#efc437",
      color: "#000",
      marginRight: "5px",
      height: "30px",
      width: "30px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        background: "#efc437",
        color: "#fff",
      },
    },
  },

  martop:{
    marginTop:"100px",
  [theme.breakpoints.down("xs")]: {
    marginTop:"40px",
  },
}
 
}));

export default function Team() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Container maxWidth="lg">
        <Box className={classes.textbox} textAlign="center" pb={4}>
          <Typography variant="h1">Team</Typography>
        </Box>
         
          <Box mt={5}  textAlign="center">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} className="wow bounceInUp" data-wow-duration="0.2s" data-wow-delay="0.2s" >
                <Box className={classes.team}>
                  <img src="/images/home2/team1.svg" alt=" " />
                <Typography variant="h2">Kenny Cuevas</Typography>
                <Typography variant="h3">CEO</Typography>
                <Typography variant="body2">Business Strategist</Typography>
                <Box align="center" display="flex" justifyContent="center" mt={1} mb={3} className="follow">
              <Link href="#" target="_blank">
                <FaTwitter />
              </Link>
              <Link href="#" target="_blank">
                <FaLinkedinIn />
              </Link>
             
            </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} className="wow bounceInUp" data-wow-duration="0.4s" data-wow-delay="0.4s" >
                <Box className={classes.team}>
                  <img src="/images/home2/team3.svg" alt=" " />
                <Typography variant="h2">JD Saifi</Typography>
                <Typography variant="h3">CTO</Typography>
                <Typography variant="body2">Co-Founder</Typography>
                <Box align="center" display="flex" justifyContent="center" mt={1} mb={3} className="follow">
              <Link href="#" target="_blank">
                <FaTwitter />
              </Link>
              <Link href="#" target="_blank">
                <FaLinkedinIn />
              </Link>
             
            </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} className="wow bounceInUp" data-wow-duration="0.6s" data-wow-delay="0.6s">
                <Box className={classes.team}>
                  <img src="/images/home2/team2.svg" alt=" " />
                <Typography variant="h2">Kenneth Cuevas</Typography>
                <Typography variant="h3">Co-Founder</Typography>
                <Typography variant="body2">Creative Function, community manager</Typography>
                <Box align="center" display="flex" justifyContent="center" mt={1} mb={3} className="follow">
              <Link href="#" target="_blank">
                <FaTwitter />
              </Link>
              <Link href="#" target="_blank">
                <FaLinkedinIn />
              </Link>
             
            </Box>
                </Box>
              </Grid>
            </Grid>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box  textAlign="center" className={`${classes.team} ${classes.martop}`}>
        
                <Typography variant="h3">Partners & Advisors</Typography>
                <Typography variant="h2">Please contact us. We would love to have partners and advisors on board with us!</Typography>
        </Box>
      </Container>
    
    </Box>
  );
}
