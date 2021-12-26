import React from "react";
import {
	Grid,
	Box,
	Button,
	Container,
	Typography,
	makeStyles,
	Theme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
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
									<Link to="/coming-soon">Audit</Link>
								</li>
								<li>
									<Link to="/coming-soon">Bounty</Link>
								</li>
								<li>
									<Link to="/coming-soon">Jobs </Link>
								</li>
							</ul>
						</Box>
					</Grid>

					<Grid item xs={6} sm={4} md={2} align="left">
						<Box class=" col-lg-4 col-md-4 col-sm-6 col-12">
							<Typography variant="h5">Products</Typography>
							<ul class="footer_text">
								<li>
									<Link to="/">Staking</Link>
								</li>
								<li>
									<Link to="/coming-soon">Bonds</Link>
								</li>
								<li>
									<Link to="/coming-soon">Swap</Link>
								</li>
								<li>
									<Link to="/clique">EZE CLique</Link>
								</li>
								<li>
									<Link to="/coming-soon">EZE Live</Link>
								</li>
							</ul>
						</Box>
					</Grid>

					<Grid item xs={6} sm={4} md={2} align="left">
						<Box class=" col-lg-4 col-md-4 col-sm-6 col-12">
							<Typography variant="h5">Support</Typography>

							<ul class="footer_text">
								<li>
									<Link to="/coming-soon">Help Center</Link>
								</li>
								<li>
									<Link to="/coming-soon">Terms of Service</Link>
								</li>
								<li>
									<Link to="/coming-soon">Privacy Policy</Link>
								</li>
								<li>
									<Link to="/coming-soon">Contact us</Link>
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
							<Link
								href="https://www.linkedin.com/in/eze-finance-580a17219/"
								target="_blank"
							>
								<FaLinkedinIn />
							</Link>
							<Link href="https://twitter.com/eze_finance" target="_blank">
								<FaTwitter />
							</Link>
							<Link href="https://t.me/ezefinance" target="_blank">
								<FaTelegramPlane />
							</Link>
							{/* <Link href="#" target="_blank">
								<FaYoutube />
							</Link> */}
							<Link href="https://medium.com/@ezefinance" target="_blank">
								<FaMediumM />
							</Link>
							<Link
								href="https://www.instagram.com/eze.finance"
								target="_blank"
							>
								<AiOutlineInstagram />
							</Link>
							<Link href="https://www.reddit.com/r/EZEfinance" target="_blank">
								<FaRedditAlien />
							</Link>
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
