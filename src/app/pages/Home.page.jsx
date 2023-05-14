import React, { useEffect, Suspense } from "react";
import Logo from "../../assets/main logo black (Custom).png";
import LightLogo from "../../assets/main logo_2 (Custom).png";
import SBGroupPic from "../../assets/sb-group-pic.jpg";
import TSYP2015 from "../../assets/tsyp-editions/tsyp-2015.jpg";
import TSYP2016 from "../../assets/tsyp-editions/tsyp-2016.jpg";
import TSYP2017 from "../../assets/tsyp-editions/tsyp-2017.jpg";
import TSYP2018 from "../../assets/tsyp-editions/tsyp-2018.png";
import TSYP2019 from "../../assets/tsyp-editions/tsyp-2019.jpg";
import TSYP2020 from "../../assets/tsyp-editions/tsyp-2020.jpg";
import TSYP2021 from "../../assets/tsyp-editions/tsyp-2021.jpg";
import TSYP2021Dark from "../../assets/tsyp-editions/tsyp-2021-dark.png";
import TSYP2022 from "../../assets/tsyp-editions/tsyp-2022.png";
import { Link } from "react-router-dom";
import Team from "../components/Team";
import ThreeExperience from "../components/ThreeExperience";

export default function HomePage() {
	return (
		<div className="h-full">
			<Suspense fallback={null}>
				<div className="hidden h-[40rem] overflow-auto rounded-2xl md:block md:h-[45rem]">
					<ThreeExperience />
				</div>
			</Suspense>

			<section className="grid grid-cols-12 items-center justify-center py-24 md:py-48">
				<div className="col-span-12 mx-auto">
					<img
						src={Logo}
						className="mx-auto mb-8 hidden h-52 object-contain dark:block dark:invert sm:h-48"
						alt="TSYP 11"
					/>
					<img
						src={LightLogo}
						className="mx-auto h-56 object-contain dark:hidden sm:h-52"
						alt="TSYP 11"
					/>
					<h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
						Bringing Silicon Valley to Tunisia.
					</h1>

					<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
						11th IEEE Tunisian Students & Young Professionals Congress.
					</h1>

					<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
						18-20 December 2023, Diar Lemdina, Hammamet.
					</h1>

					<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
						<q>Silicon valley is a mindset, not a location.</q>
					</h1>
				</div>
				{/* <div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-6xl lg:font-extrabold lg:leading-none">
					Welcome to our Silicon Valley.
				</h1>
				<h1 className="mb-4 text-4xl font-medium tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-2xl lg:font-extrabold lg:leading-none">
					IEEE Tunisian Students and Young Professionals in Conjunction with
					IEEE ESSTHS in Silicon Valley congress.
				</h1>
			</div> */}
			</section>
			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6 mx-auto">
					<img
						src={Logo}
						className="mx-auto mb-8 hidden h-52 object-contain dark:block dark:invert sm:h-48"
						alt="TSYP 11"
					/>

					<img
						src={LightLogo}
						className="mx-auto h-56 object-contain dark:hidden sm:h-60"
						alt="TSYP 11"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						About IEEE TSYP Congress.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						Tunisian Students and Young Professionals, is the annual congress
						that brings together IEEE members in Tunisia. We are talking about
						the 11th edition which is organized by IEEE ESSTHS SB. It is an
						excellent opportunity to discuss current and future challenges in
						science and engineering, to immerse in the IEEE national network and
						to exchange experiences.
					</h1>
				</div>
			</section>
			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6 mx-auto md:order-last">
					<img
						src={"https://tsyp.ieee.tn/static/media/TT.2542e6b4.png"}
						className="mx-auto h-52 object-contain sm:h-96"
						alt="TSYP 11"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						About IEEE Tunisia Section.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						The IEEE Tunisian Section aims to disseminate IEEE activities to all
						corners of the country through educational and technical activities,
						networking of people, and developing technology and its applications
						for humanitarian challenges. The section supports chapters, special
						interest groups, student activities, and student awards. IEEE is
						anchored in the Tunisian engineering landscape with more than 33
						Student Branches' spread over the different engineering schools,
						faculties and universities
					</h1>
					<div>
						<Link
							// type="button"
							to={"https://ieee.tn/"}
							target="_blank"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
							<span className="">Learn more</span>
							{/* </div> */}
						</Link>
					</div>
				</div>
			</section>
			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6 mx-auto">
					<img
						src={SBGroupPic}
						className="mx-auto h-56 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Hosted By IEEE ESSTHS Student Branch.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						IEEE ESSTHS Student Branch, founded in 2020, is home to more than
						280 members, making it the largest Student Branch in Sousse, and 7th
						in Tunisia Section. It encompasses 5 Technical Chapters: CIS, CS,
						IAS, PES, RAS, and 2 Affinity Groups: SIGHT & WIE. We have had the
						honor of receiving more than 12 worldwide IEEE Awards across all
						fields through the dedication and commitment of each of our members.
					</h1>
					<div>
						<Link
							// type="button"
							to={"https://essths.ieee.tn/"}
							target="_blank"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
							<span className="">Learn more</span>
							{/* </div> */}
						</Link>
					</div>
				</div>
			</section>
			<section className="py-8 md:py-20">
				<PreviousEditions />
			</section>

			<section className="py-8 md:py-20">
				<PoweredBy />
			</section>

			<section className="py-8 md:py-20">
				<IEEEPartners />
			</section>

			<section>
				<div className="mb-12 text-4xl font-bold">Schedule Overview</div>
				<div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
					<section className="flex flex-col">
						<h3 className="sticky top-0 bg-gray-50 py-4 text-center text-2xl font-semibold tracking-tight dark:bg-black">
							<time dateTime="2022-04-04">December 18</time>
						</h3>
						<p className="mt-1.5 text-base tracking-tight">
							The first day of the conference is focused on ecommerce.
						</p>
						<ol
							role="list"
							className="bbackdrop-blur mt-10 flex-1 space-y-8 rounded-2xl rounded-xl border-2 bg-white/60 p-2 px-10 py-14 text-center shadow-xl shadow-blue-900/5 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500"
						>
							<li aria-label="Steven McHail talking about one-time payments at 9:00AM - 10:00AM GMT+1">
								<h4 className="text-lg font-semibold tracking-tight ">
									Check-in & Booth setup
								</h4>
								{/* <p className="mt-1 tracking-tight ">One-time payments</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-04T9:00AM-08:00">10:00AM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-04T10:00AM-08:00">2:00PM</time>{" "}
									{/* */}GMT+1
								</p>
							</li>
							<li aria-label="Jaquelin Isch talking about The finer print at 10:00AM - 11:00AM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Opening ceremony
								</h4>
								{/* <p className="mt-1 tracking-tight ">The finer print</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-04T10:00AM-08:00">3:00PM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-04T11:00AM-08:00">5:00PM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Dianne Guilianelli talking about Post-purchase at 11:00AM - 12:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Stands, TSYP Booths & Networking
								</h4>
								{/* <p className="mt-1 tracking-tight ">Post-purchase</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-04T11:00AM-08:00">5:00PM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-04T12:00PM-08:00">7:00PM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Lunch talking about null at 12:00PM - 1:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Dinner
								</h4>
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-04T12:00PM-08:00">7:00PM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-04T1:00PM-08:00">9:00PM</time> {/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Ronni Cantadore talking about Buy at 1:00PM - 2:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Team-Building & Surprise Challenge
								</h4>
								{/* <p className="mt-1 tracking-tight ">Buy</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-04T1:00PM-08:00">9:00PM</time> {/* */}
									-{/* */}{" "}
									<time dateTime="2022-04-04T2:00PM-08:00">11:00PM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
						</ol>
					</section>
					<section className="flex flex-col">
						<h3 className="sticky top-0 bg-gray-50 py-4 text-center text-2xl font-semibold tracking-tight dark:bg-black ">
							<time dateTime="2022-04-05">December 19</time>
						</h3>
						<p className="mt-1.5 text-base tracking-tight ">
							Next we spend the day talking about people with technology.
						</p>
						<ol
							role="list"
							className="bbackdrop-blur mt-10 flex-1 space-y-8 rounded-2xl rounded-xl border-2 bg-white/60 p-2 px-10 py-14 text-center shadow-xl shadow-blue-900/5 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500"
						>
							<li aria-label="Damaris Kimura talking about The invisible card reader at 9:00AM - 10:00AM GMT+1">
								<h4 className="text-lg font-semibold tracking-tight ">
									Breakfast
								</h4>
								{/* <p className="mt-1 tracking-tight ">
									The invisible card reader
								</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T9:00AM-08:00">7:00AM</time> {/* */}
									-{/* */}{" "}
									<time dateTime="2022-04-05T10:00AM-08:00">9:00AM</time>{" "}
									{/* */}GMT+1
								</p>
							</li>
							<li aria-label="Ibrahim Frasch talking about Protecting fingerprints at 10:00AM - 11:00AM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									IEEE challenges, Partner challenges, workshops & panels
								</h4>
								{/* <p className="mt-1 tracking-tight ">Protecting fingerprints</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T10:00AM-08:00">9:00AM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-05T11:00AM-08:00">10:30AM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Cathlene Burrage talking about Voting machines at 11:00AM - 12:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Coffee break
								</h4>
								{/* <p className="mt-1 tracking-tight ">Voting machines</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T11:00AM-08:00">10:30AM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-05T12:00PM-08:00">10:45AM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Lunch talking about null at 12:00PM - 1:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									IEEE challenges, Partner challenges, workshops & panels
								</h4>
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T12:00PM-08:00">10:45AM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-05T1:00PM-08:00">12:00PM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Rinaldo Beynon talking about Whitehat SEO that works at 1:00PM - 2:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">Lunch</h4>
								{/* <p className="mt-1 tracking-tight ">Whitehat SEO that works</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T1:00PM-08:00">12:30PM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-05T2:00PM-08:00">2:00PM</time> {/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Waylon Hyden talking about Impressing your audience at 2:00PM - 3:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									IEEE challenges, Partner challenges, workshops & panels
								</h4>
								{/* <p className="mt-1 tracking-tight ">Impressing your audience</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T2:00PM-08:00">2:00PM</time> {/* */}
									-{/* */}{" "}
									<time dateTime="2022-04-05T3:00PM-08:00">4:00PM</time> {/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Giordano Sagucio talking about Fishing at 3:00PM - 4:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Coffee break
								</h4>
								{/* <p className="mt-1 tracking-tight ">Fishing</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T3:00PM-08:00">4:00PM</time> {/* */}
									-{/* */}{" "}
									<time dateTime="2022-04-05T4:00PM-08:00">4:30PM</time> {/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Giordano Sagucio talking about Fishing at 3:00PM - 4:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									IEEE challenges, Partner challenges, workshops & panels
								</h4>
								{/* <p className="mt-1 tracking-tight ">Fishing</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T3:00PM-08:00">4:30PM</time> {/* */}
									-{/* */}{" "}
									<time dateTime="2022-04-05T4:00PM-08:00">7:00PM</time> {/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Giordano Sagucio talking about Fishing at 3:00PM - 4:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Dinner
								</h4>
								{/* <p className="mt-1 tracking-tight ">Fishing</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T3:00PM-08:00">7:00PM</time> {/* */}
									-{/* */}{" "}
									<time dateTime="2022-04-05T4:00PM-08:00">9:00PM</time> {/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Giordano Sagucio talking about Fishing at 3:00PM - 4:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Awards ceremony
								</h4>
								{/* <p className="mt-1 tracking-tight ">Fishing</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T3:00PM-08:00">9:00PM</time> {/* */}
									-{/* */}{" "}
									<time dateTime="2022-04-05T4:00PM-08:00">9:30PM</time> {/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Giordano Sagucio talking about Fishing at 3:00PM - 4:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Talent show
								</h4>
								{/* <p className="mt-1 tracking-tight ">Fishing</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T3:00PM-08:00">9:30PM</time> {/* */}
									-{/* */}{" "}
									<time dateTime="2022-04-05T4:00PM-08:00">10:00PM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Giordano Sagucio talking about Fishing at 3:00PM - 4:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Finalists announcement, social activities
								</h4>
								{/* <p className="mt-1 tracking-tight ">Fishing</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-05T3:00PM-08:00">10:00PM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-05T4:00PM-08:00">11:00PM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
						</ol>
					</section>
					<section className="flex flex-col">
						<h3 className="sticky top-0 bg-gray-50 py-4 text-center text-2xl font-semibold tracking-tight dark:bg-black ">
							<time dateTime="2022-04-06">December 20</time>
						</h3>
						<p className="mt-1.5 text-base tracking-tight ">
							We close out the event previewing techniques in development.
						</p>
						<ol
							role="list"
							className="bbackdrop-blur mt-10 flex-1 space-y-8 rounded-2xl rounded-xl border-2 bg-white/60 p-2 px-10 py-14 text-center shadow-xl shadow-blue-900/5 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500"
						>
							<li aria-label="Andrew Greene talking about Neuralink patterns at 9:00AM - 10:00AM GMT+1">
								<h4 className="text-lg font-semibold tracking-tight ">
									Breakfast
								</h4>
								{/* <p className="mt-1 tracking-tight ">Neuralink patterns</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-06T9:00AM-08:00">7:00AM</time> {/* */}
									-{/* */}{" "}
									<time dateTime="2022-04-06T10:00AM-08:00">9:00AM</time>{" "}
									{/* */}GMT+1
								</p>
							</li>
							<li aria-label="Heather Terry talking about DALL-E for passports at 10:00AM - 11:00AM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Tunisia Section Awards
								</h4>
								{/* <p className="mt-1 tracking-tight ">DALL-E for passports</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-06T10:00AM-08:00">9:00AM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-06T11:00AM-08:00">10:00AM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Piers Wilkins talking about Quantum password cracking at 11:00AM - 12:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Finalists Presentation (Q&A, Voting)
								</h4>
								{/* <p className="mt-1 tracking-tight ">
									Quantum password cracking
								</p> */}
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-06T11:00AM-08:00">10:00AM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-06T12:00PM-08:00">11:30AM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Lunch talking about null at 12:00PM - 1:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									winners announcement and Closing ceremony
								</h4>
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-06T12:00PM-08:00">11:30AM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-06T1:00PM-08:00">12:00PM</time>{" "}
									{/* */}
									GMT+1
								</p>
							</li>
							<li aria-label="Gordon Sanderson talking about Singularity is coming at 1:00PM - 2:00PM GMT+1">
								<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
								<h4 className="text-lg font-semibold tracking-tight ">
									Checkout
								</h4>
								<p className="mt-1 tracking-tight ">Singularity is coming</p>
								<p className="mt-1 font-mono text-sm text-slate-500">
									<time dateTime="2022-04-06T1:00PM-08:00">12:00PM</time>{" "}
									{/* */}-{/* */}{" "}
									<time dateTime="2022-04-06T2:00PM-08:00">1:00PM</time> {/* */}
									GMT+1
								</p>
							</li>
						</ol>
					</section>
				</div>
			</section>

			<section className="py-8 md:py-28">
				<Team />
			</section>

			<section className="py-8 md:py-28">
				<div className="mx-auto">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Find us here.
					</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12851.062625886407!2d10.5328555!3d36.3664548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029e020677bc0d%3A0x82fe8c3faf57e873!2sDiar%20Lemdina!5e0!3m2!1sen!2stn!4v1682280141809!5m2!1sen!2stn"
						className="w-full rounded-2xl"
						height="500"
						style={{
							border: 0,
							// width: "100%",
						}}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</section>
			{/* <SparrowSurvey /> */}
		</div>
	);
}

function PreviousEditions() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					Previous Editions
				</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="transition hover:scale-105">
						<a href="https://tsyp.ieee.tn/" target="_blank" rel="noreferrer">
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2022}
								alt="Transistor"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2022</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2021/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2021Dark}
								alt="Transistor"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2021</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2020/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-cover shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2020}
								alt="Reform"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2020</h1>
					</div>

					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2019/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2019}
								alt="Tuple"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2019</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2018/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain p-4 shadow-md shadow-gray-200 transition dark:invert sm:col-start-2 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2018}
								alt="SavvyCal"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2018</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2017/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2017}
								alt="Statamic"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2017</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2016/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2016}
								alt="Statamic"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2016</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href="https://past-tsyp.ieee.tn/2015/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-900 invert transition dark:invert-0 sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2015}
								alt="Statamic"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2015</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

