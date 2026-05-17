import { useState } from "react";
import { ImageWithFallback } from "../../../../utils/ImageWithFallback";
import { galleryItems } from "@/data/GalleryData";
import { LightBoxModal } from "@/app/components/modal/LightBoxModal";



export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const handleNext = () =>
    setActiveIndex((i) => (i !== null && i < galleryItems.length - 1 ? i + 1 : i));

  return (
    <section id="gallery" className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Bento grid */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gridAutoFlow: "dense" }}
        >
          {galleryItems.map((item, i) => (
            <div
              onClick={() => setActiveIndex(i)}
              className="relative rounded-xl overflow-hidden cursor-pointer group border border-foreground/8 hover:border-foreground/16 transition-colors"
              style={{
                gridColumn: item.wide ? "span 2" : "span 1",
                height: "210px",
              }}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              Gradient overlay
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.02) 50%, transparent 100%)",
                }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div>
                  <p className="text-[9px] text-white/45 uppercase tracking-widest mb-0.5">
                    {item.tag}
                  </p>
                  <p className="text-sm text-white/85">{item.title}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <LightBoxModal
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}