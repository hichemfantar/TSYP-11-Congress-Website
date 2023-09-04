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
		title: "Partners",
		href: "/sponsors",
	},
	// {
	// 	title: "Expo",
	// 	href: "/expo",
	// },
	{
		title: "About us",
		href: "/about-us",
	},
	// {
	// 	title: "Virtual",
	// 	href: "/virtual",
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
