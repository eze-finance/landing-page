import React, { useRef, useEffect } from "react";
import Page from "src/component/Page";
import Banner from "./Banner";
import DECENTRALIZED from "./DECENTRALIZED";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import Unique from "./Unique";
import BankAccounts from "./BankAccounts";
import EZEChat from "./EzeChat";
import DataLine from "./DataLine";
import { makeStyles } from "@material-ui/core";
// import Team from "./Team";
import TrandingPlatform from "./TrandingPlatform";
import TopBar from "src/layouts/HomeLayout/TopBar";
const useStyles = makeStyles((theme) => ({
	shade2: {
		position: "absolute",
		left: "-50%",
		maxWidth: "100%",
		top: "5%",
		right: "auto",
		bottom: "auto",
		zIndex: " 99",
		width: "300px",

		borderRadius: " 1000px",
		backgroundImage:
			"radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(18 52 140 / 58%) 0%, rgb(18 52 140 / 55%) 95.78%)",
		opacity: "0.55",
		filter: "blur(100px)",
		[theme.breakpoints.down("xs")]: {
			top: "-60%",
		},
	},
	shade1: {
		position: "absolute",
		right: "-20%",
		maxWidth: "100%",
		top: "15%",
		left: "auto",
		bottom: "auto",
		zIndex: " 99",

		borderRadius: " 1000px",
		backgroundImage:
			"radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(247 3 82 / 77%) 0%, rgb(183 12 178 / 22%) 95.78%)",
		opacity: "0.55",
		filter: "blur(100px)",
		[theme.breakpoints.down("xs")]: {
			top: "-60%",
		},
	},
	hidden: {
		overflow: "hidden",
		position: "relative",
		// display:"contents",
	},
	relative: {
		position: "relative",
	},
	shaodw: {
		width: "600px",
		maxWidth: "40%",
		position: "absolute",
		left: "0%",
		top: "-30%",
		zIndex: "1",
		filter: " blur(65px)",
	},
	shaodw1: {
		width: "500px",
		maxWidth: "40%",
		position: "absolute",
		right: "0%",
		top: "-10%",
		zIndex: "1",
		filter: " blur(65px)",
	},
	shade3: {
		position: "absolute",
		left: "-20%",
		maxWidth: "100%",
		top: "45%",
		right: "auto",
		bottom: "auto",
		zIndex: " 99",

		borderRadius: " 1000px",
		backgroundImage:
			"radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(3 44 247 / 77%) 0%, rgb(70 102 255 / 22%) 95.78%)",
		opacity: "0.55",
		filter: "blur(100px)",
		[theme.breakpoints.down("xs")]: {
			top: "-60%",
		},
	},
	shade4: {
		position: "absolute",
		left: "0%",
		maxWidth: "100%",
		top: "-15%",
		right: "auto",
		bottom: "auto",
		zIndex: " 99",
		height: "300px",
		width: "380px",
		borderRadius: " 1000px",
		backgroundImage:
			"radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(3 44 247 / 77%) 0%, rgb(70 102 255 / 22%) 95.78%)",
		opacity: "0.55",
		filter: "blur(100px)",
		[theme.breakpoints.down("xs")]: {
			top: "-60%",
		},
	},
}));

function Home({}) {
	const classes = useStyles();
	const refs = {
		home: useRef(null),
		platform: useRef(null),
		staking: useRef(null),
		clique: useRef(null),
		lite: useRef(null),
		team: useRef(null),
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Page title="EZE">
			<TopBar />

			<div className={classes.hidden}>
				<div className={`${classes.shade2} animatecss`}></div>
				<div className={`${classes.shade1} animatecss1`}></div>
				<div id="section1">
					{/* <Banner /> */}
					{/* <DataLine /> */}
				</div>

				<div id="section2">
					<div className={`${classes.shade1} animatecss1`}></div>
					<div className={`${classes.shade3} animatecss`}></div>
					{/* <TrandingPlatform /> */}
				</div>

				<div id="section2" style={{ marginTop: "100px" }}>
					<DECENTRALIZED />
				</div>

				{/* <div id="section3" style={{ marginTop: "100px" }}>
					<Clique />
				</div> */}

				<div id="section3" style={{ marginTop: "100px" }}>
					<EZEChat />
				</div>

				<div id="section4" style={{ marginTop: "100px" }}>
					<div className={classes.shade4}></div>
					<Unique />
				</div>

				<div id="section5" style={{ marginTop: "100px" }}>
					<div className={classes.shade4}></div>
					<BankAccounts />
				</div>
			</div>
			{/* <div id="section4">
     
        <Tokenomics />
      </div> */}
			<div id="section5">
				<img
					src="/images/home/shadow1.svg"
					width="100%"
					className={classes.shaodw1}
					alt=""
				/>
				{/* <Roadmap /> */}
				{/* <Tokenomics /> */}
			</div>
			{/* <div id="section6">
				<img
					src="/images/home/shadow1.svg"
					width="100%"
					className={classes.shaodw}
					alt=""
				/>
				<img
					src="/images/home/shadow2.svg"
					width="100%"
					className={classes.shaodw1}
					alt=""
				/>
				<Team />
			</div> */}
		</Page>
	);
}

export default Home;
