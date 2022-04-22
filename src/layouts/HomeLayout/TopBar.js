import {
	AppBar,
	Toolbar,
	makeStyles,
	Button,
	IconButton,
	Drawer,
	Grid,
	Box,
	Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Logo from "./../../component/Logo";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;
const useStyles = makeStyles((theme) => ({
	menuButtonActive: {
		color: "#efc437 !important",
	},
	menuButton: {
		fontSize: "17px",
		lineHeight: "24px",
		fontWeight: "600",
		borderRadius: 0,
		minWidth: "auto",
		color: "#fff",
		// height: "31px",
		padding: "0px 7px",
		letterSpacing: "1px",
		margin: "0 7px",
		fontFamily: "Montserrat",
		"@media (max-width: 900px)": {
			fontStyle: "normal",
			letterSpacing: "-0.6px",
			lineHeight: "24px",
			color: "#FFF",
			padding: "15px !important",
			width: "100%",
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		"&.active": {
			color: "#efc437",
		},
		"&:hover": {
			color: "#efc437",
		},
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		height: "100%",
		"@media (max-width: 900px)": {
			paddingLeft: "75px",
			paddingRight: "20px",
			height: "100%",
		},
	},

	logoDrawer: {
		paddingLeft: "10px",
		width: "140px",
		marginBottom: "5px",
	},
	drawerContainer: {
		padding: "20px 0px ",
		height: "100%",
		background: "#000",
		width: "260px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	drawericon: {
		color: "#000",
		position: "absolute",
		top: "-6px",
		right: "-10px",
		fontSize: "25px",
	},
	logoImg: {
		width: "75px",
		margin: " 14px 15px 11px 0px",
		objectFit: "contain",
		"@media (max-width: 500px)": {
			margin: " 11px 1px 3px 0px",
			width: "52px",
		},
	},

	containerHeight: {
		height: "100%",
	},
	mainHeader: {
		justifyContent: "space-between",
		padding: "0px",
	},

	menuul: {
		display: "flex",
		listStyle: "none",
		padding: "0",
		justifyContent: "flex-end",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			display: "block",
		},
		"& a": {
			color: "#fff",
			padding: "5px 15px",
			textDecoration: "none",
			cursor: "pointer",
		},
		"& button": {
			margin: "0",
			marginLeft: "15px",
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

export default function Header({ buttonClick }) {
	const {
		menuButtonActive,
		menuButton,
		toolbar,
		menuul,
		drawerContainer,
		drawericon,
		logoDrawer,
		containerHeight,
		mainHeader,
	} = useStyles();
	const history = useHistory();
	// console.log(history.location);

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 1220
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};
		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());
	}, []);

	const displayDesktop = () => {
		return (
			// <Container maxWidth="lg" className="p-0">
			<Toolbar className={toolbar}>
				<Grid
					container
					direction="row"
					justify="flex-end"
					alignItems="center"
					style={{ paddingLeft: "0px" }}
				>
					<Grid item xs={2}>
						{productLogo}
					</Grid>
					<Grid item xs={10} align="right">
						{menuText}
					</Grid>
				</Grid>
			</Toolbar>
			// </Container>
		);
	};

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar className={mainHeader}>
				<Drawer
					{...{
						anchor: "right",
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<IconButton onClick={handleDrawerClose} className="closeIcons">
						<CgClose width={35} style={{ color: "#efc437" }} />
					</IconButton>
					<div className={drawerContainer}>
						<img className={logoDrawer} src="/images/logo.png" alt="" />
						{menuText}
					</div>
				</Drawer>

				<div>{productLogo}</div>

				<Grid container>
					<Grid item xs={10}></Grid>
					<Grid item xs={2}>
						<IconButton
							className={drawericon}
							{...{
								edge: "start",
								color: "inherit",
								"aria-label": "menu",
								"aria-haspopup": "true",
								onClick: handleDrawerOpen,
							}}
						>
							<MenuIcon
								width="60px"
								height="60px"
								style={{ color: "#fff", fontSize: "30px" }}
							/>
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		);
	};

	const productLogo = (
		<Box>
			<Link to="/">
				<Logo className="logoImg" />
			</Link>
		</Box>
	);

	const menuText = (
		<nav>
			<ul class={menuul}>
				{/* <li>
					{" "}
					{history.location.pathname !== "/" ? (
						<Link className={menuButton} to="/">
							Tokonomics
						</Link>
					) : (
						<ScrollLink
							className={menuButton}
							smooth={true}
							duration={500}
							to="section1"
						>
							{" "}
							Tokonomics{" "}
						</ScrollLink>
					)}
				</li> */}

				<li>
					{" "}
					{history.location.pathname !== "/" ? (
						<Link className={menuButton} to="/">
							Home
						</Link>
					) : (
						<ScrollLink
							className={menuButton}
							smooth={true}
							duration={500}
							to="section5"
						>
							{" "}
							Home{" "}
						</ScrollLink>
					)}
				</li>
				{/* <li>
					{" "}
					{history.location.pathname !== "/" ? (
						<Link className={menuButton} to="/">
							Team
						</Link>
					) : (
						<ScrollLink
							className={menuButton}
							smooth={true}
							duration={500}
							to="section6"
						>
							{" "}
							Team{" "}
						</ScrollLink>
					)}
				</li> */}

				<li>
					{" "}
					{history.location.pathname !== "/clique" ? (
						<Link className={menuButton} to="/clique">
							Clique
						</Link>
					) : (
						<ScrollLink
							className={`${menuButton} ${menuButtonActive}`}
							smooth={true}
							duration={500}
							to="section4"
						>
							{" "}
							Clique{" "}
						</ScrollLink>
					)}
				</li>

				<li>
					{" "}
					{history.location.pathname !== "/" ? (
						<Link className={menuButton} to="/">
							Tokonomics
						</Link>
					) : (
						<ScrollLink
							className={menuButton}
							smooth={true}
							duration={500}
							to="section5"
						>
							{" "}
							Tokonomics{" "}
						</ScrollLink>
					)}
				</li>

				{/* <Link className={menuButton} to="/">Litepaper</Link> */}
				{/* {history.location.pathname !== "/" ?<Link to="/">projects</Link>  : <ScrollLink className="navy" smooth={true} duration={500}  to="section3" > EZE Lite </ScrollLink>} */}
				<li>
					<Button variant="contained" size="large" color="secondary">
						<Link to="/coming-soon"> Enter App </Link>
					</Button>
				</li>
			</ul>
		</nav>
	);

	return (
		<>
			<AppBar
				id={"mainScroll"}
				// position={history.location.pathname !== "/" ? "relative" : "absolute"}
				className={history.location.pathname !== "/" ? "InnerHeader" : "Header"}
				elevation={0}
			>
				<Container
					maxWidth={history.location.pathname !== "/" ? "lg" : "lg"}
					className={containerHeight}
				>
					{mobileView ? displayMobile() : displayDesktop()}
				</Container>
			</AppBar>
		</>
	);
}
