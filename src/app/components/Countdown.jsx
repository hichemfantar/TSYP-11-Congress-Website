import moment from "moment";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const useCountdown = (targetDate) => {
	const countDownDate = new Date(targetDate).getTime();

	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
	// calculate time left
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

export function Countdown(props) {
	const { timeTillDate, timeFormat } = props;
	const THREE_DAYS_IN_MS = 6 * 24 * 60 * 60 * 1000;
	const NOW_IN_MS = new Date().getTime();
	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

	var date = new Date("12/18/2023 06:00:00"); // some mock date
	var milliseconds = date.getTime();
	const [days, hours, minutes, seconds] = useCountdown(milliseconds);
	const daysRadius = mapNumber(days, 365, 0, 0, 360);
	const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
	const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
	const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

	if (new Date().getTime() > milliseconds) {
		return null;
	}

	return (
		<div className="xtext-[#2d459e]">
			{/* <h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-7 lg:text-5xl lg:font-extrabold lg:leading-none">
					Starting in:
				</h1> */}
			<div className="flex flex-wrap items-center justify-center gap-4">
				{"days" && (
					<div className="relative flex h-[100px] w-[100px] flex-col items-center justify-center pt-[0px] text-2xl font-bold leading-[30px]">
						<SVGCircle radius={daysRadius} />
						{days}
						<span className="text-xs font-bold uppercase">days</span>
					</div>
				)}
				{"hours" && (
					<div className="relative flex h-[100px] w-[100px] flex-col items-center justify-center pt-[0px] text-2xl font-bold leading-[30px]">
						<SVGCircle radius={hoursRadius} />
						{hours}
						<span className="text-xs font-bold uppercase">hours</span>
					</div>
				)}
				{"minutes" && (
					<div className="relative flex h-[100px] w-[100px] flex-col items-center justify-center pt-[0px] text-2xl font-bold leading-[30px]">
						<SVGCircle radius={minutesRadius} />
						{minutes}
						<span className="text-xs font-bold uppercase">minutes</span>
					</div>
				)}
				{"seconds" && (
					<div className="relative flex h-[100px] w-[100px] flex-col items-center justify-center pt-[0px] text-2xl font-bold leading-[30px]">
						<SVGCircle radius={secondsRadius} />
						{seconds}
						<span className="text-xs font-bold uppercase">seconds</span>
					</div>
				)}
			</div>
		</div>
	);
}

const SVGCircle = ({ radius }) => {
	let nRadius = radius;
	if (radius === 0 || radius === 360) {
		nRadius = 359.999;
	}
	// return null;
	const transition = { duration: 0.5, yoyo: Infinity, ease: "easeInOut" };

	return (
		<svg className="absolute top-0 left-0 h-[100px] w-[100px]">
			<motion.path
				className="stroke-gray-900 dark:stroke-gray-400"
				// className="stroke-[#3a55b4] dark:stroke-gray-400"
				fill="none"
				// stroke="#333"
				strokeWidth="4"
				d={describeArc(50, 50, 48, 0, nRadius)}
				// animate={{
				// 	d: [
				// 		"M 40,40 Q 160,40 160,160",
				// 		"M 160,40 Q 100,100 40,160",
				// 		"M 160,160 Q 100,160 40,160",
				// 		"M 160,40 Q 100,160 40,40",
				// 		"M 160,40 Q 100,40 40,40",
				// 		"M 40,40 Q 160,40 160,160",
				// 	],
				// }}
				// initial={{ pathLength: 0 }}
				// animate={{ pathLength: 1 }}
				// transition={transition}
			/>
		</svg>
	);
};

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

	return {
		x: centerX + radius * Math.cos(angleInRadians),
		y: centerY + radius * Math.sin(angleInRadians),
	};
}

function describeArc(x, y, radius, startAngle, endAngle) {
	var start = polarToCartesian(x, y, radius, endAngle);
	var end = polarToCartesian(x, y, radius, startAngle);

	var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

	var d = [
		"M",
		start.x,
		start.y,
		"A",
		radius,
		radius,
		0,
		largeArcFlag,
		0,
		end.x,
		end.y,
	].join(" ");

	return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
	return (
		((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
	);
}
