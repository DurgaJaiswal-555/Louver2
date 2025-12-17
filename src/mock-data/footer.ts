import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import type { FACILITIES_TYPES, SOCIAL_LINKS_TYPES } from "@components/Footer";

export const SOCIAL_LINKS: SOCIAL_LINKS_TYPES[] = [
    {
        label: "Instagram",
        href: "#",
        icon: Instagram,
    },
    {
        label: "Facebook",
        href: "#",
        icon: Facebook,
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: Linkedin,
    },
    {
        label: "YouTube",
        href: "#",
        icon: Youtube,
    },
];

export const FACILITIES: FACILITIES_TYPES[] = [
    { id: "tennis", label: "Tennis Courts" },
    { id: "basketball", label: "Basketball Courts" },
    { id: "football", label: "Football Field" },
    { id: "swimming", label: "Swimming Pool" },
    { id: "gym", label: "Gym & Fitness Center" },
    { id: "hall", label: "Multi-purpose Hall" },
];
