const routes = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Tunisia",
		href: "/tunisia",
	},
	{
		title: "Program",
		type: "group",
		items: [
			{
				title: "Challenges",
				href: "/challenges",
			},
			{
				title: "Schedule",
				href: "/schedule",
			},
			{
				title: "Speakers",
				href: "/speakers",
			},
			{
				title: "Venue",
				href: "/venue",
			},
		],
	},
	{
		title: "Schedule",
		href: "/schedule",
		mobileOnly: true,
	},
	{
		title: "Speakers",
		href: "/speakers",
		mobileOnly: true,
	},
	{
		title: "Challenges",
		href: "/challenges",
		mobileOnly: true,
	},
	{
		title: "Venue",
		href: "/venue",
		mobileOnly: true,
	},
	{
		title: "Partners",
		href: "/partners-sponsors",
	},
	{
		title: "Registration",
		href: "/registration",
		mobileOnly: true,
	},
	// {
	// 	title: "Ambassadors",
	// 	href: "https://forms.gle/Q88TpsVymyvDYQPBA",
	// 	external: true,
	// },
	// {
	// 	title: "Expo",
	// 	href: "/expo",
	// },
	{
		title: "About us",
		href: "/about-us",
	},
	// {
	// 	title: "Reveal",
	// 	href: "/reveal",
	// 	external: true,
	// },
	{
		title: "Contact us",
		href: "/contact",
	},
	// {
	// 	title: "Game",
	// 	href: "/game",
	// },
];

export default routes;
