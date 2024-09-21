function Headline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-6xl font-bold text-gray-800 tracking-tighter ${className}`}
    >
      {children}
    </span>
  );
}

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
}

function Subtitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-base sm:text-lg font-semibold text-gray-400 dark:text-gray-450 tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export { Headline, Subtitle, Title };
