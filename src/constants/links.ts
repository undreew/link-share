import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaDiscord,
  FaTwitch,
  FaPinterest,
  FaReddit,
  FaMedium,
} from "react-icons/fa";

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
    icon: FaGithub,
  },
  [LINKS_VALUES.linkedin]: {
    label: LINKS_LABEL.linkedin,
    icon: FaLinkedin,
  },
  [LINKS_VALUES.youtube]: {
    label: LINKS_LABEL.youtube,
    icon: FaYoutube,
  },
  [LINKS_VALUES.instagram]: {
    label: LINKS_LABEL.instagram,
    icon: FaInstagram,
  },
  [LINKS_VALUES.facebook]: {
    label: LINKS_LABEL.facebook,
    icon: FaFacebookF,
  },
  [LINKS_VALUES.twitter]: {
    label: LINKS_LABEL.twitter,
    icon: FaTwitter,
  },
  [LINKS_VALUES.tiktok]: {
    label: LINKS_LABEL.tiktok,
    icon: FaTiktok,
  },
  [LINKS_VALUES.discord]: {
    label: LINKS_LABEL.discord,
    icon: FaDiscord,
  },
  [LINKS_VALUES.twitch]: {
    label: LINKS_LABEL.twitch,
    icon: FaTwitch,
  },
  [LINKS_VALUES.pinterest]: {
    label: LINKS_LABEL.pinterest,
    icon: FaPinterest,
  },
  [LINKS_VALUES.reddit]: {
    label: LINKS_LABEL.reddit,
    icon: FaReddit,
  },
  [LINKS_VALUES.medium]: {
    label: LINKS_LABEL.medium,
    icon: FaMedium,
  },
} as const;
