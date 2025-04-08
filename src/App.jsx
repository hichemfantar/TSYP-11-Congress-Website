import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./app/components/AppLayout.jsx";
import Speaker from "./app/components/Speaker.jsx";
import Speakers from "./app/components/Speakers.jsx";

import { ErrorPage } from "./app/error-page.jsx";
import AboutUs from "./app/pages/AboutUs.page.jsx";
import ChallengeDetailsPage from "./app/pages/ChallengeDetails.page.jsx";
import { ChallengesPage } from "./app/pages/Challenges.jsx";
import ContactPage from "./app/pages/Contact.page.jsx";
import EventSatisfactionFormPage from "./app/pages/EventSatisfactionForm.page.jsx";
import ExpoDetailsPage from "./app/pages/ExpoDetails.page.jsx";
import HomePage from "./app/pages/Home.page.jsx";
import LiveEventSpacePage from "./app/pages/LiveEventSpace.page.jsx";
import RegistrationPage from "./app/pages/Registration.page.jsx";
import SchedulePage from "./app/pages/Schedule.page.jsx";
import SessionsPage from "./app/pages/Sessions.page.jsx";
import SponsorsPage from "./app/pages/Sponsors.page.jsx";
import SponsorUsPage from "./app/pages/SponsorUs.page.jsx";
import TunisiaPage from "./app/pages/Tunisia.page.jsx";
import VenuePage from "./app/pages/Venue.page.jsx";
import VirtualGamePage from "./app/pages/VirtualGame.page.jsx";
import { WinnersPage } from "./app/pages/Winners.jsx";
import { setInitialTheme } from "./app/utils/themeSwitcher.js";

setInitialTheme();

const router = createBrowserRouter([
	{
		element: <AppLayout></AppLayout>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				// index: true,
				element: <HomePage />,
			},
			{
				path: "/registration",
				element: <RegistrationPage />,
			},
			{
				path: "/virtual-game",
				element: <VirtualGamePage />,
			},
			{
				path: "tunisia",
				element: <TunisiaPage />,
			},
			{
				path: "partners-sponsors",
				element: <SponsorsPage />,
			},
			{
				path: "schedule",
				element: <SchedulePage />,
			},
			{
				path: "partners-sponsors/:companySlug",
				element: <ExpoDetailsPage />,
			},
			{
				path: "challenges/:challengeSlug",
				element: <ChallengeDetailsPage />,
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
			{
				path: "live-event-space",
				element: <LiveEventSpacePage />,
			},
			{
				path: "sessions",
				element: <SessionsPage />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "event-feedback",
				element: <EventSatisfactionFormPage />,
			},
			{
				path: "sponsor-us",
				element: <SponsorUsPage />,
			},
			{
				path: "challenges",
				element: <ChallengesPage />,
			},
			{
				path: "awards",
				element: <WinnersPage />,
			},
			{
				path: "*",
				element: <HomePage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
