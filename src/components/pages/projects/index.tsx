import Title from "@/components/common/title";
import { IProject, PROJECTS } from "@/constants";
import ProjectCard from "./project-card";

export default function ProjectList() {
  const projects = PROJECTS;
  return (
    <div id="projects" className="w-full mt-5">
      <Title text="projects" />
      <div className="w-full flex flex-wrap gap-[5%]">
        {projects.map((project: IProject, index: number) => {
          return (
            <div key={`project-${index}`} className="w-[47.5%]">
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
