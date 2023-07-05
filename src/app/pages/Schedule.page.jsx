import ScheduleList from "../components/schedule/ScheduleList";

export default function SchedulePage() {
	return (
		<>
			<ScheduleList />
			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="order-last col-span-6">
					<iframe
						title="tsyp location"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12851.062625886407!2d10.5328555!3d36.3664548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029e020677bc0d%3A0x82fe8c3faf57e873!2sDiar%20Lemdina!5e0!3m2!1sen!2stn!4v1682280141809!5m2!1sen!2stn"
						className="w-full rounded-2xl"
						height="400"
						width="100%"
						style={{
							border: 0,
							width: "100%",
						}}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Arrivals & Check-In.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						The check-in will be held in the hotel reception. The congress hotel
						is Diar Lemdina. It is located along a beautiful white beach. The
						hotel is in an enchanting and relaxing setting that superbly
						reflects the architecture of the country's tradition. Diar Lemdina
						hotel is ideal for both business and leisure.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto">
					<img
						src={
							"https://media-cdn.tripadvisor.com/media/photo-s/15/48/c8/90/hotel-diar-lemdina.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Opening Ceremony.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						The opening ceremony will be held at the Theater of regions in the
						city of culture . It will contain a variety of speeches delivered by
						guests across the Region 8, artistic shows from contemporary and
						traditional eras and a preview of what’s awaiting you during the
						days of the congress It will be held in the City of Culture, one of
						the most prestigious cultural complexes in Tunisia, at the Theater
						of regions which has a capacity of 700 seats. The hall is equipped
						with an orchestra pit and the most modern technical equipment.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto md:order-last">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/party.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Free time.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						An opportunity where our dear participants will get the chance to
						get to know over three hundred people from different cultures across
						Region 8 and break the ice! Many fun activities will be held
						allowing you to expand your network. Get ready for a night to
						remember!
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/keynotes.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Keynotes.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						A variety of lectures will be organized covering many technical
						fields or even promoting and introducing many IEEE entities which
						complete the technical program in order to provide a memorable
						congress.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto md:order-last">
					<img
						src={
							"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Workshop sessions.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						Various workshops in different fields will be held in the hotel
						dealing with up-to-date topics in diverse technical fields and also
						related to soft skills.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/tours.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Tour and visits.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						Tunisia has always been the crossroad of many Civilizations. From
						Romans to Carthaginians, we will have a tour on Tunisia’s most
						fascinating tourist sites presenting these cultures and will surely
						take advantage of the panoramic views to take our group photos!
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto md:order-last">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/tunisian.png"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Tunisian Dinner.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						We are taking you on a trip across Tunisia’s delicious dishes
						brought to you by the best caterers around the country. You will
						also enjoy a traditional show covering tunisian music, dances and
						traditions.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/career.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Career Fair.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						This session will present an opportunity to Youngrofessionals and
						Students looking for a job or seeking an internship allowing them to
						interact directly with our exhibitors. Many companies will be
						presented and you can discover their field of activity. During this
						session, some interviews will be held and you can even submit your
						CV!
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto md:order-last">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/poster.png"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Poster Session.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						During this session each Student branch attending the congress will
						present its activities and projects to other participants and our
						dear guests. An award will be given at the end of the congress to
						the best stall.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/culture.png"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Multicultural evening.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						Each participant will present his country and its traditions through
						clothing, food, dance, or even songs.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto md:order-last">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/plenary.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Plenary Sessions.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						Plenaries are conferences delivered to all of our participants
						dealing with various topics and taking many forms such as round
						tables.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/gala.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Gala Dinner.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						Get your fancy clothes ready because we have a gala dinner ! You
						will profit from a variety of delicious dishes during the dinner.
						There will also be an award ceremony.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto md:order-last">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/break.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Networking (breaks).
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						Everyone needs a break every once in a while, and our coffee breaks
						will be the perfect moment to exchange experiences and speak in a
						more relaxed way, making it easier for people to get to know each
						other.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/break.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Closing Ceremony.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						a closing ceremony will be held at the university presenting many
						speeches and summaries of the congress.
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-16 py-8 md:grid-cols-12 md:py-16">
				<div className="col-span-6 mx-auto md:order-last">
					<img
						src={
							"https://r8syp.ieee.tn/images/schedule/description%20images/checkin.jpg"
						}
						className="mx-auto h-52 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
						loading="lazy"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Congress Check-out.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						even the best stories come to an end. We hope our paths will cross
						again and that you had fun with us!
					</h1>
				</div>
			</section>
		</>
	);
}
