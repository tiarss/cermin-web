import type { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  helperText?: string;
  label: string;
};

export function TextField({
  helperText,
  id,
  label,
  type = "text",
  ...props
}: TextFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-warm-ink"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="min-h-12 w-full rounded-2xl border border-warm-border bg-warm-bg px-4 text-base text-warm-ink outline-none transition-colors placeholder:text-warm-ink/35 focus:border-warm-accent focus:ring-2 focus:ring-warm-accent/20"
        {...props}
      />
      {helperText ? (
        <p className="mt-2 text-sm leading-6 text-warm-ink/55">{helperText}</p>
      ) : null}
    </div>
  );
}
