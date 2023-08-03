import React from "react";
import { Link } from "react-router-dom";

import ThomasCoughlin from "../../assets/people/Thomas Coughlin.webp";
import AbdulateefAliyu from "../../assets/people/Abdulateef Aliyu.webp";
import BrahamHimed from "../../assets/people/Braham Himed.jpg";
import SrikanthPillai from "../../assets/people/Srikanth Pillai.jpg";
import MikeHinchey from "../../assets/people/Mike Hinchey.webp";
import KhaledSliti from "../../assets/people/Khaled Sliti.jpg";
import KhaledLetaief from "../../assets/people/Khaled Letaief.jpg";
import MathurDeepak from "../../assets/people/mathur-deepak.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Speakers({ limit = 0 }) {
	return (
		<div>
			<div className="mb-8 text-4xl font-bold">Speakers</div>
			<div className="grid grid-cols-12 gap-y-4 md:gap-4">
				{speakersData
					?.filter((e) => e?.enabled)
					// ?.slice(0, limit)
					?.map((speaker, idx) => {
						if (idx >= limit && limit !== 0) return null;

						return (
							<Link
								key={speaker.name}
								to={`/speakers/${speaker.slug}`}
								className="col-span-12 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-4 lg:col-span-3 2xl:col-span-2"
							>
								<img
									src={speaker.imageSmall.url}
									alt=""
									className="mb-2 h-96 w-full rounded-lg object-cover md:h-64"
									loading="lazy"
								/>
								<div className="font-bold">{speaker.name}</div>
								{/* <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
								@{speaker.twitterUsername}
							</div> */}
								<div className="text-sm">{speaker.title}</div>
								{/* <div className="text-sm">
								{speaker.title}, {speaker.company.name}
							</div> */}
							</Link>
						);
					})}

				{limit ? (
					<Link
						to={`/speakers`}
						className="col-span-12 flex flex-col items-center justify-center rounded-xl border-2 p-6 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-4 lg:col-span-3 2xl:col-span-2"
					>
						<FontAwesomeIcon icon={faExternalLink} className="mb-4 h-6 w-6" />
						<div className="font-bold">See more</div>
					</Link>
				) : null}
			</div>
		</div>
	);
}

