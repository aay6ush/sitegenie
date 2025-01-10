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

export const testimonials = [
  {
    id: 1,
    quote:
      "SiteGenie has completely transformed how we create websites. The AI understands exactly what we need, and the results are consistently impressive. We've cut our development time by 70%.",
    author: "Sarah Chen",
    role: "Marketing Director",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "The level of customization and control while maintaining the ease of use is unprecedented. It's like having a professional design team that works at the speed of thought.",
    author: "Michael Roberts",
    role: "Startup Founder",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "Since implementing SiteGenie, our conversion rates have increased by 40%. The AI-generated layouts are not just beautiful, they're strategically designed to convert.",
    author: "Emily Parker",
    role: "Growth Lead",
    image: "/placeholder.svg?height=80&width=80",
  },
];
