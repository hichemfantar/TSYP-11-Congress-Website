import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import ChallengesList from "../components/ChallengesList";

export function ChallengesPage() {
	return (
		<div className="h-full">
			<section className="py-8 lg:py-8">
				<ChallengesList />
			</section>
			{false && (
				<section className="py-8 lg:py-8">
					<Link
						to={
							"https://docs.google.com/forms/d/e/1FAIpQLSdv9uYAqY26Kc5Ixnv-KJ_0ZaI6HZBjNEicSoUHieoNNaRwoQ/viewform"
						}
						target="_blank"
						rel="noreferrer"
						className=""
					>
						<img
							src="https://lh3.googleusercontent.com/fIpRF6MRS3-GtMNg6IJYGTg8WczF71WpXZpHVuusVRppAtU8V7rFF58tpC1d5bwHNiPoQo8GcfP7TSdEXk8moO63U86Gt-AHDKa_FdT9odkfyMIeZjCy2L8g2TheelI6Qw=w2164"
							alt=""
							className="mx-auto my-8 mb-20 rounded-2xl object-contain shadow-lg transition-all hover:scale-105 md:h-56"
						/>
					</Link>
					<div className="mx-auto">
						<div className="">
							<h1 className="mb-4 text-center text-3xl font-bold lg:mb-7 lg:text-5xl lg:font-extrabold lg:leading-none">
								We are accepting challenge proposals!
							</h1>
							<p className="mb-10 text-center text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
								Fill the appropriate form below and we'll get back to you with
								an answer!
							</p>
						</div>
					</div>
					<div className="mb-6 flex flex-wrap justify-center gap-4">
						<Link
							to={
								"https://docs.google.com/forms/d/e/1FAIpQLSdv9uYAqY26Kc5Ixnv-KJ_0ZaI6HZBjNEicSoUHieoNNaRwoQ/viewform"
							}
							target="_blank"
							rel="noreferrer"
							className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							<FontAwesomeIcon icon={faExternalLink} className="mr-2" />

							<span className="">Suggest a challenge</span>
						</Link>
					</div>
				</section>
			)}
		</div>
	);
}
