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
	const partners = enabledPartners?.filter((e) => e.type === "partner");
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
						<div className="mb-4 text-2xl font-bold">Hosted By</div>
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
						<div className="mb-4 text-2xl font-bold">IEEE Partners</div>
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
						<div className="mb-4 text-2xl font-bold">
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
						<div className="mb-4 text-2xl font-bold">Apex Partners</div>
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
						<div className="mb-4 text-2xl font-bold">Vanguard Partners</div>
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
						<div className="mb-4 text-2xl font-bold">Ascendant Partners</div>
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
						<div className="mb-4 text-2xl font-bold">Explorer Partners</div>
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
		enabled: true,
		type: "partner",
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
		type: "partner",
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
		type: "partner",
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
		type: "partner",
		name: "IAS",
		description:
			"Founded in 2020, with over 260 enthusiastic members all with one vision “advancing students carrer's in technology, for the benefit of humanity“",
		slug: "IAS",

		logo: {
			url: IASLogo,
		},
		website: "https://ias.ieee.org/",
	},
	{
		enabled: true,
		type: "partner",
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
