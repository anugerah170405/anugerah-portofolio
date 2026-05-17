import { MotionStagger, MotionItem } from "@/app/components/motion/Motions";
import { SectionHeading } from "@/app/components/ui/SectionHeader";
import { CV_DATA } from "@/data/CVData";
import { Award } from "lucide-react";

const fg = (pct: number) =>
    `color-mix(in oklch, var(--foreground) ${pct}%, transparent)`;

export function AwardsSection() {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-20 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          icon={Award}
          label="Recognition"
          title="Awards"
        />

        <MotionStagger className="grid sm:grid-cols-2 gap-4 mt-10">
          {CV_DATA.awards.map((award) => (
            <MotionItem
              key={award.title}
              className="rounded-xl p-5 sm:p-6 border border-foreground/8 hover:border-blue-500/15 hover:-translate-y-1 transition-all group"
              style={{ background: "rgba(128,128,128,0.025)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] uppercase tracking-widest ">
                      {award.year}
                    </span>
                    <span className="text-[10px]">·</span>
                    <span className="text-[10px]">{award.org}</span>
                  </div>
                  <h3 className="leading-snug text-sm sm:text-base">{award.title}</h3>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded border border-foreground/8 flex-shrink-0"
                  style={{ background: "rgba(128,128,128,0.06)" }}
                >
                  {award.type}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{color:fg(48)}}>{award.desc}</p>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}