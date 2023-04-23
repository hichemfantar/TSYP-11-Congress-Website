import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import routes from "../routes";
import { twMerge } from "tailwind-merge";

export default function Footer() {
	return (
		<footer className="container mx-auto p-4 md:px-6 md:py-8">
			<div className="flex flex-col items-center gap-4 sm:justify-between lg:flex-row">
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
					{/* <img
						src="https://flowbite.com/docs/images/logo.svg"
						className="mr-3 h-8"
						alt="TSYP 11"
					/> */}
					<div className="flex flex-wrap gap-2 font-['Tangerine'] text-3xl font-semibold dark:font-normal md:text-4xl ">
						Brought to life by Hichem Fantar
						{/* <img src={signature} className="mr-3 h-8 dark:invert" alt="TSYP 11" /> */}
					</div>
					{/* <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						TSYP 11
					</span> */}
				</Link>

				<div className="hidden gap-4 md:flex">
					<ul className="ffont-['space_mono'] flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
						{routes
							.filter((r) => !r.mobile)
							.map((route) => (
								<li className="" key={route.title}>
									<NavLink
										className={({ isActive, isPending }) =>
											twMerge(
												"block p-4 px-4 text-gray-600 transition-all duration-75 hover:text-gray-900 hover:underline focus:font-bold focus:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200",
												isActive
													? "font-bold text-gray-900 dark:text-gray-200"
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

					<div className="hidden lg:block">
						<ThemeToggle />
					</div>
				</div>
			</div>
		</footer>
	);
}
