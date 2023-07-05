import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import routes from "../routes";
import NavModal from "./NavModal";
import Logo from "../../assets/main logo black (Custom).png";
import LightLogo from "../../assets/main logo_2 (Custom).png";
import LogoOnBlack from "../../assets/Logo on black.png";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
	const [toggleModal, setToggleModal] = useState(false);

	return (
		<div>
			<nav className="rounded border-gray-200 px-4 py-2.5 sm:px-8">
				<div className="container mx-auto flex flex-wrap items-center justify-between">
					<Link to="/" className="flex items-center">
						<img
							loading="eager"
							src={LogoOnBlack || Logo}
							className={`mr-3 hidden h-8 dark:block ${
								LogoOnBlack ? "" : "dark:invert"
							} sm:h-10`}
							alt="TSYP 11"
						/>
						<img
							loading="eager"
							src={LightLogo}
							className={`mr-3 h-10 dark:hidden sm:h-12`}
							alt="TSYP 11"
						/>
						{/* <svg
							className="mr-3 h-6 fill-gray-900 dark:fill-gray-100 sm:h-9"
							aria-label="Vercel Logo"
							// fill="white"
							viewBox="0 0 75 65"
							height={26}
							data-testid="dashboard/logo"
						>
							<path d="M37.59.25l36.95 64H.64l36.95-64z" />
						</svg> */}

						{/* <span className="self-center whitespace-nowrap text-xl font-semibold">
							TSYP 11
						</span> */}
					</Link>
					<div className="fontt-['space_mono'] flex items-center gap-2">
						<div className="hidden w-auto items-center justify-between lg:flex">
							<ul className="flex flex-col rounded-lg border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium">
								{routes
									.filter((r) => !r.mobile)
									.map((route) => (
										<li className="" key={route.title}>
											<NavLink
												className={({ isActive, isPending }) =>
													twMerge(
														"hover: focus: block p-4 px-4 text-gray-600 transition-all duration-75 hover:font-bold focus:font-bold dark:text-gray-400 dark:hover:text-gray-200",
														isActive
															? "font-bold text-black dark:text-gray-200"
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

								{/* <li>
									<a
										href="#"
										className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white  md:bg-transparent md:p-0 md:text-blue-700"
										aria-current="page"
									>
										Keynote
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
									>
										Stage J
									</a>
								</li> */}
							</ul>
						</div>

						<div className="hidden lg:block">
							<ThemeToggle />
						</div>

						<Link
							to="/sponsor-us"
							className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
						>
							{/* <button
								type="button"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							> */}
							<span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
								Sponsor us
							</span>
							{/* </button> */}
						</Link>
						{/* <button
							type="button"
							className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
						>
							Get started
						</button> */}

						{/* <ThemeToggle /> */}

						<button
							data-collapse-toggle="navbar-cta"
							type="button"
							className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
							aria-controls="navbar-cta"
							aria-expanded="false"
							onClick={() => setToggleModal(!toggleModal)}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>

				<NavModal toggleModal={toggleModal} setToggleModal={setToggleModal} />
			</nav>
		</div>
	);
}
