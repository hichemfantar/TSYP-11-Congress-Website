import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import StyledButton from "../components/StyledButton";

export default function VirtualGamePage() {
	return (
		<div>
			<Fade triggerOnce>
				<Details />
			</Fade>
		</div>
	);
}

function Details(params) {
	return (
		<section className="grid items-center justify-center gap-8 py-8 md:grid-cols-12 md:py-10">
			<h1 className="col-span-12 mb-4 text-center text-4xl font-bold tracking-tight   lg:mb-7 lg:text-5xl lg:font-extrabold lg:leading-none">
				Virtual TSYP Congress for everyone.
			</h1>
			<div className="col-span-12 mx-auto w-full md:col-span-6">
				<iframe
					className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
					src="https://www.youtube.com/embed/anl1E8B5HVk?si=2j4ddNJwqwYMlGst&autoplay=1"
					title="WorkAdventure trailer"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					loading="lazy"
				></iframe>
				{/* <CustomImage
					src={
						"https://i0.wp.com/workadventu.re/wp-content/uploads/2023/06/HP-Boost.webp?ssl=1"
					}
					className="mx-auto h-56 rounded-2xl object-cover shadow-lg sm:h-96"
					alt="TSYP 11"
				/> */}
			</div>
			<div className="col-span-12 md:col-span-6">
				{/* <h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					Virtual TSYP for everyone.
				</h1> */}
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-3xl lg:font-extrabold lg:leading-none">
					Powered by WorkAdventure.
				</h1>
				<p className="text-lg font-medium lg:text-start lg:font-normal">
					Step into a tailored virtual workplace designed to cater to the needs
					of remote and hybrid teams. The congress offers a dynamic platform
					where attendees can engage in real-time collaboration, seamlessly
					communicate within projects or missions, and participate in
					spontaneous conversations or scheduled meetings.
				</p>
				<p className="mb-4 hidden text-lg font-medium md:block  lg:mb-7 lg:text-start lg:font-normal">
					By leveraging cutting-edge technology, the Virtual TSYP Congress
					breaks down geographical barriers, providing a unique opportunity for
					IEEE members in Tunisia to delve into current and future challenges in
					science and engineering.
				</p>
				<div>
					<Link
						// type="button"
						to={
							"https://play.workadventu.re/@/ieee-essths/tsyp-11/registration_hall"
						}
						target="_blank"
						rel="noreferrer"
					>
						<StyledButton
							message={"Join Now"}
							icon={<FontAwesomeIcon icon={faRocket} />}
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}
