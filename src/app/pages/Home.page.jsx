import React, { useEffect, Suspense } from "react";
import Logo from "../../assets/main logo black (Custom).png";
import LogoOnBlack from "../../assets/Logo on black (Custom).png";
import LightLogo from "../../assets/main logo (3) (Custom).png";
import SBGroupPic from "../../assets/sb-group-pic.jpg";
import logoBar from "../../assets/logo-bar.png";
import TSYP2014 from "../../assets/tsyp-editions/tsyp-2014.jpg";
import TSYP2016 from "../../assets/tsyp-editions/tsyp-2016.jpg";
import TSYP2017 from "../../assets/tsyp-editions/tsyp-2017.jpg";
import TSYP2018 from "../../assets/tsyp-editions/tsyp-2018.png";
import TSYP2019 from "../../assets/tsyp-editions/tsyp-2019.jpg";
import TSYP2020 from "../../assets/tsyp-editions/tsyp-2020.jpg";
import TSYP2021 from "../../assets/tsyp-editions/tsyp-2021.jpg";

// memories assets
import memory1 from "../../assets/memories/356543044_934550990939126_5175676186716871815_n.jpg";
// import memory2 from "../../assets/memories/356551992_226751036434551_8933123460754285924_n.jpg";
import memory2 from "../../assets/memories/320777930_2311490175678507_4343281339549131430_n.jpg";
import memory3 from "../../assets/memories/356597928_284785967424808_4014952816457019128_n.jpg";
// import memory4 from "../../assets/memories/356638153_1045852983243072_6319438153536457058_n.jpg";
import memory4 from "../../assets/memories/320890318_2005696479633031_3916944159098055484_n.jpg";
import memory5 from "../../assets/memories/356779690_1021512152540830_7436088057197797763_n.jpg";
// import memory6 from "../../assets/memories/356870057_205006965857961_5503311855628802179_n.jpg";
import memory6 from "../../assets/memories/322250720_721543699171031_4597921719413023052_n.jpg";
import memory7 from "../../assets/memories/356882005_272016892113248_6469925021621114931_n.jpg";
// import memory8 from "../../assets/memories/357311497_1034866187885516_4807505043687124219_n.jpg";
import memory8 from "../../assets/memories/321296201_1206807523592277_5346561523774336230_n.jpg";
import memory9 from "../../assets/memories/358218740_2128948947437461_3099469010629116758_n.jpg";
import memory10 from "../../assets/memories/358619396_222649417397966_6373005098322693727_n.jpg";
import memory11 from "../../assets/memories/358766087_984763039233782_8396677229418813180_n.jpg";

import IeeeTunisia from "../../assets/ieee-tunisia.png";
import YpTunisia from "../../assets/yp-tunisia-section.png";
import essthsLogo from "../../assets/essths.png";
import UniSousse from "../../assets/companies/logo-USo.png";
import IeeeEssthsSbLogoBlack from "../../assets/companies/ieee-essths-sb-logo-black.png";
import IeeeLogo from "../../assets/ieee/IEEE_logo.svg.png";

import IEEER8 from "../../assets/IEEE R8.svg";
import R8_SAC from "../../assets/R8_SAC.png";
import aess from "../../assets/aess.png";
import IASLogo from "../../assets/ias-logo-shadowbg.png";
import MTTSLogo from "../../assets/ieee/mtts-circle-logo.jpg";

import TSYP2021Dark from "../../assets/tsyp-editions/tsyp-2021-dark.png";
import TSYP2022 from "../../assets/tsyp-editions/tsyp-2022.png";
import { Link } from "react-router-dom";
import Team from "../components/Team";
// import ThreeExperience from "../components/ThreeExperience";
import { ScheduleOverview } from "../components/schedule/ScheduleList";
import Speakers from "../components/Speakers";
import { useMediaQuery } from "usehooks-ts";
import { Countdown } from "../components/Countdown";
import StyledButton from "../components/StyledButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import CustomImage from "../components/CustomImage";
import { Fade } from "react-awesome-reveal";

