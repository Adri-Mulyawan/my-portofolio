import { motion } from "framer-motion";
import { LayoutDashboard, MonitorSmartphone, ShoppingCart, Sparkles } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const services = [
  {
    title: "Landing Page",
    description:
      "Website promosi modern untuk produk, jasa, event, atau personal branding.",
    icon: Sparkles,
  },
  {
    title: "Food Ordering Website",
    description:
      "Website menu online, cart, checkout WhatsApp, dan dashboard admin.",
    icon: ShoppingCart,
  },
  {
    title: "Admin Dashboard",
    description:
      "Dashboard untuk mengelola data, pesanan, status, dan laporan sederhana.",
    icon: LayoutDashboard,
  },
  {
    title: "Responsive Web App",
    description:
      "Aplikasi web yang nyaman digunakan di desktop, tablet, dan mobile.",
    icon: MonitorSmartphone,
  },
];

const WhatICanBuild = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            eyebrow="What I Can Build"
            title="Jenis website yang bisa saya buat."
            description="Saya fokus membangun website yang modern, responsive, mudah digunakan, dan bisa langsung online."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-[var(--card-hover)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--button)] text-[var(--button-text)] shadow-lg transition group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-2xl font-black text-[var(--heading)]">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatICanBuild;