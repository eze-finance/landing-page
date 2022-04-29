import React from "react";
import {
	Box,
	Container,
	Typography,
	makeStyles,
	Button,
	Grid,
	Theme,
} from "@material-ui/core";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
	bannerBox: {
		position: "relative",
		backgroundColor: "#000",
		padding: " 100px 0px 0",

		[theme.breakpoints.down("xs")]: {
			padding: " 50px 0px 10px",
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
		maxWidth: "900px",
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
	three: {
		position: " absolute",
		top: "0px",
		left: "50%",
		width: "100%",
		height: "700px",
		zIndex: "1",
		transform: "translateX(-50%)",
	},
}));

export default function Tokenomics() {
	const classes = useStyles();

	return (
		<Box className={classes.bannerBox} mb={4}>
			<img
				src="/images/home2/three.png"
				width="100%"
				className={classes.three}
				alt=""
			/>
			<Container maxWidth="lg">
				<Box className={classes.textbox} textAlign="center" pb={4}>
					<Typography variant="h1">Tokenomics</Typography>
				</Box>
				<Box mt={5} mb={5} textAlign="center">
					<img
						src="/images/home2/tokenomics.png"
						width="100%"
						className={classes.investorImg}
						alt=""
					/>

					<Box></Box>
				</Box>
				<Box textAlign="center">
					<Button
						variant="contained"
						color="secondary"
						href="https://traderjoexyz.com/trade?inputCurrency=0x3af6e2619140f356b04507b1a47e00091649244a&outputCurrency=0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7#/"
						style={{ marginTop: "15px" }}
						target="_blank"
					>
						Buy EZE on TraderJoe
					</Button>

					<Typography
						variant="h4"
						style={{ color: "#e9df5f", marginTop: "20px" }}
					>
						EZE Token Address:
					</Typography>

					<Typography variant="h5" style={{ marginTop: "5px" }}>
						<a
							href="https://snowtrace.io/token/0x3AF6e2619140f356B04507b1A47e00091649244a"
							className="alink"
							target="_blank"
						>
							0x3AF6e2619140f356B04507b1A47e00091649244a
						</a>
					</Typography>
				</Box>

				<br />
				<br />
			</Container>
		</Box>
	);
}