export default function HomePage() {
	const matches = useMediaQuery("(min-width: 768px)");

	return (
		<div className="h-full">
			{/* {false && matches && (
				<Suspense fallback={null}>
					<div className="hidden h-[40rem] overflow-auto rounded-2xl md:block md:h-[45rem]">
						<ThreeExperience />
					</div>
				</Suspense>
			)} */}

			<Fade>
				<section className="grid grid-cols-12 items-center justify-center py-10 md:py-12">
					<div className="col-span-12 mx-auto">
						{false && (
							<>
								{" "}
								<CustomImage
									src={Logo}
									className="mx-auto mb-8 hidden h-52 object-contain dark:block dark:invert sm:h-48"
									alt="TSYP 11"
									loading=""
								/>
								<CustomImage
									src={LightLogo}
									className="mx-auto h-56 object-contain dark:hidden sm:h-52"
									alt="TSYP 11"
									loading=""
								/>
							</>
						)}

						{false && (
							<h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
								Bringing Silicon Valley to Tunisia.
							</h1>
						)}

						{/* <h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none"> */}
						<h1 className="mb-8 text-center text-4xl font-bold tracking-tight lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
							<span className="text-[#3a55b4] dark:text-[#4967d0]">11th</span>{" "}
							IEEE Tunisian Students & Young Professionals Congress
						</h1>

						<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							Medina Congress Center, Yasmine Hammamet
						</h1>

						<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							<q>Silicon valley is a mindset, not a location.</q>
						</h1>
						<h1 className="mb-8 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							18 - 20 December <span className="xtext-[#3a55b4]">2023</span>
						</h1>
						<div className="flex flex-wrap items-center justify-center gap-8">
							<div className="xtext-[#3a55b4] mb-4 ">
								<h1 className="mb-2 text-center text-xl font-bold tracking-tight text-[#3a55b4] dark:text-[#4967d0] lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
									1200+
								</h1>
								<span className="mt-1 font-bold uppercase">Participants</span>
							</div>
							<div className="w-full md:hidden">
								<div className="xbg-[#3a55b4] mx-auto h-0.5 w-3/6 bg-black dark:bg-gray-300 md:block"></div>
							</div>
							<div className="xbg-[#3a55b4] hidden h-20 w-0.5 bg-black dark:bg-gray-300 md:block"></div>
							<Countdown
								timeTillDate="12 18 2023, 6:00 am"
								timeFormat="MM DD YYYY, h:mm a"
							/>
							<div className="w-full md:hidden">
								<div className="xbg-[#3a55b4] mx-auto h-0.5 w-3/6 bg-black dark:bg-gray-300 md:block"></div>
							</div>
							<div className="xbg-[#3a55b4] hidden h-20 w-0.5 bg-black dark:bg-gray-300 md:block"></div>
							<div className="mb-4 ">
								<h1 className="mb-2 text-center text-xl font-bold tracking-tight text-[#3a55b4] dark:text-[#4967d0] lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
									50+
								</h1>
								<span className="mt-1 font-bold uppercase">Speakers</span>
							</div>
						</div>
						<div className="flex justify-center gap-6">
							<Link to={"/sponsor-us"} className="mt-8 flex justify-center">
								<StyledButton
									message={"Registrations Opening Soon"}
									// icon={<FontAwesomeIcon icon={faExternalLink} />}
								/>
							</Link>
							<Link to={"/sponsor-us"} className="mt-8 flex justify-center">
								<StyledButton
									message={"Become a Sponsor"}
									// icon={<FontAwesomeIcon icon={faExternalLink} />}
								/>
							</Link>
						</div>
					</div>
					{/* <div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-6xl lg:font-extrabold lg:leading-none">
					Welcome to our Silicon Valley.
				</h1>
				<h1 className="mb-4 text-4xl font-medium tracking-tight   lg:mb-7 lg:text-start lg:text-2xl lg:font-extrabold lg:leading-none">
					IEEE Tunisian Students and Young Professionals in Conjunction with
					IEEE ESSTHS in Silicon Valley congress.
				</h1>
			</div> */}
				</section>
			</Fade>

			<Fade>
				<CustomImage
					src={logoBar}
					alt=""
					className="hidden h-52 object-contain dark:invert lg:block"
				/>
			</Fade>

			<Fade>
				<AboutTSYP />
			</Fade>

			<Fade>
				<AboutTunisiaSection />
			</Fade>
			<Fade>
				<AboutESSTHSSB />
			</Fade>
			<Fade>
				<section className="py-8 md:py-10">
					<AboutCongress />
				</section>
			</Fade>
			<Fade>
				<section className="py-8 md:py-10">
					<PreviousEditions />
				</section>
			</Fade>
			<Fade>
				<section className="py-8 md:py-10">
					<Memories />
				</section>
			</Fade>
			<Fade>
				<section className="py-8 md:py-10">
					<PoweredBy />
				</section>
			</Fade>
			<Fade>
				<section className="py-8 md:py-10">
					<IEEEPartners />
				</section>
			</Fade>
			<Fade>
				<section className="py-8 md:py-10">
					<Speakers limit={5} />
				</section>
			</Fade>
			<Fade>
				<div className="hidden md:block">
					<ScheduleOverview />
				</div>
			</Fade>
			<Fade>
				<section className="py-8 md:py-28">
					<Team limit={5} />
				</section>
			</Fade>
			<Fade>
				<section className="py-8 md:py-28">
					<div className="mx-auto">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Find us here.
						</h1>
						<iframe
							title="tsyp location"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12851.062625886407!2d10.5328555!3d36.3664548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029e020677bc0d%3A0x82fe8c3faf57e873!2sDiar%20Lemdina!5e0!3m2!1sen!2stn!4v1682280141809!5m2!1sen!2stn"
							className="w-full rounded-2xl shadow-lg"
							height="500"
							style={{
								border: 0,
								// width: "100%",
							}}
							allowFullScreen=""
							loading=""
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</section>
			</Fade>

			{/* <SparrowSurvey /> */}
		</div>
	);
}

export function AboutESSTHSSB(params) {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto">
				<CustomImage
					src={SBGroupPic}
					className="mx-auto h-56 rounded-2xl object-cover shadow-lg sm:h-96"
					alt="TSYP 11"
					loading=""
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					IEEE ESSTHS Student Branch.
				</h1>
				<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					IEEE ESSTHS Student Branch, founded in 2020, is home to more than 280
					members, making it the largest Student Branch in Sousse, and 7th in
					Tunisia Section. It encompasses 5 Technical Chapters: CIS, CS, IAS,
					PES, RAS, and 2 Affinity Groups: SIGHT & WIE. We have had the honor of
					receiving more than 12 worldwide IEEE Awards across all fields through
					the dedication and commitment of each of our members.
				</h1>
				<div>
					<Link
						// type="button"
						to={"https://essths.ieee.tn/"}
						target="_blank"
						rel="noreferrer"
						className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
						<span className="">Learn more about ESSTHS SB</span>
						{/* </div> */}
					</Link>
				</div>
			</div>
		</section>
	);
}

