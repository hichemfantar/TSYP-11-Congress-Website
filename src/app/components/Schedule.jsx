import React, { useState } from "react";
import { stagesData } from "./Phase";
import ScheduleBox from "./ScheduleBox";

export default function Schedule() {
	const [activeStage, setActiveStage] = useState(null);

	const selectedStage = activeStage
		? stagesData.find((s) => s.name === activeStage)
		: null;

	return (
		<div className="flex flex-col gap-8">
			<select
				onChange={(e) => setActiveStage(e.target.value)}
				name="schedule"
				id="schedule"
				className="mb-4 block rounded-lg border border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-black md:self-end"
				defaultValue={activeStage}
			>
				<option value={null} key={null}>
					Full Schedule
				</option>
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

			{true && (
				<div className="flex flex-col gap-8">
					{selectedStage ? (
						<div key={selectedStage.slug}>
							<div className="mb-4 text-2xl font-bold">
								{selectedStage.name}
							</div>
							<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
								{selectedStage.schedule.map((e) => (
									<div
										className="col-span-12 md:col-span-4 lg:col-span-3"
										key={e.title}
									>
										<ScheduleBox data={e} key={e.title} classNames={"h-full"} />
									</div>
								))}
							</div>
						</div>
					) : (
						stagesData.map((s) => (
							<div>
								<div className="mb-4 text-2xl font-bold">{s.name}</div>
								<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
									{s.schedule.map((e) => (
										<div
											className="col-span-12 md:col-span-4 lg:col-span-3"
											key={e.title}
										>
											<ScheduleBox
												data={e}
												key={e.title}
												classNames={"h-full"}
											/>
										</div>
									))}
								</div>
							</div>
						))
					)}
				</div>
			)}

			{/* <div className="flex flex-col gap-4">
				{selectedStage.schedule.map((h) => (
					<ScheduleBox data={h} key={h.title} />
				))}
			</div> */}
		</div>
	);
}
