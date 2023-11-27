import React from "react";

export default function YoutubeEmbed() {
	return (
		<iframe
			className="aspect-video w-full rounded-2xl border-0 shadow-lg"
			src="https://www.youtube.com/embed/Tuw8hxrFBH8"
			title="YouTube video player"
			frameBorder={0}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
			loading="lazy"
		/>
	);
}
