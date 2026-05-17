import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../../../utils/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tags: string[];
  delay: number;
  onClick: () => void;
  index: number;
}

export function ProjectCard({
  title,
  category,
  description,
  thumbnail,
  tags = [],
  delay,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer h-full"
    >
      <div
        className="relative overflow-hidden rounded-xl border border-foreground/8 hover:border-blue-500/20 transition-all duration-300 flex flex-col h-full"
        style={{ background: "rgba(128,128,128,0.03)" }}
      >
        {/* Thumbnail */}
        <div className="aspect-[16/10] overflow-hidden relative bg-foreground/5 flex-shrink-0">
          <div
            className="w-full h-full"
          >
            <ImageWithFallback
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center hover:opacity-1"
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/20"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className="text-[9px] uppercase tracking-wide px-2 py-0.5 rounded border border-foreground/15"
              style={{
                backdropFilter: "blur(12px) saturate(180%)",
                background: "color-mix(in srgb, var(--background) 78%, transparent)",
              }}
            >
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 border-t border-foreground/6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-base group-hover:text-foreground transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="w-4 h-4 group-hover:text-blue-500 transition-colors mt-0.5 flex-shrink-0" />
          </div>
          <p className="text-sm leading-relaxed mb-4 flex-1 line-clamp-1"
          style={{ color: "rgba(var(--text-secondary-rgb), 0.75)" }}>
            {description}
          </p>

          {/* Tag chips */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wide border border-foreground/8 transition-all duration-200 group-hover:border-blue-500/10 group-hover:text-blue-500"
                style={{ background: "rgba(128,128,128,0.04)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Blue bottom accent line on hover */}
        <motion.div
          className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "rgba(59,130,246,0)" }}
          whileHover={{ background: "rgba(59,130,246,0.35)" }}
          transition={{ duration: 0.25 }}
        />
      </div>
    </motion.div>
  );
}