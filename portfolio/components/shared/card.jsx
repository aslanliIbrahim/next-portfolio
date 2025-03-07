import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
export default function Card({ margin }) {
  return (
    <section className={`grid md:grid-cols-3 gap-6 my-[${margin}]`}>
      {projects.map((project) => (
        <div className="w-[264px]" key={project.id}>
          <div className="mb-4">
            <Image className="w-2xs" src={project.image} alt={project.title} />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-4">{project.title}</h3>
            <p className="font-light text-[#999999] mb-4">
              {project.description}
            </p>
            <Link
              className="text-gray-700 font-medium underline underline-offset-1"
              href={project.id}
            >
              See All
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
