import { SectionHeading } from "@/app/components/ui/SectionHeader";
import { CV_DATA } from "@/data/CVData";
import { MapPin, Calendar, Briefcase, } from "lucide-react";


export function ExperienceSection() {
    return (
        <section className="px-4 sm:px-6 py-16 md:py-20 border-t border-foreground/5">
            <div className="max-w-7xl mx-auto">

                <SectionHeading
                    icon={Briefcase}
                    label="Career"
                    title="Experience"
                />

                <div className="space-y-4 mt-10">
                    {CV_DATA.experience.map((exp) => (
                        <div
                            key={exp.role}
                            className="rounded-xl p-5 sm:p-6 border border-foreground/8 hover:border-blue-500/15 transition-all group"
                            style={{ background: "rgba(128,128,128,0.025)" }}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                                <div className="min-w-0">
                                    {exp.current && (
                                        <span
                                            className="inline-flex items-center gap-1 text-[10px] text-green-500/80 border border-green-500/20 rounded px-1.5 py-0.5 mb-1.5"
                                            style={{ background: "rgba(34,197,94,0.06)" }}
                                        >
                                            <span className="w-1 h-1 rounded-full bg-green-500/70 animate-pulse" />
                                            Current
                                        </span>
                                    )}
                                    <h3 className="text-foreground/85 mb-0.5 text-sm sm:text-base">{exp.role}</h3>
                                    <p className="text-sm text-foreground/55">{exp.company}</p>
                                </div>
                                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1.5 flex-shrink-0">
                                    <span className="text-xs text-foreground/40 flex items-center gap-1.5 whitespace-nowrap">
                                        <Calendar className="w-3 h-3 flex-shrink-0" /> {exp.period}
                                    </span>
                                    <span className="text-xs text-foreground/35 flex items-center gap-1 whitespace-nowrap">
                                        <MapPin className="w-3 h-3 flex-shrink-0" /> {exp.location}
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-foreground/48 leading-relaxed mb-4">{exp.desc}</p>

                            <div className="flex flex-wrap gap-1.5">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 text-[10px] uppercase tracking-wide text-foreground/42 border border-foreground/8 rounded"
                                        style={{ background: "rgba(128,128,128,0.04)" }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}