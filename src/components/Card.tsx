interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-border bg-bg-card
        ${paddingClasses[padding]}
        ${hover ? "transition-all duration-300 hover:border-border-hover hover:bg-bg-card-hover hover:shadow-[0_0_40px_rgba(201,168,76,0.04)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
