import "./TimelineSchedule.scss";
import { dec18Schedule } from "../schedule/ScheduleList";

export default function TimelineShedule() {
	return (
		<div id="fzefzefze">
			<div className="service-cloud">
				<div className="b-our-process">
					<div className="c-process-steps">
						<div className="step-in">
							<div className="row step-line">
								<div className="col-3 corner" />
								<div className="col-6 corner" />
							</div>
						</div>

						{dec18Schedule?.map((s, idx) => {
							return (
								<>
									<div className="step">
										<div className="b-step-content">
											<div className="b-step-content__logo">
												<div className="circle">
													{/* <img
												src="/themes/satoripop-2019/images/services/smartphone-4.svg"
												alt="Design"
											/> */}
												</div>
											</div>
											<div className="b-step-content__text">
												<h4 className="b-step-content__title">{s?.title}</h4>
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
										{dec18Schedule?.length !== idx + 1 && (
											<div className="row step-line">
												<div className="col-3 corner" />
												<div className="col-6 corner-line" />
												<div className="col-3 corner" />
											</div>
										)}
									</div>
									{dec18Schedule?.length === idx + 1 && (
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
					</div>
				</div>
			</div>
		</div>
	);
}
