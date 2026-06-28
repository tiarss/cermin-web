export function AuthDivider() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-warm-border" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-warm-ink/35">
        atau
      </span>
      <div className="h-px flex-1 bg-warm-border" />
    </div>
  );
}
