import SartexGroupLogo from "../../assets/companies/Sartex-group-big-1024x682.png";
import IeeeEssthsSbLogo from "../../assets/companies/ieee-essths-sb-logo-black.png";
import UniSousse from "../../assets/companies/logo-USo.png";
import SponsorListItem from "./SponsorListItem";

import IEEER8 from "../../assets/IEEE R8.svg";
import R8_SAC from "../../assets/R8_SAC.png";
import aess from "../../assets/aess.png";
import IASLogo from "../../assets/ias-logo-shadowbg.png";
import MTTSLogo from "../../assets/ieee/mtts-circle-logo.jpg";
import YpTunisia from "../../assets/yp-tunisia-section.png";
import tn_flag from "../../assets/Flag_of_Tunisia.svg";
import IeeeTunisia from "../../assets/ieee-tunisia.png";

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
	const academicPartners = enabledCompanies?.filter((e) => e.tierRank === 5);
	const telecomPartners = enabledCompanies?.filter((e) => e.tierRank === 6);

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
								<div className="col-span-12 md:col-span-3" key={e.slug}>
									<SponsorListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}

				{!!hostedBy?.length && (
					<div>
						<div className="sticky top-0 z-10 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							IEEE Tunisia Section Partners
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{sectionPartners.map((e) => (
								<div
									className="relative col-span-12 md:col-span-3"
									key={e.slug}
								>
									<SponsorListItem data={e} isTunisia />
									{false && (
										<img
											src={tn_flag}
											className="absolute top-5 left-5 aspect-video h-5 rounded-md object-cover shadow"
											alt="tunisian flag"
										/>
									)}
								</div>
							))}
						</div>
					</div>
				)}

				{!!academicPartners?.length && (
					<div id="ExclusiveAcademicPartner">
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Exclusive Academic Partner
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
							{academicPartners.map((e) => (
								<div className="col-span-12 md:col-span-3" key={e.slug}>
									<SponsorListItem data={e} classNames={"h-full"} />
								</div>
							))}
						</div>
					</div>
				)}

				{!!telecomPartners?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Exclusive Telecommunications Partner
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
							{telecomPartners.map((e) => (
								<div className="col-span-12 md:col-span-3" key={e.slug}>
									<SponsorListItem data={e} classNames={"h-full"} />
								</div>
							))}
						</div>
					</div>
				)}

				{!!apexPartners?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Apex Sponsors
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
							{apexPartners.map((e) => (
								<div className="col-span-12 md:col-span-3" key={e.slug}>
									<SponsorListItem data={e} classNames={"h-full"} />
								</div>
							))}
						</div>
					</div>
				)}

				{!!vanguardPartners?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Vanguard Sponsors
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
							Ascendant Sponsors
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
							Explorer Sponsors
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
		enabled: true,
		type: "global-ieee-partner",
		name: "IEEE Region 8",
		description:
			"Welcome to Region 8 (Europe, Middle East and Africa) of the Institute of Electrical and Electronics Engineers (IEEE). The IEEE is the world’s largest technical professional society, and comprises more than 360,000 members who conduct and participate in its activities in 150 countries.",
		slug: "IEEE-Region-8",
		logo: {
			url: IEEER8,
		},
		website: "https://ieeer8.org/",
	},
	{
		enabled: true,
		type: "global-ieee-partner",
		name: "IEEE Spax",
		description:
			"The Student Professional Activities (SPAx) Committee is responsible primarily for developing, implementing, and promoting activities among Student Members of the IEEE. This committee coordinates lists of top speakers, and funding to facilitate the hosting of a SPAx event at student branches around the world. This program has an emphasis on professional awareness, but may include broad technical topics.",
		slug: "IEEE-SPAX",
		logo: {
			url: "https://www.csuohio.edu/engineering/sites/csuohio.edu.engineering/files/IEEESPAX320X160.jpg",
		},
		website:
			"https://students.ieee.org/student-opportunities/professional-awareness/spax-committee/",
	},
	{
		enabled: true,
		type: "global-ieee-partner",
		name: "IEEE Young Professionals",
		description:
			"IEEE Young Professionals is an international community of enthusiastic, dynamic, and innovative members and volunteers. IEEE is committed to helping young professionals evaluate their career goals, polish their professional image, and create the building blocks of a lifelong and diverse professional network.",
		slug: "IEEE-Young-Professionals",

		logo: {
			url:
				"data:image/png;base64,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" ||
				YpTunisia,
		},
		website: "https://yp.ieee.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "IEEE Young Professionals",
		description:
			"IEEE Young Professionals is an international community of enthusiastic, dynamic, and innovative members and volunteers. IEEE is committed to helping young professionals evaluate their career goals, polish their professional image, and create the building blocks of a lifelong and diverse professional network.",
		slug: "IEEE-Young-Professionals-tn",

		logo: {
			url: YpTunisia,
		},
		website: "https://yp.ieee.org/",
	},
	{
		enabled: true,
		type: "global-ieee-partner",
		name: "IAS",
		description:
			"IEEE IAS is a volunteer-driven organization for engineering professionals looking to advance the theory and practice of electrical and electronic systems.",
		slug: "IAS-tn",

		logo: {
			url: IASLogo,
		},
		website: "https://ias.ieee.tn/",
	},

	{
		enabled: true,
		type: "global-ieee-partner",
		name: "IEEE R8 SAC",
		description:
			"SAC is the IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers, and supported by IEEE staff.",
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
		type: "global-ieee-partner",
		name: "AESS",
		description:
			"The mission of the AESS is to provide a responsive and relevant professional society that attracts, engages, aids, and retains a diverse set of members (age, culture, community – theoretical, managerial and applications) worldwide in the areas of our fields of interest as defined in our constitution. AESS will accomplish this through technical, chapter and society activities in the areas of conferences, publications, education, technical operations, industry relations, and member services.",
		slug: "AESS",
		logo: {
			url: aess,
		},
		website: "https://ieee-aess.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "AESS",
		description:
			"The mission of the AESS is to provide a responsive and relevant professional society that attracts, engages, aids, and retains a diverse set of members (age, culture, community – theoretical, managerial and applications) worldwide in the areas of our fields of interest as defined in our constitution. AESS will accomplish this through technical, chapter and society activities in the areas of conferences, publications, education, technical operations, industry relations, and member services.",
		slug: "AESS-TN",
		logo: {
			url: "https://i.imgur.com/wY07sq9.png",
		},
		website: "https://ieee-aess.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "SIGHT",
		description:
			"The mission of the AESS is to provide a responsive and relevant professional society that attracts, engages, aids, and retains a diverse set of members (age, culture, community – theoretical, managerial and applications) worldwide in the areas of our fields of interest as defined in our constitution. AESS will accomplish this through technical, chapter and society activities in the areas of conferences, publications, education, technical operations, industry relations, and member services.",
		slug: "SIGHT-TN",
		logo: {
			url: "https://i.imgur.com/Qz0z68J.png",
		},
		website: "https://sight.ieee.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "IAS",
		description:
			"IEEE IAS is a volunteer-driven organization for engineering professionals looking to advance the theory and practice of electrical and electronic systems.",
		slug: "IAS-tn",

		logo: {
			url: "https://i.imgur.com/VFjq2KC.png" || IASLogo,
		},
		website: "https://ias.ieee.tn/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "SSCS",
		description:
			"Focuses are on the design, implementation, and application of solid-state integrated circuits for all applications, including computers, communications, signal processing, and optoelectronics.",
		slug: "SSCS-tn",

		logo: {
			url:
				"https://i.imgur.com/6FnwZ2n.png" ||
				"data:image/png;base64,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",
		},
		website: "https://sscs.ieee.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "PES",
		description:
			"The IEEE Power & Energy Society, formerly the IEEE Power Engineering Society, is the oldest society of the Institute of Electrical and Electronics Engineers focused on the scientific and engineering knowledge about electric power and energy.",
		slug: "PES-tn",

		logo: {
			url:
				"https://i.imgur.com/GwU5vNG.jpg" ||
				"https://vit.ac.in/system/files/IEEE%20PES1.png",
		},
		website: "https://ieee-pes.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "RAS",
		description:
			"The IEEE Robotics and Automation Society is a professional society of the IEEE that supports the development and the exchange of scientific knowledge in the fields of robotics and automation, including applied and theoretical issues.",
		slug: "RAS-tn",

		logo: {
			url:
				"https://i.imgur.com/ZrnsEg2.png" ||
				"https://www.ieee-ras.org/images/ras-resources/IEEE_RAS_logo_4C_stacked-HiRes.fw.png",
		},
		website: "https://www.ieee-ras.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "WIE",
		description:
			"IEEE WIE is one of the world’s leaders in changing the face of engineering. Our global network connects over 40,000 members in over 125 countries to advance women in technology at all points in their lives and careers. IEEE WIE members make lifelong friendships, acquire influential mentors, and make a difference for the benefit of humanity.",
		slug: "WIE-tn",

		logo: {
			url:
				"https://i.imgur.com/KvzcFFd.png" ||
				"https://wie.ieee.org/wp-content/uploads/IEEE_WIE-social_logo.jpg",
		},
		website: "https://wie.ieee.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "EMBS",
		description:
			"In an era where technology is expanding at a rapid rate and the needs for medical application of these technologies has never been greater, the intersection between engineering, medicine and biology is a critical place to be. The IEEE Engineering in Medicine and Biology Society is well-positioned to serve as a central gathering point for both of these major disciplines.",
		slug: "EMBS-tn",
		logo: {
			url:
				"https://i.imgur.com/8CHISmq.png" || "https://i.imgur.com/lLu3S34.jpeg",
		},
		website: "https://www.embs.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "CS",
		description:
			"Serving more than 60,000 members, the IEEE Computer Society is the trusted information, networking, and career-development source for a global community of technology leaders that includes researchers, educators, software engineers, IT professionals, employers, and students.",
		slug: "CS-tn",

		logo: {
			url:
				"https://i.imgur.com/WFbuGeu.png" ||
				"https://edu.ieee.org/us-unt/wp-content/uploads/sites/63/IEEE-CS_LogoTM-orange.png",
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
		slug: "SMC-tn",

		logo: {
			url:
				"https://i.imgur.com/LE15Pra.png" ||
				"https://edu.ieee.org/in-sairamsmc/wp-content/uploads/sites/911/2022/07/ieee_smc.jpg",
		},
		website: "https://www.ieeesmc.org/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "Education Society",
		description:
			"The IEEE Education Society (EduSoc) is a society of the IEEE that focuses on the theory and practice of engineering education and educational technology involved in the effective delivery of domain knowledge of all fields within the scope of interest of IEEE.",
		slug: "ES-tn",
		logo: {
			url: "https://i.imgur.com/yQbl2wl.png",
		},
		website: "https://education.ieee.tn/",
	},
	{
		enabled: true,
		type: "section-partner",
		name: "IES",
		description:
			"The Industrial Electronics Society through its members encompasses a diverse range of technical activities devoted to the application of electronics and electrical sciences for the enhancement of industrial and manufacturing processes. These technical activities address the latest developments in intelligent and computer control systems, robotics, factory communications and automation, flexible manufacturing, data acquisition and signal processing, vision systems, and power electronics. The Society continually updates its program of technical activities to meet the needs of modern industry.",
		slug: "IES-tn",

		logo: {
			url: "data:image/png;base64,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",
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
			url: "https://i.imgur.com/D2yCFXl.png" || IeeeEssthsSbLogo,
		},
		website: "https://essths.ieee.tn/",
	},
	{
		enabled: true,
		name: "IEEE Tunisia Section",
		description:
			"IEEE Tunisia Section aims to spread IEEE Activities to all corners of the country by educational and technical activities, human networking, and to develop technology and its applications for humanitarian challenges. The section supports Chapters, special interest groups, student activities and student awards.",
		slug: "IEEE-Tunisia-Section",
		tierRank: 0,
		logo: {
			url: IeeeTunisia,
		},
		website: "https://ieee.tn/",
	},
	{
		enabled: true,
		name: "Sartex Group",
		description:
			"Sartex is the garment manufacturer of “Denim with Integrity and Principles. Eco-friendly production utilizing cutting-edge technologies based in state-of-the-art facilities in Tunisia.",
		slug: "sartex-group",
		tierRank: 4,
		logo: {
			url: SartexGroupLogo,
			// url: "https://sartexgroup.com/wp-content/uploads/2019/07/Sartex-group-big-1024x682.png",
			// url: "https://sartexgroup.com/wp-content/uploads/2018/07/logo-sartex.png",
		},
		website: "https://sartexgroup.com/",
	},
	{
		enabled: true,
		name: "Belkhiria Services & Conseils",
		description: "Belkhiria Services & Conseils",
		slug: "Belkhiria-Services-&-Conseils",
		tierRank: 4,
		logo: {
			url: "https://i.imgur.com/R63Dmh8.png",
		},
		website: "",
	},
	{
		enabled: true,
		name: "Orange",
		description:
			"Orange Tunisia acquired a license in Tunisia on 5 May 2010, making it the leading 3G mobile operator with Divona Telecom, the second landline operator and the third mobile phone operator in Tunisia",
		slug: "orange",
		tierRank: 6,
		logo: {
			url: "data:image/png;base64,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",
			// url: "https://sartexgroup.com/wp-content/uploads/2019/07/Sartex-group-big-1024x682.png",
			// url: "https://sartexgroup.com/wp-content/uploads/2018/07/logo-sartex.png",
		},
		website: "https://www.orange.tn/",
	},
	{
		enabled: true,
		name: "Ecole Polytechnique Sousse",
		description:
			"Connue pour ses engagements socio-académiques, l'Ecole Polytechnique de Sousse est plus qu'une école d'ingénieurs et d'architecture.",
		slug: "Ecole-Polytechnique-Sousse",
		tierRank: 5,
		logo: {
			url: "data:image/png;base64,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",
			// url: "https://sartexgroup.com/wp-content/uploads/2019/07/Sartex-group-big-1024x682.png",
			// url: "https://sartexgroup.com/wp-content/uploads/2018/07/logo-sartex.png",
		},
		website: "https://www.polytecsousse.tn/",
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
