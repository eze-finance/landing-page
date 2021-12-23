import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,Button
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    padding: "50px 0px 50px",
    overflow: "hidden",
    marginTop:"20px",
    zIndex: " 1",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 0px 50px",
      marginTop:"20px",
    },
  },
  textbox: {
    position: "relative",
    textAlign: "center",
    padding:"0 30px",
    "& h1": {
      fontSize: "40px",
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
      marginTop: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
  },
  counter: {
    padding:"65px 0 0",
    position: "relative",
    '& figure':{
      height:"80px",
      '& img':{
        height:"60px",
      },
      [theme.breakpoints.down("xs")]: {
        height:"60px",
        '& img':{
          height:"50px",
        },
      },
    },
   
    "& p": {
      fontSize: "15px",
      fontWeight: "500",
      marginBottom: "15px",
      maxWidth:"317px",
      color:theme.palette.primary.dark,
      lineHeight: "23px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    "& h4": {
      fontSize: "23px",
      fontWeight: "600",
      marginBottom: "15px",
      color:theme.palette.primary.main,
      lineHeight: "28px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        lineHeight: "24px",
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
roundDots:{
  position:"absolute",
  top:"50px",
  right:"0",
},
}));

export default function SkeletonChildrenDemo(props) {
  const classes = useStyles();
  return (
    <Box className={classes.bannerBox}>
        <img
        src="/images/home2/dots.svg"
       
        className={classes.roundDots}
        alt=""
      /> 
       <Container maxWidth="lg" style={{position:"ralative"}}>
      <Box className={classes.counter}>
      <Box className={classes.textbox} mb={4} >
      <Typography variant="h1"  className="wow slideInRight" data-wow-duration="0.3s" data-wow-delay="0.3s">Stake and earn passive income & rewards with EZE!</Typography>
        
      </Box>
        <img className={classes.totalValuesWrap} src="/images/home/total-values-border.svg" alt="Total values border" loading="lazy" />
          <Grid container spacing={6} align="center">
            <Grid item xs={12} sm={4}  className="wow slideInRight" data-wow-duration="0.5s" data-wow-delay="0.5s">
              <figure>
                <img src="/images/home2/icon2.svg" alt="" />
              </figure>
              <Typography variant="h4">Passive income</Typography>
              <Typography variant="body2">Staking generates passive income from compound interests, steadily increasing your EZE tokens in the long haul. Consider it a safe haven for capital in the cryptocurrency space.</Typography>
              <Button variant="contained" color="primary" size="large">- Read More</Button>
             
            </Grid>
            <Grid item xs={12} sm={4}  className="wow slideInRight" data-wow-duration="0.7s" data-wow-delay="0.7s">
            <figure>
                <img src="/images/home2/icon1.svg" alt="" />
              </figure>
              <Typography variant="h4">Asset Security</Typography>
              <Typography variant="body2">Whilst staking EZE gets minted and evenly distributed as a staking reward. This allows your investments to work for you passively. Although when more EZE is staked it reduces</Typography>
              <Button variant="contained" color="primary" size="large">- Read More</Button>
            </Grid>
            <Grid item xs={12} sm={4}  className="wow slideInRight" data-wow-duration="0.9s" data-wow-delay="0.9s">
            <figure>
                <img src="/images/home2/icon3.svg" alt="" />
              </figure>
              <Typography variant="h4">Rweards</Typography>
              <Typography variant="body2">Invest anything in EZE Stalking and redeem a free NFT badge. This NFT badge will show that you are an OG investor in EZE! (Limited time only, gift to our early supporters!</Typography>
                <Button variant="contained" color="primary" size="large">- Read More</Button>
            </Grid>
           
          </Grid>
        
       
      </Box>
      </Container>
    </Box>
  );
}
