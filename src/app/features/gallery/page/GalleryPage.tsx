import { Gallery } from "../sections/Gallery";
import { Contact } from "../../../components/ui/Contact";
import { SectionHeading } from "../../../components/ui/SectionHeader";

export function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <div className="px-4 sm:px-6 pt-32 sm:pt-36 pb-4 max-w-7xl mx-auto">
        <SectionHeading
          label="Visual Collection"
          title="Gallery"
          description="A curated collection of visual work — interfaces, identities, and creative moments."
        />
      </div>

      <Gallery />

      <Contact />
    </>
  );
}
