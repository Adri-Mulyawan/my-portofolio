import { motion } from "framer-motion";
import { skills } from "../data/skills";

const learningItems = ["Next.js", "REST API", "Firebase Security Rules", "Database Design"];

const About = () => {
  return (
    <section id="about" className="relative border-t border-[var(--border)] mx-auto max-w-7xl px-5 py-20">


      <div className="relative">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]"
        >
          About Me
        </motion.p>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-5">
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl backdrop-blur-xl"
            >
              <h2 className="text-4xl font-black leading-tight text-[var(--heading)]">
                Saya suka membangun hal yang nyata.
              </h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                Saya Adri Mulyawan, Frontend Developer dari Indonesia yang fokus membuat website modern dan interaktif. Saya belajar dengan cara langsung membuat project nyata — dari food ordering app hingga portfolio ini.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[{ v: "10+", l: "Skills" }, { v: "3+", l: "Projects" }, { v: "2024", l: "Since" }].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-[var(--chip)] p-4 text-center ring-1 ring-[var(--border)]">
                    <p className="text-2xl font-black text-[var(--heading)]">{s.v}</p>
                    <p className="mt-1 text-xs font-bold text-[var(--muted)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Currently Learning card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl backdrop-blur-xl"
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]">
                Currently Learning
              </p>
              <h3 className="mt-2 text-2xl font-black text-[var(--heading)]">
                Terus berkembang.
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {learningItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--chip)] px-4 py-2 text-sm font-bold text-[var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — Skills Grid */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl backdrop-blur-xl"
          >
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]">
              Tech Stack
            </p>
            <h3 className="mt-2 text-2xl font-black text-[var(--heading)]">
              Tools yang saya gunakan.
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--chip)] px-4 py-3 transition hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-[var(--card-hover)]"
                >
                  <div className="flex h-8 w-8 items-center justify-center">
                    <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain filter dark:brightness-90" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[var(--heading)]">{skill.name}</p>
                    <p className="text-[11px] text-[var(--muted)]">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;