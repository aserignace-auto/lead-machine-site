interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
          {label}
        </span>
      )}
      <h2
        className="font-serif text-3xl font-semibold leading-tight text-text-primary sm:text-4xl lg:text-5xl [&>em]:not-italic [&>em]:text-gradient-gold"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dimmed lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
