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
		// type: "global-ieee-partner",
		name: "SAC Challenge",
		goal: "Fix the world",
		description:
			"SAC is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff. These volunteer members provide important viewpoints and information, and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide.",
		slug: "SAC-Challenge",
		logo: {
			url: "https://i.imgur.com/pyYpNwa.png",
		},
		website:
			"https://students.ieee.org/student-branches/the-ieee-student-activities-committee-sac/",
	},
];
