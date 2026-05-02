import type { Project } from "../types/project";
import dimsumImage from "../assets/projects/dimsum-home.png";
import heroImage from "../assets/hero.png";
export const projects: Project[] = [
  {
    title: "Dimsum Imono",
    category: "Food Ordering Website",
    description:
      "Website pemesanan makanan dengan cart, checkout WhatsApp, admin dashboard, dan pesanan realtime menggunakan Firebase Firestore.",
    image: dimsumImage,
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
    image: heroImage,
    tags: ["TypeScript", "React", "Tailwind", "Framer Motion"],
    liveUrl: "https://adri-mulyawan-porto.vercel.app/",
    githubUrl: "https://github.com/Adri-Mulyawan/my-portofolio",
  },
];