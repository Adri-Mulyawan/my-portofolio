import { motion } from "framer-motion";
import { BookOpen, Code2, Database, Lock, Rocket } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const learningItems = [
  {
    title: "Next.js",
    description:
      "Belajar framework React untuk membuat website yang lebih cepat, SEO friendly, dan siap production.",
    icon: Rocket,
  },
  {
    title: "REST API",
    description:
      "Belajar cara frontend mengambil, mengirim, dan mengelola data dari backend/API.",
    icon: Code2,
  },
  {
    title: "Firebase Security Rules",
    description:
      "Belajar mengamankan database Firebase agar data tidak bisa sembarang dibaca atau diubah.",
    icon: Lock,
  },
  {
    title: "Database Design",
    description:
      "Belajar menyusun struktur data yang rapi untuk aplikasi seperti pesanan, menu, user, dan dashboard admin.",
    icon: Database,
  },
];

const CurrentlyLearning = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            eyebrow="Currently Learning"
            title="Skill yang sedang saya kembangkan."
            description="Saya terus belajar teknologi baru agar bisa membuat website yang lebih profesional, aman, dan siap digunakan."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {learningItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-[var(--card-hover)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--button)] text-[var(--button-text)] shadow-lg transition group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[var(--heading)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--chip)] text-[var(--heading)]">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]">
                  Learning Mindset
                </p>
                <h3 className="mt-1 text-2xl font-black text-[var(--heading)]">
                  Terus belajar lewat project nyata.
                </h3>
              </div>
            </div>
            <p className="max-w-xl leading-7 text-[var(--muted)]">
              Saya percaya cara terbaik untuk berkembang adalah membangun
              project langsung, memperbaiki error, lalu meningkatkan kualitas
              kode dan tampilan secara bertahap.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;