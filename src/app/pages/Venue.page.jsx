import hotel_map from "../../assets/hotel/hotel_map.png";
import CustomImage from "../components/CustomImage";
import ScheduleList from "../components/schedule/ScheduleList";
import { Fade } from "react-awesome-reveal";

export default function VenuePage() {
	return (
		<>
			<Fade>
				<section className="mt-10">
					<div className="text-center">
						<h1 className="mb-8 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-5xl lg:font-extrabold lg:leading-none">
							Venue Location.
						</h1>
					</div>
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
