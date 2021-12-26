import { Box, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Page from "src/component/Page";
import TopBar from "src/layouts/HomeLayout/TopBar";
export default function Comingsoon(props) {
	const history = useHistory();
	return (
		<Page title="Coming Soon">
			<TopBar />
			<Box
				pt={0}
				textAlign="center"
				style={{
					background: "rgb(75 8 139)",
					textAlign: "center",
					position: "relative",
					minHeight: "370px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img
					src="/images/home2/comingsoon.jpg"
					alt="coming soon"
					style={{
						maxWidth: "1100px",
						display: "block",
						margin: "0 auto",
						width: "100%",
					}}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={() => history.push("/")}
					style={{
						position: "absolute",
						bottom: "20px",
						transform: "translateX(-50%)",
						left: " 50%",
					}}
				>
					Go to Home Page
				</Button>
			</Box>
		</Page>
	);
}
