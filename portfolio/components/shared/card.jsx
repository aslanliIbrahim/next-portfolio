import Image from "next/image";
import Link from "next/link";

export default function Card({ projects, linkTitle = "See All" }) {
  return (
    <section className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-[80px] md:my-[127px]">
      {projects.map((project) => (
        <div className="w-[264px]" key={project.id}>
          <div className="mb-4">
            <Image className="w-2xs" src={project.image} alt={project.title} />
          </div>

          <div>
            <h3 className="font-medium text-textGray700 dark:text-textGray400 mb-4">
              {project.title}
            </h3>

            <p className="font-light text-textSecondary dark:text-textGray400 mb-4">
              {project.description}
            </p>

            <Link
              className="text-textGray700 dark:text-textGray400 font-medium underline underline-offset-1 hover:text-hoverTextGray600 transition-colors"
              href={`/main/${project.id}`}
            >
              {linkTitle}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
