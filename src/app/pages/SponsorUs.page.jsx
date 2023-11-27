import React from "react";
import tsypCollabFilePreview from "../../assets/dossier-collab-tsyp.png";
// import tsypCollabPDF_EN from "../../assets/pdf/19.07.ENGLISH-PDF-DOSSIER-Collaboration.pdf";
// import tsypCollabPDF_FR from "../../assets/pdf/19.07.FRENCH-PDF-DOSSIER-Collaboration-compressed.pdf";
import { Link } from "react-router-dom";
import { ContactDetails } from "./Contact.page";
import CustomImage from "../components/CustomImage";

export default function SponsorUsPage() {
	return (
		<div className="h-full">
			<section className="grid items-center justify-center gap-12 py-8 md:grid-cols-12 md:py-6">
				<div className="col-span-6 mx-auto md:order-last">
					<div className="">
						<Link
							to={
								"https://drive.google.com/file/d/1mnUz3fwT11dLj0fs0xxR8PdFKa9QxqCp/view?usp=sharing"
							}
							target="_blank"
							rel="noreferrer"
							className=""
						>
							<CustomImage
								src={tsypCollabFilePreview}
								className="mx-auto h-[32rem] rounded-2xl object-cover shadow-lg transition hover:scale-105"
								alt="TSYP 11"
							/>
						</Link>
					</div>
				</div>

				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Collaborate with us
					</h1>
					<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
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
					<div className="mb-6">
						<Link
							to={
								"https://drive.google.com/file/d/1mnUz3fwT11dLj0fs0xxR8PdFKa9QxqCp/view?usp=sharing"
							}
							target="_blank"
							rel="noreferrer"
							className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							<span className="">Download collaboration proposal</span>
						</Link>
					</div>
					<div>
						<Link
							to={
								"https://drive.google.com/file/d/1k4yUOoSRc7APLeAK_NDzptpxXEKMWa4l/view?usp=sharing"
							}
							target="_blank"
							rel="noreferrer"
							className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							<span className="">Télécharger le dossier de collaboration</span>
						</Link>
					</div>
				</div>
			</section>

			<ContactDetails />
		</div>
	);
}
