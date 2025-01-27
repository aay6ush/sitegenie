import { BookOpen, CirclePlus, Flag, Github, Twitter } from "lucide-react";

export const words = [
  "beautiful",
  "stunning",
  "polished",
  "creative",
  "modern",
];

export const testimonials = [
  {
    id: 1,
    quote:
      "SiteGenie has completely transformed how we create websites. The AI understands exactly what we need, and the results are consistently impressive.",
    author: "Sarah Chen",
    role: "Marketing Director",
  },
  {
    id: 2,
    quote:
      "The level of customization and control while maintaining the ease of use is unprecedented. It's like having a professional design team that works at the speed of thought.",
    author: "Michael Roberts",
    role: "Startup Founder",
  },
  {
    id: 3,
    quote:
      "Since implementing SiteGenie, our conversion rates have increased by 40%. The AI-generated layouts are not just beautiful, they're strategically designed to convert.",
    author: "Emily Parker",
    role: "Growth Lead",
  },
];

export const stats = [
  { label: "USERS", value: "8,781" },
  { label: "WEBSITES", value: "279,903" },
  { label: "PROMPTS", value: "291,392" },
];

export const plans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for individuals",
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
