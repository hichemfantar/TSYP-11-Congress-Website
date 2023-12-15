import { useEffect, useState } from "react";
import SessionScheduleBox from "./SessionScheduleBox";
import { useSearchParams } from "react-router-dom";

export default function SessionsSchedule() {
	const [dec18ScheduleRevamped, setDec18ScheduleRevamped] = useState([]);
	const [dec19ScheduleRevamped, setDec19ScheduleRevamped] = useState([]);

	useEffect(() => {
		const getData = async () => {
			await fetch("/assets/dec18ScheduleRevamped.json")
				.then((response) => response.json())
				.then((response) => {
					setDec18ScheduleRevamped(response);
				})
				.catch((err) => console.error(err));
			await fetch("/assets/dec19ScheduleRevamped.json")
				.then((response) => response.json())
				.then((response) => {
					setDec19ScheduleRevamped(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	const [searchParams, setSearchParams] = useSearchParams();
	const [activeSpeaker, setActiveSpeaker] = useState(
		searchParams.get("speaker") ?? ""
	);

	const [activeSchedule, setActiveSchedule] = useState("Full Schedule");

	const filtered18 = dec18ScheduleRevamped
		?.filter((e) => !!e.detailedActivities)
		?.filter((e) => {
			return (
				e.detailedActivities?.filter((e) =>
					activeSpeaker
						? e.speakers?.filter((str) =>
								str.toLowerCase().includes(activeSpeaker.toLowerCase())
						  ).length
						: e
				).length > 0
			);
		});

	const filtered19 = dec19ScheduleRevamped
		?.filter((e) => !!e.detailedActivities)
		?.filter((e) => {
			return (
				e.detailedActivities?.filter((e) =>
					activeSpeaker
						? e.speakers?.filter((str) =>
								str.toLowerCase().includes(activeSpeaker.toLowerCase())
						  ).length
						: e
				).length > 0
			);
		});

	function renderSlot(daySchedule) {
		return daySchedule
			?.filter((e) => !!e.detailedActivities)
			?.map((slot) => (
				<div>
					<div className="sticky top-12 mb-4 bg-gray-50 py-4 text-xl font-bold dark:bg-black">
						{slot.timeSlotStart} - {slot.timeSlotEnd}
					</div>
					<div className="xmd:auto-rows-fr grid grid-cols-12 gap-y-4 md:gap-4">
						{slot.detailedActivities
							?.filter((e) =>
								activeSpeaker
									? e.speakers?.filter((str) =>
											str.toLowerCase().includes(activeSpeaker.toLowerCase())
									  ).length
									: e
							)
							?.map((activity) => (
								<div
									className="col-span-12 md:col-span-4 lg:col-span-3"
									key={activity.title}
								>
									<SessionScheduleBox data={activity} classNames={"h-full"} />
								</div>
							))}
					</div>
				</div>
			));
	}
	return (
		<div className="flex flex-col gap-8">
			<div>
				<div className="flex flex-wrap justify-between gap-2">
					<div className="mb-4 text-4xl font-bold">Sessions</div>
					<select
						onChange={(e) => setActiveSchedule(e.target.value)}
						name="schedule"
						id="schedule"
						className="mb-4 block rounded-lg border border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-black md:self-end"
						defaultValue={activeSchedule}
					>
						<option value={"Full Schedule"}>Full Schedule</option>
						<option value={"Day 1"}>Day 1</option>
						<option value={"Day 2"}>Day 2</option>
						{/* <option value={"Day 3"}>Day 3</option> */}
					</select>
				</div>

				<div className="self-start">
					{/* <label
						htmlFor="first_name"
						className="mb-2 block text-sm font-medium  dark:text-gray-300"
					>
						First name
					</label> */}
					<input
						value={activeSpeaker}
						onChange={(e) => {
							setActiveSpeaker(e.target.value);
							setSearchParams({ speaker: e.target.value });
						}}
						required
						type="text"
						id="first_name"
						name="first_name"
						placeholder="Search for a speaker"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500  focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:placeholder-gray-400  dark:focus:border-blue-500 dark:focus:ring-blue-500 md:w-auto"
						defaultValue=""
					/>
				</div>
			</div>

			<div className="flex flex-col gap-8">
				{(activeSchedule === "Day 1" || activeSchedule === "Full Schedule") &&
				filtered18.length ? (
					<div>
						<div className="sticky top-0 mb-4 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Day 1
						</div>
						<div className="flex flex-col gap-4">{renderSlot(filtered18)}</div>
					</div>
				) : null}

				{(activeSchedule === "Day 2" || activeSchedule === "Full Schedule") &&
				filtered19.length ? (
					<div>
						<div className="sticky top-0 mb-4 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Day 2
						</div>
						<div className="flex flex-col gap-4">{renderSlot(filtered19)}</div>
					</div>
				) : null}
				{/* {activeSchedule === "Day 3" || activeSchedule === "Full Schedule" ? (
					<div>
						<div className="mb-4 text-2xl font-bold">Day 3</div>
						<div className="flex flex-col gap-4">
							{renderSlot(dec20ScheduleRevamped)}
						</div>
					</div>
				) : null} */}
			</div>

			{/* <div className="flex flex-col gap-4">
				{selectedStage.schedule.map((h) => (
					<ScheduleBox data={h} key={h.title} />
				))}
			</div> */}
		</div>
	);
}
