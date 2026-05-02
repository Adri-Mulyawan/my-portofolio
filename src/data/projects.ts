import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Dimsum Imono",
    category: "Food Ordering Website",
    description:
      "Website pemesanan makanan dengan cart, checkout WhatsApp, admin dashboard, dan pesanan realtime menggunakan Firebase Firestore.",
    image: "🥟",
    tags: ["React", "Firebase", "Tailwind", "Vercel", "WhatsApp"],
    liveUrl: "https://dimsum-imono.vercel.app/",
    githubUrl: "https://github.com/Adri-Mulyawan/dimsum-imono",
    featured: true,
  },
  {
    title: "Portfolio Website",
    category: "Personal Website",
    description:
      "Website portofolio pribadi berbasis React TypeScript untuk menampilkan skill, project, dan kontak profesional.",
    image: "🧑‍💻",
    tags: ["TypeScript", "React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
];