import SartexGroupLogo from "../../assets/companies/Sartex-group-big-1024x682.png";
import IeeeEssthsSbLogo from "../../assets/companies/ieee-essths-sb-logo (Custom).png";
import UniSousse from "../../assets/companies/logo-USo.png";
import SponsorListItem from "./SponsorListItem";

import IEEER8 from "../../assets/IEEE R8.svg";
import R8_SAC from "../../assets/R8_SAC.png";
import aess from "../../assets/aess.png";
import IASLogo from "../../assets/ias-logo-shadowbg.png";
import MTTSLogo from "../../assets/ieee/mtts-circle-logo.jpg";

export default function SponsorsList() {
	const enabledCompanies = sponsorsData?.filter((e) => e.enabled === true);
	const enabledPartners = sponsorsData?.filter((e) => e.enabled === true);

	const sectionPartners = enabledPartners?.filter(
		(e) => e.type === "section-partner"
	);
	const partners = enabledPartners?.filter(
		(e) => e.type === "global-ieee-partner"
	);
	const hostedBy = enabledCompanies?.filter((e) => e.tierRank === 0);
	const apexPartners = enabledCompanies?.filter((e) => e.tierRank === 1);
	const vanguardPartners = enabledCompanies?.filter((e) => e.tierRank === 2);
	const ascendantPartners = enabledCompanies?.filter((e) => e.tierRank === 3);
	const explorerPartners = enabledCompanies?.filter((e) => e.tierRank === 4);

	return (
		<div>
			<div className="mb-8">
				<div className="mb-4 text-4xl font-bold">Partners & Sponsors</div>
				<div className="text-gray-600 dark:text-gray-400">
					Learn more about our event partners & sponsors.
				</div>
			</div>

			<div className="flex flex-col gap-8">
				{!!hostedBy?.length && (
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
				)}

				{!!hostedBy?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							IEEE Global Partners
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{partners.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<SponsorListItem data={e} whiteBg />
								</div>
							))}
						</div>
					</div>
				)}

				{!!hostedBy?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							IEEE Tunisia Section Partners
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{sectionPartners.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<SponsorListItem data={e} whiteBg />
								</div>
							))}
						</div>
					</div>
				)}

				{!!apexPartners?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Apex Partners
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
							{apexPartners.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<SponsorListItem data={e} classNames={"h-full"} />
								</div>
							))}
						</div>
					</div>
				)}

				{!!vanguardPartners?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Vanguard Partners
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
							{vanguardPartners.map((e) => (
								<div className="col-span-12 md:col-span-3" key={e.slug}>
									<SponsorListItem
										data={e}
										imgClassNames="md:h-40"
										classNames={"h-full"}
									/>
								</div>
							))}
						</div>
					</div>
				)}

				{!!ascendantPartners?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Ascendant Partners
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
							{ascendantPartners.map((e) => (
								<div className="col-span-12 md:col-span-3" key={e.slug}>
									<SponsorListItem
										data={e}
										imgClassNames="md:h-40"
										classNames={"h-full"}
									/>
								</div>
							))}
						</div>
					</div>
				)}

				{!!explorerPartners?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Explorer Partners
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
							{explorerPartners.map((e) => (
								<div className="col-span-12 md:col-span-3" key={e.slug}>
									<SponsorListItem
										data={e}
										imgClassNames="md:h-40"
										classNames={"h-full"}
									/>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export const sponsorsData = [
	{
		enabled: false,
		type: "global-ieee-partner",
		name: "IEEE Region 8",
		description:
			"Founded in 2020, with over 260 enthusiastic members all with one vision “advancing students carrer's in technology, for the benefit of humanity“",
		slug: "IEEE-Region-8",

		logo: {
			url: IEEER8,
		},
		website: "https://ieeer8.org/",
	},
	{
		enabled: true,
		type: "global-ieee-partner",
		name: "IEEE R8 SAC",
		description:
			"Founded in 2020, with over 260 enthusiastic members all with one vision “advancing students carrer's in technology, for the benefit of humanity“",
		slug: "IEEE-R8-SAC",

		logo: {
			url: R8_SAC,
		},
		website: "https://ieeer8.org/student-activities/sa-committee/sac/",
	},
	{
		enabled: true,
		type: "global-ieee-partner",
		name: "IEEE Entrepreneurship",
		description:
			"We invite you to take the leap…The IEEE Entrepreneurship community is at the forefront of turning ideas into successful businesses. We make it a priority to help our members not just launch, but grow their ventures and facilitate the networking and mentoring of those who have the passion to translate their vision into reality.",
		slug: "IEEE-entrepreneurship",

		logo: {
			url: "https://entrepreneurship.ieee.org/wp-content/uploads/2020/07/ieee-entrepreneurship-logo.png",
		},
		website: "https://entrepreneurship.ieee.org/",
	},
	{
		enabled: true,
		type: "global-ieee-partner",
		name: "IEEE Life Members",
		description:
			"IEEE Life Members are technology influencers, pioneers, and valuable partners – sharing over one million years of experience with the next generation of innovators.",
		slug: "IEEE-Life-Members",

		logo: {
			url: "https://life.ieee.org/wp-content/uploads/ieee_life_members-logo.png",
		},
		website: "https://life.ieee.org/",
	},
	{
		enabled: true,
		type: "global-ieee-partner",
		name: "IES",
		description:
			"The Industrial Electronics Society through its members encompasses a diverse range of technical activities devoted to the application of electronics and electrical sciences for the enhancement of industrial and manufacturing processes. These technical activities address the latest developments in intelligent and computer control systems, robotics, factory communications and automation, flexible manufacturing, data acquisition and signal processing, vision systems, and power electronics. The Society continually updates its program of technical activities to meet the needs of modern industry.",
		slug: "IES",

		logo: {
			url: "https://iten.ieee-ies.org/wp-content/uploads/2021/01/IEEE-IES-Logo-Color-RGB-72ppi.png",
		},
		website: "https://www.ieee-ies.org/",
	},

	{
		enabled: true,
		type: "section-partner",
		name: "AESS",
		description:
			"Founded in 2020, with over 260 enthusiastic members all with one vision “advancing students carrer's in technology, for the benefit of humanity“",
		slug: "AESS",

		logo: {
			url: aess,
		},
		website: "https://ieee-aess.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "IAS",
		description:
			"Founded in 2020, with over 260 enthusiastic members all with one vision “advancing students carrer's in technology, for the benefit of humanity“",
		slug: "IAS",

		logo: {
			url: IASLogo,
		},
		website: "https://ias.ieee.tn/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "SSCS",
		description:
			"Focuses are on the design, implementation, and application of solid-state integrated circuits for all applications, including computers, communications, signal processing, and optoelectronics.",
		slug: "SSCS",

		logo: {
			url: "data:image/png;base64,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",
		},
		website: "https://sscs.ieee.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "PES",
		description:
			"The IEEE Power & Energy Society, formerly the IEEE Power Engineering Society, is the oldest society of the Institute of Electrical and Electronics Engineers focused on the scientific and engineering knowledge about electric power and energy.",
		slug: "PES",

		logo: {
			url: "https://vit.ac.in/system/files/IEEE%20PES1.png",
		},
		website: "https://ieee-pes.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "RAS",
		description:
			"The IEEE Robotics and Automation Society is a professional society of the IEEE that supports the development and the exchange of scientific knowledge in the fields of robotics and automation, including applied and theoretical issues.",
		slug: "RAS",

		logo: {
			url: "https://www.ieee-ras.org/images/ras-resources/IEEE_RAS_logo_4C_stacked-HiRes.fw.png",
		},
		website: "https://www.ieee-ras.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "WIE",
		description:
			"IEEE WIE is one of the world’s leaders in changing the face of engineering. Our global network connects over 40,000 members in over 125 countries to advance women in technology at all points in their lives and careers. IEEE WIE members make lifelong friendships, acquire influential mentors, and make a difference for the benefit of humanity.",
		slug: "WIE",

		logo: {
			url: "https://wie.ieee.org/wp-content/uploads/IEEE_WIE-social_logo.jpg",
		},
		website: "https://wie.ieee.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "EMBS",
		description:
			"In an era where technology is expanding at a rapid rate and the needs for medical application of these technologies has never been greater, the intersection between engineering, medicine and biology is a critical place to be. The IEEE Engineering in Medicine and Biology Society is well-positioned to serve as a central gathering point for both of these major disciplines.",
		slug: "EMBS",

		logo: {
			url: "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/329010335_935058450836951_7332766420186250759_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QfiBaY3P0dYAX8ndk8Y&_nc_ht=scontent.ftun14-1.fna&oh=00_AfCPtZuaz5lVPNb6GdpQ9SAPMGNTBNznq5J0oL4HAWcn4Q&oe=650C6503",
		},
		website: "https://www.embs.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "CS",
		description:
			"Serving more than 60,000 members, the IEEE Computer Society is the trusted information, networking, and career-development source for a global community of technology leaders that includes researchers, educators, software engineers, IT professionals, employers, and students.",
		slug: "CS",

		logo: {
			url: "https://edu.ieee.org/us-unt/wp-content/uploads/sites/63/IEEE-CS_LogoTM-orange.png",
		},
		website: "https://computer.ieee.tn/",
	},
	{
		enabled: true,
		type: "global-ieee-partner",
		name: "MTTS",
		description:
			"Established in 1952, the MTT-S has worked to advance the professional standing of its members and enhance the quality of life for all people through the development and application of microwave technology.",
		slug: "MTTS",

		logo: {
			url: MTTSLogo,
		},
		website: "https://mtt.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "SMC",
		description:
			"The mission of the Systems, Man, and Cybernetics Society is to serve the interests of its members and the community at large by promoting the theory, practice, and interdisciplinary aspects of systems science and engineering, human-machine systems, and cybernetics. It is accomplished through conferences, publications, and other activities that contribute to the professional needs of its members.",
		slug: "SMC",

		logo: {
			url: "https://edu.ieee.org/in-sairamsmc/wp-content/uploads/sites/911/2022/07/ieee_smc.jpg",
		},
		website: "https://www.ieeesmc.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "IES",
		description:
			"The Industrial Electronics Society through its members encompasses a diverse range of technical activities devoted to the application of electronics and electrical sciences for the enhancement of industrial and manufacturing processes. These technical activities address the latest developments in intelligent and computer control systems, robotics, factory communications and automation, flexible manufacturing, data acquisition and signal processing, vision systems, and power electronics. The Society continually updates its program of technical activities to meet the needs of modern industry.",
		slug: "IES",

		logo: {
			url: "https://iten.ieee-ies.org/wp-content/uploads/2021/01/IEEE-IES-Logo-Color-RGB-72ppi.png",
		},
		website: "https://www.ieee-ies.org/",
	},

	{
		enabled: true,
		name: "IEEE ESSTHS SB",
		description:
			"Founded in 2020, with over 260 enthusiastic members all with one vision “advancing students carrer's in technology, for the benefit of humanity“",
		slug: "IEEE-ESSTHS-SB",
		tierRank: 0,
		logo: {
			url: IeeeEssthsSbLogo,
		},
		website: "https://essths.ieee.tn/",
	},
	{
		enabled: true,
		name: "Sartex Group",
		description:
			"Sartex is the garment manufacturer of “Denim with Integrity and Principles. Eco-friendly production utilizing cutting-edge technologies based in state-of-the-art facilities in Tunisia.",
		slug: "sartex-group",
		tierRank: 1,
		logo: {
			url: SartexGroupLogo,
			// url: "https://sartexgroup.com/wp-content/uploads/2019/07/Sartex-group-big-1024x682.png",
			// url: "https://sartexgroup.com/wp-content/uploads/2018/07/logo-sartex.png",
		},
		website: "https://sartexgroup.com/",
	},
	{
		enabled: true,
		name: "University of Sousse",
		description: `The University of Sousse is a distinguished institution of higher learning situated in the vibrant city of Sousse, Tunisia. Renowned for its commitment to academic excellence and innovation, the university stands as a beacon of knowledge, research, and cultural enrichment within the region and beyond.

			Established with a strong emphasis on fostering holistic development, the University of Sousse offers a diverse array of academic programs spanning various disciplines. These encompass fields such as engineering, humanities, natural sciences, social sciences, arts, and more. The university's comprehensive curriculum is designed to provide students with both theoretical foundations and practical skills, enabling them to thrive in an ever-evolving global landscape.
			
			`,
		slug: "university-of-sousse",
		tierRank: 1,
		logo: {
			url: UniSousse,
			// url: "https://sartexgroup.com/wp-content/uploads/2019/07/Sartex-group-big-1024x682.png",
			// url: "https://sartexgroup.com/wp-content/uploads/2018/07/logo-sartex.png",
		},
		website: "https://uso.rnu.tn/",
	},
	{
		name: "ESports TN",
		description:
			"ESports TN (ESports By TT) is the official portal for gamers in Tunisia. Play matches in League of Legends, Teamfight Tactics, Valorant, and much more, to earn points and win prizes!",
		slug: "esportstn",
		tierRank: 1,
		logo: {
			url: "https://i.imgur.com/BJwI0qC.png",
		},
	},
];
