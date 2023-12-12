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

export const dec18ScheduleRevamped = [
	{
		timeSlotStart: "8:00 AM",
		timeSlotEnd: "1:00 PM",
		activities: [
			{
				title: "Check-in",
				icon: faPersonWalkingArrowRight,
				location: "Medina Hall “Espace Jardin”",
			},
			{
				title: "SB's booth setup",
				icon: faPersonWalkingArrowRight,
				location: "Booths Hall",
			},
		],
	},
	{
		timeSlotStart: "2:00 PM",
		timeSlotEnd: "4:50 PM",
		activities: [
			{
				title: "Opening Ceremony",
				icon: faMicrophone,
				location: "Hannibal Congress Room",
			},
			{
				title: "Guest Interventions",
				icon: faMicrophone,
				location: "Hannibal Congress Room",
			},
			{
				title: "Panel Discussions",
				icon: faMicrophone,
				location: "Hannibal Congress Room",
			},
		],
	},
	{
		timeSlotStart: "4:50 PM",
		timeSlotEnd: "5:00 PM",
		activities: [
			{
				title: "Coffee Break",
				icon: faMicrophone,
				location: "Booths Hall  and “Espace Jardin” ",
			},
		],
	},
	{
		timeSlotStart: "5:00 PM",
		timeSlotEnd: "8:00 PM",
		activities: [
			{
				title: "Booths Expo and Job Fair",
				icon: faMicrophone,
				location: "Booths Hall  and “Espace Jardin” ",
			},
		],
	},
	{
		timeSlotStart: "7:00 PM",
		timeSlotEnd: "10:00 PM",
		activities: [
			{
				title: "Dinner",
				icon: faMicrophone,
				location: "Medina Restaurants",
			},
		],
	},
	{
		timeSlotStart: "10:00 PM",
		timeSlotEnd: "12:00 AM",
		activities: [
			{
				title: "Surprise Challenge Announcement, Party, and Social Activities",
				icon: faMicrophone,
				location: "Hannibal Congress Room - Booths Hall",
			},
		],
	},
];

