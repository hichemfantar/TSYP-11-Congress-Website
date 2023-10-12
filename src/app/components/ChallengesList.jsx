import ChallengeListItem from "./ChallengeListItem";

export default function ChallengesList() {
	const enabledChallenges = challengesData?.filter((e) => e.enabled === true);

	const partners = enabledChallenges?.filter(
		(e) => e.type === "global-ieee-partner"
	);

	return (
		<div>
			<div className="mb-8">
				<div className="mb-4 text-4xl font-bold">Challenges</div>
				<div className="text-gray-600 dark:text-gray-400">
					Learn more about our chapter challenges.
				</div>
			</div>

			<div className="flex flex-col gap-8">
				{/* {!!hostedBy?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Hosted By
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{hostedBy.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<SponsorListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)} */}
				{!!enabledChallenges?.length && (
					<div>
						{/* <div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							IEEE Global Partners
						</div> */}
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{enabledChallenges.map((e) => {
								return (
									<div className="col-span-12 md:col-span-4" key={e.slug}>
										<ChallengeListItem data={e} />
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export const challengesData = [
	{
		enabled: true,
		name: "IEEE PES and IES Tunisia Technical Challenge",
		goal: "Fix the world",
		description:
			"PES & IES is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "PES-&-IES-Challenge",
		logo: {
			url: "https://i.imgur.com/s2Da1Xb.png",
		},
		link: "https://bit.ly/PES-IES",
	},

	{
		enabled: false,
		name: "SIGHT Challenge",
		goal: "Fix the world",
		description:
			"SIGHT is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "SIGHT-Challenge",
		logo: {
			url: "https://i.imgur.com/U3PXO5v.png",
		},
		link: "https://drive.google.com/file/d/1VHZpVnigBXIrYbw1pkNKwJF5kBHTngvl/view?usp=drive_link",
	},
	{
		enabled: false,
		name: "CS & YP Challenge",
		goal: "Fix the world",
		description:
			"CS & YP is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "CS-&-YP-Challenge",
		logo: {
			url: "https://i.imgur.com/m4NBbkW.png",
		},
		link: "https://drive.google.com/file/d/15sLn9jOzwH3uOw0p_5dqwc7L4JoQNtWL/view?usp=drive_link",
	},
	{
		enabled: true,
		name: "IEEE SMC and EdSoc Tunisia Technical Challenge",
		goal: "Fix the world",
		description: "Understanding Student Well-being: A Holistic Approach",
		slug: "SMC-&-EDUCATION-Challenge",
		logo: {
			url: "https://i.imgur.com/LQf7kWn.png",
		},
		link: "https://bit.ly/3QbG3GU",
	},
	{
		enabled: false,
		name: "EMBS Challenge",
		goal: "Fix the world",
		description:
			"EMBS is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "EMBS-Challenge",
		logo: {
			url: "https://i.imgur.com/qsBZD6s.jpg",
		},
		link: "https://drive.google.com/file/d/1cPTfWgMq0Ee8qs49enxsTvKoYhqKg0bW/view?usp=drive_link",
	},
	{
		enabled: false,
		name: "SSCS Challenge",
		goal: "Fix the world",
		description:
			"SSCS is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "SSCS-Challenge",
		logo: {
			url: "https://i.imgur.com/URPRAP2.gif",
		},
		link: "https://drive.google.com/file/d/1zr3bgm-XaKMaW9_fTkj3hx4IE3wiKghb/view?usp=drive_link",
	},
	{
		enabled: false,
		name: "AESS Challenge",
		goal: "Fix the world",
		description:
			"AESS is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "AESS-Challenge",
		logo: {
			url: "https://i.imgur.com/VizcxQ0.jpg",
		},
		link: "https://drive.google.com/file/d/1QsbJhAFmPDnjtt9OLZi_YNCBSfmUX_P_/view?usp=drive_link",
	},
	{
		enabled: false,
		name: "WIE Challenge",
		goal: "Fix the world",
		description:
			"WIE is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "WIE-Challenge",
		logo: {
			url: "https://i.imgur.com/n1NixiN.jpg",
		},
		link: "https://drive.google.com/file/d/1uQ8WdPrNJRy5iAKdP3rzMWnqMGIK5lsI/view?usp=drive_link",
	},

	{
		enabled: false,
		name: "IEEE RAS Tunisia Technical Challenge",
		goal: "Fix the world",
		description:
			"RAS is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "RAS-Challenge",
		logo: {
			url: "https://i.imgur.com/jt2LCLt.png",
		},
		link: "https://bit.ly/46PhYv5",
	},
	{
		enabled: true,
		name: "IEEE IAS Tunisia Technical Challenge",
		goal: "Fix the world",
		description:
			"IAS is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "IAS-Challenge",
		logo: {
			url: "https://i.imgur.com/aidaut9.png",
		},
		link: "https://bit.ly/3PMSCaa",
	},
];
