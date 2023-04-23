import React from "react";

export default function YoutubeEmbed() {
	return (
		<iframe
			className="h-96 w-full rounded-2xl border-0 md:h-[40rem]"
			// width={560}
			// height={450}
			src="https://www.youtube.com/embed/Tuw8hxrFBH8"
			title="YouTube video player"
			frameBorder={0}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		/>
	);
}
