import React from "react";
import moment from "moment";
import "./countdown.style.scss";

const Countdown = ({ countdownTimer, unixEndDate }) => {
	return (
		<div className="countdown">
			<div className="card">
				<div className="countdown-value">{countdownTimer.days}</div>
				<div className="countdown-unit">Days</div>
			</div>
			<div className="card">
				<div className="countdown-value">{countdownTimer.hours}</div>
				<div className="countdown-unit">Hours</div>
			</div>
			<div className="card">
				<div className="countdown-value">{countdownTimer.mins}</div>
				<div className="countdown-unit">Minutes</div>
			</div>
			<div className="card">
				<div className="countdown-value">{countdownTimer.secs}</div>
				<div className="countdown-unit">Seconds</div>
			</div>
			<p className="text-white">OR Sooner!</p>
		</div>
	);
};

export default Countdown;
