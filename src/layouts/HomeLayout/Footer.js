import React, { useState } from "react";
import {
	Grid,
	Box,
	Button,
	Container,
	Typography,
	makeStyles,
	Link as ATag,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import {} from "react-feather";
import validator from "validator";
import { toast } from "react-toastify";
const client = require("@sendgrid/client");
client.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

const useStyles = makeStyles((theme) => ({
	noUnderline: {
		textDecoration: "none",
	},
	lowerFooter: {
		borderTop: "1px solid #503D5D",
		padding: "15px 0 10px",
		textAlign: "center",
		"& h6": {
			color: theme.palette.primary.dark,
			fontSize: "14px",
			fontWeight: "500",
			lineHeight: "24px",
			marginBottom: "9px",
			display: "block",
			"&:hover": {
				color: "#fff",
				textDecoration: "none",
			},
		},
	},
	footerSection: {
		position: "relative",
		borderTop: "1px solid #503D5D",
		backgroundPosition: " bottom left",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		paddingTop: "57px",
		"& h5": {
			fontSize: "18px",
			color: theme.palette.primary.main,
			marginBottom: "20px",
		},
		"& p": {
			fontSize: "12px",
			color: "#fff",
			margin: "0",
			padding: "0px 0 10px",
		},
		"& ul": {
			paddingLeft: "0",
			listStyle: "none",
			margin: "0",
		},

		"& .MuiOutlinedInput-adornedEnd": {
			paddingRight: "0px",
			height: "55px",
			background: "#1A1B1D",
			borderRadius: "7px",
			fontSize: "14px",
			border: "0.1px solid #020202",
		},
		"& .MuiButton-containedSizeSmall": {
			height: "53px",
			fontSize: "14px",
			borderRadius: "9px 7px 7px 9px",
		},
		"& .footer_text": {
			"& a": {
				color: theme.palette.primary.dark,
				fontSize: "14px",
				fontWeight: "500",
				lineHeight: "24px",
				marginBottom: "9px",
				display: "block",
				"&:hover": {
					color: "#fff",
					textDecoration: "none",
				},
			},
		},
		"& .follow": {
			display: "flex",
			"& a": {
				background: "#efc437",
				color: "#000",
				marginRight: "5px",
				height: "30px",
				width: "30px",
				borderRadius: "40%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				"&:hover": {
					background: "#efc437",
					color: "#fff",
				},
			},
		},
	},
}));

export default function Liquidity() {
	const classes = useStyles();
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
		<Box className={classes.footerSection}>
			<Container maxWidth="lg" style={{ paddingBottom: "70px" }}>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={12} md={2}>
						<img alt="" src="/images/logoFooter.png" width={120} />
					</Grid>

					<Grid item xs={6} sm={4} md={2} align="left">
						<Box class=" col-lg-4 col-md-4 col-sm-6 col-12">
							<Typography variant="h5">Developers</Typography>
							<ul className="footer_text">
								{/* <li>
									<Link href="#">Github</Link>
								</li> */}
								<li>
									<Link to="/coming-soon" className={classes.noUnderline}>
										Audit
									</Link>
								</li>
								<li>
									<Link to="/coming-soon" className={classes.noUnderline}>
										Bounty
									</Link>
								</li>
								<li>
									<Link to="/coming-soon" className={classes.noUnderline}>
										Jobs{" "}
									</Link>
								</li>
							</ul>
						</Box>
					</Grid>

					<Grid item xs={6} sm={4} md={2} align="left">
						<Box class=" col-lg-4 col-md-4 col-sm-6 col-12">
							<Typography variant="h5">Products</Typography>
							<ul class="footer_text">
								{/* <li>
									<Link to="/" className={classes.noUnderline}>
										Staking
									</Link>
								</li>
								<li>
									<Link to="/coming-soon" className={classes.noUnderline}>
										Bonds
									</Link>
								</li> */}
								<li>
									<Link to="/coming-soon" className={classes.noUnderline}>
										Swap
									</Link>
								</li>
								<li>
									<Link to="/clique" className={classes.noUnderline}>
										EZE CLique
									</Link>
								</li>
								{/* <li>
									<Link to="/coming-soon" className={classes.noUnderline}>
										EZE Scan
									</Link>
								</li> */}
								<li>
									<a
										href="https://www.ieze.info/#/"
										className={classes.noUnderline}
									>
										Vault
									</a>
								</li>
							</ul>
						</Box>
					</Grid>

					<Grid item xs={6} sm={4} md={2} align="left">
						<Box class=" col-lg-4 col-md-4 col-sm-6 col-12">
							<Typography variant="h5">Support</Typography>

							<ul class="footer_text">
								<li>
									<Link to="/coming-soon" className={classes.noUnderline}>
										Help Center
									</Link>
								</li>
								<li>
									<Link to="/coming-soon" className={classes.noUnderline}>
										Terms of Service
									</Link>
								</li>
								<li>
									<Link to="/privacy" className={classes.noUnderline}>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link to="/contact-us" className={classes.noUnderline}>
										Contact us
									</Link>
								</li>
							</ul>
						</Box>
					</Grid>

					<Grid item xs={12} sm={6} md={4} align="left">
						<Box>
							<Typography variant="h5"> Subscribe to EZE Newsletter</Typography>
							<Typography variant="body2">
								Get the latest news and updates
							</Typography>
							<TextField
								name="email"
								id="email"
								value={toSend.email}
								onChange={handleChange}
								style={{ marginTop: "2px" }}
								id="outlined-basic"
								placeholder="Enter your Email"
								variant="outlined"
								autoComplete="off"
								fullWidth
								InputProps={{
									endAdornment: (
										<Button
											variant="contained"
											size="small"
											color="secondary"
											endIcon={<FaChevronRight style={{ fontSize: "10px" }} />}
											onClick={saveEmail}
										>
											Subscribe
										</Button>
									),
									classes: {
										adornedEnd: classes.adornedEnd,
									},
								}}
							/>
						</Box>
						<Box align="left" mt={3} mb={3} className="follow">
							{/* <Link href="#" target="_blank">
								<FaFacebookF />
							</Link> */}
							<ATag
								href="https://www.linkedin.com/company/ezefinance"
								target="_blank"
							>
								<FaLinkedinIn />
							</ATag>
							<ATag href="https://twitter.com/eze_finance" target="_blank">
								<FaTwitter />
							</ATag>
							<ATag href="https://t.me/ezefinance" target="_blank">
								<FaTelegramPlane />
							</ATag>
							{/* <Link href="#" target="_blank">
								<FaYoutube />
							</Link> */}
							<ATag href="https://medium.com/@ezefinance" target="_blank">
								<FaMediumM />
							</ATag>
							<ATag
								href="https://www.instagram.com/eze.finance"
								target="_blank"
							>
								<AiOutlineInstagram />
							</ATag>
							<ATag href="https://www.reddit.com/r/EZEfinance" target="_blank">
								<FaRedditAlien />
							</ATag>
							<ATag href="https://discord.io/EZEfinance" target="_blank">
								<FaDiscord />
							</ATag>
							{/* <Link href="#" target="_blank">
								<img src="/images/icongit.svg" alt="" />
							</Link> */}
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Box className={classes.lowerFooter}>
				<Typography variant="h6">
					© 2022 EZE Technologies, INC. All Rights Reserved
				</Typography>
			</Box>
		</Box>
	);
}
