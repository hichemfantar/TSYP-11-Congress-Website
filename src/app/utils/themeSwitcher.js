function toggleThemeClassname(bool) {
	["dark"].map((className) =>
		document.documentElement.classList.toggle(className, !bool ? true : false)
	);

	["light"].map((className) =>
		document.documentElement.classList.toggle(className, bool ? true : false)
	);
}

export default function toggleDarkTheme() {
	const isDark = document.documentElement.classList.contains("dark");

	localStorage.setItem("darkMode", !isDark);

	toggleThemeClassname(isDark);
}

export function setInitialTheme() {
	const l = localStorage.getItem("darkMode");

	if (!l) {
		toggleThemeClassname(true);

		localStorage.setItem("darkMode", false);

		return;
	}

	if (JSON.parse(l) === true) {
		toggleThemeClassname(false);

		return;
	}

	toggleThemeClassname(true);
}
