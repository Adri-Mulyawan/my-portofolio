import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import dimsumHome from "../assets/projects/dimsum-home.png";

const highlights = [
  "Menu online dengan search dan filter kategori",
  "Keranjang belanja dengan validasi stok",
  "Checkout langsung ke WhatsApp",
  "Pesanan masuk realtime ke Firebase Firestore",
  "Admin dashboard untuk mengelola pesanan",
  "Deploy online menggunakan Vercel",
];

const tags = ["React", "Tailwind CSS", "Firebase", "Vercel", "WhatsApp API"];

const CaseStudy = () => {
  return (
    <section className="relative border-t border-[var(--border)] mx-auto max-w-7xl px-5 py-20">


      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]">
            Featured Case Study
          </p>
          <h2 className="mt-2 text-4xl font-black text-[var(--heading)] md:text-5xl">
            Dimsum Imono
          </h2>
          <p className="mt-2 text-lg text-[var(--muted)]">Food Ordering Website</p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-3 shadow-xl backdrop-blur-xl"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)]">
              <img
                src={dimsumHome}
                alt="Screenshot Dimsum Imono"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl backdrop-blur-xl"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]">
                What I Built
              </p>
              <h3 className="mt-3 text-2xl font-black leading-snug text-[var(--heading)]">
                Sistem pemesanan makanan online dari nol.
              </h3>

              <div className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={16} />
                    <p className="text-sm leading-6 text-[var(--muted)]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[var(--chip)] px-3 py-1 text-xs font-bold text-[var(--text)]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://dimsum-imono.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--button)] px-5 py-3 font-black text-[var(--button-text)] transition hover:opacity-90"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/Adri-Mulyawan/dimsum-imono"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--chip)] px-5 py-3 font-black text-[var(--heading)] transition hover:bg-[var(--card-hover)]"
              >
                Source Code
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;