import Team from "../components/Team";
import { ContactDetails, ContactForm } from "./Contact.page";
import { AboutESSTHSSB, AboutTSYP, AboutTunisiaSection } from "./Home.page";
import { Fade } from "react-awesome-reveal";

export default function AboutUs() {
	return (
		<div>
			<Fade triggerOnce>
				<AboutESSTHSSB />
				<AboutTunisiaSection />
			</Fade>

			<Fade triggerOnce>
				<AboutTSYP />
			</Fade>

			<Fade triggerOnce>
				<Team />
			</Fade>

			<Fade triggerOnce>
				<div className="mt-4">
					<ContactDetails />
				</div>
			</Fade>

			<Fade triggerOnce>
				<ContactForm />
			</Fade>
		</div>
	);
}
