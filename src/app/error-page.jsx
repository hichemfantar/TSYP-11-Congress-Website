import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page" className="flex h-full items-center justify-center">
			<button
				className="flex items-center justify-center gap-2 rounded-2xl border-2 bg-gray-50 p-8 text-xl font-semibold transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500"
				onClick={() => {
					window.location.reload();
				}}
			>
				<FontAwesomeIcon icon={faRefresh} />
				Refresh
			</button>
		</div>
	);
}
