import {
	faAward,
	faGift,
	faHands,
	faMedal,
	faMicrophone,
	faMugHot,
	faPeopleArrows,
	faPersonChalkboard,
	faPersonWalkingArrowRight,
	faPersonWalkingDashedLineArrowRight,
	faTrophy,
	faUsersRectangle,
	faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export const dec18Schedule = [
	{
		title: "Check-in & Booth setup",
		startTime: "10:00AM",
		endTime: "2:00PM",
		timeZone: "GMT+1",
		icon: faPersonWalkingArrowRight,
	},
	{
		title: "Opening ceremony",
		startTime: "3:00PM",
		endTime: "5:00PM",
		timeZone: "GMT+1",
		icon: faMicrophone,
	},
	{
		title: "Stands, TSYP Booths & Networking",
		startTime: "5:00PM",
		endTime: "7:00PM",
		timeZone: "GMT+1",
		icon: faPeopleArrows,
	},
	{
		title: "Dinner",
		startTime: "7:00PM",
		endTime: "9:00PM",
		timeZone: "GMT+1",
		icon: faUtensils,
	},
	{
		title: "Team-Building & Surprise Challenge",
		startTime: "9:00PM",
		endTime: "11:00PM",
		timeZone: "GMT+1",
		icon: faGift,
	},
];

export const dec19Schedule = [
	{
		title: "Breakfast",
		startTime: "7:00AM",
		endTime: "9:00AM",
		timeZone: "GMT+1",
		icon: faUtensils,
	},
	{
		title: "IEEE challenges, Partner challenges, Workshops & panels",
		startTime: "9:00AM",
		endTime: "10:30AM",
		timeZone: "GMT+1",
		icon: faUsersRectangle,
	},
	{
		title: "Coffee break",
		startTime: "10:30AM",
		endTime: "10:35AM",
		timeZone: "GMT+1",
		icon: faMugHot,
	},
	{
		title: "IEEE challenges, Partner challenges, Workshops & panels",
		startTime: "10:35AM",
		endTime: "12:00PM",
		timeZone: "GMT+1",
		icon: faUsersRectangle,
	},
	{
		title: "Lunch",
		startTime: "12:00PM",
		endTime: "2:00PM",
		timeZone: "GMT+1",
		icon: faUtensils,
	},
	{
		title: "IEEE challenges, Partner challenges, Workshops & panels",
		startTime: "2:00PM",
		endTime: "3:30PM",
		timeZone: "GMT+1",
		icon: faUsersRectangle,
	},
	{
		title: "Coffee break",
		startTime: "3:30PM",
		endTime: "3:35PM",
		timeZone: "GMT+1",
		icon: faMugHot,
	},
	{
		title: "IEEE challenges, Partner challenges, Workshops & panels",
		startTime: "3:35PM",
		endTime: "5:05PM",
		timeZone: "GMT+1",
		icon: faUsersRectangle,
	},
	{
		title: "Coffee break",
		startTime: "5:05PM",
		endTime: "5:10PM",
		timeZone: "GMT+1",
		icon: faMugHot,
	},
	{
		title: "IEEE challenges, Partner challenges, Workshops & panels",
		startTime: "5:10PM",
		endTime: "6:40PM",
		timeZone: "GMT+1",
		icon: faUsersRectangle,
	},
	{
		title: "Dinner",
		startTime: "7:00PM",
		endTime: "9:00PM",
		timeZone: "GMT+1",
		icon: faUtensils,
	},
	{
		title: "Talent show",
		startTime: "9:00PM",
		endTime: "9:30PM",
		timeZone: "GMT+1",
		icon: faAward,
	},
	{
		title: "Award ceremony",
		startTime: "9:30PM",
		endTime: "10:00PM",
		timeZone: "GMT+1",
		icon: faHands,
	},
	{
		title: "Finalists announcement, social activities",
		startTime: "10:00PM",
		endTime: "11:00PM",
		timeZone: "GMT+1",
		icon: faMedal,
	},
];

export const dec20Schedule = [
	{
		title: "Breakfast",
		startTime: "7:00AM",
		endTime: "9:00AM",
		timeZone: "GMT+1",
		icon: faUtensils,
	},
	{
		title: "Tunisia Section Awards",
		startTime: "9:00AM",
		endTime: "9:45AM",
		timeZone: "GMT+1",
		icon: faTrophy,
	},
	{
		title: "Announcement of Paper Contest Winners",
		startTime: "9:45AM",
		endTime: "10:00AM",
		timeZone: "GMT+1",
		icon: faPersonChalkboard,
	},
	{
		title: "Finalists Presentation (Q&A, Voting)",
		startTime: "10:00AM",
		endTime: "11:30AM",
		timeZone: "GMT+1",
		icon: faPersonChalkboard,
	},
	{
		title: "Winners announcement and Closing ceremony",
		startTime: "11:30AM",
		endTime: "12:00PM",
		timeZone: "GMT+1",
		icon: faTrophy,
	},
	{
		title: "Checkout",
		startTime: "12:00PM",
		endTime: "1:00PM",
		timeZone: "GMT+1",
		icon: faPersonWalkingDashedLineArrowRight,
	},
];

export const areAllLocationsSame = (activities) => {
	if (activities.length <= 1) {
		// If there's only one or zero activities, they are considered to have the same location.
		return true;
	}

	const firstLocation = activities[0].location;

	for (let i = 1; i < activities.length; i++) {
		if (activities[i].location !== firstLocation) {
			return false;
		}
	}

	return true;
};
