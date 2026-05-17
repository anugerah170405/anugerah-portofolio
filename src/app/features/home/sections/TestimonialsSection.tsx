import { QuoteIcon } from "lucide-react";
import { ImageWithFallback } from "../../../../utils/ImageWithFallback";
import { SectionHeading } from "../../../components/ui/SectionHeader";
import { TESTIMONIALS } from "@/data/HomeData";

export function TestimonialsSection() {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-24 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-10 sm:mb-14"
        >
          <SectionHeading
            label="People I've Worked With"
            title="What They Say"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-5 sm:p-7 border border-foreground/8 hover:border-blue-500/20 transition-all duration-300 group flex flex-col gap-5"
              style={{ background: "rgba(59,130,246,0.02)" }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-blue-500/15 flex-shrink-0"
                  style={{ background: "rgba(59,130,246,0.08)" }}
                >
                  <QuoteIcon className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <span key={si} className="text-blue-400/60 text-xs">★</span>
                  ))}
                </div>
              </div>
              <blockquote className="leading-relaxed text-sm flex-1">
                "{t.quote}"
              </blockquote>
              <div className="h-px bg-gray-500/15 group-hover:bg-blue-500/15 transition-colors" />

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg overflow-hidden border border-foreground/10 flex-shrink-0">
                  <ImageWithFallback src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm">{t.name}</p>
                  <p className="text-[11px]">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}