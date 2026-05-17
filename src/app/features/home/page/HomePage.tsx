import { Hero } from "../sections/Hero";
import { Contact } from "../../../components/ui/Contact";
import { FeaturedProjects } from "../sections/FeaturedProjects";
import { ServicesSection } from "../sections/ServicesSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesSection />
      <TestimonialsSection />
      <Contact />
    </>
  );
}