import { Experience } from "./experience";
import { Projects } from "./projects";
import { Skills } from "./skills";

export function BentoGrid() {
  return (
    <div className="bento-grid">
      <div className="bento-item md:col-span-2">
        <Experience />
      </div>
      <div className="bento-item">
        <Skills />
      </div>
      <div className="bento-item md:col-span-3">
        <Projects />
      </div>
    </div>
  );
}
