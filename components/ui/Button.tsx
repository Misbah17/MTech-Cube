import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  showArrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const variants: Record<string, string> = {
    primary:
      "bg-gold text-black hover:bg-gold-light hover:-translate-y-0.5",
    outline:
      "border border-line text-offwhite hover:border-gold/60 hover:text-gold hover:-translate-y-0.5",
    ghost: "text-offwhite hover:text-gold",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />}
    </Link>
  );
}
