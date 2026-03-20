interface LogoProps {
  size?: "sm" | "md";
}

export default function Logo({ size = "sm" }: LogoProps) {
  const h = size === "sm" ? 32 : 48;
  const w = Math.round(h * 1.15);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 46 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lead Machine"
    >
      <defs>
        <linearGradient id="lm-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#E8C97A" />
        </linearGradient>
      </defs>

      {/* L */}
      <path
        d="M2 4 L2 36 L18 36 L18 31.5 L7 31.5 L7 4 Z"
        fill="url(#lm-gold)"
      />

      {/* M */}
      <path
        d="M21 36 L21 4 L28.5 4 L33.5 22 L38.5 4 L46 4 L46 36 L41 36 L41 14 L35.8 32 L31.2 32 L26 14 L26 36 Z"
        fill="url(#lm-gold)"
      />
    </svg>
  );
}
