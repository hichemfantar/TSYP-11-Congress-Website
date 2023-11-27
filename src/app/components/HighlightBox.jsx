import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CustomImage from "./CustomImage";

export default function HighlightBox({ data }) {
	return (
		<div className="rounded-xl border-2 py-3 px-4 dark:border-gray-800">
			<div className="flex flex-col gap-2">
				<div className="flex gap-2">
					{data.highlightType === "tweet" ? (
						<FontAwesomeIcon
							icon={faTwitter}
							className="h-6 w-6 flex-shrink-0 text-blue-400"
						/>
					) : data.highlightType === "discord" ? (
						<FontAwesomeIcon
							icon={faDiscord}
							className="h-6 w-6 flex-shrink-0 text-blue-600"
						/>
					) : (
						<svg
							data-testid="geist-icon"
							fill="none"
							height={24}
							shapeRendering="geometricPrecision"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
							width={24}
							className="flex-shrink-0 fill-gray-900"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 2L2 19.7778H22L12 2Z"
								fill="currentColor"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
						</svg>
					)}

					<div>
						<p>{data.text}</p>
						<div className="text-gray-600">{data.date}</div>
						{data.image && (
							<div className="mt-4">
								<CustomImage
									src={data.image.url}
									alt=""
									className="rounded-2xl border object-cover dark:border-gray-800"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
