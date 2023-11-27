import React from "react";
import SocialLinks from "./SocialLinks";
import StyledTabs from "./StyledTabs";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Phase() {
	return (
		<div className="grid-cols-12 gap-x-8 md:grid">
			<div className="col-span-9 hidden md:block">
				<div className="sticky top-14">
					<YoutubeEmbed />
					<div className="flex justify-end">
						<SocialLinks />
					</div>
				</div>
			</div>
			<div className="col-span-3">
				<StyledTabs />
			</div>
		</div>
	);
}

export const stagesData = [
	{
		name: "Day 1",
		slug: "keynote",
		stream: "https://www.youtube.com/embed/NiknNI_0J48?autoplay=1&loop=1",
		discord: "https://discord.gg/fake",
		buttons: [
			{
				text: "Next.js 13",
				url: "https://nextjs.org/blog/next-13",
				icon: "next",
			},
			{
				text: "Turbopack",
				url: "https://vercel.com/blog/turbopack",
				icon: "turbopack",
			},
		],
		schedule: [
			{
				start: "2022-10-25T10:00:00-07:00",
				end: "2022-10-25T10:30:00-07:00",
				title: "Preshow",
				metadata: "",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:30:00-07:00",
				end: "2022-10-25T10:54:00-07:00",
				title: "Keynote",
				metadata: "",
				speaker: [
					{
						name: "Guillermo Rauch",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Lydia Hallie",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg",
						},
					},
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:54:00-07:00",
				end: "2022-10-25T11:45:00-07:00",
				title: "Live Q&A with Next.js / React Teams",
				metadata: "qa",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Maia Teegarden",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png",
						},
					},
				],
			},
		],
	},
	{
		name: "Day 2",
		slug: "j",
		stream: "https://www.youtube.com/embed/qe6kkw2ut_Q?autoplay=1&loop=1",
		discord: "https://discord.gg/fake",
		buttons: [],
		schedule: [
			{
				start: "2022-10-25T10:00:00-07:00",
				end: "2022-10-25T10:30:00-07:00",
				title: "Preshow",
				metadata: "",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:30:00-07:00",
				end: "2022-10-25T10:54:00-07:00",
				title: "Keynote",
				metadata: "",
				speaker: [
					{
						name: "Guillermo Rauch",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Lydia Hallie",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg",
						},
					},
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:54:00-07:00",
				end: "2022-10-25T11:45:00-07:00",
				title: "Live Q&A with Next.js / React Teams",
				metadata: "qa",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Maia Teegarden",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T11:45:00-07:00",
				end: "2022-10-25T11:56:00-07:00",
				title: "Enterprise-grade composable commerce with Next.js",
				metadata: "",
				speaker: [
					{
						name: "TJ Kohli",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999882-punefi1ubi.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T11:56:00-07:00",
				end: "2022-10-25T12:17:00-07:00",
				title: "Introducing Turbopack",
				metadata: "",
				speaker: [
					{
						name: "Maia Teegarden",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T12:17:00-07:00",
				end: "2022-10-25T12:41:00-07:00",
				title: "Nested layouts by example",
				metadata: "",
				speaker: [
					{
						name: "Sam Selikoff",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999142-headshot.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T12:41:00-07:00",
				end: "2022-10-25T13:15:00-07:00",
				title: "A/B testing: performative experimentation at scale",
				metadata: "",
				speaker: [
					{
						name: "Kylie Czajkowski",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002718-kylie.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:15:00-07:00",
				end: "2022-10-25T13:34:00-07:00",
				title: "Beats in the browser",
				metadata: "",
				speaker: [
					{
						name: "Kaho Cheung",
						image: {
							url: "https://www.datocms-assets.com/35255/1602516567-kaho1000px-kaho-cheung.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:34:00-07:00",
				end: "2022-10-25T13:56:00-07:00",
				title: "Optimally using third-party services with Next.js",
				metadata: "",
				speaker: [
					{
						name: "Steve Sewell",
						image: {
							url: "https://www.datocms-assets.com/35255/1664997070-steve.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T14:00:00-07:00",
				end: "2022-10-25T15:26:00-07:00",
				title: "The Future of the Web: From Cloud to Edge",
				metadata: "",
				speaker: [
					{
						name: "Kelsey Hightower",
						image: {
							url: "https://www.datocms-assets.com/35255/1634263804-kelsey.jpeg",
						},
					},
					{
						name: "Guillermo Rauch",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:26:00-07:00",
				end: "2022-10-25T15:53:00-07:00",
				title:
					"Scaling Next.js with WordPress to a million developers (OISR + MDX + WP)",
				metadata: "",
				speaker: [
					{
						name: "Ahmad Awais",
						image: {
							url: "https://www.datocms-assets.com/35255/1664998185-ahmad-awais-dp-purple.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:53:00-07:00",
				end: "2022-10-25T15:57:00-07:00",
				title: "Deploying multiple brands in multiple regions",
				metadata: "",
				speaker: [
					{
						name: "Debra Gail White",
						image: {
							url: "https://www.datocms-assets.com/35255/1664991281-debrawhite.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:59:00-07:00",
				end: "2022-10-25T16:10:00-07:00",
				title: "Waterbeds to Wayfair competitor",
				metadata: "",
				speaker: [
					{
						name: "Rebecca Bakels",
						image: {
							url: "https://www.datocms-assets.com/35255/1664986697-rebecca_bakels.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:10:00-07:00",
				end: "2022-10-25T16:21:00-07:00",
				title: "Data that scales: from modern frontends to the EDGE!",
				metadata: "",
				speaker: [
					{
						name: "Jesse Hall",
						image: {
							url: "https://www.datocms-assets.com/35255/1664987782-jesse-hall-square.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:21:00-07:00",
				end: "2022-10-25T16:38:00-07:00",
				title: "How Next.js & Prisma make frontend developers full stack",
				metadata: "",
				speaker: [
					{
						name: "Amy Dutton",
						image: {
							url: "https://www.datocms-assets.com/35255/1664992229-avatar-2x.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:38:00-07:00",
				end: "2022-10-25T16:54:00-07:00",
				title: "Why Next.js for my Strapi application",
				metadata: "",
				speaker: [
					{
						name: "Trecia Kat",
						image: {
							url: "https://www.datocms-assets.com/35255/1664987337-trecia_kat.jpg",
						},
					},
				],
			},
		],
	},
	{
		name: "Day 3",
		slug: "s",
		stream: "https://www.youtube.com/embed/RwyaNPWMiwU?autoplay=1&loop=1",
		discord: "https://discord.gg/fake",
		buttons: [],
		schedule: [
			{
				start: "2022-10-25T10:30:00-07:00",
				end: "2022-10-25T10:54:00-07:00",
				title: "Keynote",
				metadata: "",
				speaker: [
					{
						name: "Guillermo Rauch",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Lydia Hallie",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg",
						},
					},
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:00:00-07:00",
				end: "2022-10-25T10:30:00-07:00",
				title: "Preshow",
				metadata: "",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:54:00-07:00",
				end: "2022-10-25T11:45:00-07:00",
				title: "Live Q&A with Next.js / React Teams",
				metadata: "qa",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Maia Teegarden",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T11:45:00-07:00",
				end: "2022-10-25T12:19:00-07:00",
				title: "Enabling data at massive scale with Next.js",
				metadata: "",
				speaker: [
					{
						name: "Tejas Kumar",
						image: {
							url: "https://www.datocms-assets.com/35255/1664991819-tejas.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T12:19:00-07:00",
				end: "2022-10-25T12:49:00-07:00",
				title: "Building a feedback widget using Next.js",
				metadata: "",
				speaker: [
					{
						name: "Mahmoud Abdelwahab ",
						image: {
							url: "https://www.datocms-assets.com/35255/1664994239-mahmoud.webp",
						},
					},
				],
			},
			{
				start: "2022-10-25T12:52:00-07:00",
				end: "2022-10-25T13:15:00-07:00",
				title: "Is React Native + Next.js production-ready?",
				metadata: "",
				speaker: [
					{
						name: "Fernando Rojo",
						image: {
							url: "https://www.datocms-assets.com/35255/1664991007-rojo.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:15:00-07:00",
				end: "2022-10-25T13:28:00-07:00",
				title: "Making Typesafe APIs easy with tRPC",
				metadata: "",
				speaker: [
					{
						name: "Chris Bautista",
						image: {
							url: "https://www.datocms-assets.com/35255/1664992526-img_7541.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:28:00-07:00",
				end: "2022-10-25T13:40:00-07:00",
				title: "Next.js is a backend framework",
				metadata: "",
				speaker: [
					{
						name: "Theo Browne",
						image: {
							url: "https://www.datocms-assets.com/35255/1664988146-headshot-main.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:40:00-07:00",
				end: "2022-10-25T14:16:00-07:00",
				title: "What's new in web UI",
				metadata: "",
				speaker: [
					{
						name: "Una Kravets",
						image: {
							url: "https://www.datocms-assets.com/35255/1664996835-dsc052331.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T14:38:00-07:00",
				end: "2022-10-25T15:11:00-07:00",
				title: "Impatience is a virtue",
				metadata: "",
				speaker: [
					{
						name: "Samuel Goff",
						image: {
							url: "https://www.datocms-assets.com/35255/1665000255-sam-hr_w5ho8t.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:09:00-07:00",
				end: "2022-10-25T15:24:00-07:00",
				title: "Community driven composable commerce with Next.js",
				metadata: "",
				speaker: [
					{
						name: "Lina Murton",
						image: {
							url: "https://www.datocms-assets.com/35255/1665150695-lina-headshot.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:24:00-07:00",
				end: "2022-10-25T15:30:00-07:00",
				title: "Make amazing docs, faster with StackBlitz and Next.js",
				metadata: "",
				speaker: [
					{
						name: "Sylwia Vargas",
						image: {
							url: "https://www.datocms-assets.com/35255/1664998439-sylwia-headshot.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:31:00-07:00",
				end: "2022-10-25T15:51:00-07:00",
				title: "Excalidraw - Under the Hood of the Virtual Whiteboard",
				metadata: "",
				speaker: [
					{
						name: 'Christopher "vjeux" Chedeau',
						image: {
							url: "https://www.datocms-assets.com/35255/1665150410-christopher.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:51:00-07:00",
				end: "2022-10-25T16:01:00-07:00",
				title:
					"How a team of 3 built an extensible web analytics SaaS in 3 weeks with Next.js",
				metadata: "",
				speaker: [
					{
						name: "Raquel Yuste",
						image: {
							url: "https://www.datocms-assets.com/35255/1664997370-photo.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:18:00-07:00",
				end: "2022-10-25T16:41:00-07:00",
				title: "Stand up a commerce storefront in 5 minutes",
				metadata: "",
				speaker: [
					{
						name: "Pieter Brinkman",
						image: {
							url: "https://www.datocms-assets.com/35255/1664988506-pieter-bio-image-300x300.webp",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:04:00-07:00",
				end: "2022-10-25T16:18:00-07:00",
				title: "Building a design system in Next.js with Tailwind",
				metadata: "",
				speaker: [
					{
						name: "Tru Narla",
						image: {
							url: "https://www.datocms-assets.com/35255/1664998811-tru-headshot.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:41:00-07:00",
				end: "2022-10-25T17:03:00-07:00",
				title: "Puma's multi-platform infrastructure with Sanity and Next.js",
				metadata: "",
				speaker: [
					{
						name: "Simeon Griggs",
						image: {
							url: "https://www.datocms-assets.com/35255/1665150031-simon.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T14:16:00-07:00",
				end: "2022-10-25T14:38:00-07:00",
				title: "How to add a built-in authoring experience to Next.js",
				metadata: "",
				speaker: [
					{
						name: "Kapehe",
						image: {
							url: "https://www.datocms-assets.com/35255/1665150456-kap.jpg",
						},
					},
				],
			},
		],
	},
];
