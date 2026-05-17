import { SectionHeading } from "@/app/components/ui/SectionHeader";
import { CV_DATA } from "@/data/CVData";
import { Award } from "lucide-react";

export function AwardsSection() {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-20 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          icon={Award}
          label="Recognition"
          title="Awards"
        />

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {CV_DATA.awards.map((award) => (
            <div
              key={award.title}
              className="rounded-xl p-5 sm:p-6 border border-foreground/8 hover:border-blue-500/15 transition-all group"
              style={{ background: "rgba(128,128,128,0.025)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] uppercase tracking-widest text-foreground/35">
                      {award.year}
                    </span>
                    <span className="text-[10px] text-foreground/22">·</span>
                    <span className="text-[10px] text-foreground/35">{award.org}</span>
                  </div>
                  <h3 className="text-foreground/80 leading-snug text-sm sm:text-base">{award.title}</h3>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded border border-foreground/8 text-foreground/50 flex-shrink-0"
                  style={{ background: "rgba(128,128,128,0.06)" }}
                >
                  {award.type}
                </span>
              </div>
              <p className="text-sm text-foreground/48 leading-relaxed">{award.desc}</p>
              <div
                className="mt-5 h-px bg-blue-500/30 origin-left"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}