import React from "react";
import HighlightBox from "./HighlightBox";

export default function Highlights() {
	return (
		<div className="flex flex-col gap-4">
			{highlights.map((h) => (
				<HighlightBox data={h} key={h.text} />
			))}
		</div>
	);
}

const highlights = [
	{
		"updatedAt": "2022-10-25T14:13:24-07:00",
		"text":
			"TSYP 11 Conf: The Future of the Web with Kelsey Hightower is now on stage J!",
		"link": "/conf/stage/j",
		"highlightType": "announcement",
		"clientSide": true,
		"stages": "all",
		"image": null,
	},
	{
		"updatedAt": "2022-10-25T11:52:12-07:00",
		"text": "Go to stage J or S now to watch our community talks!",
		"link": "/conf/stage/j",
		"highlightType": "announcement",
		"clientSide": true,
		"stages": "all",
		"image": null,
	},
	{
		"updatedAt": "2022-10-25T11:06:50-07:00",
		"text":
			"Vercel acquires Splitbee for privacy-friendly, first-party analytics.",
		"link": "https://twitter.com/vercel/status/1584968128915771426",
		"highlightType": "tweet",
		"clientSide": false,
		"stages": "all",
		"image": {
			"width": 720,
			"height": 377,
			"url":
				"https://www.datocms-assets.com/35255/1666636053-splitbee.png?w=600",
		},
	},
	{
		"updatedAt": "2022-10-25T10:46:42-07:00",
		"text":
			"Next.js 13: Layouts, React Server Components (async/await), Streaming",
		"link": "https://twitter.com/nextjs/status/1584963010170347520",
		"highlightType": "tweet",
		"clientSide": false,
		"stages": "all",
		"image": {
			"width": 720,
			"height": 377,
			"url": "https://www.datocms-assets.com/35255/1666636007-nex.png?w=600",
		},
	},
	{
		"updatedAt": "2022-10-25T10:44:12-07:00",
		"text": "Vercel announces Turbopack, the successor to Webpack.",
		"link": "https://twitter.com/vercel/status/1584961746418208774",
		"highlightType": "tweet",
		"clientSide": false,
		"stages": "all",
		"image": {
			"width": 1686,
			"height": 882,
			"url": "https://www.datocms-assets.com/35255/1666635966-turboa.png?w=600",
		},
	},
	{
		"updatedAt": "2022-10-25T09:29:19-07:00",
		"text": "Join all the speakers and attendees in Discord!",
		"link": "https://nextjs.org/discord",
		"highlightType": "discord",
		"clientSide": null,
		"stages": "all",
		"image": null,
	},
];
