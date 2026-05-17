import { useState } from "react";
import { Search, X as XIcon } from "lucide-react";
import { ProjectCard } from "../../../components/ui/ProjectCard";
import { CaseStudyModal} from "../../../components/modal/CaseStudyModal";
import { PROJECTS } from "@/data/ProjectData";           // ← ganti dari ProjectModel
import { Contact } from "../../../components/ui/Contact";
import { SectionHeading } from "../../../components/ui/SectionHeader";

const ALL_CATEGORIES = [
  "All",
  ...new Set(PROJECTS.map((p) => p.category))
];

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredWithIndex = PROJECTS
    .map((p, i) => ({ project: p, originalIndex: i }))
    .filter(({ project }) => {
      const matchesCategory =
        activeFilter === "All" ? true : project.category === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });

  const handlePrev = () =>
    setSelectedProject((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const handleNext = () =>
    setSelectedProject((prev) =>
      prev !== null && prev < filteredWithIndex.length - 1 ? prev + 1 : prev
    );

  const currentProject =
    selectedProject !== null ? filteredWithIndex[selectedProject].project : null;

  return (
    <>
      <div className="min-h-screen px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className="mb-10"
          >
            <SectionHeading
              label="Portofolio"
              title="All Projects"
              description="A complete collection of design and development case studies."
            />
          </div>

          {/* Search bar */}
          <div
            className="relative mb-6"
          >
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-foreground/8 transition-all duration-200 focus-within:border-blue-500/25"
              style={{ background: "rgba(128,128,128,0.03)" }}
            >
              <Search className="w-4 h-4 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedProject(null);
                }}
                placeholder="Search by title, category, or tag…"
                className="flex-1 bg-transparent text-sm text-foreground/70 placeholder:text-foreground/28 outline-none"
              />
                {searchQuery && (
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedProject(null); }}
                    className="cursor-pointer w-5 h-5 rounded-md flex items-center justify-center text-foreground/30 hover:text-foreground/60 transition-colors flex-shrink-0"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </button>
                )}
            </div>
          </div>

          {/* Filter Bar */}
          <div
            className="flex flex-wrap items-center gap-2 mb-12"
          >
            {ALL_CATEGORIES.map((cat) => {
              const active = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setSelectedProject(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm border transition-all duration-200 cursor-pointer ${active
                      ? "text-blue-500 border-blue-500/25 bg-blue-500/10"
                      : "text-foreground/40 border-foreground/8 bg-foreground/2 hover:text-foreground/65 hover:border-foreground/14 hover:bg-foreground/5"
                    }`}
                >
                  {cat}
                </button>
              );
            })}

            <span className="ml-auto text-xs text-foreground/28 uppercase tracking-widest">
              {filteredWithIndex.length} project{filteredWithIndex.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Grid */}
            {filteredWithIndex.length > 0 ? (
              <div
                key={activeFilter + searchQuery}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
              >
                {filteredWithIndex.map(({ project }, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    index={index}
                    delay={index * 0.05}
                    onClick={() => setSelectedProject(index)}
                  />
                ))}
              </div>
            ) : (
              <div
                key="empty"
                className="flex flex-col items-center justify-center py-24 gap-4"
              >
                <div
                  className="w-14 h-14 rounded-2xl border border-foreground/8 flex items-center justify-center"
                  style={{ background: "rgba(128,128,128,0.04)" }}
                >
                  <Search className="w-6 h-6 text-foreground/20" />
                </div>
                <p className="text-foreground/35 text-sm">No projects match your search.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
                  className="cursor-pointer text-xs text-blue-500 hover:text-blue-400/90 transition-colors underline underline-offset-2"
                >
                  Clear filters
                </button>
              </div>
            )}
        </div>
      </div>

      <Contact />

      {selectedProject !== null && currentProject && (
        <CaseStudyModal
          open
          onClose={() => setSelectedProject(null)}
          project={currentProject}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedProject > 0}
          hasNext={selectedProject < filteredWithIndex.length - 1}
          currentIndex={selectedProject}
          total={filteredWithIndex.length}
        />
      )}
    </>
  );
}