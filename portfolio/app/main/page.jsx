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
      <Card margin="127px" projects={projects} />
      <Concept
        margin="127px"
        type="concept"
        title="Some concept works"
        items={conceptWorks}
      />
      <Concept
        margin="127px"
        type="experience"
        title="Experience"
        items={experience}
      />
      <Form />
    </div>
  );
}
