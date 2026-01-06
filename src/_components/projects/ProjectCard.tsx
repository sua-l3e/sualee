import Image from "next/image";
import type { Project } from "@/_datas/projects.data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800">
      <div className="relative h-[200px] w-full ">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          className="object-cover object-[center_top]"
          sizes="520px"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-base leading-7 text-white/60 line-clamp-3">
          {project.description}
        </p>

        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-white px-8 py-2 text-base text-white"
        >
          View Project
        </button>
      </div>
      
    </article>
  );
}