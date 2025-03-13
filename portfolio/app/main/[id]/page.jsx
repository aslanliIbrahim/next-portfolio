'use client'
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams(); // Get the dynamic ID

  // Find the project by ID
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
