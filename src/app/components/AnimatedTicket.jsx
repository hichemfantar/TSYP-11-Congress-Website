import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Ticket from "./Ticket";

export default function AnimatedTicket({ children }) {
	const x = useMotionValue(200);
	const y = useMotionValue(200);

	const rotateX = useTransform(y, [0, 400], [10, -10]);
	const rotateY = useTransform(x, [0, 400], [-10, 10]);

	function handleMouse(event) {
		const rect = event.currentTarget.getBoundingClientRect();

		x.set(event.clientX - rect.left);
		y.set(event.clientY - rect.top);
	}

	return (
		<motion.div
			style={{
				// width: 400,
				// height: 400,
				// display: "flex",
				// placeItems: "center",
				// placeContent: "center",
				// borderRadius: 30,
				// backgroundColor: "rgba(255, 255, 255, 0.05)",
				perspective: 1000,
			}}
			onMouseMove={handleMouse}
			onMouseLeave={() => {
				animate(x, 200);
				animate(y, 200);
			}}
		>
			{/* <motion.div
				style={{
					width: 150,
					height: 150,
					borderRadius: 30,
					backgroundColor: "#fff",
					rotateX: rotateX,
					rotateY: rotateY,
				}}
			/> */}
			<motion.div
				style={{
					// width: 150,
					// height: 150,
					// borderRadius: 30,
					// backgroundColor: "#fff",
					rotateX: rotateX,
					rotateY: rotateY,
				}}
			>
				{children}
			</motion.div>
		</motion.div>
	);
}
