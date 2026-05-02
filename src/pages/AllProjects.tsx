import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

const AllProjects = () => {
  return (
    <main className="relative mx-auto max-w-7xl px-5 py-16">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute left-0 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 font-black text-[var(--heading)] transition hover:-translate-y-1 hover:bg-[var(--card-hover)]"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <SectionTitle
          eyebrow="All Projects"
          title="Project collection."
          description="Kumpulan project yang saya buat untuk latihan, tugas, dan pengembangan skill web development."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProjects;