import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
	dec18Schedule,
	dec19Schedule,
	dec20Schedule,
} from "../schedule/scheduleItems";
import "./TimelineSchedule.scss";

const tabs = [dec18Schedule, dec19Schedule, dec20Schedule];

export default function TimelineShedule() {
	const [selectedTab, setSelectedTab] = useState(0);
	const selectedSchedule = tabs?.[selectedTab];
	return (
		<div id="fzefzefze">
			<div className="mb-6 flex w-full flex-wrap justify-around gap-6">
				<button
					onClick={() => setSelectedTab(0)}
					className={twMerge(
						"text-xl font-bold transition",
						selectedTab === 0 &&
							"scale-125 border-b-2 border-gray-600 font-extrabold"
					)}
				>
					December 18
				</button>
				<button
					onClick={() => setSelectedTab(1)}
					className={twMerge(
						"text-xl font-bold transition",
						selectedTab === 1 &&
							"scale-125 border-b-2 border-gray-600 font-extrabold"
					)}
				>
					December 19
				</button>
				<button
					onClick={() => setSelectedTab(2)}
					className={twMerge(
						"text-xl font-bold transition",
						selectedTab === 2 &&
							"scale-125 border-b-2 border-gray-600 font-extrabold"
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
						{selectedSchedule?.map((s, idx) => {
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
													{/* <CustomImage
														src="/themes/satoripop-2019/images/services/smartphone-4.svg"
														alt="Design"
					loading=""
													/> */}
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
