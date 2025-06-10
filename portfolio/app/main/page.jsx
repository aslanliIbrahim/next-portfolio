import Card from "@/components/shared/card";
import Concept from "@/components/shared/concept";
import Form from "@/components/shared/form";
import Title from "@/components/views/title";
import { projects, conceptWorks, experience } from "@/data/projects";


export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay
  return (
    <div className="bg-bgLight text-textPrimary dark:bg-bgDark dark:text-textGray400 transition-colors duration-300">
      <Title />
      <Card projects={projects} />
      <Concept type="concept" title="Some concept works" items={conceptWorks} />
      <Concept type="experience" title="Experience" items={experience} />
      <Form />
    </div>
  );
}
