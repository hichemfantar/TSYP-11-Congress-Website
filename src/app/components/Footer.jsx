import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import routes from "../routes";
import { twMerge } from "tailwind-merge";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<footer className="container mx-auto p-4 md:px-6 md:py-8">
			<div className="flex flex-col items-center gap-4 sm:justify-between lg:flex-row">
				<div className="hidden lg:block">
					{false && (
						<Link
							to="https://hichemfantar.netlify.app/"
							target="_blank"
							rel="noreferrer"
							className="flex items-center"
						>
							{/* <svg
						className="mr-3 h-8 fill-gray-900 dark:fill-gray-100"
						aria-label="Vercel Logo"
						// fill="white"
						viewBox="0 0 75 65"
						height={26}
						data-testid="dashboard/logo"
					>
						<path d="M37.59.25l36.95 64H.64l36.95-64z" />
					</svg> */}
							{/* <CustomImage
						src="https://flowbite.com/docs/images/logo.svg"
						className="mr-3 h-8"
						alt="TSYP 11"
					/> */}
							<div className="flex flex-wrap gap-2 font-['Tangerine'] text-3xl font-semibold dark:font-normal md:text-4xl ">
								Brought to life by Hichem Fantar
								{/* <CustomImage src={signature} className="mr-3 h-8 dark:invert" alt="TSYP 11" /> */}
							</div>
							{/* <span className="self-center whitespace-nowrap text-2xl font-semibold ">
						TSYP 11
					</span> */}
						</Link>
					)}
					© 2023 All rights reserved.
				</div>

				<div className="hidden items-center gap-4 md:flex">
					<ul className="ffont-['space_mono'] flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
						{routes
							.filter((r) => !r.mobile)
							.filter((r) => !(r.type === "group"))
							.map((route) => (
								<li className="" key={route.title}>
									<NavLink
										className={({ isActive, isPending }) =>
											twMerge(
												"hover: focus: block p-4 px-4 text-gray-600 transition-all duration-75 hover:underline focus:font-bold dark:text-gray-400 dark:hover:text-gray-200",
												isActive
													? "font-bold  text-black dark:text-gray-200"
													: isPending
													? ""
													: ""
											)
										}
										to={route.href}
									>
										{route.title}
									</NavLink>
								</li>
							))}
					</ul>

					{true && (
						<div className="hidden lg:block">
							<ThemeToggle />
						</div>
					)}
					<a
						href="https://www.facebook.com/ieee.tsyp"
						target="_blank"
						rel="noreferrer"
						className="text-gray-600 dark:text-gray-400"
						aria-label="facebook page"
					>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a
						href="https://www.instagram.com/ieee_tsyp/"
						target="_blank"
						rel="noreferrer"
						className="text-gray-600 dark:text-gray-400"
						aria-label="instagram page"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href="https://www.linkedin.com/company/ieee-tsyp/"
						target="_blank"
						rel="noreferrer"
						className="text-gray-600 dark:text-gray-400"
						aria-label="linkedin page"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
			</div>
		</footer>
	);
}
