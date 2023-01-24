export const FADE_IN_ANIMATION_SETTINGS = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 0.5 },
};
export const FADE_IN_ANIMATION_SETTINGS2 = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 0.8 },
};
export const FADE_IN_ANIMATION_SETTINGS3 = {
	initial: { opacity: 0.7 },
	animate: { opacity: 1 },
	transition: { duration: 0.4 },
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_UP_ANIMATION_VARIANTS = {
	hidden: { opacity: 0, y: 10 },
	show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
