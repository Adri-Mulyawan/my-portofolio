import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "../types/project";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface-solid)] shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[var(--chip)]">
        {project.image.includes("/") || project.image.startsWith("data:") ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-[var(--surface-solid)] text-6xl shadow-sm">
            {project.image}
          </div>
        )}
        {project.featured ? (
          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950 shadow-lg">
            Featured Project
          </span>
        ) : null}
      </div>

      <div className="p-6">
        {project.category && (
          <p className="text-xs font-semibold text-[var(--accent)] mb-2 uppercase tracking-wider">
            {project.category}
          </p>
        )}

        <h3 className="mt-2 text-2xl font-black tracking-tight text-[var(--heading)]">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-[var(--muted)]"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--button)] px-4 py-3 text-sm font-black text-[var(--button-text)] transition hover:opacity-90"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}

          {project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--chip)] px-4 py-3 text-sm font-black text-[var(--heading)] transition hover:bg-[var(--card-hover)]"
            >
              Source
              <Code2 size={16} />
            </a>
          )}

          {project.liveUrl === "#" && project.githubUrl === "#" && (
            <span className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--chip)] px-4 py-3 text-sm font-bold text-[var(--muted)]">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;