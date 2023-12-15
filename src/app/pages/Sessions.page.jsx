import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Team from "../components/Team";
import { ContactDetails, ContactForm } from "./Contact.page";
import { AboutESSTHSSB, AboutTSYP, AboutTunisiaSection } from "./Home.page";
import { Fade } from "react-awesome-reveal";
import {
	faCalendar,
	faChalkboardUser,
	faHandshake,
	faMapLocationDot,
	faPersonRunning,
	faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Schedule from "../components/Schedule";
import SessionsSchedule from "../components/SessionsSchedule";

export default function SessionsPage() {
	return <SessionsSchedule />;
}
