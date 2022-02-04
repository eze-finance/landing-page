import React from "react";
import {
	Grid,
	Box,
	Container,
	Typography,
	makeStyles,
	// Button,
	// Theme,
} from "@material-ui/core";

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
		padding: "140px 0px 50px",
		zIndex: " 1",
		[theme.breakpoints.down("md")]: {
			padding: "30px 0px 50px",
			minHeight: "500px",
		},
		[theme.breakpoints.down("xs")]: {
			padding: "30px 0px 50px",
			minHeight: "400px",
		},
	},

	globe: {
		position: "absolute",
		top: "15%",
		right: "0",
		width: "70%",
		maxWidth: "1100px",
		zIndex: "-1",
		[theme.breakpoints.down("sm")]: {
			opacity: "0.7",
			top: "25%",
			right: "-20%",
			width: "70%",
		},
		[theme.breakpoints.down("xs")]: {
			position: "relative",
			width: "100%",
			opacity: "1",
			top: "auto",
			right: "auto",
			marginTop: "35px",
		},
	},
	textbox: {
		position: "relative",
		marginTop: "90px",
		"& .textboxYellow": {
			padding: "50px 0",
			marginTop: "90px",
			position: "relative",
			[theme.breakpoints.down("xs")]: {
				padding: "20px 0",
				marginTop: "10px",
			},

			"&::before": {
				content: '" "',
				position: "absolute",
				right: "0",
				height: "100%",
				opacity: "0.25",
				top: "0",
				width: "1200px",
				background: " rgb(255,158,46)",
				background:
					"linear-gradient(90deg, rgba(255,158,46,1) 0%, rgba(255,255,255,0) 100%)",
				[theme.breakpoints.down("xs")]: {
					width: "700px",
				},
			},
			"& h3": {
				fontSize: "20px",
				marginTop: "0px",
				color: "#ffbc48 ",
				lineHeight: "28px",
				fontWeight: 400,
				[theme.breakpoints.down("xs")]: {
					fontSize: "16px",
					lineHeight: "25px",
				},
			},
		},
		position: "relative",
		"& h1": {
			fontSize: "78px",
			fontWeight: "700",
			margin: "40px 0 20px",
			color: theme.palette.primary.main,
			lineHeight: "80px",
			[theme.breakpoints.down("md")]: {
				fontSize: "55px",
				lineHeight: "70px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "44px",
				lineHeight: "60px",
				margin: "20px 0 10px",
			},
		},

		"& h5": {
			fontSize: "16px",
			color: theme.palette.primary.dark,
			lineHeight: "24px",
			fontWeight: 400,
			[theme.breakpoints.down("xs")]: {
				fontSize: "15px",
			},
		},
	},
}));

export default function SkeletonChildrenDemo(props) {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.bannerBox}>
				{/* <div className={classes.shade}></div> */}

				<Container maxWidth="lg">
					<Grid container spacing={3} alignItems="center">
						<Grid
							item
							xs={12}
							sm={7}
							md={6}
							lg={5}
							className={classes.gridflex}
						>
							<Box className={classes.textbox}>
								<Box
									className="textboxYellow wow slideInRight"
									data-wow-duration="0.1s"
									data-wow-delay="0.1s"
								>
									<Typography variant="h3">
										A market maker and investor ecosystem for crypto trading
									</Typography>
								</Box>
								<Box
									component="div"
									sx={{ display: { xs: "block", sm: "none" } }}
								>
									<img
										src="/images/home/banner.svg"
										width="100%"
										className={classes.globe}
										alt=""
									/>
								</Box>
								<Typography variant="h1">Introduction</Typography>
								<Typography variant="h5">
									EZE Clique is a Decentralized platform for crypto investment
									management which links new and retail investors with elite
									traders, incentivized to benefit both.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
					<img
						src="/images/home/banner.svg"
						width="100%"
						className={classes.globe}
						alt=""
					/>
				</Box>
			</Box>
		</>
	);
}
