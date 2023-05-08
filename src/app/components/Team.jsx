import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
	return (
		<div>
			<div className="mb-8 text-4xl font-bold">Meet the Team</div>
			<div className="grid grid-cols-12 gap-y-4 md:gap-4">
				{speakersData
					?.filter((s) => !!s?.active)
					?.map((speaker) => (
						<Link
							key={speaker.name}
							to={speaker.slug}
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
							<div className="text-sm">
								{speaker.title}
								{false && `, ${speaker.company.name}`}
							</div>
						</Link>
					))}
			</div>
		</div>
	);
}

const speakersData = [
	{
		active: true,
		name: "Kayoum Djedidi",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Chairman",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Asma Basly",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Vice Chairwoman",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Loua Ben Afia",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "General Secretary",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Oussema Ben Mahmoud",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Treasurer",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Sarry Boukadida",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Sponsorship Chief",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Mariem Sidia",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Program Chief",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Oussema El Haddad",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Program Chief",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Malek Gdoura",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Guests & Speakers Coordinator",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Bachar Ben Slama",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Logistics Chief",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Fatma Belghith",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Logistics Manager",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Safa Mansour",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Logistics Manager",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Lina Bouallegue",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Media Chief",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Elyess Ben Sassi",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Media Manager",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Wijdene Mootamri",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "Video Manager",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		active: true,
		name: "Bassem Gouty",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "IT Chief",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},

	{
		name: "Guillermo Rauch",
		bio: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
		title: "CEO",
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
		slug: "rauchg",
		twitterUsername: "rauchg",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png?h=192&w=192",
		},
	},
	{
		name: "Lee Robinson",
		title: " VP of DX",
		slug: "leerob",
		twitterUsername: "leeerob",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg?h=192&w=192",
		},
	},
	{
		name: "Lydia Hallie",
		title: "Staff DevRel",
		slug: "lydia",
		twitterUsername: "lydiahallie",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg?h=192&w=192",
		},
	},
	{
		name: "Delba de Oliveira",
		title: "Senior DevRel",
		slug: "delba",
		twitterUsername: "delba_oliveira",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg?h=192&w=192",
		},
	},
	{
		name: "Maia Teegarden",
		title: "Eng Manager",
		slug: "padmaia",
		twitterUsername: "padmaia",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png?h=192&w=192",
		},
	},
	{
		name: "Kylie Czajkowski",
		title: "Eng Manager",
		slug: "kyliestew",
		twitterUsername: "kyliestew",
		company: {
			name: "Vercel",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665002718-kylie.jpeg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665002718-kylie.jpeg?h=192&w=192",
		},
	},
	{
		name: "Una Kravets",
		title: "Staff DevRel",
		slug: "una",
		twitterUsername: "una",
		company: {
			name: "Google Chrome",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664996835-dsc052331.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664996835-dsc052331.jpg?h=192&w=192",
		},
	},
	{
		name: "Kelsey Hightower",
		title: "Principal Engineer",
		slug: "kelseyhightower",
		twitterUsername: "kelseyhightower",
		company: {
			name: "Google",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1634263804-kelsey.jpeg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1634263804-kelsey.jpeg?h=192&w=192",
		},
	},
	{
		name: "Fernando Rojo",
		title: "Co-Founder",
		slug: "fernandotherojo",
		twitterUsername: "FernandoTheRojo",
		company: {
			name: "BeatGig",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664991007-rojo.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664991007-rojo.jpg?h=192&w=192",
		},
	},
	{
		name: "Tejas Kumar",
		title: "Director of DevRel",
		slug: "tejaskumar_",
		twitterUsername: "tejaskumar_",
		company: {
			name: "Xata",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664991819-tejas.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664991819-tejas.png?h=192&w=192",
		},
	},
	{
		name: "Tru Narla",
		title: "Software Engineer",
		slug: "trunarla",
		twitterUsername: "trunarla",
		company: {
			name: "Discord",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664998811-tru-headshot.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664998811-tru-headshot.png?h=192&w=192",
		},
	},
	{
		name: "Sam Selikoff",
		title: "Founder",
		slug: "samselikoff",
		twitterUsername: "samselikoff",
		company: {
			name: "Build UI",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664999142-headshot.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664999142-headshot.jpg?h=192&w=192",
		},
	},
	{
		name: "Kapehe",
		title: "Senior DevRel",
		slug: "kapehe",
		twitterUsername: "kapehe_ok",
		company: {
			name: "Sanity",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665150456-kap.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665150456-kap.jpg?h=192&w=192",
		},
	},
	{
		name: "Theo Browne",
		title: "CEO",
		slug: "t3dotgg",
		twitterUsername: "t3dotgg",
		company: {
			name: "Ping",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664988146-headshot-main.jpeg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664988146-headshot-main.jpeg?h=192&w=192",
		},
	},
	{
		name: 'Christopher "vjeux" Chedeau',
		title: "Front-End Engineer",
		slug: "vjeux",
		twitterUsername: "vjeux",
		company: {
			name: "Meta",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665150410-christopher.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665150410-christopher.jpg?h=192&w=192",
		},
	},
	{
		name: "Amy Dutton",
		title: "Director of Design",
		slug: "selfteachme",
		twitterUsername: "selfteachme",
		company: {
			name: "ZEAL",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664992229-avatar-2x.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664992229-avatar-2x.jpg?h=192&w=192",
		},
	},
	{
		name: "Rebecca Bakels",
		title: "Engineer & Advocate",
		slug: "beccalytics",
		twitterUsername: "Beccalytics",
		company: {
			name: "City Furniture",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664986697-rebecca_bakels.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664986697-rebecca_bakels.jpg?h=192&w=192",
		},
	},
	{
		name: "Trecia Kat",
		title: "DevRel Intern",
		slug: "treciaks",
		twitterUsername: "TreciaKS",
		company: {
			name: "Strapi",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664987337-trecia_kat.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664987337-trecia_kat.jpg?h=192&w=192",
		},
	},
	{
		name: "Jesse Hall",
		title: "Senior DevRel",
		slug: "codestackr",
		twitterUsername: "codeSTACKr",
		company: {
			name: "MongoDB",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664987782-jesse-hall-square.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664987782-jesse-hall-square.jpg?h=192&w=192",
		},
	},
	{
		name: "Pieter Brinkman",
		title: "VP Technical Marketing",
		slug: "pieterbrink123",
		twitterUsername: "pieterbrink123",
		company: {
			name: "Sitecore",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664988506-pieter-bio-image-300x300.webp",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664988506-pieter-bio-image-300x300.webp?h=192&w=192",
		},
	},
	{
		name: "Debra Gail White",
		title: "CTO",
		slug: "0phe1iatweets",
		twitterUsername: "0phe1iaTweets",
		company: {
			name: "Rocket Resume",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664991281-debrawhite.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664991281-debrawhite.jpg?h=192&w=192",
		},
	},
	{
		name: "Kaho Cheung",
		title: "Senior Engineer",
		slug: "unkleho",
		twitterUsername: "unkleho",
		company: {
			name: "AgriWebb",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1602516567-kaho1000px-kaho-cheung.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1602516567-kaho1000px-kaho-cheung.jpg?h=192&w=192",
		},
	},
	{
		name: "Chris Bautista",
		title: "Senior Engineer",
		slug: "trashh_dev",
		twitterUsername: "trashh_dev",
		company: {
			name: "Netflix",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664992526-img_7541.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664992526-img_7541.jpg?h=192&w=192",
		},
	},
	{
		name: "Mahmoud Abdelwahab ",
		title: "Developer Advocate",
		slug: "thisismahmoud_",
		twitterUsername: "thisismahmoud_",
		company: {
			name: "Freelancer",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664994239-mahmoud.webp",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664994239-mahmoud.webp?h=192&w=192",
		},
	},
	{
		name: "Steve Sewell",
		title: "Co-founder, CEO",
		slug: "builderio",
		twitterUsername: "steve8708",
		company: {
			name: "Builder.io",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664997070-steve.jpeg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664997070-steve.jpeg?h=192&w=192",
		},
	},
	{
		name: "Raquel Yuste",
		title: "Frontend Engineer",
		slug: "raqyuste",
		twitterUsername: "raqyuste",
		company: {
			name: "Tinybird",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664997370-photo.png",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664997370-photo.png?h=192&w=192",
		},
	},
	{
		name: "Ahmad Awais",
		title: "VP of DevRel",
		slug: "mrahmadawais",
		twitterUsername: "MrAhmadAwais",
		company: {
			name: "RapidAPI",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664998185-ahmad-awais-dp-purple.jpeg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664998185-ahmad-awais-dp-purple.jpeg?h=192&w=192",
		},
	},
	{
		name: "Sylwia Vargas",
		title: "Developer Advocate",
		slug: "sylwiavargas",
		twitterUsername: "sylwiavargas",
		company: {
			name: "StackBlitz",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664998439-sylwia-headshot.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664998439-sylwia-headshot.jpg?h=192&w=192",
		},
	},
	{
		name: "TJ Kohli",
		title: "Creative Partner",
		slug: "tjkohl",
		twitterUsername: "tjkohl",
		company: {
			name: "Monogram",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1664999882-punefi1ubi.jpeg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1664999882-punefi1ubi.jpeg?h=192&w=192",
		},
	},
	{
		name: "Samuel Goff",
		title: "Senior Engineer",
		slug: "impatienceisavirtue",
		twitterUsername: "impatienceisav1",
		company: {
			name: "HPE",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665000255-sam-hr_w5ho8t.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665000255-sam-hr_w5ho8t.jpg?h=192&w=192",
		},
	},
	{
		name: "Simeon Griggs",
		title: "Solution Engineer",
		slug: "simeongriggs",
		twitterUsername: "simeonGriggs",
		company: {
			name: "Sanity",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665150031-simon.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665150031-simon.jpg?h=192&w=192",
		},
	},
	{
		name: "Lina Murton",
		title: "Product Manager",
		slug: "linamurton",
		twitterUsername: null,
		company: {
			name: "BigCommerce",
		},
		image: {
			url: "https://www.datocms-assets.com/35255/1665150695-lina-headshot.jpg",
		},
		imageSmall: {
			url: "https://www.datocms-assets.com/35255/1665150695-lina-headshot.jpg?h=192&w=192",
		},
	},
];
