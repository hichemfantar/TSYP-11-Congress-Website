import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";
import { useEffect, useState } from "react";

export default function Team({ limit = 0 }) {
	const [ocTeam, setOcTeam] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/oc_team.json")
				.then((response) => response.json())
				.then((response) => {
					setOcTeam(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	return (
		<div id="team">
			<div className="mb-8 text-4xl font-bold">Meet the Team</div>
			<div className="grid grid-cols-12 gap-4 md:gap-4">
				{ocTeam
					?.filter((s) => !!s?.active)
					?.map((speaker, idx) => {
						if (idx >= limit && limit !== 0) return null;

						if (speaker.link) {
							return (
								<Link
									key={speaker.name}
									to={speaker.link}
									className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
									target="_blank"
								>
									<CustomImage
										style={{
											objectPosition: "center top",
										}}
										src={speaker.imageSmall.url}
										alt=""
										className="mb-2 aspect-[12/16] w-full rounded-lg object-cover sm:aspect-[12/16]"
										loading="lazy"
									/>
									<div className="flex flex-wrap items-center gap-1">
										<span className="font-bold">{speaker.name}</span>
										<FontAwesomeIcon
											icon={faExternalLink}
											className="h-3 w-3"
										/>
									</div>
									{/* <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
			@{speaker.twitterUsername}
		</div> */}
									<div className="text-sm">
										{speaker.title}
										{false && `, ${speaker.company.name}`}
									</div>
								</Link>
							);
						}

						return (
							// <Link
							// 	key={speaker.name}
							// 	to={speaker.name}
							// className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-4 lg:col-span-3 2xl:col-span-2"
							// >
							<div
								key={speaker.name}
								className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
							>
								<CustomImage
									style={{
										objectPosition: "center top",
									}}
									src={speaker.imageSmall.url}
									alt=""
									className="mb-2 aspect-[12/16] w-full rounded-lg object-cover sm:aspect-[12/16]"
								/>
								<div className="font-bold">{speaker.name}</div>
								{/* <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
								@{speaker.twitterUsername}
							</div> */}
								<div className="text-sm">
									{speaker.title}
									{false && `, ${speaker.company.name}`}
								</div>
							</div>
							// </Link>
						);
					})}

				{limit ? (
					<Link
						to={`/about-us#team`}
						className="col-span-6 flex flex-col items-center justify-center rounded-xl border-2 p-6 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
					>
						<FontAwesomeIcon icon={faExternalLink} className="mb-2 h-6 w-6" />
						<div className="font-bold">See more</div>
					</Link>
				) : null}
			</div>
		</div>
	);
}
