import { differenceInMinutes, format, formatDistance } from "date-fns";
import React from "react";
import { twMerge } from "tailwind-merge";
import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";

export default function SessionScheduleBox({ data, classNames }) {
	return (
		<div
			className={twMerge(
				"border-gray-3000 rounded-xl border-2 py-3 px-4 dark:border-gray-800",
				classNames
			)}
		>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between gap-3">
					<h1 className="flex-1 font-bold">{data.title}</h1>
					{/* <div className="flex-shrink-0 font-['space_mono']">
						{differenceInMinutes(new Date(data.end), new Date(data.start))}m
					</div> */}
				</div>

				{/* <div className="font-['space_mono'] text-gray-600 dark:text-gray-400">
					{format(new Date(data.start), "HH:mm")}
					{" - "}
					{format(new Date(data.end), "HH:mm")}
				</div> */}

				<div className="flex flex-wrap items-center gap-2">
					{/* <div className="flex -space-x-4">
							{data.speaker.map((e) => (
								<Link to={`/speakers/${"Khaled%20Letaief"}`}>
									<CustomImage
										key={e.name}
										className="h-10 w-10 rounded-full border border-white object-cover dark:border-gray-800"
										src={
											e.image.url + "?h=192&w=192" ||
											"https://flowbite.com/docs/images/people/profile-picture-4.jpg"
										}
										alt=""
									/>
								</Link>
							))}
						</div> */}

					{data.speakers && data.speakers?.length === 1
						? data.speakers?.[0].name
						: data.speakers && (
								<div className="font-['space_mono'] text-gray-600 dark:text-gray-400">
									{data.speakers?.length} speakers
								</div>
						  )}

					{data.description && <p>{data.description}</p>}

					<div className="font-['space_mono']">
						{data.speakers?.map((e, idx) => (
							// <Link to={`/speakers/${"Khaled%20Letaief"}`}>
							<span>
								{e}
								{idx !== data.speakers?.length - 1 && ", "}
							</span>
							// </Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
