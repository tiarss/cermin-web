import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "oauth";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-warm-ink text-warm-bg hover:-translate-y-0.5 hover:bg-warm-accent",
  secondary:
    "border border-warm-border bg-warm-bg/70 text-warm-ink hover:bg-warm-paper",
  oauth:
    "border border-warm-border bg-warm-bg text-warm-ink hover:-translate-y-0.5 hover:border-warm-accent/40 hover:bg-warm-paper",
};

export function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 focus:ring-offset-warm-bg ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
