import React, { useState } from "react";
import { stagesData } from "./Phase";
import ScheduleBox from "./ScheduleBox";

export default function Schedule() {
	const [activeStage, setActiveStage] = useState("Stage J");

	const selectedStage = stagesData.find((s) => s.name === activeStage);

	return (
		<div>
			<select
				onChange={(e) => setActiveStage(e.target.value)}
				name="schedule"
				id="schedule"
				className="mb-4
					block
					w-full
					rounded-lg
					border border-gray-300 bg-gray-50
					shadow-sm
					focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
					dark:border-gray-600
					dark:bg-black
				"
				defaultValue={activeStage}
			>
				{stagesData.map((s) => (
					<option
						value={s.name}
						// selected={activeStage === s.name}
						// disabled={activeStage === s.name}
						key={s.name}
					>
						{s.name}
					</option>
				))}
			</select>

			<div className="flex flex-col gap-4">
				{selectedStage.schedule.map((h) => (
					<ScheduleBox data={h} key={h.title} />
				))}
			</div>
		</div>
	);
}
