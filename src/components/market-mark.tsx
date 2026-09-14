export function MarketMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <rect width="32" height="32" rx="8" className="fill-bg" />
      <rect width="32" height="32" rx="8" className="stroke-border" strokeWidth="1" />
      <path
        d="M15.2 5.2c.2-1.4 1.6-2.2 2.8-1.6.6.3.8 1 .6 1.7L17.8 8c-.4.2-.9.2-1.3 0l-1.3-2.8z"
        className="fill-success"
      />
      <path
        d="M16.6 8.2c-3.2.4-6.4 3.4-7.2 7.4-1 5.2 1.6 10.2 6.2 12.2 1.4.6 2.8.2 3.4-1.2 1.8-4.2 4.6-8.2 4.8-12.2.2-3.2-2.4-6.6-7.2-6.2z"
        className="fill-primary"
      />
    </svg>
  );
}
