import React from "react";
import Logo from "../../assets/main logo black (Custom).png";
import LightLogo from "../../assets/main logo_2 (Custom).png";
import SBGroupPic from "../../assets/sb-group-pic.jpg";

export default function TunisiaPage() {
	return (
		<div className="h-full">
			<section className="grid grid-cols-12 items-center justify-center md:pt-32">
				<div className="col-span-12 md:mx-auto">
					<h1 className="mb-4 text-start text-4xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
						Discover Tunisia
					</h1>
					{/* <h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
						18-20 December 2023, Diar Lemdina, Hammamet.
					</h1> */}
				</div>
			</section>

			<section className="grid items-center justify-center gap-12 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Tunisia - تونس
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						There’s so much to see and do in each region of Tunisia: a wide
						variety of landscapes, a coastline spanning 1,250km, studded with
						islands and archipelagos, a fantastic array of traditions and
						customs and a rich historical heritage. We are delighted to
						introduce you to these regions by breaking them down into this
						video.
					</h1>
				</div>
				<div className="col-span-6 mx-auto w-full">
					<iframe
						// width="560"
						// width="100%"
						// height="315"
						// height="500"
						// width="100%"
						className="mx-auto h-56 w-full rounded-2xl sm:h-96"
						// className="mx-auto h-56 w-full sm:h-60"
						src="https://www.youtube.com/embed/cR8mH08xNVw"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
					{/* <img
						src={LightLogo}
						className="mx-auto h-56 object-contain sm:h-60"
						alt="TSYP 11"
					/> */}
				</div>
			</section>

			{false && (
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
							The IEEE Tunisian Section aims to disseminate IEEE activities to
							all corners of the country through educational and technical
							activities, networking of people, and developing technology and
							its applications for humanitarian challenges. The section supports
							chapters, special interest groups, student activities, and student
							awards. IEEE is anchored in the Tunisian engineering landscape
							with more than 33 Student Branches' spread over the different
							engineering schools, faculties and universities
						</h1>
					</div>
				</section>
			)}

			{false && (
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
							280 members, making it the largest Student Branch in Sousse, and
							7th in Tunisia Section. It encompasses 5 Technical Chapters: CIS,
							CS, IAS, PES, RAS, and 2 Affinity Groups: SIGHT & WIE. We have had
							the honor of receiving more than 12 worldwide IEEE Awards across
							all fields through the dedication and commitment of each of our
							members.
						</h1>
					</div>
				</section>
			)}

			<section className="py-8 md:py-28">
				<div className="mx-auto">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Find us here.
					</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6775315.518954521!2d9.560763999999999!3d33.98586695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2stn!4v1683130409503!5m2!1sen!2stn"
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
		</div>
	);
}
