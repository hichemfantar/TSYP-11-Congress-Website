import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CustomImage from "./CustomImage";

export default function WinnerListItem({ data, classNames, imgClassNames }) {
	return (
		<div
			to={`/partners-sponsors/${data.slug}`}
			className={twMerge(
				"block h-full rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
				classNames
			)}
		>
			<div className={twMerge("mb-4 rounded-lg bg-gray-50 p-6 py-8")}>
				{(data.winnerImg || data.logo.url || data.logo) && (
					<CustomImage
						src={data.winnerImg || data.logo.url || data.logo}
						alt=""
						className={twMerge(
							"h-40 w-full object-contain md:h-40",
							imgClassNames
						)}
					/>
				)}
			</div>

			{data.winner || data.title ? (
				<div className="text-xl font-bold line-clamp-3">
					{data.winner || data.title}
				</div>
			) : (
				<div className="text-xl font-bold line-clamp-3">TBD</div>
			)}
			{data.name && (
				<div className="text-base font-bold text-gray-600 line-clamp-3 dark:text-gray-300">
					{data.name}
				</div>
			)}
			{/* {data.description && (
				<div className="text-gray-600 line-clamp-3 dark:text-gray-300">
					{data.description}
				</div>
			)} */}
		</div>
	);
}
