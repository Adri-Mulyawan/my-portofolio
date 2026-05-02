import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const previewProjects = projects.slice(0, 2);
  const hasMoreProjects = projects.length > 2;

  return (
    <section id="projects" className="relative border-t border-[var(--border)] mx-auto max-w-7xl px-5 py-20">


      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--heading)] text-[var(--page)]">
              <ArrowUpRight size={16} />
            </div>
            <h2 className="text-2xl font-bold text-[var(--heading)]">Latest Project</h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-[var(--heading)] transition hover:text-[var(--accent)]"
          >
            All Project &rarr;
          </Link>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--heading)] transition hover:bg-[var(--border)] hover:text-[var(--accent)]"
            >
              Show All Projects &rarr;
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;