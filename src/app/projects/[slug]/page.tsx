import { projectsData } from "@/lib/projects";
import ProjectClient from "./ProjectClient";

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Project not found.
      </div>
    );
  }
  return <ProjectClient project={project} />;
}
