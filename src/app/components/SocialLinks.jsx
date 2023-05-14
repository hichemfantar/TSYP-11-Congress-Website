import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import StyledButton from "./StyledButton";

export default function SocialLinks() {
	return (
		<div className="mt-4">
			<div className="flex gap-4">
				<StyledButton
					message={"Vercel"}
					icon={
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
							className="fill-gray-900"
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
					}
				/>
				<StyledButton
					message={"Discord"}
					icon={<FontAwesomeIcon icon={faDiscord} />}
				/>
			</div>
			{/* <button className="rounded-full border-2 border-gray-900 p-2 px-10 font-bold transition hover:bg-gray-900 hover:text-gray-50">
				Vercel
			</button> */}
		</div>
	);
}
