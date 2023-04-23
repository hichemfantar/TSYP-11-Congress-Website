import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function ExpoListItem({ data, classNames, imgClassNames }) {
	return (
		<Link
			to={data.slug}
			className={twMerge(
				"block rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
				classNames
			)}
		>
			<img
				loading="lazy"
				src={data.logo.url || data.logo}
				alt=""
				className={twMerge(
					"mb-4 h-52 w-full rounded-lg bg-black object-contain p-6 md:h-64",
					imgClassNames
				)}
			/>
			<div className="text-gray-600 line-clamp-4 dark:text-gray-300">
				{data.description}
			</div>
		</Link>
	);
}
