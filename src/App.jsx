import { Suspense } from "react";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import AppLayout from "./app/components/AppLayout.jsx";
import Speaker from "./app/components/Speaker.jsx";
import Speakers from "./app/components/Speakers.jsx";
import SponsorsPage from "./app/pages/Sponsors.page.jsx";
import ExpoDetailsPage from "./app/pages/ExpoDetails.page.jsx";
import SchedulePage from "./app/pages/Schedule.page.jsx";
import { setInitialTheme } from "./app/utils/themeSwitcher.js";
import HomePage from "./app/pages/Home.page.jsx";
import Team from "./app/components/Team.jsx";
import TunisiaPage from "./app/pages/Tunisia.page.jsx";
import TeamMember from "./app/components/TeamMember.jsx";
import ContactPage from "./app/pages/Contact.page.jsx";
import SponsorUsPage from "./app/pages/SponsorUs.page.jsx";
import ThreeExperience from "./app/components/ThreeExperience.jsx";
import Phase from "./app/components/Phase.jsx";
import AboutUs from "./app/pages/AboutUs.page.jsx";
import TicketPage from "./app/pages/Ticket.page.jsx";
import VenuePage from "./app/pages/Venue.page.jsx";
import { ChallengesPage } from "./app/pages/Challenges.jsx";

setInitialTheme();

const router = createBrowserRouter([
	{
		element: <AppLayout></AppLayout>,
		children: [
			{
				path: "/",
				// index: true,
				element: <HomePage />,
			},
			{
				path: "tunisia",
				element: <TunisiaPage />,
			},
			{
				path: "sponsors",
				element: <SponsorsPage />,
			},
			{
				path: "schedule",
				element: <SchedulePage />,
			},
			{
				path: "sponsors/:companySlug",
				element: <ExpoDetailsPage />,
			},
			{
				path: "speakers",
				element: <Speakers />,
			},
			{
				path: "venue",
				element: <VenuePage />,
			},
			{
				path: "speakers/:speakerSlug",
				element: <Speaker />,
			},
			{
				path: "about-us",
				element: <AboutUs />,
			},
			// {
			// 	path: "team",
			// 	element: <Team />,
			// },
			// {
			// 	path: "virtual",
			// 	element: <Phase />,
			// },
			// {
			// 	path: "team/:teamMemberSlug",
			// 	element: <TeamMember />,
			// },
			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "sponsor-us",
				element: <SponsorUsPage />,
			},
			// {
			// 	path: "challenges",
			// 	element: <ChallengesPage />,
			// },
			{
				path: "ticket",
				element: <TicketPage />,
			},
			{
				path: "stage",
				element: <Phase />,
			},
		],
	},
	{
		path: "reveal",
		element: (
			<Suspense fallback={null}>
				<ThreeExperience />
			</Suspense>
		),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
