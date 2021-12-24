import React from "react";
import {
	Grid,
	Box,
	Container,
	Typography,
	makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	bannerBox: {
		position: "relative",
		padding: "20px 0px 50px",
		overflow: "hidden",
		marginTop: "30px",
		zIndex: " 1",
		[theme.breakpoints.down("sm")]: {
			padding: "30px 0px 50px",
			marginTop: "20px",
		},
	},
	innerData: {
		position: "relative",
		textAlign: "center",
		"& h2": {
			fontSize: "18px",
			fontWeight: "600",
			color: theme.palette.secondary.main,
			lineHeight: "25px",
			[theme.breakpoints.down("md")]: {
				fontSize: "24px",
				lineHeight: "30px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "17px",
				lineHeight: "25px",
			},
		},
		"& h4": {
			fontSize: "40px",
			color: theme.palette.primary.main,
			lineHeight: "50px",
			fontWeight: 700,
			marginTop: "15px",
			[theme.breakpoints.down("md")]: {
				fontSize: "26px",
				lineHeight: "30px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "17px",
				lineHeight: "25px",
			},
		},
	},
	counter: {
		padding: "65px 0",
		position: "relative",
		overflow: "hidden",
		borderRadius: "20px",

		position: "relative",
		background: " rgb(36,14,37)",
		background:
			"linear-gradient(360deg, rgba(36,14,37,0.8575805322128851) 0%, rgba(255,255,255,0) 100%)",
		"& figure": {
			height: "110px",
			[theme.breakpoints.down("xs")]: {
				height: "60px",
				"& img": {
					height: "50px",
				},
			},
		},

		"& p": {
			fontSize: "21px",
			fontWeight: "500",
			marginBottom: "15px",
			color: theme.palette.primary.dark,
			lineHeight: "23px",
			[theme.breakpoints.down("xs")]: {
				fontSize: "14px",
				lineHeight: "20px",
			},
		},
	},

	totalValuesWrap: {
		position: " absolute",
		top: "-1px",
		right: "-1px",
		bottom: "-1px",
		left: "-1px",
		zIndex: "-1",
		width: "100%",
	},
	DataBox: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		[theme.breakpoints.down("xs")]: {
			display: "block",
		},
	},
	lineBox: {
		position: "relative",
		width: "20px",
		minWidth: "20px",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			height: "40px",
			minWidth: "100%",
		},
		"&::before": {
			content: '" "',
			position: "absolute",
			left: "50%",
			transform: "translateX(-50%)",
			height: "60px",
			opacity: "1",
			top: "-20px",
			width: "1px",
			background: "#482340",
			[theme.breakpoints.down("xs")]: {
				height: "20px",
				top: "0px",
			},
		},
	},
	roundDots: {
		position: "absolute",
		top: "50px",
		left: "0",
	},
}));

export default function DataLine(props) {
	const classes = useStyles();
	return (
		<Box
			className={`${classes.bannerBox} wow bounceInUp`}
			data-wow-duration="0.5s"
			data-wow-delay="0.5s"
		>
			<img src="/images/home2/dots.svg" className={classes.roundDots} alt="" />
			<Container maxWidth="lg" style={{ position: "ralative" }}>
				<Box className={classes.counter}>
					<img
						className={classes.totalValuesWrap}
						src="/images/home/total-values-border.svg"
						alt="Total values border"
						loading="lazy"
					/>
					<Box className={classes.DataBox}>
						<Box
							className={`${classes.innerData} wow slideInRight`}
							data-wow-duration="0.1s"
							data-wow-delay="0.1s"
						>
							<Typography variant="h2">Treasury Balance</Typography>
							<Typography variant="h4">{/* 763,768,941 */}$0</Typography>
						</Box>
						<Box className={classes.lineBox}></Box>
						<Box
							className={`${classes.innerData} wow slideInRight`}
							data-wow-duration="0.2s"
							data-wow-delay="0.2s"
						>
							<Typography variant="h2">Total Value Locked</Typography>
							<Typography variant="h4">
								{/* $2,996,311,618 */}
								$0
							</Typography>
						</Box>
						<Box className={classes.lineBox}></Box>
						<Box
							className={`${classes.innerData} wow slideInRight`}
							data-wow-duration="0.3s"
							data-wow-delay="0.3s"
						>
							<Typography variant="h2">Current APY</Typography>
							<Typography variant="h4">
								{/* 7,109% */}
								0%
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
