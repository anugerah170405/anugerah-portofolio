import { motion } from "motion/react";
import { ArrowRight, QuoteIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { CaseStudyModal } from "../components/modal/CaseStudyModal";
import { PROJECTS } from "@/data/ProjectData";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../../utils/ImageWithFallback";
import { SectionHeading } from "../components/SectionHeader";
import { SERVICES, TESTIMONIALS } from "@/data/HomeData";
import type { Project } from "@/types/ProjectType";

// Show only the first 3 as featured on Home
const FEATURED_TITLES = ["LeafUp", "Research Paper Assistant", "Kospedia"];

const FEATURED = FEATURED_TITLES
  .map(title => PROJECTS.find(p => p.title === title))
  .filter(Boolean) as Project[];

function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const navigate = useNavigate();

  const handlePrev = () =>
    setSelectedProject((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const handleNext = () =>
    setSelectedProject((prev) =>
      prev !== null && prev < FEATURED.length - 1 ? prev + 1 : prev
    );

  return (
    <>
      <section className="px-4 sm:px-6 py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-5"
          >
            <SectionHeading
              label="Selected Work"
              title="Featured Projects"
            />

            <motion.button
              whileHover={{ opacity: 0.7, x: 3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/work")}
              className="cursor-pointer inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-500 transition-colors flex-shrink-0 self-start sm:self-auto"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FEATURED.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                delay={index * 0.07}
                onClick={() => setSelectedProject(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <CaseStudyModal
          open
          onClose={() => setSelectedProject(null)}
          project={FEATURED[selectedProject]}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedProject > 0}
          hasNext={selectedProject < FEATURED.length - 1}
          currentIndex={selectedProject}
          total={FEATURED.length}
        />
      )}
    </>
  );
}

function ServicesSection() {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-24 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <SectionHeading
            label="What I Do"
            title="Services"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -4 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-24 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <SectionHeading
            label="People I've Worked With"
            title="What They Say"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              whileHover={{ y: -3 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesSection />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </>
  );
}