import { motion } from "motion/react";
import { LANDSCAPE } from "@/data/PortraitData";
import { CV_DATA } from "@/data/CVData";
import { SectionHeading } from "@/app/components/ui/SectionHeader";
import { ImageWithFallback } from "@/utils/ImageWithFallback";

const tools = [
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

export function BioSection() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT — BIO */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="Bio & Skills"
              title="Design thinking meets developer precision"
            />

            <div className="mt-10 mb-7 overflow-hidden rounded-xl aspect-video border border-foreground/8">
              <ImageWithFallback
                src={LANDSCAPE}
                alt="Design workspace"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="leading-relaxed mb-4">
              I'm a hybrid designer-developer creating digital products that
              look great AND work flawlessly. My dual background means I speak
              both languages — Figma and TypeScript — fluently.
            </p>

            <p className="leading-relaxed">
              I bridge the gap between design and engineering, bringing user
              empathy and technical discipline to every project.
            </p>
          </motion.div>

          {/* RIGHT — SKILLS */}
          <div className="space-y-5">

            {/* UI/UX DESIGN */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="border border-foreground/8 rounded-xl p-7"
              style={{ background: "rgba(128,128,128,0.03)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center">
                  <span className="text-blue-400 text-xs">✦</span>
                </div>
                <h3 className="text-foreground/65 text-sm uppercase tracking-wider">
                  UI/UX Design
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {CV_DATA.skills.design.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground/40" />
                    <span className="text-sm text-foreground/55">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FRONTEND DEV */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="border border-foreground/8 rounded-xl p-7"
              style={{ background: "rgba(128,128,128,0.03)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                  <span className="text-indigo-400 text-xs">{"</>"}</span>
                </div>
                <h3 className="text-foreground/65 text-sm uppercase tracking-wider">
                  Frontend Dev
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {CV_DATA.skills.development.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground/40" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* TOOLBOX */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <h4 className="text-xs uppercase tracking-widest mb-4">
                Toolbox
              </h4>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-3 py-1.5 border border-foreground/8 rounded-md"
                    style={{ background: "rgba(128,128,128,0.04)" }}
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}