type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => {
  return (
    <div className="mb-8">
      <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--accent)]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight text-[var(--heading)] md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionTitle;