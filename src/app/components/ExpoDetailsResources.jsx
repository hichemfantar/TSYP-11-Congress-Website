import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ExpoDetailsResources({ links }) {
	return (
		<div>
			<div className="mb-4 text-lg font-bold">Resources</div>
			<div className="flex flex-col gap-2">
				{links.map((l) => (
					<a
						href={l.url}
						className="text-sm text-gray-600 dark:text-gray-400"
						key={l.text}
					>
						{<FontAwesomeIcon icon={faExternalLink} />}{" "}
						<span className="hover:underline">{l.text}</span>
					</a>
				))}
			</div>
		</div>
	);
}
