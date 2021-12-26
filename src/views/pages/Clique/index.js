import React, { useEffect } from "react";
import Page from "src/component/Page";
import Banner from "./Banner";
import { makeStyles } from "@material-ui/core";

import IDOPlatform from "./IDOPlatform";

import HowItWorks from "./HowItWorks";
// import Team from "./Team";
import TrandingPlatform from "./TrandingPlatform";
import TopBar from "src/layouts/HomeLayout/TopBar";
const useStyles = makeStyles((theme) => ({
	shade2: {
		position: "absolute",
		left: "-20%",
		maxWidth: "100%",
		top: "5%",
		right: "auto",
		bottom: "auto",
		zIndex: " 99",

		borderRadius: " 1000px",
		backgroundImage:
			"radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(18 52 140 / 58%) 0%, rgb(18 52 140 / 55%) 95.78%)",
		opacity: "0.55",
		filter: "blur(100px)",
		[theme.breakpoints.down("xs")]: {
			top: "-20%",
		},
	},
	shade1: {
		position: "absolute",
		right: "-20%",
		maxWidth: "100%",
		top: "7%",
		left: "auto",
		bottom: "auto",
		zIndex: " 99",

		borderRadius: " 1000px",
		backgroundImage:
			"radial-gradient(36.67% 9.68% at 67.26% 8.27%, rgb(167 16 65 / 58%) 0%, rgb(183 12 12 / 22%) 95.78%)",
		opacity: "0.55",
		filter: "blur(100px)",
		[theme.breakpoints.down("xs")]: {
			top: "-20%",
		},
	},
	hidden: {
		overflow: "hidden",
		position: "relative",
	},
	relative: {
		position: "relative",
	},
	shaodw: {
		width: "900px",
		maxWidth: "40%",
		position: "absolute",
		left: "20%",
		top: "-30%",
		zIndex: "1",
		filter: " blur(155px)",
	},
	shaodw1: {
		width: "900px",
		maxWidth: "40%",
		position: "absolute",
		left: "20%",
		top: "-10%",
		zIndex: "1",
		filter: " blur(115px)",
	},
}));

function Home() {
	const classes = useStyles();

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Page title="EZE | Your one-stop decentralized platform on Avalanche">
			<TopBar />

			<div className={classes.hidden}>
				<div className={`${classes.shade2} animatecss`}></div>
				<div className={`${classes.shade1} animatecss1`}></div>
				<div>
					<Banner />
					<TrandingPlatform />
				</div>
				<div className={classes.relative}>
					<img
						src="/images/home/shadow.svg"
						width="100%"
						className={classes.shaodw}
						alt=""
					/>
					<IDOPlatform />
				</div>
				<div className={classes.relative}>
					<img
						src="/images/home/shadow2.svg"
						width="100%"
						className={classes.shaodw1}
						alt=""
					/>
					<HowItWorks />
				</div>
			</div>
		</Page>
	);
}

export default Home;
