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
		<section className="py-8 lg:py-16">
			<div className="max-w-8xl mx-auto px-4 lg:px-4">
				<div className="xl:mx-64 2xl:mx-80">
					<h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100 lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
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
									className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									First name
								</label>
								<input
									required=""
									type="text"
									id="first_name"
									placeholder="John"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="last_name"
									className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Last name
								</label>
								<input
									required=""
									type="text"
									id="last_name"
									placeholder="Doe"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Email address
							</label>
							<input
								required=""
								type="email"
								id="email"
								placeholder="john.doe@company.com"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								defaultValue=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Subject
							</label>
							<input
								required=""
								type="text"
								id="subject"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="Subject name"
								defaultValue=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Message
							</label>
							<textarea
								required=""
								id="message"
								rows={4}
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
