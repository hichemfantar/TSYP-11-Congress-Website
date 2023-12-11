import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hotel_map from "../../assets/hotel/hotel_map.png";
import CustomImage from "../components/CustomImage";
import ScheduleList from "../components/schedule/ScheduleList";
import { Fade } from "react-awesome-reveal";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function VenuePage() {
	return (
		<>
			<Fade triggerOnce>
				<section className="mt-10">
					<div className="xflex mb-8 items-center justify-center gap-2 text-center lg:mb-7">
						<h1 className="text-3xl font-bold tracking-tight   lg:text-5xl lg:font-extrabold lg:leading-none">
							Medina Congress Center, Yasmine Hammamet.
						</h1>

						{/* <Link to={"https://diarlemdina.medinahotelsandresorts.com/en"}>
							<FontAwesomeIcon icon={faExternalLink} className="h-5 w-5" />
						</Link> */}
					</div>
					<section className="py-8 md:py-16 ">
						<div className="mx-auto">
							{/* <h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
								Find us here.
							</h1> */}
							<iframe
								title="tsyp location"
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12851.062625886407!2d10.5328555!3d36.3664548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029e020677bc0d%3A0x82fe8c3faf57e873!2sDiar%20Lemdina!5e0!3m2!1sen!2stn!4v1682280141809!5m2!1sen!2stn"
								className="w-full rounded-2xl shadow-lg"
								height="500"
								style={{
									border: 0,
									// width: "100%",
								}}
								allowFullScreen
								referrerPolicy="no-referrer-when-downgrade"
								loading="lazy"
							></iframe>
						</div>
					</section>

					<div className="">
						<img
							src={hotel_map}
							alt=""
							className="mx-auto h-96 w-full rounded-2xl object-contain shadow-lg md:h-auto md:w-auto"
						/>
					</div>
				</section>{" "}
			</Fade>
		</>
	);
}
