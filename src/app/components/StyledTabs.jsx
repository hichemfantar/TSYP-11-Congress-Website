import { useMediaQuery } from "usehooks-ts";
import Highlights from "./Highlights";
import Schedule from "./Schedule";
import StageTabs from "./StageTabs";
import YoutubeEmbed from "./YoutubeEmbed";

const tabs = {
	Highlights: {
		component: <Highlights />,
	},
	Schedule: {
		component: <Schedule />,
	},
};
const mobileTabs = {
	"Stage J": {
		component: <YoutubeEmbed />,
		props: { unmount: false },
	},
	Highlights: {
		component: <Highlights />,
	},
	Schedule: {
		component: <Schedule />,
	},
};

export default function StyledTabs() {
	const matches = useMediaQuery("(min-width: 768px)");

	return (
		<div className="w-full max-w-md">
			<StageTabs categories={matches ? tabs : mobileTabs} />
		</div>
	);
}
