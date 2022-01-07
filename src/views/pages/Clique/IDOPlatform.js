import React from "react";
import {
	Box,
	Container,
	Typography,
	makeStyles,
	// Button,
	Grid,
	// Theme
} from "@material-ui/core";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
	bannerBox: {
		position: "relative",
		backgroundColor: "#000",
		padding: " 100px 0px 100px",

		[theme.breakpoints.down("xs")]: {
			padding: " 50px 0px 60px",
		},
	},

	textbox: {
		position: "relative",
		textAlign: "left",
		"& h1": {
			fontSize: "63px",
			fontWeight: "600",
			color: theme.palette.primary.main,
			lineHeight: "70px",
			[theme.breakpoints.down("md")]: {
				fontSize: "50px",
				lineHeight: "60px",
			},
			[theme.breakpoints.down("xs")]: {
				fontSize: "32px",
				lineHeight: "40px",
			},
		},
		"& p": {
			fontSize: "18px",
			color: "#C1C0C0 ",
			lineHeight: "28px",
			fontWeight: 300,
			marginTop: "15px",
			[theme.breakpoints.down("xs")]: {
				fontSize: "16px",
			},
		},
	},
}));

export default function NFTMarketplace() {
	const classes = useStyles();

	return (
		<Box className={classes.bannerBox}>
			<Container maxWidth="lg">
				<Box className={classes.textbox}>
					<Box>
						<Grid spacing={5} container alignItems="center">
							<Grid
								item
								xs={12}
								sm={7}
								md={7}
								className="wow slideInRight"
								data-wow-duration="0.2s"
								data-wow-delay="0.2s"
							>
								<img src="/images/home/solution.svg" width="100%" alt="" />
							</Grid>
							<Grid item xs={12} sm={5} md={5}>
								<Box>
									{" "}
									<Typography
										variant="h1"
										className="wow slideInRight"
										data-wow-duration="0.2s"
										data-wow-delay="0.2s"
									>
										Solution
									</Typography>
									<Typography
										variant="body1"
										className="wow slideInRight"
										data-wow-duration="0.4s"
										data-wow-delay="0.4s"
									>
										EZE is the platform that will level the playing field by
										allowing the general investing public access to the highly
										experienced crypto investing experts, while addressing the
										problems at hand.
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
