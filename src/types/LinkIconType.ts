// types/linkIcons.ts
import {
  GitBranch, Globe, Layers, FileText,
  Play, Link2, Eye, Paintbrush2, Video,
} from "lucide-react";

export const LINK_ICONS: Record<string, React.ElementType> = {
  github: GitBranch, figma: Paintbrush2, prototype: Layers,
  live: Globe, document: FileText, video: Video,
  link: Link2, eye: Eye, play: Play,
};