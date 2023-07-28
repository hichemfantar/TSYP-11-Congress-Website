import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { motion } from "framer-motion";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ScrollToTop from "react-scroll-to-top";

const pageVariants = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

const pageTransition = {
	type: "tween",
	ease: "linear",
	duration: 0.2,
};

export default function AppLayout({ children }) {
	const { pathname } = useLocation();
	return (
		<>
			{/* <div
				style={{
					// position: "absolute",
					width: "100%",
					height: "100%",
					overflow: "hidden",
					inset: "0px",
				}}
			>
				<div
					style={{
						width: "100%",
						height: "100%",
					}}
				>
					<ThreeExperience />
				</div>
			</div> */}

			<div
				className="flex min-h-full flex-col"
				style={
					{
						// relative position to show on top of canvas
						// position: "relative",
					}
				}
			>
				<Navigation />

				<main className="container mx-auto flex flex-1 p-4 py-8 2xl:px-24">
					<motion.div
						className="flex-1"
						key={pathname}
						initial="initial"
						animate="in"
						variants={pageVariants}
						transition={pageTransition}
					>
						{children}
						<Outlet />
					</motion.div>
				</main>

				<Footer />
			</div>

			{/* <div className="flex min-h-full flex-col  dark:text-gray-50">
				<Navigation />

				<main className="container mx-auto flex-1 p-4 py-8">
					{children}
					<Outlet />
				</main>

				<Footer />
			</div> */}

			<ScrollToTop className="flex items-center justify-center rounded-full p-3 transition" />

			<ScrollRestoration />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}
