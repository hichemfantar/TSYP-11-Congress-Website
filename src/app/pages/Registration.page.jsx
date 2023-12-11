import LightLogo from "../../assets/main logo (3) (Custom).png";
import Logo from "../../assets/main logo black (Custom).png";

// memories assets
// import memory2 from "../../assets/memories/356551992_226751036434551_8933123460754285924_n.jpg";
// import memory4 from "../../assets/memories/356638153_1045852983243072_6319438153536457058_n.jpg";
// import memory6 from "../../assets/memories/356870057_205006965857961_5503311855628802179_n.jpg";
// import memory8 from "../../assets/memories/357311497_1034866187885516_4807505043687124219_n.jpg";

import { Link } from "react-router-dom";
// import ThreeExperience from "../components/ThreeExperience";
import {
	faGraduationCap,
	faMapLocationDot,
	faPhoneSquare,
	faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "usehooks-ts";
import CustomImage from "../components/CustomImage";
import StyledButton from "../components/StyledButton";

export default function RegistrationPage() {
	const matches = useMediaQuery("(min-width: 768px)");

	return (
		<div className="h-full">
			{/* {false && matches && (
				<Suspense fallback={null}>
					<div className="hidden h-[40rem] overflow-auto rounded-2xl md:block md:h-[45rem]">
						<ThreeExperience />
					</div>
				</Suspense>
			)} */}

			<Fade triggerOnce>
				<section className="grid grid-cols-12 items-center justify-center py-10 md:py-12">
					<div className="col-span-12 mx-auto">
						{false && (
							<>
								{" "}
								<CustomImage
									src={Logo}
									className="mx-auto mb-8 hidden h-52 object-contain dark:block dark:invert sm:h-48"
									alt="TSYP 11"
								/>
								<CustomImage
									src={LightLogo}
									className="mx-auto h-56 object-contain dark:hidden sm:h-52"
									alt="TSYP 11"
								/>
							</>
						)}

						{false && (
							<h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
								Bringing Silicon Valley to Tunisia.
							</h1>
						)}

						{/* <h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none"> */}
						<h1 className="mb-8 text-center text-4xl font-bold tracking-tight lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
							IEEE Tunisian Students & Young Professionals Congress{" "}
							<span className="text-[#3a55b4] dark:text-[#4967d0]">2023</span>
						</h1>

						<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							From 18th to 20th December, 2023 in Medina Congress Center,
							Yasmine Hammamet, Tunisia
						</h1>

						<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							Registrations are now open!
						</h1>

						{/* <div className="flex justify-center">
							<div>
								<h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:leading-none">
									Join your fellow volunteers and participate in:
								</h1>
								<div className="prose font-semibold marker:text-black dark:text-gray-200 dark:marker:text-gray-200">
									<ul>
										<li>Exhibitions</li>
										<li>Engaging training opportunities</li>
										<li>Panel sessions</li>
										<li>Networking sessions</li>
										<li>IEEE leadership sessions</li>
									</ul>
								</div>
							</div>
						</div> */}

						<div className="mt-16 flex flex-wrap justify-center gap-6">
							<Link
								to={"https://forms.gle/VJDweQNxu77FLGDVA"}
								className="flex justify-center"
								target="_blank"
							>
								<StyledButton
									message={
										"Register Now as an IEEE Professional and non-student"
									}
									icon={
										<FontAwesomeIcon className="-rotate-45" icon={faTicket} />
									}
									className="min-w-[16rem] py-3 text-base"
								/>
							</Link>
							<Link
								to={
									"https://docs.google.com/spreadsheets/d/15ToIJFgaeBhgeTjNTsHv_Si09VSpgomOQYKcg3fIFIo/edit?usp=sharing"
								}
								className="flex justify-center"
								target="_blank"
							>
								<StyledButton
									message={"Contact an ambassador to register as a student"}
									icon={<FontAwesomeIcon icon={faGraduationCap} />}
									className="min-w-[16rem] py-3 text-base"
								/>
							</Link>
						</div>

						<div className="mt-16 flex flex-wrap justify-center gap-8">
							<Link
								className="flex flex-col gap-4 transition hover:scale-105"
								to="https://diarlemdina.medinahotelsandresorts.com/en"
								target="_blank"
							>
								<FontAwesomeIcon icon={faMapLocationDot} className="h-20" />
								<div className="font-bold">Medina Congress Center</div>
							</Link>

							<Link
								className="flex flex-col gap-4 transition hover:scale-105"
								to="https://docs.google.com/spreadsheets/d/15ToIJFgaeBhgeTjNTsHv_Si09VSpgomOQYKcg3fIFIo/edit?usp=sharing"
								target="_blank"
							>
								<FontAwesomeIcon icon={faPhoneSquare} className="h-20" />
								<div className="max-w-[14rem] text-center font-bold">
									Contact an ambassador
								</div>
							</Link>
						</div>
					</div>
					{/* <div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-6xl lg:font-extrabold lg:leading-none">
					Welcome to our Silicon Valley.
				</h1>
				<h1 className="mb-4 text-4xl font-medium tracking-tight   lg:mb-7 lg:text-start lg:text-2xl lg:font-extrabold lg:leading-none">
					IEEE Tunisian Students and Young Professionals in Conjunction with
					IEEE ESSTHS in Silicon Valley congress.
				</h1>
			</div> */}
				</section>
			</Fade>
		</div>
	);
}
