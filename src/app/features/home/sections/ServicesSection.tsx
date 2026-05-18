import { SERVICES } from "@/data/HomeData";
import { SectionHeading } from "../../../components/ui/SectionHeader";
import { MotionItem, MotionStagger } from "@/app/components/motion/Motions";


export function ServicesSection() {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-24 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div
          
          className="mb-10 sm:mb-14"
        >
          <SectionHeading
            label="What I Do"
            title="Services"
          />
        </div>

        <MotionStagger className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <MotionItem
              key={service.number}
              className="rounded-xl p-5 sm:p-7 border transition-all duration-300 group"
              style={{ background: service.bg, borderColor: service.border }}
            >
              <div className="mb-5 sm:mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: service.dot }} />
                <span className="text-xs uppercase tracking-widest">{service.number}</span>
              </div>
              <h3 className="text-lg sm:text-xl mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(var(--text-secondary-rgb), 0.75)" }}>{service.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] uppercase tracking-wide border border-foreground/8 rounded"
                    style={{ background: "rgba(128,128,128,0.04)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}