function PoweredBy() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">Powered By</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<a
						href="https://tsyp.ieee.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[120px] w-[120px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"https://tsyp.ieee.tn/static/media/TT.2542e6b4.png"}
							alt="Transistor"
							// width={200}
							// height={200}
						/>
					</a>
					<a
						href="https://tsyp.ieee.tn/static/media/yp-tunisia-section.01ac0a39.png"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[120px] w-[120px] object-contain transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={
								"https://tsyp.ieee.tn/static/media/yp-tunisia-section.01ac0a39.png"
							}
							alt="Transistor"
							// width={200}
							// height={200}
						/>
					</a>
					<a
						href="http://www.essths.rnu.tn/public/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<img
							className="col-span-2 h-[120px] w-[120px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={
								"http://www.essths.rnu.tn/storage/app/public/coordonnees/May2020/gBYN1dJ7NCw9lL1M4i0T.png"
							}
							alt="Transistor"
							// width={200}
							// height={200}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

function IEEEPartners() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">IEEE Partners</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<a
						href="https://ieeer8.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[120px] w-[120px] object-contain transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"https://tsyp.ieee.tn/static/media/IEEE%20R8.b7e7d5cc.svg"}
							alt="Transistor"
							// width={200}
							// height={200}
						/>
					</a>
					<a
						href="https://ieeer8.org/student-activities/sa-committee/sac/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"https://tsyp.ieee.tn/static/media/R8_SAC.6b6fa5f7.png"}
							alt="Transistor"
							// width={200}
							// height={200}
						/>
					</a>
					<a
						href="https://ieee-aess.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[120px] w-[120px] object-contain transition dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={
								"data:image/png;base64,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"
							}
							alt="Transistor"
							// width={200}
							// height={200}
						/>
					</a>
					<a
						href="https://ias.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<img
							className="col-span-2 h-[120px] w-[120px] object-contain transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={
								"https://ias.ieee.org/images/files/template/ias-logo-shadowbg.png"
							}
							alt="Transistor"
							// width={200}
							// height={200}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export function SparrowSurvey() {
	useEffect(() => {
		window.sparrowLaunch({
			/*add custom params here*/
		});

		return () => {};
	}, []);

	return (
		<div
			id="ss_survey_widget"
			className="h-[800px]!important mx-auto"
			style={{
				position: "relative",
				width: "100% !important",
				height: "1000px !important",
			}}
		></div>
	);
}
