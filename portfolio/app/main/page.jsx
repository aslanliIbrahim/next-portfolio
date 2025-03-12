import Card from "@/components/shared/card";
import Concept from "@/components/shared/concept";
import Form from "@/components/shared/form";
import Title from "@/components/views/title";
import { projects } from "@/data/projects";
import { conceptWorks } from "@/data/projects";
import { experience } from "@/data/projects";
export default function HomePage() {
  return (
    <div>
      <Title />
      <Card projects={projects} />
      <Concept
        
        type="concept"
        title="Some concept works"
        items={conceptWorks}
      />
      <Concept
        
        type="experience"
        title="Experience"
        items={experience}
      />
      <Form />
    </div>
  );
}