export function AboutTunisiaSection(params) {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto md:order-last">
				<CustomImage
					src={IeeeTunisia}
					className="mx-auto h-52 object-contain sm:h-96"
					alt="TSYP 11"
					loading=""
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About IEEE Tunisia Section.
				</h1>
				<h1 className="mb-4 text-lg font-medium  lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					The IEEE Tunisian Section aims to disseminate IEEE activities to all
					corners of the country through educational and technical activities,
					networking of people, and developing technology and its applications
					for humanitarian challenges. The section supports chapters, special
					interest groups, student activities, and student awards. IEEE is
					anchored in the Tunisian engineering landscape with more than 43
					Student Branches' spread over the different engineering schools,
					faculties and universities
				</h1>
				<div>
					<Link
						// type="button"
						to={"https://ieee.tn/"}
						target="_blank"
						rel="noreferrer"
						className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
						<span className="">Learn more IEEE Tunisia Section</span>
						{/* </div> */}
					</Link>
				</div>
			</div>
		</section>
	);
}

export function AboutTSYP() {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto">
				<CustomImage
					src={LogoOnBlack || Logo}
					className={`mx-auto mb-8 hidden h-52 object-contain dark:block ${
						LogoOnBlack ? "" : "dark:invert"
					} sm:h-48`}
					alt="TSYP 11"
					loading=""
				/>

				<CustomImage
					src={LightLogo}
					className="mx-auto h-56 object-contain dark:hidden sm:h-60"
					alt="TSYP 11"
					loading=""
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About IEEE TSYP Congress.
				</h1>
				<p className="mb-4  text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					Tunisian Students and Young Professionals, is the annual congress that
					brings together IEEE members in Tunisia. We are talking about the 11th
					edition which is organized by IEEE ESSTHS SB. It is an excellent
					opportunity to discuss current and future challenges in science and
					engineering, to immerse yourself in the IEEE national network and to
					exchange experiences.
				</p>
			</div>
		</section>
	);
}

