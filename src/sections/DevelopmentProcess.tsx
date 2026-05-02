import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Planning",
    description:
      "Menentukan kebutuhan website, fitur utama, halaman yang dibutuhkan, dan alur pengguna.",
  },
  {
    number: "02",
    title: "Design UI",
    description:
      "Membuat tampilan modern, rapi, responsive, dan sesuai kebutuhan project.",
  },
  {
    number: "03",
    title: "Build Frontend",
    description:
      "Mengubah desain menjadi website menggunakan React, TypeScript, dan Tailwind CSS.",
  },
  {
    number: "04",
    title: "Integrate Data",
    description:
      "Menghubungkan website dengan Firebase/API, form, cart, realtime data, atau dashboard.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Melakukan build, testing, upload ke GitHub, dan deploy ke Vercel agar website online.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            eyebrow="Development Process"
            title="Cara saya membangun project."
            description="Saya menggunakan proses kerja bertahap agar project lebih rapi, mudah dikembangkan, dan siap dipresentasikan."
          />
        </motion.div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-xl backdrop-blur-xl">
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-4 rounded-[1.5rem] border border-[var(--border)] bg-[var(--chip)] p-5 md:grid-cols-[120px_1fr_auto] md:items-center"
              >
                <p className="text-4xl font-black text-[var(--accent)]">
                  {step.number}
                </p>
                <div>
                  <h3 className="text-2xl font-black text-[var(--heading)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">
                    {step.description}
                  </p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[var(--button)] text-[var(--button-text)] md:flex">
                  <CheckCircle2 size={22} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;