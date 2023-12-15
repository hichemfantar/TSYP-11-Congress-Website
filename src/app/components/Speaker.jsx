import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
	faChalkboardUser,
	faChevronLeft,
	faExternalLink,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StyledButton from "./StyledButton";
import CustomImage from "./CustomImage";

export default function Speaker() {
	const { speakerSlug } = useParams();

	const [speakersData, setSpeakersData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/speakers.json")
				.then((response) => response.json())
				.then((response) => {
					setSpeakersData(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	const currentSpeaker = speakersData?.find((s) => s.slug === speakerSlug);
	if (!currentSpeaker) return null;

	return (
		<div className="mx-auto max-w-3xl">
			<div className="mb-8 inline-block text-sm">
				<Link to="/speakers" className="text-gray-700 dark:text-gray-300">
					<FontAwesomeIcon icon={faChevronLeft} />{" "}
					<span className="font-bold hover:underline">Back to Speakers</span>
				</Link>
			</div>

			<div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
				<div className="col-span-full md:col-span-4">
					<CustomImage
						src={currentSpeaker.imageSmall.url}
						alt=""
						className="mx-auto h-60 rounded-lg object-cover"
					/>
				</div>
				<div className="col-span-full flex flex-col gap-4 md:col-span-8">
					<div className="">
						<div className="flex justify-between">
							<div className="text-2xl font-bold">{currentSpeaker.name}</div>
							{false && (
								<div className="flex gap-4 text-lg text-gray-600">
									<button>
										<FontAwesomeIcon
											icon={faTwitter}
											className="hover: transition hover:scale-125 active:scale-110 hover:dark:text-gray-400"
										/>
									</button>
									<button>
										<FontAwesomeIcon
											icon={faGithub}
											className="hover: transition hover:scale-125 active:scale-110 hover:dark:text-gray-400"
										/>
									</button>
								</div>
							)}
						</div>
						{false && (
							<div className="text-gray-600 dark:text-gray-400">
								@{currentSpeaker.twitterUsername}
							</div>
						)}
						<div>{currentSpeaker.title}</div>
						{/* <div>
							{currentSpeaker.title} at {currentSpeaker.company.name}
						</div> */}
					</div>
					<div>
						<div className="font-semibold text-gray-600 dark:text-gray-400">
							About
						</div>
						<p>
							{currentSpeaker.bio ||
								"Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions."}
						</p>
					</div>
					<div>
						<Link to={`/schedule?speaker=${currentSpeaker.name}`}>
							<StyledButton
								message={"Check Sessions"}
								icon={<FontAwesomeIcon icon={faChalkboardUser} />}
							/>
						</Link>
					</div>
					{false && (
						<>
							<div>
								<div className="font-semibold text-gray-600 dark:text-gray-400">
									Watch their Session
								</div>
								<p>
									{currentSpeaker.talk?.description ||
										"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates."}
								</p>
							</div>

							<div>
								<StyledButton
									message={"Watch Session"}
									icon={<FontAwesomeIcon icon={faPlay} />}
								/>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

const speaker = {
	name: "Lydia Hallie",
	bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
	title: "Staff DevRel",
	slug: "lydia",
	twitterUsername: "lydiahallie",
	githubUsername: "lydiahallie",
	company: {
		name: "Vercel",
	},
	talk: {
		title: "Keynote",
		description:
			"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
		descriptionWithFormatting: {
			value: {
				schema: "dast",
				document: {
					type: "root",
					children: [
						{
							type: "paragraph",
							children: [
								{
									type: "span",
									value:
										"TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
								},
							],
						},
					],
				},
			},
		},
		youtube: "https://www.youtube.com/watch?v=NiknNI_0J48",
	},
	image: {
		url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg",
	},
	imageSmall: {
		url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg?h=192&w=192",
	},
};
