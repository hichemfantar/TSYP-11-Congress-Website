import { Tab } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

export default function StageTabs({ categories }) {
	return (
		<Tab.Group>
			<Tab.List className="flex space-x-1 rounded-full bg-gray-900 p-1 shadow-lg dark:bg-blue-900/20">
				{Object.keys(categories).map((category) => (
					<Tab
						key={category}
						className={({ selected }) =>
							twMerge(
								"w-full rounded-full py-2.5 text-sm font-medium leading-5  transition ",
								"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-900 focus:outline-none focus:ring-2",
								selected
									? "bg-gray-100 shadow dark:bg-gray-200 dark:text-gray-800"
									: "text-gray-50 hover:bg-white/[0.12] hover:text-white"
							)
						}
					>
						{category}
					</Tab>
				))}
			</Tab.List>

			<Tab.Panels className="mt-4">
				{Object.keys(categories).map((category, idx) => {
					return categories[category].component ? (
						<Tab.Panel
							key={idx}
							// unmount={false}
							{...categories[category].props}
						>
							{categories[category].component}
						</Tab.Panel>
					) : null;
				})}
			</Tab.Panels>
		</Tab.Group>
	);
}
