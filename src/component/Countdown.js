import React from "react";
import moment from "moment";
import {
	Grid,
	Item,
	Box,
	Container,
	Typography,
	makeStyles,
	Button,
	Theme,
} from "@material-ui/core";
import "./countdown.style.scss";

const Countdown = ({ countdownTimer, unixEndDate }) => {
	return (
		<div style={{ marginBottom: "100px" }}>
			<Grid container spacing={2}>
				<Grid item xs={3} md={3}>
					<div className="card">
						<div className="countdown-value">{countdownTimer.days}</div>
						<div className="countdown-unit">Days</div>
					</div>
				</Grid>

				<Grid item xs={3} md={3}>
					<div className="card">
						<div className="countdown-value">{countdownTimer.hours}</div>
						<div className="countdown-unit">Hours</div>
					</div>
				</Grid>

				<Grid item xs={3} md={3}>
					<div className="card">
						<div className="countdown-value">{countdownTimer.mins}</div>
						<div className="countdown-unit">Minutes</div>
					</div>
				</Grid>

				<Grid item xs={3} md={3}>
					<div className="card">
						<div className="countdown-value">{countdownTimer.secs}</div>
						<div className="countdown-unit">Seconds</div>
					</div>
				</Grid>
			</Grid>

			<Grid>
				<p className="text-white" style={{ marginTop: "20px" }}>
					OR Sooner!
				</p>
			</Grid>
		</div>
		// <div className="countdown">
		// 	<div className="card">
		// 		<div className="countdown-value">{countdownTimer.days}</div>
		// 		<div className="countdown-unit">Days</div>
		// 	</div>
		// 	<div className="card">
		// 		<div className="countdown-value">{countdownTimer.hours}</div>
		// 		<div className="countdown-unit">Hours</div>
		// 	</div>
		// 	<div className="card">
		// 		<div className="countdown-value">{countdownTimer.mins}</div>
		// 		<div className="countdown-unit">Minutes</div>
		// 	</div>
		// 	<div className="card">
		// 		<div className="countdown-value">{countdownTimer.secs}</div>
		// 		<div className="countdown-unit">Seconds</div>
		// 	</div>
		// 	<p className="text-white">OR Sooner!</p>
		// </div>
	);
};

export default Countdown;
