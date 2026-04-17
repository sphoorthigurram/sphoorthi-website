import { experiencesData } from "@/lib/experiences";
import ExperienceClient from "./ExperienceClient";

export function generateStaticParams() {
  return experiencesData.map((exp) => ({ slug: exp.slug }));
}

export default function ExperiencePage({
  params,
}: {
  params: { slug: string };
}) {
  const experience = experiencesData.find((e) => e.slug === params.slug);
  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Experience not found.
      </div>
    );
  }
  return <ExperienceClient experience={experience} />;
}
