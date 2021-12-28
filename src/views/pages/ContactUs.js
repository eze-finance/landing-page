import React, { useEffect } from "react";
import {
	Grid,
	Box,
	Container,
	Typography,
	TextField,
	makeStyles,
	Button,
} from "@material-ui/core";
import Page from "src/component/Page";
import TopBar from "src/layouts/HomeLayout/TopBar";

const useStyles = makeStyles((theme) => ({
	bannerBox: {
		position: "relative",
		padding: "80px 0px 120px",
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
		padding: "65px 25px",
		overflow: "hidden",
		borderRadius: "16px",
		border: "2px solid rgba(39, 36, 42, 0.47)",
		position: "relative",
		background: " rgb(36,14,37)",
		background: "linear-gradient(rgba(0, 0, 0, 0.13) 0%, #1e0820 100%)",
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
		margin: "-100px",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			height: "40px",
			minWidth: "100%",
			margin: "auto",
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
	roundDots1: {
		position: "absolute",
		top: "230px",
		right: "0",
	},
	TopHeader: {
		background: "linear-gradient(rgba(0, 0, 0, 0.13) 0%, #1e0820 100%)",
		padding: "200px 0 100px",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			padding: "160px 0 60px",
		},
		"& h2": {
			fontSize: "54px",
			fontWeight: "700",
			color: theme.palette.primary.main,
			lineHeight: "62px",
			[theme.breakpoints.down("md")]: {
				fontSize: "44px",
				lineHeight: "50px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "37px",
				lineHeight: "42px",
			},
		},
		"& h4": {
			fontSize: "17px",
			color: theme.palette.primary.main,
			lineHeight: "30px",
			fontWeight: 700,

			[theme.breakpoints.down("md")]: {
				fontSize: "16px",
				lineHeight: "22px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "14px",
				lineHeight: "23px",
			},
		},
	},
	formData: {
		maxWidth: "767px",
		margin: "0 auto",
		marginTop: "70px",
		[theme.breakpoints.down("xs")]: {
			marginTop: "60px",
		},
	},
}));

export default function ContactUs(props) {
	const classes = useStyles();
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<Page title="Contact Us">
			<TopBar />
			<Box className={`${classes.TopHeader} wow bounceInUp`}>
				<Typography variant="h2">Contact Us</Typography>
				<Typography variant="h4">Home / Contact Us</Typography>
			</Box>
			<Box
				className={`${classes.bannerBox} wow bounceInUp`}
				data-wow-duration="0.5s"
				data-wow-delay="0.5s"
			>
				<img
					src="/images/home2/dots.svg"
					className={classes.roundDots}
					alt=""
				/>
				<img
					src="/images/home2/dots.svg"
					className={classes.roundDots1}
					alt=""
				/>
				<Container maxWidth="md" style={{ position: "ralative" }}>
					<Box className={classes.counter}>
						<Box
							className={`${classes.innerData} wow slideInRight`}
							data-wow-duration="0.1s"
							data-wow-delay="0.1s"
						>
							<Typography variant="h2">EZE Technologies</Typography>
							<Typography variant="h4">Get In Touch</Typography>
						</Box>
						<Box
							className={`${classes.formData} wow slideInRight`}
							data-wow-duration="0.1s"
							data-wow-delay="0.1s"
						>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<TextField
										label="Name"
										variant="filled"
										color="primary"
										fullWidth
										size="large"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										label="Email"
										variant="filled"
										color="primary"
										fullWidth
										size="large"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										label="Phone"
										variant="filled"
										color="primary"
										fullWidth
										size="large"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										label="Subject"
										variant="filled"
										color="primary"
										fullWidth
										size="large"
									/>
								</Grid>
								<Grid item xs={12} sm={12}>
									<TextField
										label="Message"
										variant="filled"
										color="primary"
										fullWidth
										size="large"
										multiline
										rows={4}
									/>
									<Box mt={4} textAlign="center" style={{ width: "100%" }}>
										<Button variant="contained" color="secondary" size="large">
											Send Now
										</Button>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</Box>
		</Page>
	);
}
