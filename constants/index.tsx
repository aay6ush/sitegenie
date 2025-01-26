import {
  BookOpen,
  CirclePlus,
  File,
  Flag,
  Github,
  Palette,
  Sparkles,
  Twitter,
  Wand2,
} from "lucide-react";
import { Figma, Slack } from "./icons";
import { ReactElement } from "react";

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

export const stats = [
  { label: "USERS", value: "8,781" },
  { label: "WEBSITES", value: "279,903" },
  { label: "DEPLOYS", value: "162,105" },
  { label: "PROMPTS", value: "291,392" },
];

export const plans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for individuals and small projects",
    monthlyPrice: 49,
    yearlyPrice: 470,
    isPopular: false,
    features: [
      "5 Projects",
      "Basic webpage generation",
      "Basic SEO tools",
      "1 Team member",
    ],
  },
  {
    id: 2,
    name: "Business",
    description: "Ideal for growing businesses",
    monthlyPrice: 99,
    yearlyPrice: 950,
    isPopular: true,
    features: [
      "10 Projects",
      "Advanced web apps",
      "Code download",
      "Custom domain",
      "5 Team members",
    ],
  },
  {
    id: 3,
    name: "Unlimited",
    description: "For enterprises and large teams",
    monthlyPrice: 199,
    yearlyPrice: 1900,
    isPopular: false,
    features: [
      "25 Projects",
      "All project types",
      "White labeling",
      "Dedicated support",
      "Unlimited team members",
    ],
  },
];

export const faqs = [
  {
    question: "What makes SiteGenie different from other website builders?",
    answer:
      "SiteGenie leverages advanced AI to understand your vision and create truly custom landing pages. Unlike traditional builders that use templates, we generate unique designs tailored to your specific needs and brand identity.",
  },
  {
    question: "How does the AI-powered generation work?",
    answer:
      "Simply describe what you want in natural language, and our AI analyzes your requirements to generate a complete landing page. It considers your industry, brand colors, content structure, and design preferences to create a unique solution.",
  },
  {
    question: "Can I customize the generated pages?",
    answer:
      "While our AI creates a strong foundation, you have full control to customize every aspect of your landing page through our intuitive editor. Modify layouts, colors, fonts, and content with ease.",
  },
  {
    question: "Do I need technical knowledge to use SiteGenie?",
    answer:
      "No technical knowledge required! SiteGenie is designed to be user-friendly for everyone. Our AI handles the complex parts, while you focus on your vision and content.",
  },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/aay6ush", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/aay6ush", label: "Twitter" },
];

export const menuItems = [
  { icon: CirclePlus, href: "/generate" },
  { icon: BookOpen, href: "/history" },
  { icon: Flag, href: "/feedback" },
];

export const promptExamples = [
  {
    name: "Slack",
    icon: <Slack className="size-20" />,
    prompt:
      "Design a cutting-edge webpage for Slack that highlights its real-time collaboration features. Focus on incorporating sleek animations, modern UI elements, and a clean layout that showcases how Slack enables seamless team communication and file sharing. Include sections for key features like channels, threads, integrations, and mobile access.",
  },
  {
    name: "Figma",
    icon: <Figma className="size-20" />,
    prompt:
      "Design a sleek and professional webpage for Figma that emphasizes its collaborative design features. Highlight tools like real-time collaboration, components, auto-layout, and prototyping. Use a minimalist design with subtle animations and interactive elements to demonstrate Figma's modern approach to design tools. Include sections for key features, pricing, and customer testimonials.",
  },
];

export const WORK_DIR_NAME = "project";
export const WORK_DIR = `/home/${WORK_DIR_NAME}`;
export const MODIFICATIONS_TAG_NAME = "site_file_modifications";

export const allowedHTMLElements = [
  "a",
  "b",
  "blockquote",
  "br",
  "code",
  "dd",
  "del",
  "details",
  "div",
  "dl",
  "dt",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "ins",
  "kbd",
  "li",
  "ol",
  "p",
  "pre",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "source",
  "span",
  "strike",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
  "var",
];

export const FILE_ICONS: Record<string, ReactElement> = {
  json: <File className="h-4 w-4 text-yellow-400" />,
  js: <File className="h-4 w-4 text-yellow-400" />,
  ts: <File className="h-4 w-4 text-blue-400" />,
  tsx: <File className="h-4 w-4 text-blue-400" />,
  jsx: <File className="h-4 w-4 text-blue-400" />,

  css: <File className="h-4 w-4 text-purple-400" />,
  scss: <File className="h-4 w-4 text-purple-400" />,
  less: <File className="h-4 w-4 text-purple-400" />,

  html: <File className="h-4 w-4 text-orange-400" />,

  "package.json": <File className="h-4 w-4 text-red-400" />,
  "package-lock.json": <File className="h-4 w-4 text-red-400" />,
  "yarn.lock": <File className="h-4 w-4 text-red-400" />,
  "pnpm-lock.yaml": <File className="h-4 w-4 text-red-400" />,

  ".env": <File className="h-4 w-4 text-green-400" />,
  ".gitignore": <File className="h-4 w-4 text-gray-400" />,

  default: <File className="h-4 w-4 text-gray-400" />,
};
