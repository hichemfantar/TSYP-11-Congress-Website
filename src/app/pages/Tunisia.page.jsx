import React from "react";
import Logo from "../../assets/main logo black (Custom).png";
import LightLogo from "../../assets/main logo_2 (Custom).png";
import SBGroupPic from "../../assets/sb-group-pic.jpg";

export default function TunisiaPage() {
	return (
		<div className="h-full">
			<section className="grid items-center justify-center gap-12 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Tunisia - تونس
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						There’s so much to see and do in each region of Tunisia: a wide
						variety of landscapes, a coastline spanning 1,250km, studded with
						islands and archipelagos, a fantastic array of traditions and
						customs and a rich historical heritage. We are delighted to
						introduce you to these regions by breaking them down into this
						video.
					</h1>
				</div>
				<div className="col-span-6 mx-auto w-full">
					<iframe
						// width="560"
						// width="100%"
						// height="315"
						// height="500"
						// width="100%"
						className="mx-auto h-56 w-full rounded-2xl sm:h-96"
						// className="mx-auto h-56 w-full sm:h-60"
						src="https://www.youtube.com/embed/cR8mH08xNVw"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
					{/* <img
						src={LightLogo}
						className="mx-auto h-56 object-contain sm:h-60"
						alt="TSYP 11"
					/> */}
				</div>
			</section>

			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6 mx-auto md:order-last">
					<img
						src={"https://tsyp.ieee.tn/static/media/TT.2542e6b4.png"}
						className="mx-auto h-52 object-contain sm:h-96"
						alt="TSYP 11"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						About IEEE Tunisia Section.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						The IEEE Tunisian Section aims to disseminate IEEE activities to all
						corners of the country through educational and technical activities,
						networking of people, and developing technology and its applications
						for humanitarian challenges. The section supports chapters, special
						interest groups, student activities, and student awards. IEEE is
						anchored in the Tunisian engineering landscape with more than 33
						Student Branches' spread over the different engineering schools,
						faculties and universities
					</h1>
				</div>
			</section>

			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6 mx-auto">
					<img
						src={SBGroupPic}
						className="mx-auto h-56 rounded-2xl object-cover sm:h-96"
						alt="TSYP 11"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Hosted By IEEE ESSTHS Student Branch.
					</h1>
					<h1 className="mb-4 text-lg font-medium text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						IEEE ESSTHS Student Branch, founded in 2020, is home to more than
						280 members, making it the largest Student Branch in Sousse, and 7th
						in Tunisia Section. It encompasses 5 Technical Chapters: CIS, CS,
						IAS, PES, RAS, and 2 Affinity Groups: SIGHT & WIE. We have had the
						honor of receiving more than 12 worldwide IEEE Awards across all
						fields through the dedication and commitment of each of our members.
					</h1>
				</div>
			</section>

			<section className="py-8 md:py-28">
				<div className="mx-auto">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Find us here.
					</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12851.062625886407!2d10.5328555!3d36.3664548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029e020677bc0d%3A0x82fe8c3faf57e873!2sDiar%20Lemdina!5e0!3m2!1sen!2stn!4v1682280141809!5m2!1sen!2stn"
						className="w-full rounded-2xl"
						height="500"
						style={{
							border: 0,
							// width: "100%",
						}}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</section>

			<div className="mb-12 text-4xl font-bold">Schedule Overview</div>
			<div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
				<section>
					<h3 className="text-2xl font-semibold tracking-tight ">
						<time dateTime="2022-04-04">December 18</time>
					</h3>
					<p className="mt-1.5 text-base tracking-tight ">
						The first day of the conference is focused on ecommerce.
					</p>
					<ol
						role="list"
						className="mt-10 space-y-8 rounded-2xl rounded-xl border-2 bg-white/60 p-2 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500"
					>
						<li aria-label="Steven McHail talking about one-time payments at 9:00AM - 10:00AM PST">
							<h4 className="text-lg font-semibold tracking-tight ">
								Steven McHail
							</h4>
							<p className="mt-1 tracking-tight ">One-time payments</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-04T9:00AM-08:00">9:00AM</time> {/* */}-
								{/* */} <time dateTime="2022-04-04T10:00AM-08:00">10:00AM</time>{" "}
								{/* */}PST
							</p>
						</li>
						<li aria-label="Jaquelin Isch talking about The finer print at 10:00AM - 11:00AM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Jaquelin Isch
							</h4>
							<p className="mt-1 tracking-tight ">The finer print</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-04T10:00AM-08:00">10:00AM</time> {/* */}
								-{/* */}{" "}
								<time dateTime="2022-04-04T11:00AM-08:00">11:00AM</time> {/* */}
								PST
							</p>
						</li>
						<li aria-label="Dianne Guilianelli talking about Post-purchase at 11:00AM - 12:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Dianne Guilianelli
							</h4>
							<p className="mt-1 tracking-tight ">Post-purchase</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-04T11:00AM-08:00">11:00AM</time> {/* */}
								-{/* */}{" "}
								<time dateTime="2022-04-04T12:00PM-08:00">12:00PM</time> {/* */}
								PST
							</p>
						</li>
						<li aria-label="Lunch talking about null at 12:00PM - 1:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">Lunch</h4>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-04T12:00PM-08:00">12:00PM</time> {/* */}
								-{/* */} <time dateTime="2022-04-04T1:00PM-08:00">1:00PM</time>{" "}
								{/* */}
								PST
							</p>
						</li>
						<li aria-label="Ronni Cantadore talking about Buy at 1:00PM - 2:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Ronni Cantadore
							</h4>
							<p className="mt-1 tracking-tight ">Buy</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-04T1:00PM-08:00">1:00PM</time> {/* */}-
								{/* */} <time dateTime="2022-04-04T2:00PM-08:00">2:00PM</time>{" "}
								{/* */}PST
							</p>
						</li>
						<li aria-label="Erhart Cockrin talking about In-person cancellation at 2:00PM - 3:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Erhart Cockrin
							</h4>
							<p className="mt-1 tracking-tight ">In-person cancellation</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-04T2:00PM-08:00">2:00PM</time> {/* */}-
								{/* */} <time dateTime="2022-04-04T3:00PM-08:00">3:00PM</time>{" "}
								{/* */}PST
							</p>
						</li>
						<li aria-label="Parker Johnson talking about The pay/cancel switcheroo at 3:00PM - 4:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Parker Johnson
							</h4>
							<p className="mt-1 tracking-tight ">The pay/cancel switcheroo</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-04T3:00PM-08:00">3:00PM</time> {/* */}-
								{/* */} <time dateTime="2022-04-04T4:00PM-08:00">4:00PM</time>{" "}
								{/* */}PST
							</p>
						</li>
					</ol>
				</section>
				<section>
					<h3 className="text-2xl font-semibold tracking-tight ">
						<time dateTime="2022-04-05">December 19</time>
					</h3>
					<p className="mt-1.5 text-base tracking-tight ">
						Next we spend the day talking about people with technology.
					</p>
					<ol
						role="list"
						className="mt-10 space-y-8 rounded-2xl rounded-xl border-2 bg-white/60 p-2 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500"
					>
						<li aria-label="Damaris Kimura talking about The invisible card reader at 9:00AM - 10:00AM PST">
							<h4 className="text-lg font-semibold tracking-tight ">
								Damaris Kimura
							</h4>
							<p className="mt-1 tracking-tight ">The invisible card reader</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-05T9:00AM-08:00">9:00AM</time> {/* */}-
								{/* */} <time dateTime="2022-04-05T10:00AM-08:00">10:00AM</time>{" "}
								{/* */}PST
							</p>
						</li>
						<li aria-label="Ibrahim Frasch talking about Protecting fingerprints at 10:00AM - 11:00AM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Ibrahim Frasch
							</h4>
							<p className="mt-1 tracking-tight ">Protecting fingerprints</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-05T10:00AM-08:00">10:00AM</time> {/* */}
								-{/* */}{" "}
								<time dateTime="2022-04-05T11:00AM-08:00">11:00AM</time> {/* */}
								PST
							</p>
						</li>
						<li aria-label="Cathlene Burrage talking about Voting machines at 11:00AM - 12:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Cathlene Burrage
							</h4>
							<p className="mt-1 tracking-tight ">Voting machines</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-05T11:00AM-08:00">11:00AM</time> {/* */}
								-{/* */}{" "}
								<time dateTime="2022-04-05T12:00PM-08:00">12:00PM</time> {/* */}
								PST
							</p>
						</li>
						<li aria-label="Lunch talking about null at 12:00PM - 1:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">Lunch</h4>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-05T12:00PM-08:00">12:00PM</time> {/* */}
								-{/* */} <time dateTime="2022-04-05T1:00PM-08:00">1:00PM</time>{" "}
								{/* */}
								PST
							</p>
						</li>
						<li aria-label="Rinaldo Beynon talking about Whitehat SEO that works at 1:00PM - 2:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Rinaldo Beynon
							</h4>
							<p className="mt-1 tracking-tight ">Whitehat SEO that works</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-05T1:00PM-08:00">1:00PM</time> {/* */}-
								{/* */} <time dateTime="2022-04-05T2:00PM-08:00">2:00PM</time>{" "}
								{/* */}PST
							</p>
						</li>
						<li aria-label="Waylon Hyden talking about Impressing your audience at 2:00PM - 3:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Waylon Hyden
							</h4>
							<p className="mt-1 tracking-tight ">Impressing your audience</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-05T2:00PM-08:00">2:00PM</time> {/* */}-
								{/* */} <time dateTime="2022-04-05T3:00PM-08:00">3:00PM</time>{" "}
								{/* */}PST
							</p>
						</li>
						<li aria-label="Giordano Sagucio talking about Fishing at 3:00PM - 4:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Giordano Sagucio
							</h4>
							<p className="mt-1 tracking-tight ">Fishing</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-05T3:00PM-08:00">3:00PM</time> {/* */}-
								{/* */} <time dateTime="2022-04-05T4:00PM-08:00">4:00PM</time>{" "}
								{/* */}PST
							</p>
						</li>
					</ol>
				</section>
				<section>
					<h3 className="text-2xl font-semibold tracking-tight ">
						<time dateTime="2022-04-06">December 20</time>
					</h3>
					<p className="mt-1.5 text-base tracking-tight ">
						We close out the event previewing techniques in development.
					</p>
					<ol
						role="list"
						className="mt-10 space-y-8 rounded-2xl rounded-xl border-2 bg-white/60 p-2 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500"
					>
						<li aria-label="Andrew Greene talking about Neuralink patterns at 9:00AM - 10:00AM PST">
							<h4 className="text-lg font-semibold tracking-tight ">
								Andrew Greene
							</h4>
							<p className="mt-1 tracking-tight ">Neuralink patterns</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-06T9:00AM-08:00">9:00AM</time> {/* */}-
								{/* */} <time dateTime="2022-04-06T10:00AM-08:00">10:00AM</time>{" "}
								{/* */}PST
							</p>
						</li>
						<li aria-label="Heather Terry talking about DALL-E for passports at 10:00AM - 11:00AM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Heather Terry
							</h4>
							<p className="mt-1 tracking-tight ">DALL-E for passports</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-06T10:00AM-08:00">10:00AM</time> {/* */}
								-{/* */}{" "}
								<time dateTime="2022-04-06T11:00AM-08:00">11:00AM</time> {/* */}
								PST
							</p>
						</li>
						<li aria-label="Piers Wilkins talking about Quantum password cracking at 11:00AM - 12:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Piers Wilkins
							</h4>
							<p className="mt-1 tracking-tight ">Quantum password cracking</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-06T11:00AM-08:00">11:00AM</time> {/* */}
								-{/* */}{" "}
								<time dateTime="2022-04-06T12:00PM-08:00">12:00PM</time> {/* */}
								PST
							</p>
						</li>
						<li aria-label="Lunch talking about null at 12:00PM - 1:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">Lunch</h4>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-06T12:00PM-08:00">12:00PM</time> {/* */}
								-{/* */} <time dateTime="2022-04-06T1:00PM-08:00">1:00PM</time>{" "}
								{/* */}
								PST
							</p>
						</li>
						<li aria-label="Gordon Sanderson talking about Singularity is coming at 1:00PM - 2:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Gordon Sanderson
							</h4>
							<p className="mt-1 tracking-tight ">Singularity is coming</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-06T1:00PM-08:00">1:00PM</time> {/* */}-
								{/* */} <time dateTime="2022-04-06T2:00PM-08:00">2:00PM</time>{" "}
								{/* */}PST
							</p>
						</li>
						<li aria-label="Kimberly Parsons talking about patterns for the metaverse at 2:00PM - 3:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Kimberly Parsons
							</h4>
							<p className="mt-1 tracking-tight ">patterns for the metaverse</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-06T2:00PM-08:00">2:00PM</time> {/* */}-
								{/* */} <time dateTime="2022-04-06T3:00PM-08:00">3:00PM</time>{" "}
								{/* */}PST
							</p>
						</li>
						<li aria-label="Richard Astley talking about Knowing the game and playing it at 3:00PM - 4:00PM PST">
							<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
							<h4 className="text-lg font-semibold tracking-tight ">
								Richard Astley
							</h4>
							<p className="mt-1 tracking-tight ">
								Knowing the game and playing it
							</p>
							<p className="mt-1 font-mono text-sm text-slate-500">
								<time dateTime="2022-04-06T3:00PM-08:00">3:00PM</time> {/* */}-
								{/* */} <time dateTime="2022-04-06T4:00PM-08:00">4:00PM</time>{" "}
								{/* */}PST
							</p>
						</li>
					</ol>
				</section>
			</div>
		</div>
	);
}
