import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { areAllLocationsSame } from "../schedule/scheduleItems";
import "./TimelineSchedule.scss";

export default function TimelineSchedule() {
	const [selectedTab, setSelectedTab] = useState(0);

	const [dec18ScheduleRevamped, setDec18ScheduleRevamped] = useState([]);
	const [dec19ScheduleRevamped, setDec19ScheduleRevamped] = useState([]);
	const [dec20ScheduleRevamped, setDec20ScheduleRevamped] = useState([]);

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
			await fetch("/assets/dec20ScheduleRevamped.json")
				.then((response) => response.json())
				.then((response) => {
					setDec20ScheduleRevamped(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	const tabs = [
		dec18ScheduleRevamped,
		dec19ScheduleRevamped,
		dec20ScheduleRevamped,
	];

	const selectedSchedule = tabs?.[selectedTab];

	return (
		<div id="timeline-schedule-design">
			<div className="mb-6 flex w-full flex-wrap justify-around gap-6">
				<button
					onClick={() => setSelectedTab(0)}
					className={twMerge(
						"text-xl font-bold transition",
						selectedTab === 0 &&
							"scale-110 border-b-2 border-gray-600 font-extrabold"
					)}
				>
					December 18
				</button>
				<button
					onClick={() => setSelectedTab(1)}
					className={twMerge(
						"text-xl font-bold transition",
						selectedTab === 1 &&
							"scale-110 border-b-2 border-gray-600 font-extrabold"
					)}
				>
					December 19
				</button>
				<button
					onClick={() => setSelectedTab(2)}
					className={twMerge(
						"text-xl font-bold transition",
						selectedTab === 2 &&
							"scale-110 border-b-2 border-gray-600 font-extrabold"
					)}
				>
					December 20
				</button>
			</div>
			<div className="service-cloud">
				<div className="b-our-process">
					<div className="c-process-steps">
						<div className="step-in">
							<div className="row step-line">
								<div className="col-3 corner" />
								<div className="col-6 corner" />
							</div>
						</div>

						{/* <ul className="[counter-reset:section]"> */}

						{selectedSchedule?.map((day, idx) => {
							const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
							const allLocationsSame = areAllLocationsSame(day.activities);
							const currentLocation = day.activities[0]?.location;

							return (
								<>
									<div className="step">
										<div className="b-step-content">
											<div className="b-step-content__logo">
												<div className="circle bg-white dark:bg-black">
													<div className="font-mono text-lg font-semibold">
														{/* .replace(/-/g, "") */}
														{day.timeSlotStart}
														<br />
														{day.timeSlotEnd}
													</div>

													{/* <div className="text-4xl font-bold">{idx + 1}</div> */}
													{/* <FontAwesomeIcon
														icon={day?.icon}
														className="h-12 w-12"
													/> */}
												</div>
											</div>
											<div className="b-step-content__text">
												{day.activities?.map((activity) => {
													return (
														<div>
															<h4
																// className={
																// 	"b-step-content__title before:content-['gfer']"
																// }
																className={twMerge(
																	`b-step-content__title`,
																	`before:content-['${arr[idx]}']`
																	// `before:[content:'counters(section,'.')']`
																)}
															>
																{/* <FontAwesomeIcon
																icon={activity?.icon}
																className="h-6 w-6"
															/> */}
																{activity?.title}
																<br />
																{!allLocationsSame && (
																	<span className="text-lg font-medium tracking-wide">
																		{activity.location}
																	</span>
																)}
															</h4>
														</div>
													);
												})}

												{allLocationsSame && (
													<p className="b-step-content__description__location !min-h-0 text-lg font-medium tracking-wide">
														{currentLocation}
													</p>
												)}

												<div className="b-step-content__description__location">
													<p className="mt-1 font-mono text-sm text-slate-500">
														{day.timeSlot}
													</p>
													{/* <p style={{ textAlign: "left" }}>
											We craft a unique, interactive design for your application
											that delivers powerful customer experience and drives user
											engagement.{" "}
										</p> */}
												</div>
											</div>
										</div>
										{selectedSchedule?.length !== idx + 1 && (
											<div className="row step-line">
												<div className="col-3 corner" />
												<div className="col-6 corner-line" />
												<div className="col-3 corner" />
											</div>
										)}
									</div>

									{false && selectedSchedule?.length === idx + 1 && (
										<div className="step-out-left">
											<div className="row step-line">
												<div className="col-3 corner" />
												<div className="col-6 corner" />
												<div className="col-3" />
											</div>
										</div>
									)}
								</>
							);
						})}

						{false &&
							selectedSchedule?.map((s, idx) => {
								const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
								return (
									<>
										<div className="step">
											<div className="b-step-content">
												<div className="b-step-content__logo">
													<div className="circle bg-white dark:bg-black">
														<FontAwesomeIcon
															icon={s?.icon}
															className="h-12 w-12"
														/>
													</div>
												</div>
												<div className="b-step-content__text">
													<h4
														// className={
														// 	"b-step-content__title before:content-['gfer']"
														// }
														className={twMerge(
															`b-step-content__title`,
															`before:content-['${arr[idx]}']`
															// `before:[content:'counters(section,'.')']`
														)}
													>
														{s?.title}
													</h4>
													<div className="b-step-content__description">
														<p className="mt-1 font-mono text-sm text-slate-500">
															<time dateTime="2022-04-04T9:00AM-08:00">
																{s.startTime}
															</time>{" "}
															{/* */}-{/* */}{" "}
															<time dateTime="2022-04-04T10:00AM-08:00">
																{s.endTime}
															</time>{" "}
															{/* */}
															{s.timeZone}
														</p>
														{/* <p style={{ textAlign: "left" }}>
											We craft a unique, interactive design for your application
											that delivers powerful customer experience and drives user
											engagement.{" "}
										</p> */}
													</div>
												</div>
											</div>
											{selectedSchedule?.length !== idx + 1 && (
												<div className="row step-line">
													<div className="col-3 corner" />
													<div className="col-6 corner-line" />
													<div className="col-3 corner" />
												</div>
											)}
										</div>

										{false && selectedSchedule?.length === idx + 1 && (
											<div className="step-out-left">
												<div className="row step-line">
													<div className="col-3 corner" />
													<div className="col-6 corner" />
													<div className="col-3" />
												</div>
											</div>
										)}
									</>
								);
							})}
						{/* </ul> */}
					</div>
				</div>
			</div>
		</div>
	);
}
