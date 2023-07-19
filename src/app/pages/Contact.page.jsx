import React from "react";
import Logo from "../../assets/main logo black (Custom).png";
import LightLogo from "../../assets/main logo_2 (Custom).png";
import SBGroupPic from "../../assets/sb-group-pic.jpg";
import { SparrowSurvey } from "./Home.page";

export default function ContactPage() {
	return (
		<div className="h-full">
			<ContactForm />

			{false && <SparrowSurvey />}
		</div>
	);
}

export function ContactForm({ title = "Contact us" }) {
	return (
		<section className="py-8 lg:py-8">
			<div className="max-w-8xl mx-auto">
				<div className="xl:mx-64 2xl:mx-80">
					<h1 className="mb-4 text-4xl font-bold lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						{title}
					</h1>
					<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
						Let us know what you need and we will get back to you in no time.
					</p>
				</div>
			</div>
			<div className="grid gap-y-6 md:grid-cols-12 md:gap-12">
				<div className="flex flex-col justify-center md:col-span-6">
					<h1 className="mb-4 text-3xl font-bold   md:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
						Reach out via Email
					</h1>
					<h1 className="mb-6 text-3xl font-semibold md:mb-12   md:text-center lg:text-4xl lg:leading-none">
						tsyp@ieee.org
					</h1>
					<h1 className="mb-4 text-3xl font-bold   md:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
						Or call us
					</h1>
					<h1 className="mb-4 text-3xl font-semibold   md:text-center lg:text-4xl lg:leading-none">
						+216 52 227 099
					</h1>
				</div>

				<div className="md:col-span-6">
					<iframe
						title="tsyp location"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12935.840417133557!2d10.5974361!3d35.8499818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a6826eca57b%3A0xf698bd059d8e2d13!2s%C3%89cole%20sup%C3%A9rieure%20des%20sciences%20et%20de%20la%20technologie%20de%20Hammam%20Sousse!5e0!3m2!1sen!2stn!4v1688595702507!5m2!1sen!2stn"
						className="aspect-video w-full rounded-2xl"
						// height="400"
						style={{
							border: 0,
							// width: "100%",
						}}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
			{false && (
				<div className="max-w-8xl mx-auto px-4 lg:px-4">
					<div className="mx-auto max-w-3xl rounded-2xl border-2 border-gray-50 p-4 shadow-md dark:border-gray-800 lg:p-8">
						<form>
							<div className="grid md:grid-cols-2 md:gap-8">
								<div className="mb-6">
									<label
										htmlFor="first_name"
										className="mb-2 block text-sm font-medium  dark:text-gray-300"
									>
										First name
									</label>
									<input
										required=""
										type="text"
										id="first_name"
										placeholder="John"
										className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
										defaultValue=""
									/>
								</div>
								<div className="mb-6">
									<label
										htmlFor="last_name"
										className="mb-2 block text-sm font-medium  dark:text-gray-300"
									>
										Last name
									</label>
									<input
										required=""
										type="text"
										id="last_name"
										placeholder="Doe"
										className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
										defaultValue=""
									/>
								</div>
							</div>
							<div className="mb-6">
								<label
									htmlFor="email"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									Email address
								</label>
								<input
									required=""
									type="email"
									id="email"
									placeholder="john.doe@company.com"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="subject"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									Subject
								</label>
								<input
									required=""
									type="text"
									id="subject"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									placeholder="Subject name"
									defaultValue=""
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="message"
									className="mb-2 block text-sm font-medium  dark:text-gray-400"
								>
									Message
								</label>
								<textarea
									required=""
									id="message"
									rows={4}
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									placeholder="Your message..."
									defaultValue={""}
								/>
							</div>

							{/* <p className="mb-6 text-sm text-gray-500">
				By submitting this form you agree to our{" "}
				<a
					className="text-blue-600 hover:underline dark:text-blue-500"
					href="/terms-and-conditions/"
				>
					Terms &amp; conditions
				</a>{" "}
				and our{" "}
				<a
					className="text-blue-600 hover:underline dark:text-blue-500"
					href="/privacy-policy/"
				>
					Privacy Policy
				</a>{" "}
				which explains how we may collect, use and disclose your
				personal information including to third parties.
			</p> */}
							<button
								className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white sm:w-auto"
								type="submit"
							>
								<span className="flex items-center justify-center">
									Send message
								</span>
							</button>
						</form>
					</div>
				</div>
			)}
		</section>
	);

	return (
		<section className="py-8 lg:py-16">
			<div className="max-w-8xl mx-auto px-4 lg:px-4">
				<div className="xl:mx-64 2xl:mx-80">
					<h1 className="mb-4 text-4xl font-bold   lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						{title}
					</h1>
					<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
						Let us know what you need and we will get back to you in no time.
					</p>
				</div>
			</div>
			<div className="max-w-8xl mx-auto px-4 lg:px-4">
				<div className="mx-auto max-w-3xl rounded-2xl border-2 border-gray-50 p-4 shadow-md dark:border-gray-800 lg:p-8">
					<form>
						<div className="grid md:grid-cols-2 md:gap-8">
							<div className="mb-6">
								<label
									htmlFor="first_name"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									First name
								</label>
								<input
									required=""
									type="text"
									id="first_name"
									placeholder="John"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="last_name"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									Last name
								</label>
								<input
									required=""
									type="text"
									id="last_name"
									placeholder="Doe"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="mb-2 block text-sm font-medium  dark:text-gray-300"
							>
								Email address
							</label>
							<input
								required=""
								type="email"
								id="email"
								placeholder="john.doe@company.com"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								defaultValue=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								className="mb-2 block text-sm font-medium  dark:text-gray-300"
							>
								Subject
							</label>
							<input
								required=""
								type="text"
								id="subject"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="Subject name"
								defaultValue=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="mb-2 block text-sm font-medium  dark:text-gray-400"
							>
								Message
							</label>
							<textarea
								required=""
								id="message"
								rows={4}
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="Your message..."
								defaultValue={""}
							/>
						</div>

						{/* <p className="mb-6 text-sm text-gray-500">
						By submitting this form you agree to our{" "}
						<a
							className="text-blue-600 hover:underline dark:text-blue-500"
							href="/terms-and-conditions/"
						>
							Terms &amp; conditions
						</a>{" "}
						and our{" "}
						<a
							className="text-blue-600 hover:underline dark:text-blue-500"
							href="/privacy-policy/"
						>
							Privacy Policy
						</a>{" "}
						which explains how we may collect, use and disclose your
						personal information including to third parties.
					</p> */}
						<button
							className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white sm:w-auto"
							type="submit"
						>
							<span className="flex items-center justify-center">
								Send message
							</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
