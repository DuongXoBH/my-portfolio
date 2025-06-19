import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { IProject } from "@/constants";
import Link from "next/link";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="w-full mb-5 bg-white flex flex-col gap-5 border border-sky-500 rounded-lg">
      <AspectRatio
        ratio={16 / 9}
        className="bg-muted rounded-lg overflow-hidden"
      >
        <Link href={project.href} target="_blank">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </Link>
      </AspectRatio>

      <div className="flex flex-col px-4 gap-5 ">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-base font-normal mt-2 h-18 overflow-y-hidden">
          {project.description}
        </p>
        <div className="w-full flex flex-col">
          <p className="w-full text-xl font-bold mb-4 capitalize">technology</p>
          <div className="w-full flex flex-row">
            <div className="w-1/2">
              <p className="font-bold text-base">
                Front end :
                <span className="text-sm font-semibold ml-1">
                  {project.tech.frontend}
                </span>
              </p>
            </div>
            <div className="w-1/2">
              <p className="font-bold text-base">
                Back end :
                <span className="text-sm font-semibold ml-1">
                  {project.tech.backend}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8 flex justify-between items-center">
          <Button variant={"default"}>
            <Link target="_blank" href={project.href}>
              View Project
            </Link>
          </Button>
          <Button variant={"default"}>
            <Link target="_blank" href={project.code}>
              View Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
