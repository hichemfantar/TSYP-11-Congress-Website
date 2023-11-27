import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

function StyledButton({
	fluid,
	icon,
	message,
	className,
	isLoading,
	style,
	children,
	isDanger,
	isWarning,
	isSuccess,
	disabled,
	...restOfProps
}) {
	return (
		<motion.button
			type="button"
			className={twMerge(
				fluid ? "w-full" : "",
				`relative flex min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition-all hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400  ${
					isDanger
						? "dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
						: ""
				} ${
					isSuccess
						? "dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
						: ""
				} ${
					isWarning
						? "dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
						: ""
				} ${
					!isDanger && !isSuccess && !isWarning
						? "dark:bg-black dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						: ""
				} ${disabled || isLoading ? "cursor-not-allowed" : ""} ${className}`
			)}
			style={style}
			disabled={disabled || isLoading}
			{...restOfProps}
		>
			<div className="flex flex-wrap items-center justify-center gap-2">
				{!isLoading && icon}
				{isLoading && (
					<>
						<FontAwesomeIcon
							aria-hidden="true"
							icon={faCircleNotch}
							className="inline h-4 w-4 animate-spin text-white"
						/>
						{/* <FontAwesomeIcon
						icon={faSpinner}
						className="inline mr-3 w-4 h-4 text-white animate-spin"
					/> */}
					</>
				)}
				{message && <span className="">{message}</span>}
				{children}
			</div>
		</motion.button>
	);
}

export default StyledButton;
