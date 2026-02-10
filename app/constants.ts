import { Paintbrush, MonitorSmartphone } from "lucide-react";

export const MODE_META = {
    art: {
        label: "Art Thief",
        icon: Paintbrush,
        tone: "Focus on lighting, camera, style, mood.",
        badge: "Midjourney / SD",
    },
    ui: {
        label: "UI Pirate",
        icon: MonitorSmartphone,
        tone: "Focus on layout, components, typography, color.",
        badge: "Figma / Web",
    },
} as const;

export const MODES = ["art", "ui"] as const;

export type Mode = keyof typeof MODE_META;
