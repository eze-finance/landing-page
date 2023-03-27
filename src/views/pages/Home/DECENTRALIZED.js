import React from "react";
import {
	Box,
	Container,
	Typography,
	makeStyles,
	Button,
	Grid,
	Link,
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
										EZE NeoBank & Decentralized  Wallet. 
									</Typography>
									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.3s"
										data-wow-delay="0.3s"
									>
										The App that will put you in control of your digital financial life.
Manage all your money together in one sample App.
										<ul>
											<li><strong>DeFi Crypto Wallet</strong></li>
											<li><strong>Banking</strong></li>
											<li><strong>Visa® Debit Card</strong>, All your digital finances are linked to your Visa Card.</li>
										</ul>

									</Typography>

									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.3s"
										data-wow-delay="0.3s"
									>
										{/* Our soon to release Wallet, will be a DeFi based Hub for our
										up and coming projects, like Clique! */}
									</Typography>

									<Typography
										variant="h5"
										className="wow slideInRight"
										data-wow-duration="0.4s"
										data-wow-delay="0.4s"
										style={{ color: "lime" }}
									>
										{/* Available Now! */}
										1. Download our app
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
											<Link
												href="https://play.google.com/store/apps/details?id=com.eze.app"
												target={"_blank"}
											>
												Android
											</Link>
										</Button>
										<Button
											variant="contained"
											color="secondary"
											startIcon={<img src="/images/home2/apple.svg" />}
										>
											<Link
												href="https://apps.apple.com/us/app/eze/id1598958696"
												target={"_blank"}
											>
												ios
											</Link>
										</Button>
									</Box>

									<Typography
										variant="h5"
										className="wow slideInRight"
										data-wow-duration="0.4s"
										data-wow-delay="0.4s"
										style={{ color: "lime" }}
									>
										{/* Available Now! */}
										2. Create Wallet
									</Typography>

									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.3s"
										data-wow-delay="0.3s"
									>
										EZE only creates 24 Words Recovery Phrases! That is the highest tier of security so we highly recommended to do the backup to iCloud or Google Drive right after you create your wallet.


									</Typography>

									<Typography
										variant="h5"
										className="wow slideInRight"
										data-wow-duration="0.4s"
										data-wow-delay="0.4s"
										style={{ color: "lime" }}
									>
										3. Start Banking
									</Typography>

									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.3s"
										data-wow-delay="0.3s"
									>
										Coming Soon!


									</Typography>
									{/* <Typography
										variant="body1"
										style={{ fontWeight: "600" }}
										className="wow bounceInUp"
										data-wow-duration="0.7s"
										data-wow-delay="0.7s"
									>
										Coming soon! end of Q2 2022
									</Typography> */}

									{/* <Typography
										variant="h1"
										className="wow slideInRight"
										data-wow-duration="0.1s"
										data-wow-delay="0.1s"
									>
										EZE Chat moves digital money Instantly.
									</Typography>
									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.3s"
										data-wow-delay="0.3s"
									>
										PAY AND GET PAID, FAST & EASY. SEND MONEY TO FRIENDS AND FAMILY, OR REQUEST IT TO SETTLE UP EASILY.

									</Typography> */}
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
