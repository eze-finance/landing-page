import React from "react";
import {
	Box,
	Container,
	Typography,
	makeStyles,
	Button,
	Grid,
	// Theme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
	bannerBox: {
		position: "relative",
		backgroundColor: "#000",
		padding: " 160px 0px 100px",

		[theme.breakpoints.down("xs")]: {
			padding: " 50px 0px 60px",
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
}));

export default function NFTMarketplace() {
	const classes = useStyles();

	return (
		<Box className={classes.bannerBox}>
			<img src="/images/home2/dots.svg" className={classes.roundDots} alt="" />
			<Container maxWidth="lg">
				<Box className={classes.textbox}>
					<Box>
						<Grid spacing={5} container alignItems="center">
							<Grid
								item
								xs={12}
								sm={6}
								md={7}
								className="wow slideInLeft"
								data-wow-duration="0.4s"
								data-wow-delay="0.4s"
							>
								<img
									src="/images/home2/clique.svg"
									width="100%"
									className={classes.bag}
									alt=""
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={5}>
								<Box>
									{" "}
									<Typography
										variant="h1"
										className="wow slideInRight"
										data-wow-duration="0.4s"
										data-wow-delay="0.4s"
									>
										EZE Clique
									</Typography>
									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.5s"
										data-wow-delay="0.5s"
									>
										EZE Clique is a Decentralized platform for crypto investment
										management which links new and seasoned investors with
										vetted market makers, incentivized to benefit both.
									</Typography>
									<Button
										variant="contained"
										color="secondary"
										size="large"
										component={Link}
										to="/clique"
										className="wow slideInRight"
										data-wow-duration="0.7s"
										data-wow-delay="0.7s"
									>
										Read More
									</Button>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
