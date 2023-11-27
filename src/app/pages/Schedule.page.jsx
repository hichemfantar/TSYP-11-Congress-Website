import hotel_map from "../../assets/hotel/hotel_map.png";
import CustomImage from "../components/CustomImage";
import ScheduleList from "../components/schedule/ScheduleList";
import { Fade } from "react-awesome-reveal";

export default function SchedulePage() {
	return (
		<>
			<ScheduleList />

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="order-last col-span-6">
						<iframe
							title="tsyp location"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12851.062625886407!2d10.5328555!3d36.3664548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029e020677bc0d%3A0x82fe8c3faf57e873!2sDiar%20Lemdina!5e0!3m2!1sen!2stn!4v1682280141809!5m2!1sen!2stn"
							className="w-full rounded-2xl shadow-lg"
							height="400"
							width="100%"
							loading="lazy"
							style={{
								border: 0,
								width: "100%",
							}}
							allowFullScreen=""
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Arrivals & Check-In.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							The check-in will be held in the hotel reception. The congress
							hotel is Diar Lemdina. It is located along a beautiful white
							beach. The hotel is in an enchanting and relaxing setting that
							superbly reflects the architecture of the country's tradition.
							Diar Lemdina hotel is ideal for both business and leisure.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto">
						<CustomImage
							src={
								"https://media-cdn.tripadvisor.com/media/photo-s/15/48/c8/90/hotel-diar-lemdina.jpg"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Opening Ceremony.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							The opening ceremony will be held at the Theater of regions in the
							city of culture . It will contain a variety of speeches delivered
							by guests across the Region 8, artistic shows from contemporary
							and traditional eras and a preview of what’s awaiting you during
							the days of the congress It will be held in the City of Culture,
							one of the most prestigious cultural complexes in Tunisia, at the
							Theater of regions which has a capacity of 700 seats. The hall is
							equipped with an orchestra pit and the most modern technical
							equipment.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto md:order-last">
						<CustomImage
							src={
								"https://images.pexels.com/photos/7964237/pexels-photo-7964237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Booths and Networking.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							An opportunity for our dear participants to meet over members from
							different student branches and get to know their work.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto">
						<CustomImage
							src={
								"https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=1600"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Discussion Panels.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							A variety of lectures will be organized covering many technical
							fields or even promoting and introducing many IEEE entities which
							complete the technical program in order to provide a memorable
							congress.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto md:order-last">
						<CustomImage
							src={
								"https://images.pexels.com/photos/3285203/pexels-photo-3285203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Workshop sessions.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							Various workshops in different fields will be held in the hotel
							dealing with up-to-date topics in diverse technical fields and
							also related to soft skills.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto">
						<CustomImage
							src={
								"https://images.pexels.com/photos/4963436/pexels-photo-4963436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Career Fair.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							This session will present an opportunity to young professionals
							and Students looking for a job or seeking an internship allowing
							them to interact directly with our exhibitors. Many companies will
							be presented and you can discover their field of activity. During
							this session, some interviews will be held and you can even submit
							your CV!
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto md:order-last">
						<CustomImage
							src={
								"https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1600"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Poster Session.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							During this session each Student branch attending the congress
							will present its activities and projects to other participants and
							our dear guests. An award will be given at the end of the congress
							to the best stall.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto">
						<CustomImage
							src={
								"https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Team Building.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							During this session each Student branch attending the congress
							will present its activities and projects to other participants and
							our dear guests. An award will be given at the end of the congress
							to the best stall.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto md:order-last">
						<CustomImage
							src={
								"https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Plenary Sessions.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							Plenaries are conferences delivered to all of our participants
							dealing with various topics and taking many forms such as round
							tables.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto">
						<CustomImage
							src={
								"https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Dinner.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							Get your appeties ready because we have a special dinner ! You
							will profit from a variety of delicious dishes during the dinner.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto md:order-last">
						<CustomImage
							src={
								"https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Networking (breaks).
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							Everyone needs a break every once in a while, and our coffee
							breaks will be the perfect moment to exchange experiences and
							speak in a more relaxed way, making it easier for people to get to
							know each other.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto">
						<CustomImage
							src={
								"https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Closing Ceremony.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							a closing ceremony will be held presenting many speeches and
							summaries of the congress.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto md:order-last">
						<CustomImage
							src={
								"https://images.pexels.com/photos/3678057/pexels-photo-3678057.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Awards Ceremony.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							A big applause for those who one Awards as an appreciation for
							their hard work in IEEE throught the years.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto">
						<CustomImage
							src={
								"https://images.pexels.com/photos/8761520/pexels-photo-8761520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Student Paper Contest.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							The Student Paper Contest (SPC) is one of the main technical
							activities in Region 8. It was established in 1967 and since then
							it is an excellent occasion for personal leadership and
							involvement of student members in a prospective IEEE
							scientific/technical activity. The contest increases the
							visibility of student branches and allows for wider promotion of
							IEEE among students. The success of the SPC relies heavily on the
							input from the Student Branch Officers, especially the Student
							Branch Counselor and the Student Branch Chair.
						</h1>
					</div>
				</section>{" "}
			</Fade>

			<Fade>
				<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
					<div className="col-span-6 mx-auto md:order-last">
						<CustomImage
							src={
								"https://media-cdn.tripadvisor.com/media/photo-s/15/48/c8/90/hotel-diar-lemdina.jpg"
							}
							className="mx-auto aspect-video rounded-2xl object-cover"
							alt="TSYP 11"
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Congress Check-out.
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							even the best stories come to an end. We hope our paths will cross
							again and that you had fun with us!
						</h1>
					</div>
				</section>{" "}
			</Fade>
		</>
	);
}
