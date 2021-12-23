import React from "react";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button, Grid, Theme 
} from "@material-ui/core";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    backgroundColor: "#000",
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
    "& p": {
      fontSize: "18px",
      color: "#C1C0C0 ",
      lineHeight: "28px",
      fontWeight: 300,
      marginTop: "15px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
  },
  investorImg:{
    maxWidth:"90%",
    margin:"0 auto",
  },
  mainBox:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    marginTop:"100px",
    [theme.breakpoints.down("xs")]: {
      display:"block",
    },
  },
  linev:{
    [theme.breakpoints.down("xs")]: {
      height:"80px",
    },
  },
  box2Holder:{
    width:"100%",
    textAlign:"center",
     '& p':{
      color:theme.palette.primary.dark,
      lineHeight:"28px",
      margin:"0 auto",
      maxWidth:"285px",
    },
  },
  box1Holder:{
    width:"100%",
    textAlign:"center",
    '& p':{
      color:theme.palette.primary.dark,
      lineHeight:"28px",
      margin:"0 auto",
      maxWidth:"285px",
    },
  },
  box1:{
   
    overflow:"hidden",
    borderRadius:"20px",
   
    position: "relative",
    background:" rgb(36,14,37)",
    background: "linear-gradient(360deg, rgba(36,14,37,0.8575805322128851) 0%, rgba(255,255,255,0) 100%)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    padding:"95px 30px 65px",
    textAlign:"center",
    // border:"1px solid rgba(255,255,255,.25)",
    '& h3':{
     margin:"20px 0 10px",
     fontSize:"42px",
    },
    '& p':{
      color:theme.palette.primary.dark,
      lineHeight:"28px",
    },
  },
  box2:{
    width:"160px",
    minWidth:"160px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"160px",
    flexDirection:"column",
    textAlign:"center",
    [theme.breakpoints.down("xs")]: {
      width:"100%",
    minWidth:"100%",marginTop:"20px",
    marginBottom:"20px",
    },
    '& h3':{
      margin:"30px 0 0",
      color:theme.palette.primary.main,
      fontSize:"42px",
     },
     '& h6':{
      color:theme.palette.secondary.main,
      fontSize:"9px",
    },
  },
  totalValuesWrap: {
    position:" absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    zIndex: "11",
    width: "100%",
},
lineH:{marginTop:"35px"},
}));

export default function HowItWorks() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Container maxWidth="lg">
        <Box className={classes.textbox} textAlign="center" pb={4}>
          <Typography variant="h1">Roadmap</Typography>
        </Box>
         
          <Box mt={5}  textAlign="center"  className="wow slideInRight" data-wow-duration="0.2s" data-wow-delay="0.2s">
             <img
     src="/images/home/roadmap.png"
     width="100%"
     className={classes.investorImg}
     alt=""
   />
      
       <Box> 
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md">
        
      </Container>
    
    </Box>
  );
}
