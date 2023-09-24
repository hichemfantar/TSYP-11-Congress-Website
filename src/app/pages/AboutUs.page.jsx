import Team from "../components/Team";
import { ContactDetails, ContactForm } from "./Contact.page";
import { AboutESSTHSSB, AboutTSYP, AboutTunisiaSection } from "./Home.page";
import { Fade } from "react-awesome-reveal";

export default function AboutUs() {
	return (
		<div>
			<Fade>
				<AboutESSTHSSB />
				<AboutTunisiaSection />{" "}
			</Fade>

			<Fade>
				<AboutTSYP />{" "}
			</Fade>

			<Fade>
				<Team />{" "}
			</Fade>

			<Fade>
				<div className="mt-4">
					<ContactDetails />
				</div>{" "}
			</Fade>

			<Fade>
				<ContactForm />
			</Fade>
		</div>
	);
}
