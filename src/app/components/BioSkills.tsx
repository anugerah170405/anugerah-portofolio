import { motion } from "motion/react";
import { ImageWithFallback } from "../../utils/ImageWithFallback";
import { SectionHeading } from "./SectionHeader";
import { LANDSCAPE } from "@/data/PortraitData";
import { CV_DATA } from "@/data/CVData";


const tools = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

export function BioSkills() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section label
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="text-xs uppercase tracking-widest">Bio & Skills</span>
        </motion.div> */}

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT — Bio */}
          <div>
            {/* <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl mb-8 leading-tight"
            >
              Design thinking meets developer precision
              
            </motion.h2> */}

            <SectionHeading
              label="Bio & Skills"
              title="Design thinking meets developer precision"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.55 }}
              className="mb-7 overflow-hidden rounded-xl aspect-video border border-foreground/8 mt-10"
            >
              <ImageWithFallback
                src={LANDSCAPE}
                alt="Design workspace"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="text-foreground/50 leading-relaxed mb-4"
            >
              I'm a hybrid designer-developer creating digital products that look great AND work flawlessly. My dual background means I speak both languages — Figma and TypeScript — fluently.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.17 }}
              className="text-foreground/50 leading-relaxed"
            >
              I bridge the gap between design and engineering, bringing user empathy and technical discipline to every project.
            </motion.p>
          </div>

          {/* RIGHT — Skills */}
          <div>
            {/* Design Skills */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="border border-foreground/8 rounded-xl p-7 mb-5"
              style={{ background: "rgba(128,128,128,0.03)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center">
                  <span className="text-blue-400 text-xs">✦</span>
                </div>
                <h3 className="text-foreground/65 text-sm uppercase tracking-wider">UI/UX Design</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {CV_DATA.skills.design.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full rainbow-border flex-shrink-0" />
                    <span className="text-sm text-foreground/55">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Dev Skills */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="border border-foreground/8 rounded-xl p-7 mb-6"
              style={{ background: "rgba(128,128,128,0.03)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                  <span className="text-indigo-400 text-xs">{"</>"}</span>
                </div>
                <h3 className="text-foreground/65 text-sm uppercase tracking-wider">Frontend Dev</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {CV_DATA.skills.development.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.08 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full rainbow-border flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
            >
              <h4 className="text-xs uppercase tracking-widest mb-4">Toolbox</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ opacity: 0.7, scale: 1.1 }}
                    className="flex items-center gap-2 px-3 py-1.5 border border-foreground/8 rounded-md cursor-default"
                    style={{ background: "rgba(128,128,128,0.04)" }}
                  >
                    <img src={tool.icon} alt={tool.name} className="w-4 h-4" />
                    {tool.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}