import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Mail } from "lucide-react";
import InstagramIcon from "../components/InstagramIcon";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="border-t border-[var(--border)] mx-auto max-w-7xl px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-2xl backdrop-blur-xl md:p-10"
      >
        <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">
          <SectionTitle
            eyebrow="Let's Collaborate"
            title="Punya ide website? Saya bisa bantu buatkan."
            description="Saya bisa membantu membuat website modern, responsive, dan siap online untuk kebutuhan personal, tugas, bisnis kecil, atau project portfolio."
          />

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Fast", desc: "Proses dibuat bertahap dan mudah dipahami." },
              { title: "Responsive", desc: "Tampilan nyaman di desktop dan mobile." },
              { title: "Online", desc: "Website bisa deploy ke Vercel." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--chip)] p-5"
              >
                <p className="text-3xl font-black text-[var(--heading)]">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="grid gap-4 md:grid-cols-2"
          >
            <a
              href="mailto:adrimulyawan@gmail.com"
              className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-5 text-[var(--heading)] transition hover:-translate-y-1 hover:bg-[var(--button)] hover:text-[var(--button-text)]"
            >
              <span className="flex items-center gap-3 font-black">
                <Mail />
                adrimulyawan@gmail.com
              </span>
              <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://github.com/Adri-Mulyawan"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-5 text-[var(--heading)] transition hover:-translate-y-1 hover:bg-[var(--button)] hover:text-[var(--button-text)]"
            >
              <span className="flex items-center gap-3 font-black">
                <Code2 />
                github.com/Adri-Mulyawan
              </span>
              <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="https://instagram.com/adrimlywan"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--button)] p-5 text-[var(--button-text)] transition hover:-translate-y-1 hover:opacity-90 md:col-span-2"
            >
              <span className="flex items-center gap-3 font-black">
                <InstagramIcon />
                Instagram @adrimlywan
              </span>
              <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;