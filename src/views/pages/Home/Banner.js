import React, { useState, useEffect } from "react";
import moment from "moment";
import {
	Grid,
	Box,
	Container,
	Typography,
	makeStyles,
	Button,
	Theme,
} from "@material-ui/core";
import Countdown from "../../../component/Countdown";

const useStyles = makeStyles((theme) => ({
	bannerBox: {
		position: "relative",
		backgroundColor: "#000",
		padding: "140px 0px 50px",
		minHeight: "800px",
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
		top: "0",
		// transform:"translateY(-50%)",
		left: "0",
		width: "65%",
		maxWidth: "1100px",
		zIndex: "-1",
		[theme.breakpoints.down("sm")]: {
			position: "relative",
			width: "100%",
			opacity: "1",
			top: "auto",
			right: "auto",
			marginTop: "0px",
			transform: "translateY(0)",
		},
		[theme.breakpoints.down("xs")]: {
			position: "relative",
			width: "110%",
			opacity: "1",
			top: "auto",
			right: "auto",
			marginTop: "0px",
			transform: "translateY(0)",
		},
	},
	textBoxList: {
		position: "relative",
		textAlign: "left",
		paddingLeft: "47px",
		marginTop: "25px",
		"& h4": {
			fontSize: "22px",
			marginTop: "0px",
			color: theme.palette.primary.main,
			lineHeight: "30px",
			fontWeight: 600,
			"& span": {
				fontSize: "16px",
				lineHeight: "24px",
				fontWeight: 400,
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "16px",
				lineHeight: "25px",
			},
		},
		"& h6": {
			marginTop: "10px",
			fontSize: "16px",
			color: theme.palette.primary.dark,
			lineHeight: "24px",
			fontWeight: 400,
			[theme.breakpoints.down("xs")]: {
				fontSize: "13px",
				lineHeight: "19px",
			},
		},
		"&::before": {
			content: '" "',
			position: "absolute",
			left: "15px",
			height: "20px",
			opacity: "1",
			top: "3px",
			width: "20px",
			background: "url(/images/home2/check.svg)",
			backgroundRepeat: "no-repeat",
		},
	},
	textbox: {
		position: "relative",
		marginTop: "0",
		textAlign: "center",
		[theme.breakpoints.down("sm")]: {
			marginTop: "-80px",
		},
		"& h3": {
			fontSize: "40px",
			marginTop: "0px",
			color: theme.palette.primary.main,
			lineHeight: "48px",
			fontWeight: 600,
			[theme.breakpoints.down("xs")]: {
				fontSize: "16px",
				lineHeight: "25px",
			},
		},

		position: "relative",
		"& h1": {
			fontSize: "58px",
			fontWeight: "700",
			margin: "40px 0 20px",
			background:
				"linear-gradient(90deg, rgba(213,171,32,1) 3%, rgba(255,234,132,1) 49%, rgba(213,171,32,1) 93%)",
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
			lineHeight: "80px",
			[theme.breakpoints.down("md")]: {
				fontSize: "45px",
				lineHeight: "55px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "38px",
				lineHeight: "50px",
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

export default function Banner(props) {
	const classes = useStyles();
	const initialCountdownSettings = {
		dateValue: "01-30-2022",
		timeValue: "11:59",
		ampmValue: "pm",
		unixEndDate: "1643587140",
	};
	const initialCountdownTimer = {
		days: "",
		hours: "",
		minutes: "",
		seconds: "",
	};
	const [countdownSettings, setCountdownSettings] = useState({
		...initialCountdownSettings,
	});
	const [countdownTimer, setCountdownTimer] = useState({
		...initialCountdownTimer,
	});

	useEffect(() => {
		let timer = null;

		if (countdownSettings.unixEndDate) {
			timer = setInterval(() => playTimer(countdownSettings.unixEndDate), 1000);
		}
		return () => {
			clearInterval(timer);
			timer = null;
		};
	}, [countdownSettings.unixEndDate]);

	useEffect(() => {
		setCountdownSettings({
			...initialCountdownSettings,
		});
	}, [true]);

	function playTimer(currentUnixEndDate) {
		const distance = currentUnixEndDate - moment().format("X");

		if (distance > 0) {
			setCountdownTimer((prevCountdownTimer) => {
				return {
					...prevCountdownTimer,
					days: parseInt(distance / (60 * 60 * 24), 10),
					hours: parseInt((distance % (60 * 60 * 24)) / (60 * 60), 10),
					mins: parseInt((distance % (60 * 60)) / 60, 10),
					secs: parseInt(distance % 60, 10),
				};
			});
		} else {
			setCountdownSettings({ ...initialCountdownSettings });
			setCountdownTimer({ ...initialCountdownTimer });
		}
	}
	return (
		<>
			<Box className={classes.bannerBox}>
				{/* <div className={classes.shade}></div> */}
				<img
					src="/images/home2/banner.png"
					width="100%"
					className={classes.globe}
					alt=""
				/>
				<Container maxWidth="lg">
					<Grid container spacing={3} alignItems="center">
						<Grid
							item
							xs={12}
							sm={12}
							md={6}
							lg={6}
							className={classes.gridflex}
						></Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={6}
							lg={6}
							className={classes.gridflex}
						>
							<Box>
								<Countdown
									countdownTimer={countdownTimer}
									unixEndDate={countdownSettings.unixEndDate}
								/>
							</Box>
							<Box className={classes.textbox}>
								<Typography
									variant="h1"
									className="wow slideInRight"
									data-wow-duration="0.1s"
									data-wow-delay="0.1s"
								>
									APY 0%
								</Typography>
								<Typography
									variant="h3"
									className="wow slideInRight"
									data-wow-duration="0.2s"
									data-wow-delay="0.2s"
								>
									Staking with EZE for newbies
								</Typography>

								<Box
									className={`${classes.textBoxList} wow slideInRight`}
									data-wow-duration="0.3s"
									data-wow-delay="0.2s"
								>
									<Typography variant="h4">
										Treasury Income <span>- Liquidity Pools & Bond fees</span>
									</Typography>
									<Typography variant="h6">
										LP and Bonds Fees increase treasury income and lock in
										liquidity and assist manage EZE supply.
									</Typography>
								</Box>
								<Box
									className={`${classes.textBoxList} wow slideInRight`}
									data-wow-duration="0.4s"
									data-wow-delay="0.4s"
								>
									<Typography variant="h4">
										EZE Treasury <span>- Bullish Treasury</span>
									</Typography>
									<Typography variant="h6">
										Treasury influx is utilized to enhance treasury Balance
										whilst backing EZE Tokens and regulating APY%.
									</Typography>
								</Box>
								<Box
									className={`${classes.textBoxList} wow slideInRight`}
									data-wow-duration="0.5s"
									data-wow-delay="0.5s"
								>
									<Typography variant="h4">
										EZE Token <span>- Yield Revenue</span>
									</Typography>
									<Typography variant="h6">
										Compounds yield automatically through a treasury backed
										currency with intrinsic value.
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