function Memories() {
	return (
		<div>
			<h2 className="mb-12 text-center text-4xl font-bold">
				Memories from Previous Editions
			</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory10}
							alt=""
							loading=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory2}
							alt=""
							loading=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory3}
							alt=""
							loading=""
						/>
					</div>
				</div>
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory4}
							alt=""
							loading=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory5}
							alt=""
							loading=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory6}
							alt=""
							loading=""
						/>
					</div>
				</div>
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory7}
							alt=""
							loading=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory8}
							alt=""
							loading=""
						/>
					</div>
					<div>
						<CustomImage
							className="hidden h-full w-full rounded-2xl object-cover md:block "
							src={memory9}
							alt=""
							loading=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function AboutCongress() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					About TSYP Congress 2023
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-12">
					<div className="col-span-4 flex flex-col items-center gap-4">
						<CustomImage
							className="h-14 w-14 object-contain"
							src="https://sections-congress.ieee.org/assets/img/site_images/home/network.webp"
							alt=""
						/>
						<div className="text-2xl font-bold">Network</div>
						<p className="text-center">
							Network and build relationships with other volunteers within IEEE.
						</p>
					</div>
					<div className="col-span-4 flex flex-col items-center gap-4">
						<CustomImage
							className="h-14 w-14 object-contain"
							src="https://sections-congress.ieee.org/assets/img/site_images/home/learn.webp"
							alt=""
						/>
						<div className="text-2xl font-bold">Learn</div>
						<p className="text-center">
							To provide an opportunity for delegates to gain information and
							training skills.
						</p>
					</div>
					<div className="col-span-4 flex flex-col items-center gap-4">
						<CustomImage
							className="h-14 w-14 object-contain"
							src="https://sections-congress.ieee.org/assets/img/site_images/home/goal.webp"
							alt=""
						/>
						<div className="text-2xl font-bold">Plan ahead</div>
						<p className="text-center">
							Collectively shape the future and goals of the IEEE.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function PreviousEditions() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					Previous Editions
				</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2022/"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2022}
								alt="TSYP2022"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2022</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2021/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2021Dark}
								alt="TSYP2021Dark"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2021</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2020/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-cover shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2020}
								alt="TSYP2020"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2020</h1>
					</div>

					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2019/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2019}
								alt="TSYP2019"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2019</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2018/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain p-4 shadow-md shadow-gray-200 transition dark:invert sm:col-start-2 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2018}
								alt="TSYP2018"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2018</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2017/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2017}
								alt="TSYP2017"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2017</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2016/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2016}
								alt="TSYP2016"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2016</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2015/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={IeeeTunisia}
								alt="IeeeTunisia"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2015</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2014/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-900 invert transition dark:invert-0 sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2014}
								alt="TSYP2014"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2014</h1>
					</div>
					<div className="transition hover:scale-105">
						<a href="#">
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={IeeeTunisia}
								alt="IeeeTunisia"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2013</h1>
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
						href="https://ieee.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={IeeeTunisia}
							alt="IeeeTunisia"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					{true && (
						<a
							href="https://yp.ieee.tn/"
							target="_blank"
							rel="noreferrer"
							className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[220px] md:w-[220px] lg:col-span-1"
								src={YpTunisia}
								alt="YpTunisia"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
					)}
					<a
						href="http://www.essths.rnu.tn/public/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={essthsLogo}
							alt="essthsLogo"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					<a
						href="https://uso.rnu.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={UniSousse}
							alt="university of sousse"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					{false && (
						<a
							href="https://ieeer8.org/"
							target="_blank"
							rel="noreferrer"
							className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
								src={IEEER8}
								alt="IEEE Region 8"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
					)}
					<a
						href="https://essths.ieee.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={IeeeEssthsSbLogoBlack}
							alt="IEEE ESSTHS SB"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					{false && (
						<a
							href="https://www.ieee.org/"
							target="_blank"
							rel="noreferrer"
							className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
								src={IeeeLogo}
								alt="IEEE"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
					)}
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
					{false && (
						<a
							href="https://www.ieee.org/"
							target="_blank"
							rel="noreferrer"
							className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
						>
							<CustomImage
								className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
								src={IeeeLogo}
								alt="IEEE"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
					)}
					{false && (
						<a
							href="https://yp.ieee.tn/"
							target="_blank"
							rel="noreferrer"
							className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
						>
							<CustomImage
								className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[220px] md:w-[220px] lg:col-span-1"
								src={YpTunisia}
								alt="YpTunisia"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
					)}
					<a
						href="https://ieeer8.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={IEEER8}
							alt="Transistor"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					<a
						href="https://ieeer8.org/student-activities/sa-committee/sac/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] rounded-full bg-white object-contain p-4 shadow-md shadow-gray-200 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[220px] md:w-[220px] lg:col-span-1"
							src={R8_SAC}
							alt="Transistor"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					<a
						href="https://ieee-aess.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 dark:invert md:h-[220px] md:w-[220px] lg:col-span-1"
							src={aess}
							alt="Transistor"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					<a
						href="https://yp.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={
								"data:image/png;base64,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"
							}
							alt="Transistor"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					{false && (
						<a
							href="https://ias.ieee.org/"
							target="_blank"
							rel="noreferrer"
							className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
						>
							<CustomImage
								className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
								src={IASLogo}
								alt="Transistor"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
					)}
					<a
						href="https://mtt.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={MTTSLogo}
							alt="Transistor"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					<a
						href="https://www.ieee-ies.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={
								"https://iten.ieee-ies.org/wp-content/uploads/2021/01/IEEE-IES-Logo-Color-RGB-72ppi.png"
							}
							alt="Transistor"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					<a
						href="https://life.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={
								"https://life.ieee.org/wp-content/uploads/ieee_life_members-logo.png"
							}
							alt="Transistor"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					<a
						href="https://entrepreneurship.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
							src={
								"https://entrepreneurship.ieee.org/wp-content/uploads/2020/07/ieee-entrepreneurship-logo.png"
							}
							alt="Transistor"
							// width={200}
							// height={200}
							loading=""
						/>
					</a>
					{false && (
						<a
							href="https://www.ieeesmc.org/"
							target="_blank"
							rel="noreferrer"
							className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
						>
							<CustomImage
								className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[220px] md:w-[220px] lg:col-span-1"
								src={
									"https://edu.ieee.org/in-sairamsmc/wp-content/uploads/sites/911/2022/07/ieee_smc.jpg"
								}
								alt="Transistor"
								// width={200}
								// height={200}
								loading=""
							/>
						</a>
					)}
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
