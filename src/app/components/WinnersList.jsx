import { useEffect, useState } from "react";
import WinnerListItem from "./WinnerListItem";

export default function WinnersList() {
	const [winnersData, setWinnersData] = useState([]);
	const [challengeWinnersData, setChallengeWinnersData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			await fetch("/assets/awards.json")
				.then((response) => response.json())
				.then((response) => {
					setWinnersData(response);
				})
				.catch((err) => console.error(err));
			await fetch("/assets/challenges.json")
				.then((response) => response.json())
				.then((response) => {
					setChallengeWinnersData(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	const enabledWinners = winnersData?.filter((e) => e.enabled === true);

	const congressWinners = enabledWinners?.filter((e) => e.type === "congress");
	const tsypAwards = enabledWinners?.filter((e) => e.type === "tsyp");
	const individualAwards = enabledWinners?.filter(
		(e) => e.type === "individual"
	);
	const sectionAwards = enabledWinners?.filter((e) => e.type === "section");
	const spcAwards = enabledWinners?.filter((e) => e.type === "spc");
	const challengeAwards = challengeWinnersData?.filter(
		(e) => e.enabled === true
	);

	return (
		<div>
			<div className="mb-8">
				<div className="mb-4 text-4xl font-bold">Awards</div>
				<div className="text-gray-600 dark:text-gray-400">
					Learn more about our congress awards.
				</div>
			</div>

			<div className="flex flex-col gap-8">
				{!!congressWinners?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							TSYP Congress 2024 Edition Organizer
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{congressWinners.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<WinnerListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}
			</div>

			<div className="flex flex-col gap-8">
				{!!challengeAwards?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Challenge Awards
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{challengeAwards.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<WinnerListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}
			</div>

			<div className="flex flex-col gap-8">
				{!!tsypAwards?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							TSYP Awards
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{tsypAwards.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<WinnerListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}
			</div>

			<div className="flex flex-col gap-8">
				{!!individualAwards?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Individual Awards
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{individualAwards.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<WinnerListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<div className="flex flex-col gap-8">
				{!!sectionAwards?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Section Awards
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{sectionAwards.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<WinnerListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<div className="flex flex-col gap-8">
				{!!spcAwards?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							SPC Awards
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{spcAwards.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<WinnerListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
