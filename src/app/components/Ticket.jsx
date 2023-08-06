import React from "react";
import ticketModule from "./ticket.module.css";
import CustomImage from "./CustomImage";

export default function Ticket({ ticket }) {
	return (
		<div
			className={`${
				ticketModule["ticket"]
			} bg-blackk relative mx-auto w-80 overflow-hidden rounded-2xl ${
				ticket?.ticketTheme === "light" ? "text-gray-900" : "text-gray-100"
			}`}
			style={{
				backgroundImage: `url(${ticket?.ticketBackgroundImgUrl})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",

				// width: "320px",
				minHeight: "640px",
			}}
		>
			<div className={`${ticketModule["holes-top"]}`} />

			<div className="flex min-h-[inherit] flex-col justify-between gap-4 py-14">
				<div className="flex flex-col items-center justify-center gap-2">
					<CustomImage
						src="https://avatars.githubusercontent.com/hichemfantar"
						alt=""
						className="h-20 w-20 rounded-full border border-gray-400 object-cover p-[0.12rem]"
					/>
					<div className="text-3xl font-bold">Hichem Fantar</div>
					<div className="font-['space_mono']">/hichemfantar</div>
				</div>

				{/* <div className="title">
				<p className="cinema">ODEON CINEMA PRESENTS</p>
				<p className="movie-title">ONLY GOD FORGIVES</p>
			</div> */}

				{/* <div className="poster">
				<CustomImage
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg"
					alt="Movie: Only God Forgives"
				/>
			</div> */}

				<div className="flex-1"></div>

				<div className="text-center">
					<div>10:30am PT, Dec 25, 2023.</div>
					<div>Hosted by Prism</div>
				</div>
				<div className="flex flex-col gap-8">
					{/* <div className="info">
						<table className="border-spacing-5">
							<thead>
								<tr>
									<th>PRICE</th>
									<th>DATE</th>
									<th>TIME</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>$12.00</td>
									<td>1/13/17</td>
									<td>19:30</td>
								</tr>
							</tbody>
						</table>
					</div> */}

					{/* <div className="holes-lower" /> */}
					<hr
						className={`border-dashed ${
							ticket?.ticketTheme === "light"
								? "border-gray-500"
								: "border-gray-600"
						}`}
					/>

					<div className="px-8 text-center font-['space_mono'] text-6xl">
						#031548
					</div>
				</div>
			</div>

			<div className={`${ticketModule["holes-bottom"]}`} />

			{/* <div className="serial">
				<table className="barcode">
					<tbody>
						<tr>
							{[
								"1",
								"1",
								"0",
								"1",
								"0",
								"0",
								"1",
								"0",
								"0",
								"0",
								"0",
								"1",
								"0",
								"0",
								"1",
								"1",
								"1",
								"0",
								"1",
								"1",
								"0",
								"0",
								"1",
								"0",
								"1",
								"1",
								"1",
								"0",
								"1",
								"1",
								"1",
								"1",
								"0",
								"1",
								"1",
								"0",
								"1",
								"0",
								"0",
								"0",
								"1",
								"1",
								"1",
								"0",
								"1",
								"0",
								"1",
								"1",
								"1",
								"0",
								"0",
								"1",
								"1",
								"0",
								"0",
								"1",
								"1",
								"0",
								"1",
								"1",
								"1",
								"0",
								"0",
								"1",
								"0",
								"0",
								"1",
								"0",
								"1",
								"1",
								"1",
								"1",
								"0",
								"1",
								"1",
								"1",
								"0",
								"1",
								"1",
								"1",
								"0",
								"0",
								"1",
								"0",
								"1",
								"1",
								"0",
								"0",
								"1",
								"0",
								"0",
								"1",
								"0",
								"0",
								"0",
								"0",
								"1",
								"1",
								"0",
								"1",
								"1",
								"0",
								"0",
								"0",
								"1",
								"1",
								"1",
								"0",
								"1",
								"0",
								"1",
								"1",
								"0",
								"0",
								"0",
								"1",
								"0",
								"0",
								"1",
								"1",
								"1",
								"0",
								"1",
								"1",
								"1",
								"1",
								"0",
								"1",
								"1",
								"0",
								"1",
								"0",
								"0",
								"1",
								"0",
								"1",
								"1",
								"0",
								"1",
								"0",
								"1",
								"1",
								"1",
								"0",
								"0",
								"0",
								"1",
								"0",
								"1",
								"1",
								"0",
								"1",
							].map((e, idx) => (
								<td bgcolor={e == 0 ? "black" : "white"}></td>
							))}
						</tr>
					</tbody>
				</table>
				<table className="numbers">
					<tbody>
						<tr>
							<td>9</td>
							<td>1</td>
							<td>7</td>
							<td>3</td>
							<td>7</td>
							<td>5</td>
							<td>4</td>
							<td>4</td>
							<td>4</td>
							<td>5</td>
							<td>4</td>
							<td>1</td>
							<td>4</td>
							<td>7</td>
							<td>8</td>
							<td>7</td>
							<td>3</td>
							<td>4</td>
							<td>1</td>
							<td>4</td>
							<td>5</td>
							<td>2</td>
						</tr>
					</tbody>
				</table>
			</div> */}
		</div>
	);
}
