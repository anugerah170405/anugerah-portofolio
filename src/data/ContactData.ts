import { Link, GitBranch, MessageCircle, Mail } from "lucide-react";

export const SOCIALS = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:anugerahgari170405@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Anugerah,%0D%0A%0D%0AI%20really%20liked%20your%20portfolio%20and%20wanted%20to%20reach%20out.%20I%27m%20interested%20in%20working%20with%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!",
    handle: "anugerahgari170405@gmail.com",
  },

  {
    icon: Link,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anugerah-gari/",
    handle: "anugerah-gari",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    href: "https://github.com/anugerah170405",
    handle: "@anugerah170405",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/6285173133427?text=Hi%20Anugerah!%20I%20really%20liked%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you.",
    handle: "+6285173133427",
  },
];

export const AVAILABILITY = [
  { label: "Full-time Role", available: false },
  { label: "Freelance/Contract", available: true },
  { label: "UI/UX Consultation", available: true },
  { label: "Product Interface Review", available: true },
];