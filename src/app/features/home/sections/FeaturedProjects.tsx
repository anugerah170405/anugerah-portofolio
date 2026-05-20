import { ArrowRight } from "lucide-react";
import { useState, lazy } from "react";
import { useNavigate } from "react-router";
import { ProjectCard } from "../../../components/ui/ProjectCard";
import { PROJECTS } from "@/data/ProjectData";
import { SectionHeading } from "../../../components/ui/SectionHeader";
import type { Project } from "@/types/ProjectType";
const CaseStudyModal = lazy(
  () => import("../../../components/modal/CaseStudyModal")
);


// Show only the first 3 as featured on Home
const FEATURED_TITLES = ["LeafUp", "Research Paper Assistant", "Kospedia"];

const FEATURED = FEATURED_TITLES
  .map(title => PROJECTS.find(p => p.title === title))
  .filter(Boolean) as Project[];

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpen = (index: number) => {
    setSelectedProject(index);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

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
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-5"
          >
            <SectionHeading
              label="Selected Work"
              title="Featured Projects"
            />

            <button
              onClick={() => navigate("/work")}
              className="cursor-pointer inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors flex-shrink-0 self-start sm:self-auto"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FEATURED.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                delay={index * 0.07}
                onClick={() => handleOpen(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <CaseStudyModal
          open={modalOpen}
          onClose={handleClose}
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