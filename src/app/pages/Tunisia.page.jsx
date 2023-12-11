import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import fiveTnd from "../../assets/currency/2017-2020-5.00-TND-Tunisian-Dinar-note-front.jpg";
import tenTnd from "../../assets/currency/currency-2656 (Custom).jpg";
import twentyTnd from "../../assets/currency/products-17494.jpg";
import fiftyTnd from "../../assets/currency/1_200505150513_1.jpg";
import CustomImage from "../components/CustomImage";
import { Fade } from "react-awesome-reveal";

export default function TunisiaPage() {
	const [usdToTnd, setUsdToTnd] = useState(100);

	return (
		<div className="h-full">
			<Fade triggerOnce>
				<section className="grid grid-cols-12 items-center justify-center md:pt-32">
					<div className="col-span-12 md:mx-auto">
						<h1 className="mb-4 text-start text-4xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
							Discover Tunisia
						</h1>
						{/* <h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
						18-20 December 2023, Diar Lemdina, Hammamet.
					</h1> */}
					</div>
				</section>
			</Fade>

			<Fade triggerOnce>
				<section className="grid items-center justify-center gap-12 py-8 md:grid-cols-12 md:py-28">
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Tunisia - تونس
						</h1>
						<p className="mb-4 text-lg font-medium  lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							There’s so much to see and do in each region of Tunisia: a wide
							variety of landscapes, a coastline spanning 1,250km, studded with
							islands and archipelagos, a fantastic array of traditions and
							customs and a rich historical heritage. We are delighted to
							introduce you to these regions by breaking them down into this
							video.
						</p>
					</div>
					<div className="col-span-6 mx-auto w-full">
						<iframe
							// width="560"
							// width="100%"
							// height="315"
							// height="500"
							// width="100%"
							className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
							// className="mx-auto h-56 w-full sm:h-60"
							src="https://www.youtube.com/embed/cR8mH08xNVw"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							loading="lazy"
						></iframe>
						{/* <CustomImage
						src={LightLogo}
						className="mx-auto h-56 object-contain sm:h-60"
						alt="TSYP 11"
					
					/> */}
					</div>
				</section>
			</Fade>

			<Fade triggerOnce>
				<section className="py-8 md:py-28">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<div className="grid gap-4">
							<div>
								<CustomImage
									className="h-full w-full rounded-lg object-cover"
									src="https://www.nationsonline.org/gallery/Tunisia/Super_moon_over_Medina_of_Tunis.jpg"
									alt=""
								/>
							</div>
							<div>
								<CustomImage
									className="h-full w-full rounded-lg object-cover"
									src="https://www.classicalmovements.com/wp-content/gallery/tunisia/1024px-Zied_Gharsa_et_la_Rachidia.jpg"
									alt=""
								/>
							</div>
							<div>
								<CustomImage
									className="h-full w-full rounded-lg object-cover"
									src="https://lp-cms-production.imgix.net/2019-06/c32f29efd9f1e16d0732dc4ce06918fd-sidi-bou-said.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="grid gap-4">
							<div>
								<CustomImage
									className="h-full w-full rounded-lg object-cover"
									src="https://images.pexels.com/photos/15252910/pexels-photo-15252910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt=""
								/>
							</div>
							<div>
								<CustomImage
									className="h-full w-full rounded-lg object-cover"
									src="https://www.tunisia-desert-challenge.com/storage/images/content/gr_tdc2021-jan-64.jpg?4"
									alt=""
								/>
							</div>
							<div>
								<CustomImage
									className="h-full w-full rounded-lg object-cover"
									// src="https://i.pinimg.com/originals/92/05/52/920552b3644bf71279a6701ec423c9aa.jpg"
									// src="https://i0.wp.com/www.maverickbird.com/wp-content/uploads/2022/01/53739914_2616188481731516_6800712058993115136_n.jpg?w=960"
									src="https://media.istockphoto.com/id/536054559/photo/tataouine-scenery-on-a-background-of-sand-dunes.jpg?s=612x612&w=0&k=20&c=5k65H-TwunRYqCui_p-VvRBDUlkXRvgj4onU7HxtKBQ="
									alt=""
								/>
							</div>
						</div>
						<div className="grid gap-4">
							<div>
								<CustomImage
									className="h-full w-full rounded-lg object-cover"
									src="https://images.thefishsite.com/fish/articles/middle-east/tunisia-editorial-use-only.jpg?scale.option=fill&scale.width=1200&scale.height=630&crop.width=1200&crop.height=630&crop.y=center&crop.x=center"
									alt=""
								/>
							</div>
							<div>
								<CustomImage
									className="h-full w-full rounded-lg object-cover"
									src="https://mohamedison.com/assets/images/blog/posts/639351c1e1b3a.png"
									alt=""
								/>
							</div>
							<div>
								<CustomImage
									className="h-full w-full rounded-lg object-cover"
									src="https://static.barcelo.com/content/dam/bpt/posts/2023/3/things-to-do-in-tunisia_must-see-tunisia.jpg.bhgimg.square1000.jpg/1680181230709.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
				</section>
			</Fade>

			<Fade triggerOnce>
				<section className="grid items-center justify-center gap-12 py-8 md:grid-cols-12 md:py-28">
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Currency
						</h1>
						<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
							The national currency is the Tunisian dinar which is very friendly
							to foreign currencies.
						</h1>
						<div className="grid items-end gap-4 md:grid-cols-12">
							<div className="md:col-span-5">
								<label
									for="usd"
									className="mb-2 block font-medium  dark:text-white"
								>
									United States Dollar (USD)
								</label>
								<input
									value={usdToTnd}
									min={0}
									type="number"
									id="usd"
									className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5  transition focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									required
									onChange={(e) => setUsdToTnd(e.target.value)}
								/>
							</div>
							<div className="text-center md:col-span-2">
								<FontAwesomeIcon
									icon={faArrowRightLong}
									className="h-9 w-9 rotate-90 md:rotate-0"
								/>
							</div>
							<div className="md:col-span-5">
								<label
									for="tnd"
									className="mb-2 block font-medium  dark:text-white"
								>
									Tunisian Dinar (TND)
								</label>
								<input
									value={Math.floor(usdToTnd * 3.09)}
									readOnly
									type="number"
									id="tnd"
									className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5  transition focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									required
								/>
							</div>
						</div>
					</div>
					<div className="col-span-6 mx-auto hidden w-full md:block">
						<div className="grid gap-4 md:grid-cols-12">
							{[fiveTnd, tenTnd, twentyTnd, fiftyTnd]?.map((e) => (
								<CustomImage
									className="h-40 w-full rounded-2xl object-cover shadow md:col-span-6"
									src={e}
									alt=""
								/>
							))}
						</div>
						{/* <iframe
						className="mx-auto h-56 w-full rounded-2xl sm:h-96 shadow-lg" 
						src="https://www.youtube.com/embed/cR8mH08xNVw"
						title="YouTube video player"
						frameborder="0"
			loading="lazy"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe> */}
						{/* <CustomImage
						src={LightLogo}
						className="mx-auto h-56 object-contain sm:h-60"
						alt="TSYP 11"
					
					/> */}
					</div>
				</section>
			</Fade>

			<Fade triggerOnce>
				<section className="py-8 md:py-28">
					<div className="mx-auto">
						<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							Find us here.
						</h1>
						<iframe
							title="gmap embed"
							loading="lazy"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6775315.518954521!2d9.560763999999999!3d33.98586695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2stn!4v1683130409503!5m2!1sen!2stn"
							className="w-full rounded-2xl shadow-lg"
							height="500"
							style={{
								border: 0,
								// width: "100%",
							}}
							allowFullScreen=""
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</section>
			</Fade>
		</div>
	);
}
