import { Palette, Sparkles, Wand2 } from "lucide-react";

export const words = [
  "beautiful",
  "stunning",
  "polished",
  "creative",
  "modern",
];

export const features = [
  {
    id: 1,
    icon: <Wand2 className="size-6" />,
    title: "AI-Powered Generation",
    description: [
      "Generate complete websites from text descriptions",
      "Smart suggestions based on your content",
      "SEO-optimized structure and content",
    ],
    accentColor: "from-purple-500 to-purple-600",
    buttonColor: "bg-purple-50/10",
  },
  {
    id: 2,
    icon: <Palette className="size-6" />,
    title: "Custom Styling",
    description: [
      "Customize every aspect of your design",
      "Real-time preview of changes",
      "Export clean, production-ready code",
    ],
    accentColor: "from-blue-500 to-blue-600",
    buttonColor: "bg-blue-50/10",
  },
  {
    id: 3,
    icon: <Sparkles className="size-6" />,
    title: "Smart Components",
    description: [
      "Pre-built, customizable components",
      "Responsive layouts out of the box",
      "Optimized for performance",
    ],
    accentColor: "from-pink-500 to-pink-600",
    buttonColor: "bg-pink-50/10",
  },
];
