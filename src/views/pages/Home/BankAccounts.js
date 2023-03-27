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

export default function EZEChat() {
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
										Checking & Savings Account.
									</Typography>
									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.5s"
										data-wow-delay="0.5s"
									>
										<strong>Banking services provided by EZE’s bank partner(s).</strong>

										<ol>
											<li>A simpler way without so many fees</li>
											<li>Get paid up to 2 days earlyˆ with direct deposit</li>
											<li>Fee free overdraft up to $200</li>
											<li>Turn on instant transaction alerts</li>
										</ol>

										<div><strong>Safe, secure & trusted by millions</strong></div>
										<div>Your funds are FDIC insured up to $250,000 through our bank’s partners., Members FDIC and we keep your money safe and secure with periodic security tests of our systems.</div>
									</Typography>
									
								</Box>
							</Grid>
						</Grid>
					</Box>

					<Box style={{ marginTop: "100px" }}>
						<Grid spacing={5} container alignItems="center">
							<Grid item xs={12} sm={12} md={12}>
								<Box>
									{" "}
									<Typography
										variant="h2"
										className="wow slideInRight"
										data-wow-duration="0.4s"
										data-wow-delay="0.4s"
										style={{ color: '#9797ff', textAlign: 'center' }}
									>
										You're protected if your Visa credit or cash card is lost, stolen or fraudulently used, online or offline.
									</Typography>
								</Box>

								<Box style={{ marginTop: "50px" }}>
									<Typography
										variant="h1"
										className="wow slideInRight"
										data-wow-duration="0.4s"
										data-wow-delay="0.4s"
									>
										Visa® Cash Card.
									</Typography>
									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.5s"
										data-wow-delay="0.5s"
									>
										<strong>Debit cards issued by our Bank's partners, pursuant to a license from Visa USA Inc.</strong>								
										<ul>
											<li>Earn rewards as you spend</li>
											<li>Over 60k fee free ATMs withdrawals and deposits.</li>
											<li>Use your EZE card instantly with apple or google play.</li>
											<li>Make purchases wherever Visa® debit cards are accepted.</li>
											<li>Turn on instant transaction alerts</li>
											<li>Block your card in one tap</li>
										</ul>
										
									</Typography>
								</Box>

								<Box style={{ marginTop: "50px" }}>
									<Typography
										variant="h1"
										className="wow slideInRight"
										data-wow-duration="0.4s"
										data-wow-delay="0.4s"
									>
										Visa® Secure Credit Card.
									</Typography>
									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.5s"
										data-wow-delay="0.5s"
									>
										<strong>Build your credit by increasing your credit score by an average of 30 points with regular, on-time payments with our new secured credit card.</strong>								
										<ul>
											<li>No Annual fee</li>
											<li>No interest</li>
											<li>No credit check to apply</li>
											<li>No minimum security deposit required</li>
										</ul>
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
