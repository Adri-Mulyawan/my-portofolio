export type Skill = {
  name: string;
  icon: string;
  url: string;
  category: string;
  description: string;
};

export const skills: Skill[] = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    category: "Structure",
    description: "Saya menggunakan HTML untuk membuat struktur halaman website yang rapi, semantic, dan mudah dibaca.",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    category: "Styling",
    description: "Saya menggunakan CSS untuk mengatur tampilan, layout, warna, spacing, responsive design, dan animasi dasar.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: "Logic",
    description: "Saya menggunakan JavaScript untuk membuat website menjadi interaktif seperti validasi form, event, cart, dan manipulasi data.",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org/",
    category: "Typed Code",
    description: "Saya menggunakan TypeScript agar kode React lebih aman, mudah dirawat, dan mengurangi error saat development.",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    url: "https://react.dev/",
    category: "Frontend",
    description: "Saya menggunakan React untuk membuat komponen UI, routing, state management sederhana, dan halaman web yang interaktif.",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    url: "https://tailwindcss.com/",
    category: "UI Styling",
    description: "Saya menggunakan Tailwind CSS untuk membuat tampilan modern, responsive, dan konsisten dengan utility class.",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg",
    url: "https://firebase.google.com/",
    category: "Realtime Database",
    description: "Saya menggunakan Firebase Firestore untuk menyimpan pesanan realtime seperti pada project Dimsum Imono.",
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    url: "https://vitejs.dev/",
    category: "Build Tool",
    description: "Saya menggunakan Vite untuk membuat project React yang ringan, cepat, dan nyaman saat development.",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    url: "https://github.com/",
    category: "Version Control",
    description: "Saya menggunakan GitHub untuk menyimpan source code, mengelola version control, dan deploy project.",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    url: "https://vercel.com/",
    category: "Deployment",
    description: "Saya menggunakan Vercel untuk deploy project frontend agar bisa diakses secara online.",
  },
];