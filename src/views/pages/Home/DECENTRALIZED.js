import React from "react";
import {
	Box,
	Container,
	Typography,
	makeStyles,
	Button,
	Grid,
} from "@material-ui/core";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
	boxOrder12: {
		order: 1,
		[theme.breakpoints.down("xs")]: {
			order: 2,
		},
	},
	boxOrder21: {
		order: 2,
		[theme.breakpoints.down("xs")]: {
			order: 1,
		},
	},
	bannerBox: {
		position: "relative",
		backgroundColor: "#000",
		padding: " 100px 0px 100px",

		[theme.breakpoints.down("xs")]: {
			padding: " 50px 0px 60px",
		},
	},

	eclipse: {
		position: "absolute",
		bottom: "-10px",
		right: "-10px",
		maxWidth: "900px",
		filter: " blur(15px)",
	},
	bag: {
		position: "relative",
		zIndex: "1",
		opacity: "0.9",
		filter: " blur(1px)",
		// backdropFilter: "blur(20px) saturate(120%) contrast(200%)",
	},
	roundDots: {
		position: "absolute",
		top: "20px",
		right: "0",
	},
	textbox: {
		position: "relative",
		textAlign: "left",
		marginBottom: "100px",
		zIndex: "2",
		"& h1": {
			fontSize: "50px",
			fontWeight: "800",
			fontFamily: "Montserrat",
			color: theme.palette.primary.main,
			lineHeight: "70px",
			[theme.breakpoints.down("md")]: {
				fontSize: "40px",
				lineHeight: "50px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "27px",
				lineHeight: "35px",
			},
		},
		"& h5": {
			fontSize: "21px",
			fontFamily: "Montserrat",
			color: theme.palette.primary.main,
			lineHeight: "28px",
			fontWeight: 600,
			marginTop: "15px",
			[theme.breakpoints.down("xs")]: {
				fontSize: "19px",
			},
		},
		"& p": {
			fontSize: "16px",
			color: theme.palette.primary.dark,
			lineHeight: "24px",
			fontWeight: 300,
			marginTop: "15px",
			[theme.breakpoints.down("xs")]: {
				fontSize: "14px",
			},
		},
	},
	globe: {
		position: "absolute",
		bottom: "0",
		// transform:"translateY(-50%)",
		right: "-20px",
		width: "100%",
		maxWidth: "1500px",
		// height:"100%",
		zIndex: "1",
		[theme.breakpoints.down("sm")]: {
			opacity: "0.7",
			top: "auto",
			// transform:"translateY(-50%)",
			right: "0",
			width: "100%",
		},
		[theme.breakpoints.down("xs")]: {
			top: "auto",
			bottom: "0",
			height: "auto",
		},
	},
	newButton: {
		"& button": {
			margin: "0",
			marginRight: "15px",
			minWidth: "100px",
			color: "#fff",
			fontSize: "17px",
			padding: "4px 24px",
			borderRadius: "50px",
			background:
				" linear-gradient(335deg, rgba(118,118,118,1) 3%, rgba(54,54,54,0.8939950980392157) 49%, rgba(118,118,118,1) 93%)",
			"&:hover": {
				boxSizing: " border-box",
				color: "#000",
				background:
					" linear-gradient(335deg, rgba(118,118,118,1) 3%, rgba(54,54,54,0.8939950980392157) 49%, rgba(118,118,118,1) 93%)",
			},
		},
	},
}));

export default function DECENTRALIZED() {
	const classes = useStyles();

	return (
		<Box className={classes.bannerBox}>
			<Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
				<img
					src="/images/home2/coins.png"
					width="100%"
					className={classes.globe}
					alt=""
				/>
			</Box>
			<Container maxWidth="lg">
				<Box className={classes.textbox}>
					<Box>
						<Grid spacing={5} container alignItems="center">
							<Grid item xs={12}>
								<Box
									component="div"
									sx={{ display: { xs: "block", sm: "none" } }}
								>
									<img
										src="/images/home2/coins.png"
										width="100%"
										// className={classes.globe}
										style={{ maxWidth: "1500px" }}
										alt=""
									/>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6}>
								<Box>
									<Typography
										variant="h1"
										className="wow slideInRight"
										data-wow-duration="0.1s"
										data-wow-delay="0.1s"
									>
										EZE Finance App
									</Typography>
									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.3s"
										data-wow-delay="0.3s"
									>
										A decentralized exchange where users will have access to EZE
										Staking and Bonds for Passive income and rewards! A
										decentralized ecosystem for crypto investment management
										which links new and seasoned investors with vetted market
										makers, incentivized to benefit both.
									</Typography>
									<Typography
										variant="h5"
										className="wow slideInRight"
										data-wow-duration="0.4s"
										data-wow-delay="0.4s"
									>
										Download EZE Finance App
									</Typography>
									<Box
										my={3}
										className={`${classes.newButton}  wow slideInRight`}
										data-wow-duration="0.5s"
										data-wow-delay="0.5s"
									>
										<Button
											variant="contained"
											color="secondary"
											startIcon={<img src="/images/home2/android.svg" />}
										>
											Android
										</Button>
										<Button
											variant="contained"
											color="secondary"
											startIcon={<img src="/images/home2/apple.svg" />}
										>
											ios
										</Button>
									</Box>
									<Typography
										variant="body1"
										style={{ fontWeight: "600" }}
										className="wow bounceInUp"
										data-wow-duration="0.7s"
										data-wow-delay="0.7s"
									>
										Coming soon! ending January 2022.
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
								{/* <img
        src="/images/home2/eclipse.svg"
        width="100%"
      className={classes.eclipse}
        alt=""
      /> */}
								{/* <img
        src="/images/home2/bag.svg"
        width="100%"
        className={classes.bag}
        alt=""
      /> */}
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
