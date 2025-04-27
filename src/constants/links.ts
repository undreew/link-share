import {
	Github,
	Linkedin,
	Youtube,
	Instagram,
	Facebook,
	Twitter,
	Clapperboard, // tiktok
	Podcast, // discord
	Twitch,
	Pin, // pinterest
	Network, // reddit
	BookOpenText, // medium
} from "lucide-react";

// get from api later
export const LINKS_VALUES = {
	github: "github",
	linkedin: "linkedin",
	youtube: "youtube",
	instagram: "instagram",
	facebook: "facebook",
	twitter: "twitter",
	tiktok: "tiktok",
	discord: "discord",
	twitch: "twitch",
	pinterest: "pinterest",
	reddit: "reddit",
	medium: "medium",
} as const;

export const LINKS_LABEL = {
	[LINKS_VALUES.github]: "GitHub",
	[LINKS_VALUES.linkedin]: "LinkedIn",
	[LINKS_VALUES.youtube]: "YouTube",
	[LINKS_VALUES.instagram]: "Instagram",
	[LINKS_VALUES.facebook]: "Facebook",
	[LINKS_VALUES.twitter]: "Twitter",
	[LINKS_VALUES.tiktok]: "TikTok",
	[LINKS_VALUES.discord]: "Discord",
	[LINKS_VALUES.twitch]: "Twitch",
	[LINKS_VALUES.pinterest]: "Pinterest",
	[LINKS_VALUES.reddit]: "Reddit",
	[LINKS_VALUES.medium]: "Medium",
} as const;

export const LINKS = {
	[LINKS_VALUES.github]: {
		label: LINKS_LABEL.github,
		icon: Github,
	},
	[LINKS_VALUES.linkedin]: {
		label: LINKS_LABEL.linkedin,
		icon: Linkedin,
	},
	[LINKS_VALUES.youtube]: {
		label: LINKS_LABEL.youtube,
		icon: Youtube,
	},
	[LINKS_VALUES.instagram]: {
		label: LINKS_LABEL.instagram,
		icon: Instagram,
	},
	[LINKS_VALUES.facebook]: {
		label: LINKS_LABEL.facebook,
		icon: Facebook,
	},
	[LINKS_VALUES.twitter]: {
		label: LINKS_LABEL.twitter,
		icon: Twitter,
	},
	[LINKS_VALUES.tiktok]: {
		label: LINKS_LABEL.tiktok,
		icon: Clapperboard,
	},
	[LINKS_VALUES.discord]: {
		label: LINKS_LABEL.discord,
		icon: Podcast,
	},
	[LINKS_VALUES.twitch]: {
		label: LINKS_LABEL.twitch,
		icon: Twitch,
	},
	[LINKS_VALUES.pinterest]: {
		label: LINKS_LABEL.pinterest,
		icon: Pin,
	},
	[LINKS_VALUES.reddit]: {
		label: LINKS_LABEL.reddit,
		icon: Network,
	},
	[LINKS_VALUES.medium]: {
		label: LINKS_LABEL.medium,
		icon: BookOpenText,
	},
} as const;
