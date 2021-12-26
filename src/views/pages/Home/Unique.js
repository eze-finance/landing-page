import React from "react";
import {
	Box,
	Container,
	Typography,
	makeStyles,
	// Button,
	Grid,
	// Theme,
} from "@material-ui/core";
// import { Link } from "react-router-dom";
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
		padding: "100px 0px 100px",

		[theme.breakpoints.down("xs")]: {
			padding: " 20px 0px 60px",
		},
	},

	textbox: {
		position: "relative",
		textAlign: "left",
		"& h1": {
			fontSize: "46px",
			fontWeight: "600",
			marginBottom: "20px",
			color: theme.palette.primary.main,
			lineHeight: "60px",
			[theme.breakpoints.down("md")]: {
				fontSize: "40px",
				lineHeight: "60px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "32px",
				lineHeight: "40px",
			},
		},
		"& p": {
			fontSize: "16px",
			color: theme.palette.primary.dark,
			lineHeight: "28px",
			marginBottom: "30px",
			fontWeight: 300,
			marginTop: "15px",
			[theme.breakpoints.down("xs")]: {
				fontSize: "14px",
			},
		},
	},
	roundDots: {
		position: "absolute",
		top: "50px",
		right: "0",
	},
	globePng: {
		position: "absolute",
		top: "-50px",
		left: "0",
	},
}));

export default function NFTMarketplace() {
	const classes = useStyles();

	return (
		<Box className={classes.bannerBox}>
			<img src="/images/home2/dots.svg" className={classes.roundDots} alt="" />
			<img src="/images/home/globe.png" className={classes.globePng} alt="" />
			<Container maxWidth="lg">
				<Box className={classes.textbox}>
					<Box>
						<Grid spacing={5} container alignItems="center">
							<Grid
								item
								xs={12}
								sm={6}
								md={5}
								className={`wow slideInLeft ${classes.boxOrder12}`}
								data-wow-duration="0.4s"
								data-wow-delay="0.4s"
							>
								<Box>
									{" "}
									<Typography variant="h1">What makes EZE unique?</Typography>
									<Typography variant="body1">
										Our team is really passionate about making this project
										stand out with our vision. We plan to dominate in different
										aspects of the Cryptocurrency arena to further value our
										Market for our investors and supporters. EZE Clique will be
										a great stepping stone to bring the crypto community
										together.
									</Typography>
									{/* <Button
										variant="contained"
										color="secondary"
										size="large"
										component={Link}
										to="/clique"
									>
										Read More
									</Button> */}
								</Box>
							</Grid>
							<Grid
								item
								xs={12}
								sm={6}
								md={7}
								className={`wow slideInRight ${classes.boxOrder21}`}
								data-wow-duration="0.4s"
								data-wow-delay="0.4s"
							>
								<img
									src="/images/home2/handcoin.svg"
									width="100%"
									className={classes.bag}
									alt=""
								/>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
