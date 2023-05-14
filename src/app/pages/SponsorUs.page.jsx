import React from "react";
import tsypCollabFile from "../../assets/dossier-collab-tsyp.png";
import { Link } from "react-router-dom";
import { ContactForm } from "./Contact.page";

export default function SponsorUsPage() {
	return (
		<div className="h-full">
			<section className="grid items-center justify-center gap-12 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Collaborate with us
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						We are excited to invite you to be a sponsor for our Tunisian
						students who will be participating in the upcoming IEEE TSYP event.
						This event will provide an excellent opportunity for our students to
						showcase their talents and gain valuable experience in the field of
						engineering. By sponsoring our students, you can help them achieve
						their goals and make a real difference in their lives.
						<p className="mt-4">
							As a sponsor, you will have the chance to be recognized as a
							supporter of education and innovation, while also promoting your
							brand to a wider audience. Your support will help cover the costs
							of travel, accommodation, and registration fees for our students,
							allowing them to fully participate in the event and take advantage
							of all the opportunities it offers.
						</p>
						<p className="mt-4">
							We would be honored to have your support and look forward to
							discussing the possibilities with you. Thank you for considering
							this opportunity.
						</p>
					</h1>
					<div>
						<Link
							// type="button"
							to={"https://ieee.tn/"}
							target="_blank"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
							<span className="">Download collaboration proposal</span>
							{/* </div> */}
						</Link>
					</div>
				</div>
				<div className="col-span-6 mx-auto w-full">
					{/* <iframe
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
					></iframe> */}
					<img
						src={tsypCollabFile}
						className="mx-auto h-[32rem] rounded-2xl object-cover"
						alt="TSYP 11"
					/>
				</div>
			</section>

			<ContactForm />
		</div>
	);
}
