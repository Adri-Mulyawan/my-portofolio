import { Code2, Mail } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

const Footer = () => {
  return (
    <footer className="py-12 mt-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-5 text-center">
        <p className="text-sm font-medium text-[var(--muted)]">
          © 2026. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Adri-Mulyawan"
            target="_blank"
            rel="noreferrer"
            aria-label="Source Code"
            className="text-[var(--muted)] hover:text-[var(--heading)] transition"
          >
            <Code2 size={20} />
          </a>

          <a
            href="mailto:adrimulyawan@gmail.com"
            aria-label="Email"
            className="text-[var(--muted)] hover:text-[var(--heading)] transition"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://instagram.com/adrimlywan"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-[var(--muted)] hover:text-[var(--heading)] transition"
          >
            <InstagramIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;