export const dec19ScheduleRevamped = [
	{
		timeSlotStart: "7:00 AM",
		timeSlotEnd: "9:00 AM",
		activities: [
			{
				title: "Breakfast",
				icon: faMicrophone,
				location: "Medina Restaurants",
			},
		],
	},
	{
		timeSlotStart: "9:00 AM",
		timeSlotEnd: "10:30 AM",
		activities: [
			{
				title: "Breakout Session 1",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Workshops",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "EMBS Global Healthcare Forum",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Challenges",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Panel Discussions",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Booths Expo and Job Fair",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
		],
	},
	{
		timeSlotStart: "10:30 AM",
		timeSlotEnd: "11:00 AM",
		activities: [
			{
				title: "Coffee Break",
				icon: faMicrophone,
				location: "Booths Hall and “Espace Jardin”",
			},
		],
	},
	{
		timeSlotStart: "11:00 AM",
		timeSlotEnd: "12:30 PM",
		activities: [
			{
				title: "Breakout Session 2",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Workshops",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "EMBS Global Healthcare Forum",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Challenges",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Panel Discussions",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Booths Expo and Job Fair",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
		],
	},
	{
		timeSlotStart: "12:30 PM",
		timeSlotEnd: "2:30 PM",
		activities: [
			{
				title: "Lunch",
				icon: faMicrophone,
				location: "Medina Restaurants",
			},
		],
	},
	{
		timeSlotStart: "2:30 PM",
		timeSlotEnd: "4:00 PM",
		activities: [
			{
				title: "Breakout Session 3",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Workshops",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "EMBS Global Healthcare Forum",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Challenges",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Panel Discussions",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Booths Expo and Job Fair",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
		],
	},
	{
		timeSlotStart: "4:00 PM",
		timeSlotEnd: "4:30 PM",
		activities: [
			{
				title: "Coffee Break",
				icon: faMicrophone,
				location: "Booths Hall and “Espace Jardin”",
			},
		],
	},
	{
		timeSlotStart: "4:30 PM",
		timeSlotEnd: "6:00 PM",
		activities: [
			{
				title: "Breakout Session 4",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Workshops",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "EMBS Global Healthcare Forum",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Challenges",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Panel Discussions",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Booths Expo and Job Fair",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
		],
	},
	{
		timeSlotStart: "6:00 PM",
		timeSlotEnd: "6:20 PM",
		activities: [
			{
				title: "Break",
				icon: faMicrophone,
				location: "Booths Hall and “Espace Jardin”",
			},
		],
	},
	{
		timeSlotStart: "6:20 PM",
		timeSlotEnd: "7:20 PM",
		activities: [
			{
				title: "Breakout Session 5",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Workshops",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "EMBS Global Healthcare Forum",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Challenges",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Panel Discussions",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
			{
				title: "Booths Expo and Job Fair",
				icon: faMicrophone,
				location: "Medina Conventions Center",
			},
		],
	},
	{
		timeSlotStart: "7:20 PM",
		timeSlotEnd: "9:30 PM",
		activities: [
			{
				title: "Dinner",
				icon: faMicrophone,
				location: "Medina Restaurants",
			},
		],
	},
	{
		timeSlotStart: "9:30 PM",
		timeSlotEnd: "10:15 PM",
		activities: [
			{
				title: "Talent Show",
				icon: faMicrophone,
				location: "Hannibal Congress Room",
			},
		],
	},
	{
		timeSlotStart: "10:15 PM",
		timeSlotEnd: "11:15 PM",
		activities: [
			{
				title: "Awards Ceremony",
				icon: faMicrophone,
				location: "Hannibal Congress Room",
			},
			{
				title: "Challenge Awards",
				icon: faMicrophone,
				location: "Hannibal Congress Room",
			},
			{
				title: "Individual Awards",
				icon: faMicrophone,
				location: "Hannibal Congress Room",
			},
			{
				title: "TSYP Awards",
				icon: faMicrophone,
				location: "Hannibal Congress Room",
			},
			{
				title: "Finalists Announcement",
				icon: faMicrophone,
				location: "Hannibal Congress Room",
			},
		],
	},
	{
		timeSlotStart: "11:15 PM",
		timeSlotEnd: "12:00 AM",
		activities: [
			{
				title: "Party and Social Activities",
				icon: faMicrophone,
				location: "Hannibal Congress Room - Booths Hall",
			},
		],
	},
];

export const dec20ScheduleRevamped = [
	{
		timeSlotStart: "7:00 AM",
		timeSlotEnd: "9:00 AM",
		activities: [
			{
				title: "Breakfast",
				icon: faUtensils,
				location: "Medina Restaurants",
			},
		],
	},
	{
		timeSlotStart: "9:00 AM",
		timeSlotEnd: "9:45 AM",
		activities: [
			{
				title: "Awards Ceremony",
				icon: faUtensils,
				location: "Hannibal Congress Room",
			},
			{
				title: "Section Awards",
				icon: faUtensils,
				location: "Hannibal Congress Room",
			},
			{
				title: "SPC Awards",
				icon: faUtensils,
				location: "Hannibal Congress Room",
			},
		],
	},
	{
		timeSlotStart: "9:45 AM",
		timeSlotEnd: "10:15 AM",
		activities: [
			{
				title: "Discussion Panel",
				icon: faUtensils,
				location: "Hannibal Congress Room",
			},
		],
	},
	{
		timeSlotStart: "10:15 AM",
		timeSlotEnd: "11:30 AM",
		activities: [
			{
				title: "Finalist Pitch and Voting",
				icon: faUtensils,
				location: "Hannibal Congress Room",
			},
		],
	},
	{
		timeSlotStart: "11:30 AM",
		timeSlotEnd: "12:30 PM",
		activities: [
			{
				title: "Closing Ceremony",
				icon: faUtensils,
				location: "Hannibal Congress Room",
			},
			{
				title: "Winner's Announcement",
				icon: faUtensils,
				location: "Hannibal Congress Room",
			},
			{
				title: "Celebration",
				icon: faUtensils,
				location: "Hannibal Congress Room",
			},
		],
	},
	{
		timeSlotStart: "12:30 PM",
		timeSlotEnd: "1:00 PM",
		activities: [
			{
				title: "Group Photo",
				icon: faUtensils,
				location: "Hannibal Congress Room",
			},
		],
	},
	{
		timeSlotStart: "1:00 PM",
		timeSlotEnd: "2:00 PM",
		activities: [
			{
				title: "Check-out",
				icon: faUtensils,
				location: "Medina Hall “Espace Jardin”",
			},
		],
	},
];
