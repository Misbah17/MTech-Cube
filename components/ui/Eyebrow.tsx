export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
