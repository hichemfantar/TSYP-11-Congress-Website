import React from "react";
import ticketModule from "./ticket.module.css";
import CustomImage from "./CustomImage";

export default function TicketDesktop({ ticket }) {
	return (
		<div
			className={`${
				ticketModule["ticket"]
			} bg-blackk  relative mx-auto w-80 overflow-hidden rounded-2xl ${
				ticket?.ticketTheme === "light" ? "text-gray-900" : "text-gray-100"
			} shadow-lg`}
			style={{
				// background: `linear-gradient(45deg, rgba(0,0,0,.05), rgba(0,0,0,.05)), url(${ticket?.ticketLandscapeBackgroundImgUrl}) no-repeat center`,

				backgroundImage: `url(${ticket?.ticketLandscapeBackgroundImgUrl})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",

				width: "680px",
				minHeight: "340px",
			}}
		>
			<div className={`${ticketModule["holes-top"]}`} />

			<div className="flex min-h-[inherit] justify-between gap-4 py-10 px-10">
				<div className="flex flex-1 flex-col gap-2">
					<div className="flex items-center gap-2">
						<CustomImage
							src="https://avatars.githubusercontent.com/hichemfantar"
							alt=""
							className="h-20 w-20 rounded-full border border-gray-400 object-cover p-[0.12rem]"
						/>
						<div>
							<div className="text-3xl font-bold">Hichem Fantar</div>
							<div className="font-['space_mono']">/hichemfantar</div>
						</div>
					</div>

					<div className="flex-1"></div>

					<div className="">
						<div>10:30am PT, Dec 25, 2023.</div>
						<div>Hosted by Prism</div>
					</div>
				</div>

				<div className="flex gap-4">
					{/* <div className="holes-lower" /> */}

					<div
						className={`h-full border border-dashed ${
							ticket?.ticketTheme === "light"
								? "border-gray-500"
								: "border-gray-600"
						}`}
					></div>

					<div
						className="px-8 text-center font-['space_mono'] text-5xl"
						style={{
							writingMode: "vertical-rl",
							textOrientation: "mixed",
						}}
					>
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