export const speakersData = [
	{
		enabled: true,
		name: "Thomas Coughlin",
		bio: "An experienced owner in the digital storage industry with a strong background in HDDs, SSDs, SAN, NAS, and cloud storage. He holds a Ph.D. in Electrical and Electronics Engineering from Shinshu University.",
		title: "IEEE President-Elect",
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
		slug: "Thomas Coughlin",
		twitterUsername: "Thomas Coughlin",
		company: {
			name: "Vercel",
		},
		image: {
			url: ThomasCoughlin,
		},
		imageSmall: {
			url: ThomasCoughlin,
		},
	},
	{
		enabled: true,
		name: "Abdulateef Aliyu",
		bio: "Abdullateef is the General Manager of projects at Phase 3 Telecom and Senior VP of IEEE Smart Village. With a strong background in telecom, he has led high-profile projects in Africa. Abdullateef holds a bachelor's degree, a master's degree with Honors, and multiple certifications. He has received several awards for his leadership and contributions.",
		title: "IEEE R8 SAC Chair",
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
		slug: "Abdulateef Aliyu",
		twitterUsername: "Abdulateef Aliyu",
		company: {
			name: "Vercel",
		},
		image: {
			url: AbdulateefAliyu,
		},
		imageSmall: {
			url: AbdulateefAliyu,
		},
	},
	{
		enabled: true,
		name: "Braham Himed",
		bio: "Dr. Himed has been an active member of the IEEE Aerospace and Electronic Systems Radar Systems Panel since 2001, initially serving as vice-chair from 2014 to 2016, and later as panel chair from 2016 to 2018. Currently, he holds the position of past-chair and chair of the Warren White Award for excellence in radar engineering. Dr. Himed is a distinguished Fellow of the IEEE since 2007 and also received the prestigious IEEE Warren White Award in 2012. He is also recognized as a Fellow of AFRL (Air Force Research Laboratory) since 2013.",
		title: "IEEE AESS Vice President Conferences",
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
		slug: "Braham Himed",
		twitterUsername: "Braham Himed",
		company: {
			name: "Vercel",
		},
		image: {
			url: BrahamHimed,
		},
		imageSmall: {
			url: BrahamHimed,
		},
	},
	{
		enabled: true,
		name: "Srikanth Pillai",
		bio: "Srikanth Vasudevan Pillai is a Ph.D. candidate and research assistant at McMaster University's MARC, specializing in the design and control of electric motors for EV and aerospace applications. At MARC, he is responsible for designing and testing high-speed machines for aerospace use. Srikanth's research focuses on machine control, and he has prior experience as an Assistant Professor at Amrita University. He is an active volunteer for IEEE and has organized and participated in international conferences. Srikanth's interests include playing the violin, reading, and watching TV. His programming skills include PIC microcontrollers and C, and he is proficient in MATLAB, PSIM, JMag, and ANSYS.",
		title: "IEEE IAS CMD Chair",
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
		slug: "Srikanth Pillai",
		twitterUsername: "Srikanth Pillai",
		company: {
			name: "Vercel",
		},
		image: {
			url: SrikanthPillai,
		},
		imageSmall: {
			url: SrikanthPillai,
		},
	},
	{
		enabled: true,
		name: "Mike Hinchey",
		bio: "Mike Hinchey is a Professor of Software Engineering at the University of Limerick. He previously directed the NASA Software Engineering Laboratory and continues to be a NASA Expert. Hinchey is a renowned innovator, holding degrees from prestigious universities and publishing extensively in the field. He has held esteemed positions worldwide and is recognized as a Chartered Engineer and Fellow of professional societies. Currently, he serves as President of IFIP and Vice-Chair of IEEE UK & Ireland section.",
		title: "IEEE R8 Director-Elect",
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
		slug: "Mike Hinchey",
		twitterUsername: "Mike Hinchey",
		company: {
			name: "Vercel",
		},
		image: {
			url: MikeHinchey,
		},
		imageSmall: {
			url: MikeHinchey,
		},
	},
	{
		enabled: true,
		name: "Khaled Sliti",
		bio: "Khaled Sliti serves as a software engineer at Google. He studied Software Engineering at the university of SUP'COM.",
		title: "Software Engineer, Google",
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
		slug: "Khaled Sliti",
		twitterUsername: "Khaled Sliti",
		company: {
			name: "Google",
		},
		image: {
			url: KhaledSliti,
		},
		imageSmall: {
			url: KhaledSliti,
		},
	},
	{
		enabled: true,
		name: "Khaled Letaief",
		bio: "New Bright Professor of Engineering, HKUST, Hong Kong Member, United States National Academy of Engineering (NAE) President, IEEE Communications Society (2018-19).",
		title: "Division Director III, IEEE Board of Directors",
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
		slug: "Khaled Letaief",
		twitterUsername: "Khaled Letaief",
		company: {
			name: "Google",
		},
		image: {
			url: KhaledLetaief,
		},
		imageSmall: {
			url: KhaledLetaief,
		},
	},
	{
		enabled: true,
		name: "Deepak Mathur",
		bio: "Deepak Mathur served as Director of IEEE Region 10. He has also served in many leadership roles in IEEE at Section, Council, Region and MGA (Member Geographic Activities). Deepak was IEEE India Council Chair in 2015-2016. Deepak, former Chief General Manager of ONGC (India’s premier public sector company engaged in exploration and exploitation of hydrocarbons), has more than 37-years of professional experience in fields of electronics, telecommunication, IT infrastructure and has held various engineering and managerial positions.",
		title: "IEEE Vice President Elect - MGA",
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
		slug: "Deepak Mathur",
		twitterUsername: "Deepak Mathur",
		company: {
			name: "Google",
		},
		image: {
			url: MathurDeepak,
		},
		imageSmall: {
			url: MathurDeepak,
		},
	},
];
