"use client";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import arrow from "@/public/arrow.png";
import Form from "@/components/shared/form";
import Link from "next/link";
import Card from "@/components/shared/card";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <h1 className="text-textPrimary dark:text-textGray400">Project Not Found</h1>;
  }

  return (
    <div className="text-textPrimary dark:text-textGray400">
      <Link
        href="/main"
        className="text-textGray700 dark:text-textGray400 font-medium underline-offset-1 mb-10 inline-block hover:text-hoverTextGray600 transition-colors"
      >
        <Image
          src={arrow}
          alt="Back Arrow"
          width={24}
          height={24}
          className="inline-block mr-2"
        />
        Back to Home
      </Link>

      <div className="w-full md:w-[60%]">
        <Image
          className="border rounded-2xl mb-4 w-[64px] h-[64px] object-cover"
          loading="lazy"
          src={project.image}
          alt={project.title}
        />

        <h1 className="font-medium text-2xl text-textPrimary dark:text-textGray400 leading-[38.4px] mb-2">
          What is the {project.title}?
        </h1>

        <p className="font-light leading-[25.6px] text-textSecondary dark:text-textGray400 font-montserrat">
          {project.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-[80px] md:my-[127px]">
        <div className="w-[264px]">
          <h2 className="text-textPrimary dark:text-textGray400 mb-2">Team</h2>
          <p className="text-textSecondary dark:text-textGray400 font-light">
            Vadi Efe – Founder <br />
            Metehan Kaya – Product Designer
          </p>
        </div>

        <div className="w-[264px]">
          <h2 className="text-textPrimary dark:text-textGray400 mb-2">My Role</h2>
          <p className="text-textSecondary dark:text-textGray400 font-light">
            I worked as a freelance Product Designer in the Businesswise project.
          </p>
        </div>

        <div className="w-[264px]">
          <h2 className="text-textPrimary dark:text-textGray400 mb-2">Goals</h2>
          <p className="text-textSecondary dark:text-textGray400 font-light">
            Bringing professional people together with various categories of podcasts.
          </p>
        </div>
      </div>

      <Card projects={projects} />
      <Form />
    </div>
  );
};

export default ProjectDetail;
