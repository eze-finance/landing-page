import React from "react";
import {
	Box,
	Container,
	Typography,
	makeStyles,
	// Button, Grid, Theme
} from "@material-ui/core";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
	bannerBox: {
		position: "relative",
		backgroundColor: "#000",
		padding: " 100px 0px 90px",

		[theme.breakpoints.down("xs")]: {
			padding: " 50px 0px 60px",
		},
	},

	textbox: {
		position: "relative",
		textAlign: "center",
		"& h1": {
			fontSize: "63px",
			fontWeight: "600",
			color: theme.palette.primary.main,
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
	investorImg: {
		maxWidth: "90%",
		margin: "0 auto",
	},
	mainBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		marginTop: "100px",
		[theme.breakpoints.down("xs")]: {
			display: "block",
		},
	},
	linev: {
		[theme.breakpoints.down("xs")]: {
			height: "80px",
		},
	},
	box2Holder: {
		width: "100%",
		textAlign: "center",
		"& p": {
			color: theme.palette.primary.dark,
			lineHeight: "28px",
			margin: "0 auto",
			maxWidth: "285px",
		},
	},
	box1Holder: {
		width: "100%",
		textAlign: "center",
		"& p": {
			color: theme.palette.primary.dark,
			lineHeight: "28px",
			margin: "0 auto",
			maxWidth: "285px",
		},
	},
	box1: {
		overflow: "hidden",
		borderRadius: "20px",

		position: "relative",
		background: " rgb(36,14,37)",
		background:
			"linear-gradient(360deg, rgba(36,14,37,0.8575805322128851) 0%, rgba(255,255,255,0) 100%)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		padding: "95px 30px 65px",
		textAlign: "center",
		// border:"1px solid rgba(255,255,255,.25)",
		"& h3": {
			margin: "20px 0 10px",
			fontSize: "35px",
		},
		"& p": {
			color: theme.palette.primary.dark,
			lineHeight: "28px",
		},
	},
	box2: {
		width: "160px",
		minWidth: "160px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "160px",
		flexDirection: "column",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			minWidth: "100%",
			marginTop: "20px",
			marginBottom: "20px",
		},
		"& h3": {
			margin: "30px 0 0",
			color: theme.palette.primary.main,
			fontSize: "35px",
		},
		"& h6": {
			color: theme.palette.secondary.main,
			fontSize: "9px",
		},
	},
	totalValuesWrap: {
		position: " absolute",
		top: "0px",
		right: "0px",
		bottom: "0px",
		left: "0px",
		zIndex: "11",
		width: "100%",
	},
	lineH: { marginTop: "35px" },
	colorWhite: {
		color: "white",
	},
}));

export default function HowItWorks() {
	const classes = useStyles();

	return (
		<Box className={classes.bannerBox}>
			<Container maxWidth="fixed">
				<Box className={classes.textbox} textAlign="center" pb={4}>
					<Typography variant="h1">How it works</Typography>
				</Box>

				<Box mt={5} textAlign="center">
					<img
						src="/images/home/howitworks.png"
						width="100%"
						className={classes.investorImg}
						alt=""
					/>

					<Box></Box>
				</Box>
			</Container>
			<Container
				maxWidth="md"
				className="wow slideInRight"
				data-wow-duration="0.4s"
				data-wow-delay="0.4s"
			>
				<Box className={classes.mainBox} mt={4}>
					<Box className={classes.box1Holder}>
						<Box className={classes.box1}>
							<img
								className={classes.totalValuesWrap}
								src="/images/home/borderbox.svg"
								alt="Total values border"
								loading="lazy"
							/>
							<img
								className={classes.iconinvestor}
								src="/images/home/iconinvestor1.svg"
								alt="Total values border"
								loading="lazy"
							/>
							<Typography variant="h3" color="primary">
								Market Maker
							</Typography>
							<Typography variant="body2" color="primary">
								A market maker will be the community leader with the privilege
								to create networks and contracts. They will be vetted and will
								have a verified profit making track record that ensures trust
								and honest claims.
							</Typography>
						</Box>
						<img
							className={classes.totalValuesdWrap}
							src="/images/home/leftarrow.svg"
							alt="Total values border"
							loading="lazy"
						/>
						<Typography variant="body2" color="primary">
							Market makers place orders at their preferred exchange via the Eze
							Clique ordering platform.
						</Typography>
					</Box>
					<Box className={classes.box2}>
						<img
							className={classes.linev}
							src="/images/home/linev.svg"
							alt="Total values border"
							loading="lazy"
						/>
						<img
							src="/images/home/iconinvestor.svg"
							alt="Total values border"
							loading="lazy"
						/>
						<img
							className={classes.lineH}
							src="/images/home/lineh.svg"
							alt="Total values border"
							loading="lazy"
						/>
						<Typography variant="h3">Order</Typography>
						<Typography variant="h6">Matched with a contract</Typography>
					</Box>
					<Box className={classes.box2Holder}>
						<Box className={classes.box1}>
							<img
								className={classes.totalValuesWrap}
								src="/images/home/borderbox.svg"
								alt="Total values border"
								loading="lazy"
							/>
							<img
								className={classes.iconinvestor}
								src="/images/home/iconinvestor2.svg"
								alt="Total values border"
								loading="lazy"
							/>
							<Typography variant="h3" color="primary">
								Investor
							</Typography>
							<Typography variant="body2">
								An investor will be following the trades of experienced market
								makers. By reviewing and signing open contracts in a specific
								network, orders will be simultaneously be placed matching the
								market maker.
							</Typography>
						</Box>
						<img
							className={classes.totalValuesdWrap}
							src="/images/home/rightarrow.svg"
							alt="Total values border"
							loading="lazy"
						/>
						<Typography variant="body2" color="primary">
							Investors connect their Eze Clique account to a crypto exchange of
							their choosing.
						</Typography>
					</Box>
				</Box>
			</Container>

			<Container maxWidth="md">
				<Box textAlign={"center"} pb={4} style={{ marginTop: "50px" }}>
					<Typography variant="p" className={classes.colorWhite}>
						A decentralized ecosystem for crypto investment management which
						links fresh investors with vetted market makers, incentivized to
						benefit both.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
