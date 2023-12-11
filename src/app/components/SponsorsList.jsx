import SponsorListItem from "./SponsorListItem";

import tn_flag from "../../assets/Flag_of_Tunisia.svg";
import { useEffect, useState } from "react";

export default function SponsorsList() {
	const [sponsorsData, setSponsorsData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/partners_sponsors.json")
				.then((response) => response.json())
				.then((response) => {
					setSponsorsData(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

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
