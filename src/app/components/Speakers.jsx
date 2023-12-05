import { Link } from "react-router-dom";

import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomImage from "./CustomImage";
import { useEffect, useState } from "react";

export default function Speakers({ limit = 0 }) {
	const [speakersData, setSpeakersData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/speakers.json")
				.then((response) => response.json())
				.then((response) => {
					setSpeakersData(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	return (
		<div>
			<div className="mb-8 text-4xl font-bold">Speakers</div>
			<div className="grid grid-cols-12 gap-4 md:gap-4">
				{speakersData
					?.filter((e) => e?.enabled)
					// ?.slice(0, limit)
					?.map((speaker, idx) => {
						if (idx >= limit && limit !== 0) return null;

						return (
							<Link
								key={speaker.name}
								to={`/speakers/${speaker.slug}`}
								className="col-span-6 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
							>
								<CustomImage
									src={speaker.imageSmall.url}
									alt=""
									className="mb-2 aspect-[12/16] w-full rounded-lg object-cover sm:aspect-[12/16]"
									loading="lazy"
								/>
								<div className="font-bold">{speaker.name}</div>
								{/* <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
								@{speaker.twitterUsername}
							</div> */}
								<div className="text-sm line-clamp-2">{speaker.title}</div>
								{/* <div className="text-sm">
								{speaker.title}, {speaker.company.name}
							</div> */}
							</Link>
						);
					})}

				{limit ? (
					<Link
						to={`/speakers`}
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
