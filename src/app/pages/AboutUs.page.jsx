import Team from "../components/Team";
import { ContactDetails } from "./Contact.page";
import { AboutESSTHSSB, AboutTSYP, AboutTunisiaSection } from "./Home.page";

export default function AboutUs() {
	return (
		<div>
			<AboutESSTHSSB />
			<AboutTunisiaSection />
			<AboutTSYP />
			<Team />
			<div className="mt-4">
				<ContactDetails />
			</div>
		</div>
	);
}
