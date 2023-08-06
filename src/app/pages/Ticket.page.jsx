import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faHotel, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import AnimatedTicket from "../components/AnimatedTicket";
import StyledButton from "../components/StyledButton";
import Ticket from "../components/Ticket";
import TicketDesktop from "../components/TicketDesktop";
import ticketModule from "../components/ticket.module.css";

import DiarLemdinaPoolNight from "./Diar-Lemdina-pool-night.png";
import tsypfavicon from "./Asset 10.svg";
import CustomImage from "../components/CustomImage";

export default function TicketPage() {
	return (
		<div className="flex h-full items-center justify-center">
			<div className="flex flex-col gap-8">
				<div className="w-full">
					<Tab.Group>
						<Tab.List className="mx-auto flex max-w-md space-x-1 rounded-full bg-white p-1 shadow-lg dark:bg-blue-900/20">
							{Object.keys(ticketsData).map((category) => (
								<Tab
									key={category}
									className={({ selected }) =>
										twMerge(
											"w-full rounded-full py-2.5 text-sm font-medium leading-5 text-gray-900 transition dark:text-blue-700",
											"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-900 focus:outline-none focus:ring-2",
											selected
												? "bg-gray-100 shadow dark:bg-gray-800"
												: "text-white hover:bg-gray-50 hover:text-white dark:hover:bg-gray-900"
										)
									}
								>
									<CustomImage
										src={ticketsData[category].ticketImgUrl}
										alt=""
										className="mx-auto h-14 w-14 rounded-full border border-gray-400 object-cover p-[0.12rem]"
									/>
								</Tab>
							))}
							<Tab
								className={({ selected }) =>
									twMerge(
										"w-full rounded-full py-2.5 text-sm font-medium leading-5 text-gray-900 transition dark:text-blue-700",
										"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-900 focus:outline-none focus:ring-2",
										selected
											? "bg-gray-100 shadow dark:bg-gray-800"
											: "text-white hover:bg-gray-50 hover:text-white dark:hover:bg-gray-900"
									)
								}
							>
								{/* <FontAwesomeIcon
									icon={faTicket}
									className="mx-auto h-6 w-6 -rotate-45 rounded-full object-cover p-[0.12rem] text-gray-900 dark:text-gray-300"
								/> */}
								<CustomImage
									src={tsypfavicon}
									alt=""
									className="-full mx-auto h-14 w-14  border-gray-400 object-contain p-[0.12rem]"
									// className="mx-auto h-14 w-14 rounded-full border border-gray-400 object-cover p-[0.12rem]"
								/>
							</Tab>
						</Tab.List>

						<Tab.Panels className="mt-8">
							{Object.keys(ticketsData).map((category, idx) => {
								return (
									<Tab.Panel
										key={idx}
										// unmount={false}
										{...ticketsData[category].props}
									>
										<div className="md:hidden">
											<AnimatedTicket>
												<Ticket ticket={ticketsData[category]} />
											</AnimatedTicket>
										</div>
										<div className="hidden md:block">
											<AnimatedTicket>
												<TicketDesktop ticket={ticketsData[category]} />
											</AnimatedTicket>
										</div>
									</Tab.Panel>
								);
							})}
							<Tab.Panel>
								<div className="md:hidden">
									<AnimatedTicket>
										<div
											className={`${
												ticketModule["ticket"]
											} bg-blackk relative mx-auto w-80 overflow-hidden rounded-2xl ${"text-gray-300"}`}
											style={{
												background: `linear-gradient(45deg, rgba(0,0,0,.85), rgba(0,0,0,.4)), url(${"https://dcontent.inviacdn.net/shared/img/web-800x600/2022/7/21/m0/1444539-medina-diar-lemdina.jpg"}) no-repeat center`,
												// backgroundImage: `url(${ticket?.ticketBackgroundImgUrl})`,
												backgroundSize: "cover",
												backgroundRepeat: "no-repeat",
												backgroundPosition: "center",

												// width: "320px",
												minHeight: "640px",
											}}
										>
											<div className={`${ticketModule["holes-top"]}`} />

											<div className="flex min-h-[inherit] flex-col justify-between gap-4 py-14">
												<div className="flex flex-col items-center justify-center gap-2">
													<CustomImage
														src="https://avatars.githubusercontent.com/hichemfantar"
														alt=""
														className="h-20 w-20 rounded-full border border-gray-400 object-cover p-[0.12rem]"
													/>
													<div className="text-3xl font-bold">
														Hichem Fantar
													</div>
													<div className="font-['space_mono']">
														/hichemfantar
													</div>
												</div>

												{/* <div className="title">
				<p className="cinema">ODEON CINEMA PRESENTS</p>
				<p className="movie-title">ONLY GOD FORGIVES</p>
			</div> */}

												{/* <div className="poster">
				<CustomImage
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg"
					alt="Movie: Only God Forgives"
				/>
			</div> */}

												<div className="flex-1"></div>

												<div className="text-center font-medium">
													<div>8:30am PT, Dec 18, 2023.</div>
													<div>Hosted by IEEE ESSTHS, Diar Lemdina</div>
												</div>
												<div className="flex flex-col gap-8">
													{/* <div className="info">
						<table className="border-spacing-5">
							<thead>
								<tr>
									<th>PRICE</th>
									<th>DATE</th>
									<th>TIME</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>$12.00</td>
									<td>1/13/17</td>
									<td>19:30</td>
								</tr>
							</tbody>
						</table>
					</div> */}

													{/* <div className="holes-lower" /> */}
													<hr
														className={`border-dashed ${"border-gray-300"}`}
													/>

													<div className="px-8 text-center font-['space_mono'] text-6xl">
														#031548
													</div>
												</div>
											</div>

											<div className={`${ticketModule["holes-bottom"]}`} />
										</div>
									</AnimatedTicket>
								</div>

								<div className="hidden md:block">
									<AnimatedTicket>
										<div
											className={`${
												ticketModule["ticket"]
											} bg-blackk  relative mx-auto w-80 overflow-hidden rounded-2xl ${"text-gray-300"} shadow-lg`}
											style={{
												background: `linear-gradient(45deg, rgba(0,0,0,.85), rgba(0,0,0,.4)), url(${DiarLemdinaPoolNight}) no-repeat center`,

												// backgroundImage: `url(${ticket?.ticketLandscapeBackgroundImgUrl})`,
												backgroundSize: "cover",
												backgroundRepeat: "no-repeat",
												backgroundPosition: "center",

												width: "680px",
												minHeight: "340px",
											}}
										>
											<div className={`${ticketModule["holes-top"]}`} />

											<div className="flex min-h-[inherit] justify-between gap-4 py-10 px-10">
												<div className="flex flex-1 flex-col gap-2">
													<div className="flex items-center gap-2">
														<CustomImage
															src="https://avatars.githubusercontent.com/hichemfantar"
															alt=""
															className="h-20 w-20 rounded-full border border-gray-400 object-cover p-[0.12rem]"
														/>
														<div>
															<div className="text-3xl font-bold">
																Hichem Fantar
															</div>
															<div className="font-['space_mono']">
																/hichemfantar
															</div>
														</div>
													</div>

													<div className="flex-1"></div>

													<div className="font-medium">
														<div>8:30am PT, Dec 18, 2023.</div>
														<div>Hosted by IEEE ESSTHS, Diar Lemdina</div>
													</div>
												</div>

												<div className="flex gap-4">
													{/* <div className="holes-lower" /> */}

													{false && (
														<div
															className={`h-full border border-dashed ${"border-gray-300"}`}
														></div>
													)}

													<div
														className="px-8 text-center font-['space_mono'] text-5xl"
														style={{
															writingMode: "vertical-rl",
															textOrientation: "mixed",
														}}
													>
														#031548
													</div>
												</div>
											</div>

											<div className={`${ticketModule["holes-bottom"]}`} />
										</div>
									</AnimatedTicket>
								</div>
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>

				<div className="flex flex-col justify-center gap-4 md:flex-row">
					<div className="flex justify-center divide-x divide-gray-600">
						<button className="flex items-center justify-center gap-2 px-5 text-sm md:text-base">
							<FontAwesomeIcon icon={faTwitter} />
							<div>Tweet it!</div>
						</button>
						<button className="flex items-center justify-center gap-2 px-5 text-sm md:text-base">
							<FontAwesomeIcon icon={faLinkedinIn} />
							<div>Share it!</div>
						</button>
						<button className="flex items-center justify-center gap-2 px-5 text-sm md:text-base">
							<FontAwesomeIcon icon={faCopy} />
							<div>Copy URL</div>
						</button>
					</div>
					<StyledButton message={"Go and explore"}></StyledButton>
				</div>
			</div>
		</div>
	);
}

export const ticketsData = {
	"Dark": {
		ticketImgUrl:
			"https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheme-a-thumb.fb75d960.png&w=64&q=75",
		ticketTheme: "dark",
		ticketBackgroundImgUrl:
			"https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheme-a-background-mobile.5da688ff.png&w=750&q=75",
		ticketLandscapeBackgroundImgUrl:
			"https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheme-a-background.ef0c983a.png&w=750&q=75",
	},
	"Rainbow": {
		ticketImgUrl:
			"https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheme-b-thumb.5e2b36bf.png&w=64&q=75",
		ticketTheme: "dark",
		ticketBackgroundImgUrl:
			"https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheme-b-background-mobile.55762931.png&w=750&q=75",
		ticketLandscapeBackgroundImgUrl:
			"https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheme-b-background.d3147278.png&w=750&q=75",
	},
	"Silver": {
		ticketImgUrl:
			"https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheme-c-thumb.56746ac0.png&w=64&q=75",
		ticketTheme: "light",
		ticketBackgroundImgUrl:
			"https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheme-c-background-mobile.91db1442.png&w=750&q=75",
		ticketLandscapeBackgroundImgUrl:
			"https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheme-c-background.6563d846.png&w=750&q=75",
	},
};
