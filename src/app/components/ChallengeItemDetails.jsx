import {
	faChevronLeft,
	faDownload,
	faExternalLink,
	faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import ExpoDetailsResources from "./ExpoDetailsResources";
import StyledButton from "./StyledButton";
import CustomImage from "./CustomImage";
import tn_flag from "../../assets/Flag_of_Tunisia.svg";

import { useEffect, useState } from "react";

export default function ChallengeItemDetails() {
	const { challengeSlug } = useParams();

	const [challengesData, setChallengesData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/challenges.json")
				.then((response) => response.json())
				.then((response) => {
					setChallengesData(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	const currentCompany = challengesData.find((s) => s.slug === challengeSlug);

	return (
		<div className="mx-auto max-w-3xl">
			<div className="mb-8 inline-block text-sm">
				<Link to="/challenges" className="text-gray-700 dark:text-gray-300">
					<FontAwesomeIcon icon={faChevronLeft} />{" "}
					<span className="font-bold hover:underline">Back to Challenges</span>
				</Link>
			</div>

			<ChallengeDetails data={currentCompany} />
		</div>
	);
}

function ChallengeDetails({ data }) {
	return (
		<div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
			<div className="relative col-span-full md:col-span-5">
				<CustomImage
					src={data.logo.url || data.logo}
					alt=""
					className="mx-auto aspect-video h-48 rounded-lg bg-gray-50 object-contain p-6"
				/>
				{data.type === "section-partner" && (
					<img
						src={tn_flag}
						className="absolute top-5 left-5 aspect-video h-5 rounded-md object-cover"
						alt="tunisian flag"
					/>
				)}
				<div className="mt-4 ">
					<a href={data.website} target="_blank" rel="noreferrer">
						<StyledButton
							className={"w-full"}
							message={"Download PDF"}
							icon={<FontAwesomeIcon icon={faDownload} />}
						/>
					</a>
					<a href={data.website} target="_blank" rel="noreferrer">
						<StyledButton
							className={"mt-2 w-full"}
							message={"Upload Submission"}
							icon={<FontAwesomeIcon icon={faUpload} />}
						/>
					</a>
				</div>

				<div className="mt-4 hidden md:block">
					{data.links && <ExpoDetailsResources links={data.links} />}
				</div>
			</div>
			<div className="col-span-full flex flex-col gap-4 md:col-span-7">
				<div className="">
					<div className="flex justify-between">
						<div className="text-2xl font-bold">{data.name}</div>
					</div>
				</div>
				<div>
					<div className="mb-4">
						<div className="mb-2 text-lg font-bold">Goal</div>
						<div className="">{data.goal}</div>
					</div>

					<div className="mb-4">
						<div className="mb-2 text-lg font-bold">Description</div>
						<div>
							<p>{data.description}</p>
						</div>
					</div>

					<div className="mb-4">
						<div className="mb-2 text-lg font-bold">Members per team</div>
						<div>
							<p>Max. {4}</p>
						</div>
					</div>

					<div className="mb-4">
						<div className="mb-2 text-lg font-bold">Duration & deadline</div>
						<div>
							<p>01/10/2023 - 01/12/2023</p>
						</div>
					</div>
					<div className="mb-4">
						<div className="mb-2 text-lg font-bold">Challenge deliverables</div>
						<div className="prose text-gray-900 dark:text-gray-200">
							<ol>
								<li>Presentation (it must be an actual downloaded file)</li>
								<li>Github/gitlab/code repository</li>
								<li>Article submission</li>
								<li>
									Video submission
									<ul>
										<li>Maximum duration</li>
										<li>Video style</li>
									</ul>
								</li>
								<li>
									Pitching
									<ul>
										<li>Pitch duration</li>
										<li>Pitch language</li>
									</ul>
								</li>
							</ol>
						</div>
					</div>
					<div className="mb-4">
						<div className="mb-2 text-lg font-bold">Submission Templates</div>
						<div className="flex items-center gap-2 text-gray-900 dark:text-gray-200">
							<Link to={"https://diarlemdina.medinahotelsandresorts.com/en"}>
								<FontAwesomeIcon icon={faExternalLink} className="h-3 w-3" />
							</Link>
							Links
						</div>
					</div>
					<div className="mb-4">
						<div className="mb-2 text-lg font-bold">
							Challenge scoring formula
						</div>
						<div className="prose text-gray-900 dark:text-gray-200">
							<ul>
								<li>Total score: X points</li>
								<li>
									Non-Technical: x points
									<ul>
										<li>Quality of pitching and presentation: x points</li>
										<li>
											Respect to the challenge rules & guidelines: x points
										</li>
										<li>Creativity: x points</li>
									</ul>
								</li>
								<li>
									Technical: x points
									<ul>
										<li>Quality of proposed solution/solutions: x points</li>
										<li>Technologies used: x points</li>
									</ul>
								</li>
								<li>
									Bonus points: x points
									<ul>
										<li>What would you like to have bonus points for?</li>
										<li>Having at least one member in the team: x points.</li>
										<li>Presenting a prototype if applicable: x points</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<div className="mb-4">
						<div className="mb-2 text-lg font-bold">
							Challenge number of winners.
						</div>
						<div>Max. 3</div>
					</div>
				</div>

				{false && (
					<div>
						<a href={data.website} target="_blank" rel="noreferrer">
							<StyledButton
								message={"Download"}
								icon={<FontAwesomeIcon icon={faExternalLink} />}
							/>
						</a>
					</div>
				)}

				{data.links && (
					<div className="block md:hidden">
						<ExpoDetailsResources links={data.links} />
					</div>
				)}
			</div>
		</div>
	);
}

const companyMock = {
	name: "AWS",
	description:
		"Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.",
	slug: "vercel",
	website: "https://vercel.com/",
	discord: null,
	youtube: "",
	cardImage: null,
	logo: {
		url: "https://www.datocms-assets.com/35255/1665957463-sponsor-logo-vercel.png",
	},
	links: [
		{
			text: "Signup",
			url: "https://vercel.com/signup?utm_source=nextjs_conf&utm_medium=web&utm_campaign=nextjs_conf_platform_page_sponsor_signup",
		},
		{
			text: "Contact Sales",
			url: "https://vercel.com/contact/sales?utm_source=nextjs_conf&utm_medium=web&utm_campaign=nextjs_conf_platform_page_sponsor_contact_sales",
		},
		{
			text: "Blog",
			url: "https://vercel.com/blog?utm_source=nextjs_conf&utm_medium=web&utm_campaign=nextjs_conf_platform_page_sponsor_blog",
		},
	],
};
