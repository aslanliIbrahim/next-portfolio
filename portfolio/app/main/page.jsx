import Card from "@/components/shared/card";
import Concept from "@/components/shared/concept";
import Title from "@/components/views/title";
import { projects } from "@/data/projects";
import { conceptWorks } from "@/data/projects";
export default function HomePage() {
  return (
    <div>
      <Title />
      <Card margin="127px" projects={projects} />
      <Concept title="Some concept works" items={conceptWorks} />
    </div>
  );
}
