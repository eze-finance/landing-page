import {
	Box,
	Button,
	TextField,
	Typography,
	makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import validator from "validator";
import { useHistory } from "react-router-dom";
import Page from "src/component/Page";
import TopBar from "src/layouts/HomeLayout/TopBar";
import { toast } from "react-toastify";
const client = require("@sendgrid/client");
client.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

const useStyles = makeStyles((theme) => ({
	mainBox: {
		minHeight: "100vh",
		height: "900px",
		overflow: "hidden",
		background: "rgb(3 3 5)",
		textAlign: "center",
		position: "relative",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			minHeight: "auto",
			height: "700px",
		},
		[theme.breakpoints.down("sm")]: {
			minHeight: "auto",
			height: "600px",
		},
	},
	mainImg: {
		display: "block",
		margin: "0 auto",
		width: "100%",
		position: "absolute",
		top: -75,
		left: 0,
		[theme.breakpoints.down("md")]: {
			transform: "translateY(-50%)",
			top: "60%",
		},
		[theme.breakpoints.down("sm")]: {
			transform: "translateY(-50%)",
			top: "50%",
		},
	},

	contentholder: {
		textAlign: "center",
		position: "absolute",
		paddingTop: "190px",
		display: "flex",
		bottom: "90px",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		[theme.breakpoints.down("md")]: {
			paddingTop: "260px",
		},
		[theme.breakpoints.down("sm")]: {
			paddingTop: "160px",
		},
	},
	Comingsoon: {
		display: "block",
		margin: "0 auto",
		width: "100%",
		maxWidth: "987px",
		[theme.breakpoints.down("md")]: {
			maxWidth: "767px",
		},
	},
	textHolder: {
		textAlign: "center",

		maxWidth: "472px",
		width: "100%",
		"& h6": {
			marginTop: "90px",
			marginBottom: "20px",
			letterSpacing: "4px",
			fontSize: "14px",
			color: "#f5f5f5",
			fontWeight: "300",
			textTransform: "uppercase",
			[theme.breakpoints.down("sm")]: {
				marginTop: "30px",
			},
		},
		"& .MuiInputBase-root": {
			color: "#fff",
			fontSize: "18px",
			padding: "0 8px",
			letterSpacing: "2px",
		},
		"& button": {
			marginTop: "30px",

			minWidth: "100px",
			color: "#fff",
			fontWeight: "700",
			fontFamily: "Montserrat",
			borderRadius: "50px",
			background: "rgb(118,118,118)",

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

export default function Comingsoon(props) {
	const classes = useStyles();
	const history = useHistory();

	const [toSend, setToSend] = useState({
		email: "",
	});

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	const saveEmail = async (e) => {
		if (validator.isEmail(toSend.email)) {
			const data = {
				contacts: [
					{
						email: toSend.email,
						// "custom_fields": {}
					},
				],
			};

			const request = {
				url: `/v3/marketing/contacts`,
				method: "PUT",
				body: data,
			};

			client
				.request(request)
				.then(([response, body]) => {
					// console.log(response.statusCode);
					// console.log(response.body);
					toast("Thanks for subscribing to our newslatter.", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				})
				.catch((error) => {
					// console.error(error);
					toast.error(
						"Opps! Something went wrong. Please subscribe in sometime.",
						{
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						}
					);
				})
				.finally(() => {
					setToSend({ email: "" });
				});
		} else {
			toast.error("Please enter valid email address.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	return (
		<Page title="Coming Soon">
			<TopBar />

			<Box className={classes.mainBox}>
				<img
					className={classes.mainImg}
					src="/images/bgcomingsoon.jpg"
					alt="coming soon"
				/>

				<Box className={classes.contentholder} px={3}>
					<img
						className={classes.Comingsoon}
						src="/images/comingsoon.png"
						alt="coming soon"
					/>
					<Box className={classes.textHolder}>
						<Typography variant="h6">Enter your email address</Typography>
						<TextField
							name="email"
							id="email"
							id="standard-basic"
							fullWidth
							value={toSend.email}
							onChange={handleChange}
						/>
						<Button
							variant="contained"
							size="large"
							color="secondary"
							onClick={saveEmail}
						>
							SUBSCRIBE
						</Button>
					</Box>
				</Box>
			</Box>
		</Page>
	);
}
