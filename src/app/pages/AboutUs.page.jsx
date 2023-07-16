import Team from "../components/Team";
import { AboutESSTHSSB, AboutTSYP, AboutTunisiaSection } from "./Home.page";

export default function AboutUs() {
	return (
		<div>
			<AboutESSTHSSB />
			<AboutTunisiaSection />
			<AboutTSYP />
			<Team />
		</div>
	);
}
