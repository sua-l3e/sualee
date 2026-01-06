// _components/projects/ProjectsSection.tsx
import { projects } from "@/_datas/projects.data";
import ProjectList from "./ProjectList";

export default function ProjectsSection() {
  return (
    <section className="py-4 px-16">
      <h2 className="text-4xl font-thin text-white">Key Projects</h2>

      <div className="mt-16">
        <ProjectList projects={projects} />
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="rounded-full bg-white px-8 py-2 text-base text-black"
        >
          View More Project
        </button>
      </div>
    </section>
  );
}